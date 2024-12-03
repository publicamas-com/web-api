import {Inject, Injectable} from '@nestjs/common';
import {SessionModel} from "../../../domain/model/navigation";
import {SessionRepository} from "../../../domain/ports/repository/navigation";

@Injectable()
export class CreateSessionNavigationUseCase {

    constructor(
        @Inject('SessionRepository')
        private readonly sessionRepository: SessionRepository,
    ) {
    }

    async handler(ip: string): Promise<SessionModel> {
        const model = new SessionModel();
        model.ip=ip;
        const result = await this.sessionRepository.createSession(model);
        if(result.isEmpty()) {
            //TODO create custom exception;
            throw new Error('Error creating session');
        }
        return result.get();
    }
}