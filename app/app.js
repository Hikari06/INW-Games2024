const prompt = require('prompt-sync')()
   
function getUserInfo(){
    let velocidade = prompt("Digite a velocidade que o carro estava: ");
 
    return velocidade
}
 
 
function calcMulta(velocidadeInformada=0){
    let multa = 0;
    let velocidadeExcedida = 0;
 
 
       if(velocidadeInformada > 60){
        velocidadeExcedida = velocidadeInformada - 60;
        multa = velocidadeExcedida * 100;
       }
 
        return multa
}
 
function main(){
    let userData = getUserInfo()
    let resultado = calcMulta(userData)
 
    console.log(`Sua multa é de ${resultado} reais`)
 
}
main()