import { userInfo } from "node:os";
import friendListModel, {IFriendList} from "../models/friendList";
import userModel, {IUser} from '../models/user'
import mongoose, { Schema, Types } from 'mongoose';

//CREATE, READ, UPDATE, DELETE

//Generar una llista d'amics
export const generateFriendList = async(user1: Types.ObjectId) => {
    const newList = new friendListModel({user:user1})
    return await newList.save();
};

export const getAllFriendLists = async() => {
    return await friendListModel.find()
};

export const getUserFriendList = async(user1: string) => {
    const fl = await friendListModel.findOne({user:user1}).populate('friends');
    if(!fl){
        return null;
    }
    return fl.friends;
};

export const updateUserFriendList = async(user1: string, user2: Types.ObjectId)=> {
    return await friendListModel.findOneAndUpdate({user:user1}, { $push: { friends: user2 } });
};

export const deleteUserFriendList = async(user1:string) => {
    return await friendListModel.findOneAndDelete({user:user1});
};