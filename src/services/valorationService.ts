import ValorationModel, {IValoration} from '../models/valoration'
import mongoose from 'mongoose'


//Create Valoration
export const createValoration = async (valorationdata: IValoration): Promise<IValoration|null> => {
    const newValoration = await ValorationModel.create({valorationdata});
    return newValoration as IValoration;
};

//Get all valorations
export const getValorations = async (): Promise<IValoration[]|null> => {
    return await ValorationModel.find();
};

//Get paginated valorations
export const getPaginatedValorations = async (page: number = 1, limit : number = 10): Promise<{
    valorations:IValoration[];
    totalValorations:number;
    totalPages: number;
    currentPage: number;
}> => {
    try{
        const skip = (page - 1) * limit;
            
            const query = {};
            
            console.log("Consulta MongoDB:", JSON.stringify(query));
            
            if (mongoose.connection.readyState !== 1) {
              throw new Error("La conexión a MongoDB no está disponible");
            }
            
            const db = mongoose.connection.db;
            if (!db) {
              throw new Error("La base de datos no está disponible");
            }
            
            const collection = db.collection('valorations');
            
            const valorations = await collection.find(query)
              .skip(skip)
              .limit(limit)
              .toArray();
            
            const totalValorations = await collection.countDocuments(query);
            
            const totalPages = Math.ceil(totalValorations / limit);
            
            console.log(`Encontrados ${valorations.length} usuarios de un total de ${totalValorations}`);
            
            return {
              valorations: valorations as unknown as IValoration[],
              totalValorations,
              totalPages,
              currentPage: page
            };
    }catch(error){
        console.error('Error al obtener valoraciones paginadas: ', error);
        throw error;
    }
};

//Get valoration of an activity
export const getActivityValoration = async (activityId: string): Promise<IValoration[]|null> => {
    return await ValorationModel.find({activity:activityId});
};

//Update valoration of an activity
export const updateValoration = async (activityId: string, userId: string, value1: number): Promise<IValoration|null> => {
    return await ValorationModel.findOneAndUpdate({activity:activityId}, {user: userId, value:value1}, {new:true});
};

//Delete a valoration
export const deleteValoration = async (activityId:string, userId:string):Promise<IValoration|null> => {
    return await ValorationModel.findOneAndDelete({activity:activityId,user:userId});
};

//Delete valorations by its Id
export const deleteValorationById = async (valorationId:string): Promise<IValoration|null> => {
    return await ValorationModel.findByIdAndDelete(valorationId);
};