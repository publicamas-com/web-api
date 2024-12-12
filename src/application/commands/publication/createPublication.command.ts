import {ConditionEnum, CurrencyEnum, WarrantyEnum} from "../../../domain/model/publication";
import {PaymentMethodEnum} from "../../../domain/model/payment/paymentMethod.enum";


export class CreatePublicationCommand {
    name: string;
    shortDescription: string;
    price: number;
    priceToBeAgreed: boolean;
    currency: CurrencyEnum;
    description: string;
    condition: ConditionEnum;
    warranty: WarrantyEnum;
    categoryId: string;
    canBeRetired: boolean;
    retiredMethodShouldBeAgreed: boolean;
    pictures: string[];
    mainPicture: string;
    paymentMethods: PaymentMethodEnum[];
}