export class CategoryModel {
  id: string;
  name: string;
  slug:string;
  description: string;
  parentId: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}