'use strict'

import './routes.js'
import { getCharacterById } from '../js/api.js'

const getCharacter = await getCharacterById(18)

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
    // pagePowerstats.href = "../pages/powerstats.html"

    // const containerPowerstats = document.createElement('div')
    // containerPowerstats.classList.add('container-powerstats')
   

    // const powerstatsNames = document.createElement('div')
    // powerstatsNames.classList.add('stat-names')

    // const combat = document.createElement('span')
    // combat.classList.add('combat')
    // combat.innerHTML = 'combat'

    // const durability = document.createElement('span')
    // durability.classList.add('durability')
    // durability.innerHTML = 'durability'

    // const intelligence = document.createElement('span')
    // intelligence.classList.add('intelligence')
    // intelligence.innerHTML = 'intelligence'

    // const power = document.createElement('span')
    // power.classList.add('power')
    // power.innerHTML = 'power'

    // const speed = document.createElement('span')
    // speed.classList.add('speed')
    // speed.innerHTML = 'speed'

    // const strength = document.createElement('span')
    // strength.classList.add('strength')
    // strength.innerHTML = 'strength'

    console.log(character);

    containerCard.append(cardImage, cardInfos)
    cardImage.appendChild(imageCharacter)
    cardInfos.append(nameCharacter, pagesWebComponents)
    pagesWebComponents.appendChild(btnPages)
    btnPages.append(pagePowerstats, pageBio, pageAppearance, pageConnections)
    // pagePowerstats.appendChild(containerPowerstats)
    // pageBio.appendChild(containerBio)
    // pageAppearance.appendChild(containerAppearance)
    // pageConnections.appendChild(containerConnections)
    // // containerPowerstats.appendChild(powerstatsNames)
    // powerstatsNames.append(combat, durability, intelligence, power, speed, strength)

    return containerCard

}

const loadCardCharacters = () => {
    const container = document.getElementById('card_container')
    const character = criarCard(getCharacter)

    container.replaceChildren(character)

}

loadCardCharacters()

