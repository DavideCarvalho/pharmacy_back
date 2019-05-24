import { ApiModelProperty } from "@nestjs/swagger";

export class LocationVO {
  type = 'Point';

  @ApiModelProperty()
  coordinates: [number, number];
}
