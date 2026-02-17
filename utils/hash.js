import bcrypt from 'bcrypt'

export const createHash = (password) =>
    bcrypt.hash(password, bcrypt.genSaltSync(10))
