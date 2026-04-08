import { expect } from 'chai'
import supertest from 'supertest'
import PetModel from '../src/models/Pet.js'
import app from '../src/app.js'

const requester = supertest(app)

describe('Test Adoption Router', function () {

    this.timeout(10000)

    let userId
    let petId

    // Setup antes de los tests
    before(async () => {

        // Crear usuario
        const userRes = await requester.post('/api/users').send({
            first_name: "Test",
            last_name: "User",
            email: `test${Date.now()}@mail.com`, // evita duplicados
            password: "1234",
            role: "user"
        })

        userId = userRes.body._id

        // Crear mascota directamente en DB (rápido y seguro)
        const newPet = await PetModel.create({
            name: "TestPet",
            specie: "dog",
            adopted: false
        })

        petId = newPet._id.toString()
    })

    it('GET /api/adoptions debe devolver usuarios con pets', async () => {
        const res = await requester.get('/api/adoptions')
        expect(res.status).to.equal(200)
        expect(res.body).to.be.an('array')
    })

    it('POST /api/adoptions/:uid/:pid debe adoptar mascota correctamente', async () => {
        const res = await requester.post(`/api/adoptions/${userId}/${petId}`)
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal('Pet adopted successfully')
    })

    it('No debe permitir adoptar una mascota ya adoptada', async () => {
        const res = await requester.post(`/api/adoptions/${userId}/${petId}`)
        expect(res.status).to.equal(400)
    })

    it('Debe fallar con user inexistente', async () => {
        const fakeId = '507f1f77bcf86cd799439011'
        const res = await requester.post(`/api/adoptions/${fakeId}/${petId}`)
        expect(res.status).to.equal(404)
    })

    it('Debe fallar con pet inexistente', async () => {
        const fakeId = '507f1f77bcf86cd799439011'
        const res = await requester.post(`/api/adoptions/${userId}/${fakeId}`)
        expect(res.status).to.equal(404)
    })

})