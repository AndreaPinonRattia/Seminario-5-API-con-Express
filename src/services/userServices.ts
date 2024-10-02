import { usersofDB } from '../modelos/types_d_users'
//import userData from './users.json'

export const getEntries = {
    getAll: async()=>{
    return await usersofDB.find();
    },
    findById: async(id:string)=>{
        return await usersofDB.findById(id);
    },
    create: async(entry:object)=>{
        return await usersofDB.create(entry);
    },
    update: async(id:string,body:object)=>{
        console.log(body);
        return await usersofDB.findByIdAndUpdate(id,body,{$new:true});
    },
    delete: async(id:string)=>{
        return await usersofDB.findByIdAndDelete(id);
    },

    // Añadir una experiencia al usuario
    addExperience: async (userId: string, experienceId: number) => {
        const user = await usersofDB.findById(userId);
        if (user && !user.experiences.includes(experienceId)) {
            user.experiences.push(experienceId);
            return await user.save();  
        }
        return null;
    },
    
    // Borrar una experiencia del usuario
    removeExperience: async (userId: string, experienceId: number) => {
        const user = await usersofDB.findById(userId);
        if (user && user.experiences.includes(experienceId)) {
            user.experiences = user.experiences.filter(id => id !== experienceId);
            return await user.save();  
        }
        return null; 
    }
}