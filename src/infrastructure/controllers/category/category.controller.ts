import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, UseInterceptors} from '@nestjs/common';
import {CreateCategoryUseCase, GetCategoriesUseCase} from '../../../application/usecases/categories';
import {TransactionInterceptor} from '../../interceptors/transaction.interceptor';
import {CustomExceptionFilter} from '../../interceptors/customException.interceptor';
import {CreateCategoryCommand} from '../../../application/commands/categories';
import {CreateCategoryResponse} from '../../../application/responses/categories';
import {GetCategoryBySlugUsecase} from '../../../application/usecases/categories/getCategoryBySlug.usecase';

@Controller('/api/v1/categories')
export class CategoryController {
    constructor(
        private readonly getCategoriesUseCase: GetCategoriesUseCase,
        private readonly getCategoriesBySlugUseCase: GetCategoryBySlugUsecase,
        private readonly createCategoryUseCase: CreateCategoryUseCase,
    ) {
    }

    @Get('')
    @HttpCode(HttpStatus.OK)
    async getCategories(@Query("child") child: string, @Query("parentId") parentId: string,) {
        const childBoolean = child !== undefined ? child === 'true' : undefined;
        return await this.getCategoriesUseCase.handler(childBoolean, parentId);
    }

    @Post('')
    @UseInterceptors(TransactionInterceptor, CustomExceptionFilter)
    @HttpCode(HttpStatus.CREATED)
    async createCategory(@Body() category: CreateCategoryCommand): Promise<CreateCategoryResponse> {
        return await this.createCategoryUseCase.handler(category);
    }

    @Get('/slug/:slug')
    @HttpCode(HttpStatus.OK)
    async getCategoryBySlug(@Param("slug") slug: string) {
        return await this.getCategoriesBySlugUseCase.handler(slug);
    }

}