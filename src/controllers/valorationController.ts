import * as valorationService from '../services/valorationService'

import {Request, Response} from 'express'

//deleteValoration -- deleteValorationById

export const createValorationHandler = async (req: Request, res: Response): Promise<any> => {
    try{
        const valoration = await valorationService.createValoration(req.body);
        if(!valoration){
            return res.status(400).json({message: 'Error creating valoration'});
        }
        res.status(201).json(valoration);
    }catch(err:any){
        res.status(500).json({message:"Server error: ", err});
    }
};

export const getPaginatedValorationsHandler = async (req: Request, res: Response): Promise<any> => {
    try{
        const page = parseInt(req.query.page?.toString() || '1',10);
        const limit = parseInt(req.query.limit?.toString() || '10',10);
        if (page < 1 || limit < 1 || limit > 100) {
            res.status(400).json({ message: 'Parámetros de paginación inválidos' });
            return;
        }
        
        const result = await valorationService.getPaginatedValorations(page, limit);
        res.status(201).json(result)
    }catch(err:any){
        res.status(500).json({message:"Server error: ",err});
    }
};

export const getValorationsHandler = async (req: Request, res: Response): Promise<any> => {
    try{
        const valoration = await valorationService.getValorations();
        if(!valoration){
            return res.status(400).json({message: 'Error finding all valorations'});
        }
        res.status(201).json(valoration);
    }catch(err:any){
        res.status(500).json({message:"Server error: ", err});
    }
};

export const getActivityValorationHandler = async (req: Request, res: Response): Promise<any> => {
    try{
        const valoration = await valorationService.getActivityValoration(req.params.activityid);
        if(!valoration){
            return res.status(400).json({message: 'Error finding valorations of an activity'});
        }
        res.status(201).json(valoration);
    }catch(err:any){
        res.status(500).json({message:"Server error: ", err});
    }
};

export const updateValorationHandler = async (req: Request, res: Response): Promise<any> => {
    try{
        const valoration = await valorationService.updateValoration(req.params.activityid,req.body.userid,parseInt(req.body.value));
        if(!valoration){
            return res.status(400).json({message: 'Error updating valoration'});
        }
        res.status(201).json(valoration);
    }catch(err:any){
        res.status(500).json({message:"Server error: ", err});
    }
};

export const deleteValorationHandler = async (req: Request, res: Response): Promise<any> => {
    try{
        const valoration = await valorationService.deleteValoration(req.params.activityid,req.params.userid);
        if(!valoration){
            return res.status(400).json({message: 'Error deleting valoration of a user in an activity'});
        }
        res.status(201).json(valoration);
    }catch(err:any){
        res.status(500).json({message:"Server error: ", err});
    }
};

export const deleteValorationByIdHandler = async (req: Request, res: Response): Promise<any> => {
    try{
        const valoration = await valorationService.deleteValorationById(req.params.id);
        if(!valoration){
            return res.status(400).json({message: 'Error deleting valoration'});
        }
        res.status(201).json(valoration);
    }catch(err:any){
        res.status(500).json({message:"Server error: ", err});
    }
};