import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { PublicamasEntity } from '../../publicamas.entity';
import { UserEntity } from '../../user/entity/user.entity';
import { PublicationEntity } from './publication.entity';

@Entity('Publication_Opinion')
export class PublicationOpinionEntity extends PublicamasEntity {
  constructor() {
    super();
  }

  @Index()
  @ManyToOne(() => PublicationEntity, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'publication_id' })
  publication: PublicationEntity;

  @Index()
  @ManyToOne(() => UserEntity, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ name: 'publication_id', nullable: false })
  publicationId: string;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @Column()
  opinion: string;

  @Column()
  score: number;

}