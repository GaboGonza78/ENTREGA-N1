import { Router } from 'express'
import { generateMockUsers } from '../mocks/user.mock.js'
import { generateMockPets } from '../mocks/pet.mock.js'
import UserModel from '../models/User.js'
import PetModel from '../models/Pet.js'

const router = Router()


router.get('/mockingusers', async (req, res) => {
    try {
        const users = await generateMockUsers(50)
        res.json({
            status: 'success',
            payload: users
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.get('/mockingpets', (req, res) => {
    const pets = generateMockPets(50)

    res.json({
        status: 'success',
        payload: pets
    })
})


router.post('/generateData', async (req, res) => {
    try {
        const { users = 0, pets = 0 } = req.body

        const mockUsers = await generateMockUsers(users)
        const mockPets = generateMockPets(pets)

        const insertedUsers = await UserModel.insertMany(mockUsers)
        const insertedPets = await PetModel.insertMany(mockPets)

        res.json({
            status: 'success',
            message: 'Datos generados e insertados correctamente',
            insertedUsers: insertedUsers.length,
            insertedPets: insertedPets.length
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

export default router
