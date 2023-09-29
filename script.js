function OlaMundo(){
    alert("Ola Mundo!")
}

function mostraNome(){
    const nome = prompt("Digite o seu nome:")
    console.log(nome)
}

function concatenaPalavras(){
    let palarv1 = prompt("Digite a primeira palavra:")
    let palarv2 = prompt("Digite a segunda palavra:")
    let palarv3 = palarv1 + palarv2
    console.log(palarv3)
}

function somaNumeros(){
    let num1 = parseInt(prompt("Digite o primeiro número"))
    let num2 = parseInt(prompt("Digite o segundo número"))
    let resultado = num1 + num2
    console.log(resultado)
}

function subtraiNumeros() {
    let num1= Number(prompt("digite o primeiro numero:"))
    let num2 = Number(prompt("digite o segundo numero:"))
    subtracao(num1,num2)
}

function subtracao(num1, num2){
  alert("subtracao realizada")
  console.log(num1-num2)
}

function criaObjeto(){
    usuario = {}
    var nome = (prompt("Digite seu nome"))
    var idade = (prompt("Digite sua idade"))
    var time = (prompt("Digite o seu time favorito"))
    usuario.nome = nome
    usuario.idade = idade
    usuario.time = time
    console.log(usuario)
}

function calculadora() {
    const op = prompt("Digite a operação (somar, subtrair, multiplicar ou dividir):");
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
    switch (op) {
        case "somar":
            console.log(`Resultado: ${numero1 + numero2}`);
            break;
        case "subtrair":
            console.log(`Resultado: ${numero1 - numero2}`);
            break;
        case "multiplicar":
            console.log(`Resultado: ${numero1 * numero2}`);
            break;
        case "dividir":
            if (numero2 !== 0) {
                console.log(`Resultado: ${numero1 / numero2}`);
            } else {
                console.log("Erro: Divisão por zero não é permitida.");
            }
            break;
        default:
            console.log("Operação inválida.");
    }
}

function mudaConstante(){
    const nm = prompt('Digite seu nome:');
    console.log('Nome digitado:', nm);
    const novoNm = prompt('Digite um novo nome: ');
    console.log('Novo nome digitado:', novoNm);

    nm = novoNm; 
  }

function manipulaArrays(){
    var crs = [ "branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza" ]
    crs.push("laranja")
    console.log(crs)
    let crRm = crs.pop()
    console.log('Elemento removido: ', crRm)
    console.log('Array: ', crs)
    let orAr = crs.sort()
    console.log('Array organizado: ', orAr)
    let rmAz = crs.splice(crs.indexOf("azul"), 1)
    console.log('Array sem azul: ', crs)
    console.log('Primeiro valor do array:', crs[0])
    console.log('Último valor do array:', crs[crs.length - 1])
    crs.unshift("fucsia")
    console.log('Array com fucsia: ', crs)
    let crSh = crs.shift();
    console.log('Elemento removido pelo shift: ', crSh)
    console.log('Array após shift: ', crs)

}