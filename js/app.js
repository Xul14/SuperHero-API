'use strict'

import './routes.js'
import { getCharacterById } from '../js/api.js'

const getCharacter = await getCharacterById(99)

const criarCard = (character) => {

    const containerCard = document.createElement('div')
    containerCard.classList.add('card_container')

    const cardImage = document.createElement('div')
    cardImage.classList.add('card_image')

    const imageCharacter = document.createElement('img')
    imageCharacter.classList.add('image')
    imageCharacter.src = character.image.url

    const cardInfos = document.createElement('div')
    cardInfos.classList.add('card_infos')

    const nameCharacter = document.createElement('h1')
    nameCharacter.classList.add('name_superhero')
    nameCharacter.textContent = character.name


    const pagesWebComponents = document.createElement('div')
    pagesWebComponents.classList.add('pages')

    const btnPages = document.createElement('button')
    btnPages.classList.add('pages_infos')

    //PAGE POWERSTATS
    const pagePowerstats = document.createElement('a')
    pagePowerstats.classList.add('pages_infos_powerstats')
    pagePowerstats.innerHTML = 'powerstats'

    const containerPowerstats = document.createElement('div')
    containerPowerstats.classList.add('container-powerstats')

    const powerstatsNames = document.createElement('div')
    powerstatsNames.classList.add('stat-names')

    //PAGE BIOGRAPHY
    const pageBio = document.createElement('a')
    pageBio.classList.add('pages_infos_biography')
    pageBio.innerHTML = 'biography'


    //PAGE APPEARANCE
    const pageAppearance = document.createElement('a')
    pageAppearance.classList.add('pages_infos_appearance')
    pageAppearance.innerHTML = 'appearance'

    //PAGE CONNECTIONS
    const pageConnections = document.createElement('a')
    pageConnections.classList.add('pages_infos_connections')
    pageConnections.innerHTML = 'connections'


    console.log(character);

    containerCard.append(cardImage, cardInfos)
    cardImage.appendChild(imageCharacter)
    cardInfos.append(nameCharacter, pagesWebComponents)
    pagesWebComponents.appendChild(btnPages)
    btnPages.append(pagePowerstats, pageBio, pageAppearance, pageConnections)

    return containerCard

}

const loadCardCharacters = () => {
    const container = document.getElementById('card_container')
    const character = criarCard(getCharacter)

    container.replaceChildren(character)

}

loadCardCharacters()