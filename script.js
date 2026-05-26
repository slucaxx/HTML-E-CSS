// função que ira executar quando clicar no butao gerar
function gerartabuada() {
    // pegar o valor do campo input html
    const numeroinput = document.getElementById("numeroinput")
    let numero = parseInt(numeroinput.value)

    // pegar o elemento onde a tabuada sera exibida
    const resultadoDiv= document.getElementById("resultadotabuada")

    // limpar o conteudo anterior
    resultadoDiv.innerHTML = ""

    // adicionar um titulo pra tubuada
    resultadoDiv.innerHTML +=  `<h2>tabuada do numero ${numero}: </h2>`

    // laco de repetiçao
    for (let i = 1; i <=10; i++ ){
        let resultado = numero *i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }


}

const btnGerar= document.getElementById("btnGerar")
btnGerar.addEventListener("click",gerartabuada)