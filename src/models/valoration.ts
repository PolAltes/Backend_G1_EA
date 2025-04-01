import mongoose, {Schema, Types, Document} from 'mongoose'

const valorationSchema = new Schema ({
    activity: {
        type: Schema.Types.ObjectId,
        unique: false,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        unique: false,
        required: true
    },
    value: {
        type: Number,
        required: true,
        default: 0,
        validate: {
            validator: (v:number) => [1,2,3,4,5].includes(v)
        }
    }
});

export interface IValoration {
    activity: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    value: 1 | 2 | 3 | 4 | 5 ;
}

const ValorationModel = mongoose.model('Valoration',valorationSchema);
export default ValorationModel;