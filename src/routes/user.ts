import express from 'express'
import * as userServices from '../services/userServices'

//import toNewUser from '../extras/utils'

const router = express.Router()

router.get('/', async(_req, res) => {
    const data = await userServices.getEntries.getAll()
    return res.json(data);
})

router.get('/:id', async(req, res) => {
    const data = await userServices.getEntries.findById(req.params.id)
    return res.json(data);
})

router.post('/', async(req, res) => {
    const data = await userServices.getEntries.create(req.body)
    return res.json(data);
})

router.put('/:id', async(req, res) => {
    const data = await userServices.getEntries.update(req.params.id,req.body)
    return res.json(data);
})

router.delete('/:id', async(req, res) => {
    const data = await userServices.getEntries.delete(req.params.id)
    return res.json(data);
})

router.post('/:id/experience', async (req, res) => {
    const userId = req.params.id;
    const experienceId = req.body.experienceId; 
    const updatedUser = await userServices.getEntries.addExperience(userId, experienceId);
    
    if (updatedUser) {
        return res.json(updatedUser);
    }
    return res.status(404).json({ message: "Usuario no encontrado" });
});

router.delete('/:id/experience', async (req, res) => {
    const userId = req.params.id;
    const experienceId = req.body.experienceId; 
    const updatedUser = await userServices.getEntries.removeExperience(userId, experienceId);
    
    if (updatedUser) {
        return res.json(updatedUser);
    }
    return res.status(404).json({ message: "Usuario no encontrado" });
});

export default router