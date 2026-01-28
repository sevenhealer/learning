const zod = require('zod')

const User = zod.object({
    username: zod.string().min(3),
    password: zod.string().min(8),
    name: zod.string().min(3)
})

module.exports = User