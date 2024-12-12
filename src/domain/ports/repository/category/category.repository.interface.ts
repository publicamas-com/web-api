import { CategoryModel } from '../../../model/category';
import { Optional } from 'typescript-optional';

export interface CategoryRepositoryInterface {
  createCategory: (category: CategoryModel) => Promise<CategoryModel>;
  getCategories: (child:boolean, parentId: string) => Promise<CategoryModel[]>;
  getCategoriesByParentSlug(slug: string): Promise<CategoryModel[]>;
  getCategoriesByParentId(slug: string): Promise<CategoryModel[]>;
  getCategoryBySlug(slug: string): Promise<Optional<CategoryModel>>;
  getCategoryById: (id: string) => Promise<Optional<CategoryModel>>;
  updateCategory: (category: CategoryModel) => Promise<CategoryModel>;
  deleteCategory: (id: string) => Promise<void>;
}