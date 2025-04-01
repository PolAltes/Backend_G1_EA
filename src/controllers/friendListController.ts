import * as friendListService from '../services/friendListService'
import { Request, Response } from 'express';
import { IFriendList } from '../models/friendList';

export const generateFriendListHandler = async (req: Request, res: Response) => {
    try{
        const lists = await friendListService.generateFriendList(req.body);
        if(!lists){
            res.status(401).json({message: 'Error creating friend list.'});
        }
        res.status(201).json(lists);
        }catch(err:any){
            res.status(500).json({message:"Server error: " ,err});
        }
};

export const getAllFriendListsHandler = async (req: Request, res: Response) => {
    try{
        const lists = await friendListService.getAllFriendLists();
        if(!lists){
            res.status(401).json({message: 'No songs found'});
        }
        res.status(201).json(lists);
        }catch(err:any){
            res.status(500).json({message:"Server error: " ,err});
        }
};

export const getUserFriendListHandler = async (req: Request, res: Response) => {
    try{
        const lists = await friendListService.getUserFriendList(req.params.id);
        if(!lists){
            res.status(401).json({message: 'Could not find friend list'});
        }
        res.status(201).json(lists);
        }catch(err:any){
            res.status(500).json({message:"Server error: " ,err});
        }
};

export const updateUserFriendListHandler = async (req: Request, res: Response) => {
    try{
        const lists = await friendListService.updateUserFriendList(req.params.id,req.body);
        if(!lists){
            res.status(401).json({message: 'Error updating friend list'});
        }
        res.status(201).json(lists);
        }catch(err:any){
            res.status(500).json({message:"Server error: " ,err});
        }
};

export const deleteUserFriendListHandler = async (req: Request, res: Response) => {
    try{
        const lists = await friendListService.deleteUserFriendList(req.params.id);
        if(!lists){
            res.status(401).json({message: 'Error deleting friend list'});
        }
        res.status(201).json(lists);
        }catch(err:any){
            res.status(500).json({message:"Server error: " ,err});
        }
};