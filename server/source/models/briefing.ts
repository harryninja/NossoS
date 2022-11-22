import mongoose, { Schema } from 'mongoose';
import IEvent from '../interfaces/briefing';

const EventSchema: Schema = new Schema(
    {
        evento: { type: String, required: true, unique: true },
        precisa: { type: String, required: false },
        cidade: { type: String, required: true },
        local: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        alternatephone: { type: String, required: false },
        address1: { type: String, required: true },
        address2: { type: String, required: false },
        country: { type: String, required: true },
        cardnumber: { type: String, required: true },
        cardmonth: { type: String, required: true },
        cardyear: { type: String, required: true },
        minOrcamento: { type: String, required: true, unique: true },
        maxOrcamento: { type: String, required: true },
        prazoDate: { type: String, required: true },
        largeArea: { type: String, required: true },
        AlturaArea: { type: String, required: true },
        total: { type: String },
        formaPagamento: { type: String, required: true },

        balcao: { type: String, required: true, unique: true },
        objetosSuspensos: { type: String, required: true },
        freezer: { type: String, required: true },
        pontosEletricos: { type: String, required: true },
        tvQuantidade: { type: String, required: true },
        painelLed: { type: String },
        lixeiras: { type: String, required: true },

        promoter: { type: String },
        link: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IEvent>('Event', EventSchema);
