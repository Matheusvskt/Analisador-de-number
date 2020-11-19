let num = document.querySelector('input#txnum')
let lista = document.querySelector('select#txfim')
let res = document.querySelector('div#res')
let RetornaValores = []// vetor para analisar os dados 

function adicionar(){ //adiciona numeros na lista 
    if(isnumero(num) && !inLista(num, RetornaValores)){ //verificar se é um number e se o numero não esta em lista
       RetornaValores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
    }//else{
       // window.alert('Valor inválido ou já encontrado na lista.')
    //}
function isnumero(n){ //verifica se é um numero entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false 
    }
}
function inLista(n, l){ //numero e lista
    if(l.indexOf(Number(n)) != -1){// -1 valor n encontrado na lista
        return true
    }else{
        return false
    } 
}


}

        

