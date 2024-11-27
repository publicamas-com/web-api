import {
  Column,
  CreateDateColumn,
  DeepPartial,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PublicamasEntity } from '../../publicamas.entity';
import { UserEntity } from '../../user/entity/user.entity';
import { CountryEntity } from '../../region/country.entity';
import { CustomAddressFields } from '../../custom-entity.fields';


/**
 * @description
 * Represents a {@link UserEntity}'s address.
 *
 * @docsCategory entities
 */
@Entity('Addresses')
export class AddressEntity extends PublicamasEntity/*implements HasCustomFields */ {
  constructor(input?: DeepPartial<AddressEntity>) {
    super(input);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;


  @Index()
  @ManyToOne(type => UserEntity, user => user.addresses)
  customer: UserEntity;

  @Column({ default: '' }) fullName: string;

  @Column({ default: '' })
  company: string;

  @Column() streetLine1: string;

  @Column({ default: '' })
  streetLine2: string;

  @Column({ default: '' }) city: string;

  @Column({ default: '' })
  province: string;

  @Column({ default: '' }) postalCode: string;

  @Index()
  @ManyToOne(type => CountryEntity)
  country: CountryEntity;

  @Column({ default: '' })
  phoneNumber: string;

  @Column({ default: false })
  defaultShippingAddress: boolean;

  @Column({ default: false })
  defaultBillingAddress: boolean;

  @Column(type => CustomAddressFields)
  customFields: CustomAddressFields;
}