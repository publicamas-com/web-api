import { Injectable } from '@nestjs/common';
import { CreateCategoryCommand } from '../../commands/categories';
import { CategoryModel } from '../../../domain/model/category';

@Injectable()
export default class CategoryFactory {
  public createCategoryModelFromCreateCategoryCommand(createCategoryCommand: CreateCategoryCommand): CategoryModel {
    const categoryModel = new CategoryModel();
    categoryModel.name = createCategoryCommand.name;
    categoryModel.description = createCategoryCommand.description;
    categoryModel.slug = createCategoryCommand.slug;
    return categoryModel;
  }
}