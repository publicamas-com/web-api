import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { PublicamasEntity } from '../../publicamas.entity';
import { PublicationEntity } from './publication.entity';

@Entity('Publication_Field_Values')
export class PublicationFieldValuesEntity extends PublicamasEntity {
  constructor() {
    super();
  }

  @OneToOne(() => PublicationEntity)
  @JoinColumn({ name: 'publication_id' })
  @Index()
  publication: PublicationEntity;

  @Column({ name: 'publication_id', nullable: false })
  publicationId: string;

  @Column()
  field1: string;

  @Column()
  field2: string;

  @Column()
  field3: string;

  @Column()
  field4: string;

  @Column()
  field5: string;

  @Column()
  field6: string;

  @Column()
  field7: string;

  @Column()
  field8: string;

  @Column()
  field9: string;

  @Column()
  field10: string;

  @Column()
  field11: string;

  @Column()
  field12: string;

  @Column()
  field13: string;

  @Column()
  field14: string;

  @Column()
  field15: string;

  @Column()
  field16: string;

  @Column()
  field17: string;

  @Column()
  field18: string;

  @Column()
  field19: string;

  @Column()
  field20: string;

  @Column()
  field21: string;

  @Column()
  field22: string;

  @Column()
  field23: string;

  @Column()
  field24: string;

  @Column()
  field25: string;
}