import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { PublicamasEntity } from '../../publicamas.entity';
import { PublicationEntity } from './publication.entity';
import { UserEntity } from '../../user/entity/user.entity';

@Entity('Publication_Questions')
export class PublicationQuestionEntity extends PublicamasEntity {
  constructor() {
    super();
  }

  @Column()
  question: string;

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

}