import {ApiModelProperty} from '@nestjs/swagger';

export class LocationVO {
  type = 'Point';

  @ApiModelProperty({type: [Number], minLength: 2, maxLength: 2})
  coordinates: [number, number];
}
