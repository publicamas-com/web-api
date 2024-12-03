import {Inject, Injectable} from '@nestjs/common';
import {SessionRepository} from "../../../domain/ports/repository/navigation";
import {SessionModel} from "../../../domain/model/navigation";

@Injectable()
export class AssignUserToSessionNavigationUseCase {
    constructor(
        @Inject('SessionRepository')
        private readonly sessionRepository: SessionRepository,
    ) {
    }

    async handler(id: string, userId: any): Promise<SessionModel> {
        await this.sessionRepository.assignSessionToUser(id, userId);
        return (await this.sessionRepository.getSession(id)).get();
    }
}