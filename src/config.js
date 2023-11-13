export const ApiURL = process.env.NODE_ENV === 'production'
? '/api'
: 'http://localhost:3131/api'