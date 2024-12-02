import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { PublicamasEntity } from '../../publicamas.entity';
import { PublicationQuestionEntity } from './publicationQuestion.entity';

@Entity('Publication_Answer')
export class PublicationAnswerEntity extends PublicamasEntity {
  constructor() {
    super();
  }

  @Column()
  answer: string;

  @Column({name: 'publication_question_id', nullable: false})
  publicationQuestionId: string;

  @OneToOne(() => PublicationQuestionEntity)
  @JoinColumn({ name: 'publication_question_id' })
  @Index()
  publicationQuestion: PublicationQuestionEntity;
}