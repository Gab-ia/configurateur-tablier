const optionsTissu = [
    { couleur: 'jaune', code: '#e2d047', image: './images/option-1-jaune.png', price: 12.30 },
    { couleur: 'orange', code: '#f1722f', image: './images/option-1-orange.png', price: 12.00 },
    { couleur: 'violet', code: '#bd3ad8', image: './images/option-1-violet.png', price: 12.10 }
];
const optionsPoche = [
    { couleur: 'bleu', code: '#11119e', image: './images/option-2-bleu.png', price: 8.30 },
    { couleur: 'fuchsia', code: '#991157', image: './images/option-2-fuchsia.png', price: 8.50 },
    { couleur: 'rouge', code: '#d31431', image: './images/option-2-rouge.png', price: 8.10 },
    { couleur: 'vert', code: '#a1cc16', image: './images/option-2-vert.png', price: 8.75 }
];
const couleurText = [
    { couleur: 'blanc', code: '#FFFFFF' },
    { couleur: 'noir', code: '#000000' },
    { couleur: 'bleu', code: '#11119e' },
    { couleur: 'fuchsia', code: '#991157' },
    { couleur: 'rouge', code: '#d31431' },
    { couleur: 'vert', code: '#a1cc16' },
    { couleur: 'jaune', code: '#e2d047' },
    { couleur: 'orange', code: '#f1722f' }
];

let tissu = document.getElementById('tissu')
let poche = document.getElementById('poche')
let optionTissuImage = document.getElementById('optionTissuImage')
let optionPocheImage = document.getElementById('optionPocheImage')

let selectedTissu = 'violet';
let selectedPoche = 'rouge';

let price = document.getElementById('price')
let priceTissu = 12.10
let pricePoche = 8.10
let priceLettre = 1.80
let totalLettre = 0
let totalPrice = priceTissu + pricePoche + totalLettre
price.textContent = `${totalPrice.toFixed(2)} €`

let textePerso = document.getElementById('textePerso')
let selectedText = 'noir'
let radioYes = document.getElementById('UseText1')
let radioNo = document.getElementById('UseText2')
let colorDisplay = document.getElementById('textColorOptions')
let textDisplay = document.getElementById('customText')
let customText = ''

// Initialisation des boutons Radio

function checkRadio() {
if(radioYes.checked) {
    colorDisplay.style.visibility ='visible'
    textDisplay.style.visibility = 'visible'
    textePerso.style.visibility = 'visible'
    textDisplay.value = ''
    textePerso.textContent = 'Votre texte ici...'

    textDisplay.addEventListener('input', ()=> {
        textePerso.textContent = `${textDisplay.value}`
        totalLettre = textDisplay.value.replace(/\s+/g, '').length
    
        priceCalc ()
    })

    priceCalc ()

} else if (radioNo.checked) {
    colorDisplay.style.visibility ='hidden'
    textDisplay.style.visibility = 'hidden'
    textePerso.style.visibility = 'hidden'
    totalLettre = 0

    priceCalc ()

}}

// Calcul du prix dynamique

function priceCalc () {
    totalPrice = priceTissu + pricePoche + totalLettre
    price.textContent = `${totalPrice.toFixed(2)} €`
}

window.addEventListener("load", () => {
    checkRadio()
})

radioYes.addEventListener('change', checkRadio)

radioNo.addEventListener('change', checkRadio)

// Choix de couleur du tissu

optionsTissu.forEach(optiontissu => {

    let tissuBtn = document.createElement('div')
    let displayTissu = document.getElementById('displayTissu')

    tissuBtn.classList.add('ColorRound', 'optionTissu')
    tissuBtn.setAttribute('id', `tissu${optiontissu.couleur}`)
    tissuBtn.style.backgroundColor = `${optiontissu.code}`

    optionTissuImage.src = `./images/option-1-${selectedTissu}.png`

    tissuBtn.addEventListener('click', () => {

        document.querySelectorAll('.optionTissu').forEach(btn => { btn.classList.remove('selectedColor') })

        selectedTissu = optiontissu.couleur
        tissuBtn.classList.add('selectedColor')
        optionTissuImage.src = `./images/option-1-${selectedTissu}.png`
        displayTissu.textContent = `${selectedTissu}`

        priceTissu = optiontissu.price

        priceCalc ()

    })

    tissu.appendChild(tissuBtn)

})

document.getElementById('tissuviolet').classList.add('selectedColor')

// Choix de couleur de la poche

optionsPoche.forEach(optionpoche => {

    let pocheBtn = document.createElement('div')
    let displayPoche = document.getElementById('displayPoche')

    pocheBtn.classList.add('ColorRound', 'optionPoche')
    pocheBtn.setAttribute('id', `poche${optionpoche.couleur}`)
    pocheBtn.style.backgroundColor = `${optionpoche.code}`

    optionPocheImage.src = `./images/option-2-${selectedPoche}.png`

    pocheBtn.addEventListener('click', () => {

        document.querySelectorAll('.optionPoche').forEach(btn => { btn.classList.remove('selectedColor') })

        selectedPoche = optionpoche.couleur
        pocheBtn.classList.add('selectedColor')
        optionPocheImage.src = `./images/option-2-${selectedPoche}.png`
        displayPoche.textContent = `${selectedPoche}`

        pricePoche = optionpoche.price

        priceCalc ()

    })

    poche.appendChild(pocheBtn)

})

document.getElementById('pocherouge').classList.add('selectedColor')

//Choix de couleur du texte

couleurText.forEach(optiontext => {
    
    let textBtn = document.createElement('div')

    textBtn.classList.add('ColorRound', 'optionTexte')
    textBtn.setAttribute('id', `texte${optiontext.couleur}`)
    textBtn.style.backgroundColor = `${optiontext.code}`

    textBtn.addEventListener('click', () => {

        document.querySelectorAll('.optionTexte').forEach(btn => { btn.classList.remove('selectedColor') })

        selectedText = optiontext.couleur
        textBtn.classList.add('selectedColor')

        textePerso.style.color = `${optiontext.code}`

        priceCalc ()

    })

    colorDisplay.appendChild(textBtn)
})

document.getElementById('textenoir').classList.add('selectedColor')
