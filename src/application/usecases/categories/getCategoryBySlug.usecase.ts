import { Inject } from '@nestjs/common';
import { CategoryRepositoryInterface } from '../../../domain/ports/repository/category';
import { GetCategoryResponse } from '../../responses/categories/getCategory.response';
import { GetCategoriesElementResponse } from '../../responses/categories';

export class GetCategoryBySlugUsecase {
  constructor(@Inject('CategoryRepository')
              private readonly categoryRepository: CategoryRepositoryInterface) {
  }

  async handler(slug:string): Promise<GetCategoryResponse> {
    const baseCategory =await  this.categoryRepository.getCategoryBySlug(slug);
    if(baseCategory.isEmpty()){
      //TODO add custom error here
      throw new Error('Category not found');
    }
    const categoryModel=baseCategory.get();
    const childCategories=await this.categoryRepository.getCategoriesByParentId(categoryModel.id);
    const response=new GetCategoryResponse();
    response.id=categoryModel.id;
    response.name=categoryModel.name;
    response.slug=categoryModel.slug;
    response.description=categoryModel.description;
    response.createdAt=categoryModel.createdAt;
    response.updatedAt=categoryModel.updatedAt;
    response.categories=childCategories.map(childCategory=>{
      const categoryElement=new GetCategoriesElementResponse();
      categoryElement.id=childCategory.id;
      categoryElement.name=childCategory.name;
      categoryElement.slug=childCategory.slug;
      categoryElement.createdAt=childCategory.createdAt;
      categoryElement.updatedAt=childCategory.updatedAt;
      return categoryElement;
    });
    return response;
  }
}