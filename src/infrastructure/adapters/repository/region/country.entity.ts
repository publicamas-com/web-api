import { ChildEntity, DeepPartial } from 'typeorm';
import { RegionEntity, RegionType } from './region.entity';

@ChildEntity()
export class CountryEntity extends RegionEntity {
  constructor(input?: DeepPartial<CountryEntity>) {
    super(input);
  }

  readonly type: RegionType = 'country';
}
