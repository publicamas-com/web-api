import { CreateDateColumn, DeepPartial, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class PublicamasEntity {
  protected constructor(input?: DeepPartial<PublicamasEntity>) {
    if (input) {
      for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(input))) {
        if (descriptor.get && !descriptor.set) {
          // A getter has been moved to the entity instance
          // by the CalculatedPropertySubscriber
          // and cannot be copied over to the new instance.
          continue;
        }
        (this as any)[key] = descriptor.value;
      }
    }
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn() createdAt: Date;

  @UpdateDateColumn() updatedAt: Date;
}