import {Body, Controller, Get, Headers, HttpCode, Param, Post, Query} from '@nestjs/common';
import {plainToClass} from 'class-transformer';
import {PharmacyService} from '../service';
import {PharmacyVO, ProductVO, SearchVO} from '../vo';
import {PharmacyDTO, ProductDTO, SearchDTO} from '../dto';
import {PaginateResult} from 'mongoose';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly service: PharmacyService) {}

  @Post()
  @HttpCode(200)
  async createPharmacy(@Body() pharmacy: PharmacyVO): Promise<PharmacyVO> {
    const savedPharmacy: PharmacyDTO = await this.service.create(
      plainToClass<PharmacyDTO, PharmacyVO>(PharmacyDTO, pharmacy),
    );
    return plainToClass<PharmacyVO, PharmacyDTO>(PharmacyVO, savedPharmacy);
  }

  @Get()
  @HttpCode(200)
  async findAll(@Query('limit') limit: number = 10,
                @Query('offset') offset: number = 0): Promise<PaginateResult<PharmacyVO>> {
    const allPharmacies: PaginateResult<PharmacyDTO> = await this.service.find(limit, offset);
    const pharmaciesVO: PharmacyVO[] = plainToClass<PharmacyVO, PharmacyDTO[]>(PharmacyVO, allPharmacies.docs, { excludePrefixes: ['_'] });
    return { ...allPharmacies, docs: pharmaciesVO };
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string,
                @Query('limit') limit: number = 10,
                @Query('offset') offset: number = 0): Promise<PharmacyVO> {
    const pharmacy: PharmacyDTO = await this.service.findById(id);
    return plainToClass<PharmacyVO, PharmacyDTO>(PharmacyVO, pharmacy);
  }

  @Get('nearest')
  @HttpCode(200)
  async getNearest(@Headers('coordinates') coordinates: string,
                   @Headers('product') product: string,
                   @Query('limit') limit: number = 10,
                   @Query('offset') offset: number = 0): Promise<PaginateResult<PharmacyVO>> {
    const nearestPharmacies: PaginateResult<PharmacyDTO> = await this.service.findByGeolocation(
      plainToClass<SearchDTO, SearchVO>(SearchDTO, { coordinates: JSON.parse(coordinates), product }),
      limit,
      offset,
    );
    const pharmaciesVO: PharmacyVO[] = plainToClass<PharmacyVO, PharmacyDTO[]>(PharmacyVO, nearestPharmacies.docs, { excludePrefixes: ['_'] });
    return { ...nearestPharmacies, docs: pharmaciesVO };
  }

  @Post(':id/product')
  @HttpCode(200)
  async appendOrOverwriteProducts(@Param('id') id: string,
                                  @Headers('overwrite') overwrite: boolean,
                                  @Body() products: ProductVO[] | ProductVO): Promise<void> {
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
