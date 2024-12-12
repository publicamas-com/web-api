import {Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne} from 'typeorm';
import {PublicamasEntity} from '../../publicamas.entity';
import {PublicationAssetEntity} from './publicationAsset.entity';
import {PublicationFieldValuesEntity} from './publicationFieldValues.entity';
import {UserEntity} from "../../user/entity/user.entity";
import {CategoryEntity} from "../../category/entity/category.entity";
import {ConditionEnum, CurrencyEnum, WarrantyEnum} from "../../../../../domain/model/publication";

@Entity('Publications')
export class PublicationEntity extends PublicamasEntity {
    @Column()
    title: string;
    @Column({name: 'short_description'})
    shortDescription: string;
    @Column({name: 'description', type: 'text'})
    description: string;
    @Column({name: 'price', type: 'decimal', precision: 10, scale: 2, nullable: false})
    price: number;
    @Column({name: 'price_to_be_agreed', nullable: false})
    priceToBeAgreed: boolean;
    @Column({name: 'currency', nullable: false})
    currency: CurrencyEnum;
    @Column({name: 'condition', nullable: false})
    condition: ConditionEnum;
    @Column({name: 'warranty', nullable: false})
    warranty: WarrantyEnum;
    @Column({name: 'can_be_retired', nullable: false})
    canBeRetired: boolean;
    @Column({name: 'retired_method_should_be_agreed', nullable: false})
    retiredMethodShouldBeAgreed: boolean;
    @Index()
    @ManyToOne(() => UserEntity, {nullable: false, onDelete: 'CASCADE'})
    @JoinColumn({name: 'category_id'})
    category: CategoryEntity;

    @Column({name: 'category_id', nullable: false})
    categoryId: string;

    @OneToOne(() => PublicationFieldValuesEntity)
    publicationFieldValues: PublicationFieldValuesEntity;

    @OneToMany(() => PublicationEntity, publication => publication.id)
    publicationAssets: PublicationAssetEntity[];
}