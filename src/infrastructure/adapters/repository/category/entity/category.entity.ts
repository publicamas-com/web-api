import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'name', type: 'varchar', length: 255 })
  name: string;
  @Index({ unique: true })
  @Column({ name: 'slug', type: 'varchar', length: 255 })
  slug: string;
  @Column({ name: 'description', type: 'varchar', length: 255, nullable:true })
  description: string;
  @Index({ unique: false })
  @Column({ name: 'parent_id', type: 'varchar', length: 255, nullable: true })
  parentId: string;
  @Column({ name: 'is_active', type: 'boolean', nullable:false, default:true })
  isActive: boolean;
  @Column({ name: 'is_deleted', type: 'boolean', nullable:false, default:false })
  isDeleted: boolean;
  @Column({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
  @Column({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
  @Column({ name: 'deleted_at', type: 'timestamptz', nullable: true })
  deletedAt: Date;
}