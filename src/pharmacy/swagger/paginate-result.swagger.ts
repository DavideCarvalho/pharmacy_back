import { PharmacyVO } from "../vo";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

export class PaginatedPharmacyVO {
  @ApiModelProperty()
  docs: PharmacyVO[];

  @ApiModelProperty()
  total: number;

  @ApiModelProperty()
  limit: number;

  @ApiModelPropertyOptional()
  page?: number;

  @ApiModelPropertyOptional()
  pages?: number;

  @ApiModelPropertyOptional()
  offset?: number;
}