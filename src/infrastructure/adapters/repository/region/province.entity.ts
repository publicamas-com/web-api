import { RegionEntity, RegionType } from './region.entity';
import { ChildEntity, DeepPartial } from 'typeorm';

@ChildEntity()
export class ProvinceEntity extends RegionEntity {
  constructor(input?: DeepPartial<ProvinceEntity>) {
    super(input);
  }

  readonly type: RegionType = 'province';
}