import { Optional } from 'typescript-optional';
import { CategoryEntity } from '../../adapters/repository/category/entity/category.entity';
import { CategoryModel } from '../../../domain/model/category';

export default class CategoryMapper {
  static fromEntitiesToModels(categoryEntities: CategoryEntity[]): CategoryModel[] {
    return categoryEntities.map(categoryEntity => {
      return this.fromEntityToModel(categoryEntity).orElseThrow(() => new Error('Error parsing categoryEntity to categoryModel'));
    });
  }


  static fromEntityToModel(categoryEntity: CategoryEntity): Optional<CategoryModel> {
    if (!categoryEntity) {
      return Optional.empty();
    }
    let categoryM = new CategoryModel();
    categoryM.id = categoryEntity.id;
    categoryM.name = categoryEntity.name;
    categoryM.slug = categoryEntity.slug;
    categoryM.parentId = categoryEntity.parentId;
    categoryM.createdAt = categoryEntity.createdAt;
    categoryM.updatedAt = categoryEntity.updatedAt;
    return Optional.of(categoryM);
  }

  static fromModelToEntity(categoryModel: CategoryModel): CategoryEntity {
    const categoryE = new CategoryEntity();
    categoryE.id = categoryModel.id;
    categoryE.name = categoryModel.name;
    categoryE.slug = categoryModel.slug;
    categoryE.parentId = categoryModel.parentId;
    categoryE.createdAt = categoryModel.createdAt;
    categoryE.updatedAt = categoryModel.updatedAt;
    return categoryE;
  }

}