import { PublicamasEntity } from '../../publicamas.entity';
import { Column } from 'typeorm';

export class CategoryFieldOptionsEntity extends PublicamasEntity {
  constructor() {
    super();
  }

  @Column()
  name: string;
  @Column()
  value: string;
  @Column({ name: 'category_field_id', nullable: false })
  categoryFieldId: string;
}