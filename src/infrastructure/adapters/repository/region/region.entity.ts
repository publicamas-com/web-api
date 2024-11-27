import { Column, Entity, Index, JoinColumn, ManyToOne, TableInheritance } from 'typeorm';
import { PublicamasEntity } from '../publicamas.entity';
import { CustomRegionFields } from '../custom-entity.fields';

export type RegionType = 'country' | 'province' | string;

@Entity("Regions")
@TableInheritance({ column: { type: 'varchar', name: 'discriminator' } })
export abstract class RegionEntity extends PublicamasEntity {
  @Column() code: string;

  @Column({ nullable: false, type: 'varchar' })
  readonly type: RegionType;

  name: string;

  @Index()
  @ManyToOne(() => RegionEntity, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'parentId' })
  parent?: RegionEntity;

  @Column({ nullable: true })
  parentId?: string;

  @Column() enabled: boolean;

  @Column(type => CustomRegionFields)
  customFields: CustomRegionFields;
}