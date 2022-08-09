// console.log('Prática Guiada 1 - if e if')
// const idadeDependente=Number(prompt("Solicitação de dependente \nQual a idade do dependente"))

// if(idadeDependente>=13){
//     if(idadeDependente<18){
//         console.log("Seu filho já pode ter um a cartão vinculado ao seu");
//     }else{
//         console.log("Consulte outras possibilidades do Labank");
//     }
// }else{
//     console.log("Consulte outras possibilidades do Labank");
// }

// if(idadeDependente>=13 && idadeDependente<18){
//     console.log("Seu filho já pode ter um a cartão vinculado ao seu");
// }else{console.log("Consulte outras possibilidades do Labank");
// }

// console.log('Prática Guiada 2 - if ternário')

// console.log(idadeDependente===13? 'A idade do dependente é 13 e já pode ter um cartão': "Verifique as opções possíveis")

// console.log('Prática Guiada 3 - switch-case');
// const numeroRamal=Number(prompt('Solicitação de cartão de crédito \nDigite a opção desejeda \n1 - Fácil\n2 - Black\n3 - Platinum\n4 - Master Gold'))

// switch(numeroRamal){
//     case 1: 
//         console.log('Cartão fácil adquirido'); 
//         break;
//     case 2: 
//         console.log('Cartão Black adquirido');  
//         break;
//     case 3: 
//         console.log('Cartão Platinum adquirido'); 
//         break;
//     case 4: 
//         console.log('Cartão Master Gold adquirido');
//         break;
//     default: 
//         console.log('Escolha uma das quatro opções disponíveis'); 
// }
const numero =Number(prompt("Digite um número"));
//     if(numero%2 === 0) 
//      if(numero%3===0){
//         console.log('UFA ACERTEI')
//      }
    

if(numero%2 === 0 && numero%3===0){
     console.log('UFA ACERTEI')
    console.log(numero ===30?'UFA ACERTEI':'não foi dessa vez');

    switch(numero){
        case 6: 
            console.log('Six');
            break;
        case 12: 
            console.log('Dozão');
            break;
        case 18: 
            console.log('eighteen');
            break;
        case 24: 
            console.log('twenty four');
            break;
        case 30:
            console.log('30tão');
            break;
        default: 
            console.log('o número é maior que 30 ou menor que 6');
    } 
}else(console.log('o número não é divisível por 2 ou 3'));


    