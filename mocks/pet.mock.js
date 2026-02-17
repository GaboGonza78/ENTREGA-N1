import { faker } from '@faker-js/faker'

export const generateMockPet = () => {
    return {
        name: faker.animal.dog(),
        specie: faker.helpers.arrayElement(['dog', 'cat']),
        birthDate: faker.date.past(),
        adopted: false
    }
}

export const generateMockPets = (quantity) => {
    const pets = []

    for (let i = 0; i < quantity; i++) {
        pets.push(generateMockPet())
    }

    return pets
}
