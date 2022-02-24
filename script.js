const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')
const repair = document.getElementById('repair')

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn (){
    if ( !isLampBroken() ){
        lamp.src = './img/ligada.jpg'
        document.body.style.background = 'white'

    }
}

function lampOff (){
    if ( !isLampBroken() ){
        lamp.src = './img/desligada.jpg'
        document.body.style.background = 'black'
    }
    }

function toRepair (){
    if ( isLampBroken() ){
        lamp.src = './img/desligada.jpg'
    }
}

function lampBroken (){
    lamp.src = './img/quebrada.jpg'
    document.body.style.background = 'black'
}

turnOn.addEventListener ('click', lampOn)
turnOff.addEventListener ('click', lampOff)
repair.addEventListener ('click', toRepair)

lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampBroken)
