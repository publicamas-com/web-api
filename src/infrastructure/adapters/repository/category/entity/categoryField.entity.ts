import { Column, Entity } from 'typeorm';
import { PublicamasEntity } from '../../publicamas.entity';

@Entity('Category_Fields')
export class CategoryFieldEntity extends PublicamasEntity {
  @Column()
  name: string;
  @Column()
  type: string;
  //If the field override the default field by the parent category
  @Column()
  override: string;
  @Column({ type: 'json' })
  settings: any;
  @Column()
  isRequired: boolean;
  @Column()
  isDeleted: boolean;
  @Column()
  deletedAt: Date;
}