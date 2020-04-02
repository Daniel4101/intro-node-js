const users = require('./users')
// write some tests
describe('users', () => {
    test('findUser', async () => {
        const user  = await users.findUser(1);
        expect(user).toMatchObject({id: 1})
    });
})
