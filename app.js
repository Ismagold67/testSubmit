/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
  */
 const form = document.querySelector('.signup')
 const usernameTest = username => /^[a-zA-Z]{6,}$/.test(username)
 const p = document.createElement('p')
 const p2 = document.createElement('p')
 const button = document.querySelector('button')

 p2.setAttribute('data-feedback', 'submit-feedback')
/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/


const insertParagrapphIntoDom = paragraphInfo => {
  const { paragraph, text, className, previousSibling } = paragraphInfo
  paragraph.textContent = text
  paragraph.setAttribute('class', className)
  previousSibling.insertAdjacentElement('afterend', paragraph)
}






form.username.addEventListener('input', event =>{
  event.preventDefault()
  const isAvalidUsername = usernameTest(event.target.value)

  const paragraphSubmitExists = document.querySelector('[data-feedback="submit-feedback"]')

  if(paragraphSubmitExists){
    p2.remove()
  }

  const invalidSubmitInfo = {
    paragraph: p, 
    text: 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas', 
    className: 'error', 
    previousSibling: form.username
  }
  const validSubmitInfo = {
    paragraph: p, 
    text: 'Username válido', 
    className: 'sucesso', 
    previousSibling: form.username
  }
  if(!isAvalidUsername){
    insertParagrapphIntoDom(invalidSubmitInfo)
    return
  }
  insertParagrapphIntoDom(validSubmitInfo)
})

button.addEventListener('mousemove', () =>{
  button.style.backgroundColor = 'rgba(128, 0, 128, 0.537)'
})
button.addEventListener('mouseout', () => {
  button.style.backgroundColor = ''
})

form.addEventListener('submit', event => {
  event.preventDefault()
  const sub = usernameTest(event.target.username.value)

  const invalidSubmitInfo = {
    paragraph: p2, 
    text: 'Por favor, insira um username válido', 
    className: 'fracasso', 
    previousSibling: button
  }

  const validSubmitInfo = {
    paragraph: p2, 
    text: 'Dados enviados', 
    className: 'dados', 
    previousSibling: button
  }
  if(!sub){
    insertParagrapphIntoDom(invalidSubmitInfo)
    return
  }
  insertParagrapphIntoDom(validSubmitInfo)
})

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/


/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
  
  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas  
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/
