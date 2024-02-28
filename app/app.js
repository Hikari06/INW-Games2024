const prompt = require('prompt-sync')()

function getUserInfo(){
    let velocidade = prompt("Digite sua velocidade: ")
    let placa = prompt("Digite sua placa: ")

    return {
        velocidadeDoUsuario: velocidade,
        placaDoUsuario: placa
    }
}


function Velocimêtro(velocidadeInformada=0){
    if(velocidade * )
    return velocidadeInformada
}

function main(){
    let UserData = getUserInfo();
    let velocidade = UserData.velocidadeDoUsuario
    let placa = UserData.placaDoUsuario
    let velocidade = Velocimêtro(velocidade, placa)

    if(velocidade < 60){
        console.log(`Sua velocidade é de ${velocidade}km/h, você não foi multado`)

    }
    else if(velocidade > 18 && velocidade <23.9){
        console.log(`Sua velocidade é de ${velocidade}km/h, sua multa e de `)

    }
}
main()