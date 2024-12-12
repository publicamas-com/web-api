import {PublicationFieldValuesModel} from "./publicationFieldValue.model";


class PublicationAssetModel {
}

export class PublicationModel {
    title: string;
    description: string;
    content: string;
    publicationFieldValues: PublicationFieldValuesModel;
    publicationAssets: PublicationAssetModel;
}