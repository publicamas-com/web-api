import { BaseRepositoryPostgres } from '../base.repository.postgres';
import { CategoryRepositoryInterface } from '../../../../domain/ports/repository/category';
import { CategoryModel } from 'src/domain/model/category';
import { DataSource } from 'typeorm';
import { Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { CategoryEntity } from './entity/category.entity';
import CategoryMapper from '../../../mappers/categories/category.mapper';
import { Optional } from 'typescript-optional';

export default class CategoryRepositoryPostgres extends BaseRepositoryPostgres implements CategoryRepositoryInterface {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async getCategoriesByParentSlug(slug: string): Promise<CategoryModel[]> {
    const category = await this.getCategoryBySlug(slug);
    if (category.isEmpty()) {
      throw new Error('Category not found');
    }
    return this.getCategoriesByParentId(category.get().id);
  }

  async getCategoriesByParentId(parentId: string): Promise<CategoryModel[]> {
    const categories = await this.getRepository(CategoryEntity).find({
      where: {
        isDeleted: false,
        parentId: parentId,
      },
    });
    return CategoryMapper.fromEntitiesToModels(categories);
  }

  async getCategoryBySlug(slug: string): Promise<Optional<CategoryModel>> {
    const categoryEntity = await this.getRepository(CategoryEntity).findOneBy({ slug });
    return CategoryMapper.fromEntityToModel(categoryEntity);
  }


  async createCategory(category: CategoryModel): Promise<CategoryModel> {
    const categoryEntity = CategoryMapper.fromModelToEntity(category);
    const result = await this.getRepository(CategoryEntity).save(categoryEntity);
    //TODO check if I should update the message error
    return CategoryMapper.fromEntityToModel(result).orElseThrow(() => new Error('Error parsing categoryEntity to categoryModel'));
  }

  async getCategories(): Promise<CategoryModel[]> {
    const categories = await this.getRepository(CategoryEntity).find({where:{ isDeleted: false }});
    return CategoryMapper.fromEntitiesToModels(categories);
  }

  async getCategoryById(id: string): Promise<Optional<CategoryModel>> {
    const categoryEntity = await this.getRepository(CategoryEntity).findOneBy({ id });
    return CategoryMapper.fromEntityToModel(categoryEntity);
  }

  async updateCategory(category: CategoryModel): Promise<CategoryModel> {
    return null;
  }

  async deleteCategory(id: string): Promise<void> {
    return null;
  }

}