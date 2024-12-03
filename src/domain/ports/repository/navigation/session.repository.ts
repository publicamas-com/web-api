import { Optional } from 'typescript-optional';
import { SessionModel } from '../../../model/navigation';

export interface SessionRepository {
  createSession(model:SessionModel): Promise<Optional<SessionModel>>;
  destroySession(): void;
  getSession(id:string): Promise<Optional<SessionModel>>;
  assignSessionToUser(id:string, userId:string): Promise<void>;
}