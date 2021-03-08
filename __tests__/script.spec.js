import Users from '../js/Users';
jest.mock('../js/Users')


describe('Criar usuário', () => {
    beforeEach(() => {
        Users.mockClear();
    });

    it('deve verificar se instancia ja foi chamada', () => {
        expect(Users).toHaveBeenCalledTimes(1);
    })

    it('deve criar uma nova instancia de usuário', () => {
        const testUser = new Users('Michael', '45486737688', '11987654321', 'yemail3@test.com.br');
        expect(Users.mock.calls[0]).toEqual(["Michael", "45486737688", "11987654321", "yemail3@test.com.br"])
    })
})