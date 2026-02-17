import { faker } from '@faker-js/faker'
import { createHash } from '../utils/hash.js'

export const generateMockUser = async () => {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: await createHash('coder123'),
        role: faker.helpers.arrayElement(['user', 'admin']),
        pets: []
    }
}

export const generateMockUsers = async (quantity) => {
    const users = []

    for (let i = 0; i < quantity; i++) {
        users.push(await generateMockUser())
    }

    return users
}
