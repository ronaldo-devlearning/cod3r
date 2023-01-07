//Function declaration

function sayHello() {
    console.log('Hello!')
}

function sayHelloTo(name) {
    console.log(`Hello, ${name}!`)
}

function returnHi() {
    return 'Hi!'
}

function returnHiTo(name) {
    return `Hi, ${name}!`
}

//sayHello()

//sayHelloTo('Ronaldo')

//Para que a mensagem seja exibida é necessário que se faça uma das alternativas abaixo:

//1ª armazenar o retorno da função em uma variável ou constante, após isso, exibir o conteúdo da variável

/*const greeting = returnHi()
console.log(greeting)*/

//2ª Chamar a função diretamente no método utilizado para exibição do conteúdo

//console.log(returnHi())

console.log(returnHiTo('Ronaldo'))