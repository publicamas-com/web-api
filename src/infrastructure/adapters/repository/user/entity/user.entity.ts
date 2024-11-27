import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { AddressEntity } from '../../address/entity/address.entity';

@Entity('Users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email', type: 'varchar', length: 255 })
  email: string;

  @Column({ name: 'hash', type: 'varchar', length: 255 })
  hash: string;

  @Column({ name: 'first_name', type: 'varchar', length: 255, nullable: true })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 255, nullable: true })
  lastName: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @Column({ name: 'photo_url', type: 'varchar', length: 255, nullable: true })
  photoUrl: string;

  @Column({ name: 'timezone', type: 'varchar', length: 255, nullable: true })
  timezone: string;

  @Column({ name: 'email_verified_at', type: 'timestamptz', nullable: true })
  emailVerifiedAt: Date;

  @Column({ name: 'mute_sounds', type: 'boolean', default: true })
  muteSounds: boolean;

  @Column({ name: 'is_locked', type: 'boolean', default: false })
  isLocked: boolean;

  @Column({ name: 'is_locked_transactions', type: 'boolean', default: false })
  isLockedTransactions: boolean;

  @Column({name:"verification_code", type:"varchar", length:255, nullable:true})
  verificationCode: string;

  @Column({ name: 'role_id', type: 'varchar'})
  roleId: string;

  @Column({ name: 'bad_attempts', type: 'int', default: 0 })
  badAttempts: number;

  @Column({ name: 'last_login', type: 'timestamptz', nullable: true })
  lastLogin: Date;

  @Column({ name: 'deleted_at', type: 'timestamptz', nullable: true })
  deletedAt: Date;

  @OneToMany(() => UserEntity, user => user.id)
  addresses: AddressEntity[];
}