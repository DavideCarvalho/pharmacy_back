import {Body, Controller, Get, Headers, HttpCode, Param, Post, Query, ValidationPipe} from '@nestjs/common';
import {plainToClass} from 'class-transformer';
import {PaginateResult} from 'mongoose';
import {PharmacyService} from '../service';
import {PharmacyVO, ProductVO, SearchVO} from '../vo';
import {PharmacyDTO, ProductDTO, SearchDTO} from '../dto';
import {ApiImplicitQuery, ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
import {PaginatedPharmacyVO} from '../swagger/paginate-result.swagger';
import {ToNumberPipe} from '../../commons/pipes/to-number.pipe';
import {ToBooleanPipe} from '../../commons/pipes/to-boolean.pipe';

@ApiUseTags('pharmacy')
@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly service: PharmacyService) {
  }

  @Post()
  @ApiOperation({title: 'New Pharmacy', description: 'Add new pharmacy'})
  @ApiResponse({status: 201, description: 'Pharmacy has been successfully created'})
  @HttpCode(201)
  async createPharmacy(@Body() pharmacy: PharmacyVO): Promise<PharmacyVO> {
    const savedPharmacy: PharmacyDTO = await this.service.create(
      plainToClass<PharmacyDTO, PharmacyVO>(PharmacyDTO, pharmacy),
    );
    return plainToClass<PharmacyVO, PharmacyDTO>(PharmacyVO, savedPharmacy);
  }

  @Get()
  @ApiOperation({title: 'Get all pharmacies', description: 'Get all pharmacies paginated'})
  @ApiResponse({status: 200, type: PaginatedPharmacyVO})
  @ApiImplicitQuery({name: 'limit', required: false, description: 'number of elements on response, default to 10'})
  @ApiImplicitQuery({name: 'offset', required: false, description: 'how many elements to skip, default to 0'})
  @HttpCode(200)
  async findAll(@Query('limit', ToNumberPipe) limit: number = 10,
                @Query('offset', ToNumberPipe) offset: number = 0): Promise<PaginateResult<PharmacyVO>> {
    const allPharmacies: PaginateResult<PharmacyDTO> = await this.service.find(limit, offset);
    const pharmaciesVO: PharmacyVO[] = plainToClass<PharmacyVO, PharmacyDTO[]>(PharmacyVO, allPharmacies.docs, {excludePrefixes: ['_']});
    return {...allPharmacies, docs: pharmaciesVO};
  }

  @Get(':id')
  @ApiOperation({title: 'Get one by id', description: 'Get an especific pharmacy by id'})
  @HttpCode(200)
  async findOne(@Param('id') id: string): Promise<PharmacyVO> {
    const pharmacy: PharmacyDTO = await this.service.findById(id);
    return plainToClass<PharmacyVO, PharmacyDTO>(PharmacyVO, pharmacy);
  }

  @Get('nearest')
  @ApiOperation({title: 'Get nearest pharmacies', description: 'Get nearest pharmacies, given the location'})
  @ApiResponse({status: 200, type: PaginatedPharmacyVO, description: 'Got the nearest pharmacies'})
  @ApiImplicitQuery({name: 'limit', required: false, description: 'number of elements on response, default to 10'})
  @ApiImplicitQuery({name: 'offset', required: false, description: 'how many elements to skip, default to 0'})
  @HttpCode(200)
  async getNearest(@Headers('coordinates') coordinates: number[],
                   @Headers('product') product: string,
                   @Query('limit', ToNumberPipe) limit: number = 10,
                   @Query('offset', ToNumberPipe) offset: number = 0): Promise<PaginateResult<PharmacyVO>> {
    const nearestPharmacies: PaginateResult<PharmacyDTO> = await this.service.findByGeolocation(
      plainToClass<SearchDTO, SearchVO>(SearchDTO, {coordinates, product}),
      limit,
      offset,
    );
    const pharmaciesVO: PharmacyVO[] = plainToClass<PharmacyVO, PharmacyDTO[]>(PharmacyVO, nearestPharmacies.docs, {excludePrefixes: ['_']});
    return {...nearestPharmacies, docs: pharmaciesVO};
  }

  @Post(':id/product')
  @ApiOperation({
    title: 'Add or append products',
    description: 'Add product to pharmacy. You can choose to overwrite the actual data for the sent body',
  })
  @ApiImplicitQuery({name: 'overwrite', required: false})
  @HttpCode(200)
  async appendOrOverwriteProducts(@Param('id') id: string,
                                  @Query('overwrite', ToBooleanPipe) overwrite: boolean = false,
                                  @Body(new ValidationPipe()) products: ProductVO[] | ProductVO): Promise<void> {
    if (overwrite) {
      await this.service.overwriteProducts(
        id,
        plainToClass<ProductDTO, ProductVO[]>(ProductDTO, products as ProductVO[]),
      );
    }
    await this.service.addNewProduct(
      id,
      plainToClass<ProductDTO, ProductVO>(ProductDTO, products as ProductVO),
    );
  }

  @Post('id/product/:productId')
  @ApiOperation({
    title: 'Update product',
    description: 'Update product by id',
  })
  @HttpCode(200)
  async updateProduct(@Param('id') id: string,
                      @Param('productId') productId: string,
                      @Body() product: ProductVO): Promise<void> {
    await this.service.updateProduct(
      id,
      productId,
      plainToClass<ProductDTO, ProductVO>(ProductDTO, product),
    );
  }
}
