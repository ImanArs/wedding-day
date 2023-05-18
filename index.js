const form = document.getElementById('form');
const inputName = form.querySelector('#name');
const inputPhone = form.querySelector('#phone');
const inputPartner = form.querySelector('#partner');

const url = 'https://636a27e5b10125b78fd2189a.mockapi.io/todo'

inputName.addEventListener('change', (e) => e.target.value)
inputPhone.addEventListener('change', (e) => e.target.value)
inputPartner.addEventListener('change', (e) => e.target.value)


form.addEventListener('submit', (e) => {
  e.preventDefault()
  let obj = {
    name: `${inputName.value}`,
    phone: `${inputPhone.value}`,
    partner: `${inputPartner.value}`
  }
  console.log(obj);
  fetch('https://64662253228bd07b355c9c1c.mockapi.io/wedding', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(obj)
  })
  confirm('ваш ответ записан')

})
