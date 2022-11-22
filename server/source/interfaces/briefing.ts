import { Document } from 'mongoose';

export default interface IEvent extends Document {
    evento: string;
    precisa: string;
    cidade: string;
    local: string;
    email: string;
    phone: string;
    alternatephone: string;
    address1: string;
    address2: string;
    country: string;
    cardnumber: string;
    cardmonth: string;
    cardyear: string;
    minOrcamento: string;
    maxOrcamento:  string;
    prazoDate: string;
    largeArea:  string;
    AlturaArea: string;
    total:  string;
    formaPagamento:  string;
    balcao:  string;
    objetosSuspensos: string;
    freezer:  string;
    pontosEletricos:  string;
    tvQuantidade:  string;
    painelLed:  string;
    lixeiras: string;
    promoter:  string;
    link: string;
}
