import {ArgumentMetadata, Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class ToBooleanPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    if (!value) {
      return;
    }
  }
}
