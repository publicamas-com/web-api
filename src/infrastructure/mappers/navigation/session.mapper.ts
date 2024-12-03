import {SessionModel} from "../../../domain/model/navigation";
import {NavigationSessionEntity} from "../../adapters/repository/navigation/entity/session.entity";
import {Optional} from "typescript-optional";

export default class SessionMapper {
    static fromModelToEntity(model: SessionModel): NavigationSessionEntity {
        const entity = new NavigationSessionEntity();
        entity.id = model.id
        entity.ip = model.ip;
        entity.createdAt = model.createdAt;
        entity.updatedAt = model.updatedAt;
        entity.userId = model.userId;
        return entity;
    }

    static fromEntityToModel(optEntity: Optional<NavigationSessionEntity>): Optional<SessionModel> {
        if (!optEntity || optEntity.isEmpty()) {
            return Optional.empty();
        }
        const entity = optEntity.get();
        const model = new SessionModel();
        model.id = entity.id;
        model.ip = entity.ip;
        model.createdAt = entity.createdAt;
        model.updatedAt = entity.updatedAt;
        model.userId = entity.userId;
        return Optional.of(model);
    }
}