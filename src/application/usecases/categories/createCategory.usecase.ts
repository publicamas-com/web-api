import { Inject } from '@nestjs/common';
import { CreateCategoryCommand } from '../../commands/categories';
import { CategoryRepositoryInterface } from '../../../domain/ports/repository/category';
import { CreateCategoryResponse } from '../../responses/categories';
import CategoryFactory from '../../factories/category/category.factory';


export class CreateCategoryUseCase {
  @Inject('CategoryRepository')
  private readonly categoryRepository: CategoryRepositoryInterface;
  @Inject()
  private readonly categoryFactory: CategoryFactory;

  public async handler(createCategoryCommand: CreateCategoryCommand): Promise<CreateCategoryResponse> {
    function validateSlug(slug: string) {
      if (slug.length < 3) {
        throw new Error('Slug must be at least 3 characters long');
      }
    }
    validateSlug(createCategoryCommand.slug);
    let model = this.categoryFactory.createCategoryModelFromCreateCategoryCommand(createCategoryCommand);
    model = await this.categoryRepository.createCategory(model);
    const response = new CreateCategoryResponse();
    response.id = model.id;
    response.name = model.name;
    response.description = model.description;
    response.slug = model.slug;
    response.createdAt = model.createdAt;
    response.updatedAt = model.updatedAt;
    return response;
  }
}