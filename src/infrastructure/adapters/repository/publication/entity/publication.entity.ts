import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { PublicamasEntity } from '../../publicamas.entity';
import { PublicationAssetEntity } from './publicationAsset.entity';
import { PublicationFieldValuesEntity } from './publicationFieldValues.entity';

@Entity('Publications')
export class PublicationEntity extends PublicamasEntity {
  @Column()
  title: string;
  
  @Column()
  description: string;

  @Column()
  content: string;

  @OneToOne(() => PublicationFieldValuesEntity)
  publicationFieldValues: PublicationFieldValuesEntity;

  @OneToMany(() => PublicationEntity, publication => publication.id)
  publicationAssets: PublicationAssetEntity[];
}