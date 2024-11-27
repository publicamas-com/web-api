import { GetCategoriesElementResponse } from './getCategoriesElementResponse';

export class GetCategoryResponse {
  id: string;
  name: string;
  slug: string;
  description: string;
  categories: GetCategoriesElementResponse[];
  createdAt: Date;
  updatedAt: Date;
}