import { PublicamasEntity } from '../../publicamas.entity';
import {Column, Entity, Index, JoinColumn, ManyToOne, OneToOne} from 'typeorm';
import {NavigationSessionEntity} from "../../navigation/entity/session.entity";
import {PublicationEntity} from "./publication.entity";

@Entity('Publication_Seller_Data_Request')
export class PublicationSellerDataRequestEntity extends PublicamasEntity {
    @OneToOne(() => NavigationSessionEntity)
    @JoinColumn({name: 'session_id'})
    @Index()
    session: NavigationSessionEntity;
    @Column({name: 'session_id', nullable: false})
    sessionId: string;
    @ManyToOne(() => PublicationEntity)
    @JoinColumn({name: 'publication_id'})
    @Index()
    publication: PublicationEntity;
    @Column({name: 'publication_id', nullable: false})
    publicationId: string;
}