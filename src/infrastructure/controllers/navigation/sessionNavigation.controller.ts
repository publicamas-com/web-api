import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req, UseInterceptors} from '@nestjs/common';
import {
    CreateSessionNavigationUseCase,
    GetSessionNavigationUseCase,
    UpdateSessionNavigationUseCase,
    AssignUserToSessionNavigationUseCase
} from '../../../application/usecases/navigation';
import {SessionModel} from "../../../domain/model/navigation";
import {TransactionInterceptor} from "../../interceptors/transaction.interceptor";
import {CustomExceptionFilter} from "../../interceptors/customException.interceptor";

@Controller('/api/v1/session-navigation')
export class SessionNavigationController {
    constructor(private readonly getSessionNavigationUseCase: GetSessionNavigationUseCase,
                private readonly createSessionNavigationUseCase: CreateSessionNavigationUseCase,
                private readonly updateSessionNavigationUseCase: UpdateSessionNavigationUseCase,
                private readonly assignUserToSessionNavigationUseCase: AssignUserToSessionNavigationUseCase,) {

    }

    @Get('/:id')
    async getSessionNavigation(@Param('id') id: string) {
        return this.getSessionNavigationUseCase.handler(id);
    }

    @Post('')
    async createSessionNavigation(@Req() req: any): Promise<SessionModel> {
        return this.createSessionNavigationUseCase.handler(req.ip);
    }

    @Post('/:id/users')
    @UseInterceptors(CustomExceptionFilter)
    @HttpCode(HttpStatus.OK)
    async assignUserToSessionNavigation(@Req() req: any, @Param('id') id: string): Promise<SessionModel> {
        const userId = req.user.userId;
        return this.assignUserToSessionNavigationUseCase.handler(id, userId);
    }


}