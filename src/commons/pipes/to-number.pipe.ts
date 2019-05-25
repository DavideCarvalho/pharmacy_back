import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ToNumberPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        return Number(value);
    }
}
