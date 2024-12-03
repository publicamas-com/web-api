import {Inject, Injectable} from '@nestjs/common';
import {SessionRepository} from '../../../domain/ports/repository/navigation';
import {SessionModel} from '../../../domain/model/navigation';

@Injectable()
export class GetSessionNavigationUseCase {

    constructor(
        @Inject('SessionRepository')
        private readonly sessionRepository: SessionRepository,
    ) {
    }

    async handler(id: string): Promise<SessionModel> {
        const result = await this.sessionRepository.getSession(id)
        if (result.isEmpty()) {
            //TODO fix this error message
            throw new Error('Session not found')
        }
        return result.get();
    }
}