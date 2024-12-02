import { RegionEntity, RegionType } from './region.entity';
import { ChildEntity, DeepPartial } from 'typeorm';

@ChildEntity()
export class CityEntity extends RegionEntity {
  constructor(input?: DeepPartial<CityEntity>) {
    super(input);
  }

  readonly type: RegionType = 'city';
}