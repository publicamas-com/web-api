import {PublicamasEntity} from '../../publicamas.entity';
import {Column, Entity, Index, JoinColumn, ManyToOne, OneToOne} from 'typeorm';
import {PublicationEntity} from "./publication.entity";
import {NavigationSessionEntity} from "../../navigation/entity/session.entity";
import {CategoryEntity} from "../../category/entity/category.entity";
import {BrandEntity} from "../../brand/entity/brand.entity";

@Entity('Publication_Visits')
export class PublicationVisitEntity extends PublicamasEntity {
    constructor() {
        super();
    }

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
    @Column({name: 'publication_id', nullable: true})
    publicationId: string;

    @ManyToOne(() => CategoryEntity)
    @JoinColumn({name: 'category_id'})
    @Index()
    category: CategoryEntity;
    @Column({name: 'category_id', nullable: true})
    categoryId: string;

    @ManyToOne(() => BrandEntity)
    @JoinColumn({name: 'brand_id'})
    @Index()
    brand: CategoryEntity;
    @Column({name: 'brand_id', nullable: true})
    brandId: string;
}