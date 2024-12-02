import { Column, CreateDateColumn, DeepPartial, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PublicamasEntity } from '../../publicamas.entity';


/**
 * @description
 * Represents a Brand.
 *
 * @docsCategory entities
 */
@Entity('Brands')
export class BrandEntity extends PublicamasEntity/*implements HasCustomFields */ {
  constructor(input?: DeepPartial<BrandEntity>) {
    super(input);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @Column({ default: '' })
  name: string;
  @Column({ name: 'logo_url', default: '' })
  logoUrl: string;
}