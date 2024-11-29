import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User_Activities')
export class UserActivityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;
  @Column({ name: 'activity_type', type: 'varchar' })
  activityType: string;
  @Column({ name: 'activity_date', type: 'timestamptz' })
  activityDate: Date;
  @Column({ name: 'activity_description', type: 'varchar' })
  activityDescription: string;
  @Column({ name: 'activity_data', type: 'jsonb' })
  activityData: object;
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}