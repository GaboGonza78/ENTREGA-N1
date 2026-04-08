import { Router } from 'express'
import UserModel from '../models/User.js'
import PetModel from '../models/Pet.js'

const router = Router()

// Obtener todas las adopciones (usuarios con pets)
router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find().populate('pets')
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Adoptar mascota
router.post('/:uid/:pid', async (req, res) => {
    try {
        const { uid, pid } = req.params

        const user = await UserModel.findById(uid)
        const pet = await PetModel.findById(pid)

        if (!user || !pet) {
            return res.status(404).json({ error: 'User or Pet not found' })
        }

        if (pet.adopted) {
            return res.status(400).json({ error: 'Pet already adopted' })
        }

        pet.adopted = true
        user.pets.push(pet._id)

        await pet.save()
        await user.save()

        res.json({ message: 'Pet adopted successfully' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

export default router