import mongoose, { Schema, Types, Document } from "mongoose";

const friendListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        default: []
    }]
});

export interface IFriendList{
    user: Schema.Types.ObjectId,
    friends: Schema.Types.ObjectId[]
}

const friendListModel = mongoose.model('FriendList',friendListSchema);
export default friendListModel;

