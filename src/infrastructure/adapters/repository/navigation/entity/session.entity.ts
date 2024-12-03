import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { PublicamasEntity } from '../../publicamas.entity';
import { PublicationEntity } from '../../publication/entity/publication.entity';
import { UserEntity } from '../../user/entity/user.entity';

@Entity('Navigation_Session')
export class NavigationSessionEntity extends PublicamasEntity {
  constructor() {
      super();
  }
  @Index()
  @ManyToOne(() => UserEntity, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
  @Column({ name: 'user_id', nullable: true })
  userId: string;
  @Column({ name: 'ip', nullable: false })
  ip: string;
}