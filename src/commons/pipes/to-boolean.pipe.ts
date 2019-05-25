import {PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus} from '@nestjs/common';

@Injectable()
export class ToBooleanPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (value === 'true') { return true; }
        if (value === 'false') { return false; }
        throw new HttpException({
            error: 'Parameter of wrong type, please send a boolean value',
            status: HttpStatus.NOT_FOUND,
        }, HttpStatus.NOT_FOUND);
    }
}
