(function() {
    fazerPedido()
    toogleCheckBox = false 
   
    document.getElementById('nota').style.display='none'
    document.getElementById('comBorda').style.display='none'
    document.getElementById('telaAguardando').style.display='none'
    const checkbox = document.getElementById('bordaRecheada')


})(); 

function fazerPedido() {
    document.getElementById('container').style.display=''
    
}

function getPedido () {
    let saborPizza = document.getElementById('selectSabor')
    let tamanhoPizza = document.getElementById('selectTamanho')
    let pizzaComBorda = document.getElementById('comBorda')

    let valueSaborPizza = saborPizza.options[saborPizza.selectedIndex].value;
    let valueTamanhoPizza = tamanhoPizza.options[tamanhoPizza.selectedIndex].value;
    let valuePizzaComBorda = pizzaComBorda.options[pizzaComBorda.selectedIndex].value;

    
    console.log(valueSaborPizza)
    console.log(valueTamanhoPizza)
    console.log(valuePizzaComBorda)

    
  
}
function toogleCheckBoxTrue () {
    if (toogleCheckBox == false) {
        toogleCheckBox = true
        document.getElementById('comBorda').style.display=''
    } else {
        toogleCheckBox = false
        document.getElementById('comBorda').style.display='none'
    }
}
function telaAguardando() {
    document.getElementById('container').style.display='none'
    document.getElementById('telaAguardando').style.display=''

}

function submit() {
    telaAguardando()
    getPedido()
}

