import { Inject } from '@nestjs/common';
import { CategoryRepositoryInterface } from '../../../domain/ports/repository/category';
import { CategoryModel } from '../../../domain/model/category';

export class GetCategoriesUseCase {
  constructor(@Inject('CategoryRepository')
              private readonly categoryRepository: CategoryRepositoryInterface) {
  }

  async handler(slug:string): Promise<CategoryModel[]> {

    return this.categoryRepository.getCategoriesByParentSlug(slug);
  }
}