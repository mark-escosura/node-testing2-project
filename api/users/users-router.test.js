const request = require('supertest')
const server = require('./users-router.js')
const db = require('../../data/db-config.js')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy() // disconnects from db
})

it('is the correct env', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
describe('users router', () => {
  describe('[GET] /users', () => {
    let res
    beforeEach(async () => {
      res = await request(server).get('/users')
    })
    it('responds with 200', async () => {
      expect(res.status).toBe(200)
    })
    it('responds with all users', async () => {
      expect(res.body).toHaveLength(3)
    })
  })
  describe('[POST] /users', () => {
    let res
    beforeEach(async () => {
      res = await request(server)
        .post('/users/')
        .send({ user_id: 4, user_name: 'christian' })
    })
    it('responds with a 201 created', async () => {
      expect(res.status).toBe(201)
    })
    it('responds with new user', async () => {
      expect(res.body).toMatchObject({ user_id: 4, user_name: 'christian' })
    })
  })
})