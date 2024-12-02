import { PublicamasEntity } from '../../publicamas.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { PublicationEntity } from './publication.entity';

@Entity('Publication_Assets')
export class PublicationAssetEntity extends PublicamasEntity {
  @Index()
  @ManyToOne(() => PublicationEntity, publication => publication.publicationAssets, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'publication_id' })
  publication: PublicationEntity;

  @Column({ name: 'publication_id', nullable: false })
  publicationId: string;
}