
'use strict'

import { getCharacterSearchName } from "../js/api.js";

const searchForm = document.querySelector('.menu_search')
let searchList = document.getElementById('search-list')
let searchCharacter

const getInputValue = async (event) => {
    event.preventDefault()
    let searchText = await searchForm.search.value

    fetchAllSuperHero(searchText)
}

searchForm.addEventListener('submit', getInputValue)

const fetchAllSuperHero = async (searchText) => {
    searchCharacter = await getCharacterSearchName(searchText)

    if (searchCharacter.response === 'success') {

        showSearchList(searchCharacter.results)
        console.log(searchCharacter);

    } else {

        return false
    }
}

const showSearchList = (data) => {
    searchList.innerHTML = ""

    data.forEach(dataItem => {
        const divElem = document.createElement('div')
        divElem.classList.add('search-list-item')

        divElem.innerHTML = `
    <img src = "${dataItem.image.url}" alt = "">
    <p>${dataItem.name}</p>
    `
        searchList.appendChild(divElem)

    });
}

searchForm.search.addEventListener('keyup', () => {
    if (searchForm.search.value.length > 1) {
        fetchAllSuperHero(searchForm.search.value);
    } else {
        searchList.innerHTML = "";
    }
})

// searchList.addEventListener('click', (event) => {
//     let searchId = event.target.dataset.id;
//     let singleData = searchCharacter.results.filter(singleData => {
//         return searchId === singleData.id;
//     })
//     // showSuperheroDetails(singleData);
//     searchList.innerHTML = "";
// });
