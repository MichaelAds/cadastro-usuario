import './mask.js';
import Users from './Users.js';



let data = new Users;

let newUser = JSON.parse(localStorage.getItem('user'))



function initService() {
    getUser()

}

async function getUser() {
    try {
        const response = await fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');
        data = await response.json();
        data.push(...newUser);
        cardUser(data);
    } catch (error) {
        console.error(error)
    }
}



function cardUser(users) {
    let createUser = '';
    for (let user of users) {
        createUser += `
      <ul>
          <li>
              Nome: ${user.name}
          </li>
          <li>
              E-mail: ${user.email}
          </li>
          <li>
              CPF: ${mask.cpf(user.cpf)}
          </li>
          <li>
              Telefone: ${mask.tel(user.phone)}
          </li>

          <li>
                <button key="${user.cpf}" type="submit" class="button-error">apagar</button>
          </li>
      </ul>
      
      

      `
    }
    document.querySelector('.users').innerHTML = createUser;



    let buttons = document.querySelectorAll('.button-error')

    for (var i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', function() {
            let key = this.getAttribute('key');
            for (let i = 0; i < users.length; i++) {
                if (users[i].cpf === key) {
                    users.splice(i, 1)

                    localStorage.setItem('user', JSON.stringify(users))
                    cardUser(users)
                }

            }
        })
    }
}

initService();