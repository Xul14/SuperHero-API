'use strict'

import './routes.js'

const searchForm = document.querySelector('.menu_search');
let searchList = document.getElementById('search-list');

let activeTab = 1, allData;

const getInputValue = (event) => {
    event.preventDefault();
    let searchText = searchForm.search.value;
    fetchAllSuperHero(searchText);
}

searchForm.addEventListener('submit', getInputValue);

const fetchAllSuperHero = async (searchText) => {
    let url = `https://www.superheroapi.com/api.php/1299701917246334/search/${searchText}`;
    try {
        const response = await fetch(url);
        allData = await response.json();
        if (allData.response === 'success') {
            console.log(allData);
            showSearchList(allData.results);
        }
    } catch (error) {
        console.log(error);
    }
}

const showSearchList = (data) => {
    searchList.innerHTML = "";
    data.forEach(dataItem => {
        const divElem = document.createElement('div');
        divElem.classList.add('search-list-item');
        divElem.innerHTML = `
            <img src = "${dataItem.image.url ? dataItem.image.url : ""}" alt = "">
            <p data-id = "${dataItem.id}">${dataItem.name}</p>
        `;
        searchList.appendChild(divElem);
    });
}

searchForm.search.addEventListener('keyup', () => {
    if (searchForm.search.value.length > 1) {
        fetchAllSuperHero(searchForm.search.value);
    } else {
        searchList.innerHTML = "";
    }
});

searchList.addEventListener('click', (event) => {
    let searchId = event.target.dataset.id;
    console.log(searchId);
    let singleData = allData.results.filter(singleData => {
        return searchId === singleData.id;
    })
    getCharacterById(singleData);
    searchList.innerHTML = "";
});


const getCharacterById = (data) => {
    console.log(data);
    document.querySelector('.card_image').innerHTML = `
        <img src = "${data[0].image.url}">
    `;

    document.querySelector('.name_superhero').textContent = data[0].name


    //  document.querySelector('.name').textContent = data[0].name;
    // document.querySelector('.powerstats').innerHTML = `
    // <li>
    //     <div>
    //         <i class = "fa-solid fa-shield-halved"></i>
    //         <span>intelligence</span>
    //     </div>
    //     <span>${data[0].powerstats.intelligence}</span>
    // </li>
    // <li>
    //     <div>
    //         <i class = "fa-solid fa-shield-halved"></i>
    //         <span>strength</span>
    //     </div>
    //     <span>${data[0].powerstats.strength}</span>
    // </li>
    // <li>
    //     <div>
    //         <i class = "fa-solid fa-shield-halved"></i>
    //         <span>speed</span>
    //     </div>
    //     <span>${data[0].powerstats.speed}</span>
    // </li>
    // <li>
    //     <div>
    //         <i class = "fa-solid fa-shield-halved"></i>
    //         <span>durability</span>
    //     </div>
    //     <span>${data[0].powerstats.durability}</span>
    // </li>
    // <li>
    //     <div>
    //         <i class = "fa-solid fa-shield-halved"></i>
    //         <span>power</span>
    //     </div>
    //     <span>${data[0].powerstats.power}</span>
    // </li>
    // <li>
    //     <div>
    //         <i class = "fa-solid fa-shield-halved"></i>
    //         <span>combat</span>
    //     </div>
    //     <span>${data[0].powerstats.combat}</span>
    // </li>
    // `;

    document.querySelector('.container-biography').innerHTML = `
    <li>
        <span class="item-name">full name</span>
        <span class="item-desc">${data[0].biography['full-name']}</span>
    </li>
    <li>
        <span class="item-name">alert-egos</span>
        <span class="item-desc">${data[0].biography['alter-egos']}</span>
    </li>
    <li>
        <span class="item-name">aliases</span>
        <span class="item-desc">${data[0].biography['aliases']}</span>
    </li>
    <li>
        <span class="item-name">place-of-birth</span>
        <span class="item-desc">${data[0].biography['place-of-birth']}</span>
    </li>
    <li>
        <span class="item-name">first-apperance</span>
        <span class="item-desc">${data[0].biography['first-appearance']}</span>
    </li>
    <li>
        <span class="item-name">publisher</span>
        <span class="item-desc">${data[0].biography['publisher']}</span>
    </li>
    `;

    document.querySelector('.container-appearence').innerHTML = `
    <li>
        <span class="item-appearance">gender</span>
        <span class="appearance-desc">${data[0].appearance['gender']}</span>
    </li>
    <li>
        <span class="item-appearance">race</span>
        <span class="appearance-desc">${data[0].appearance['race']}</span>
    </li>
    <li>
        <span class="item-appearance">height</span>
        <span class="appearance-desc">${data[0].appearance['height'][0]}</span>
    </li>
    <li>
        <span class="item-appearance">weight</span> 
        <span class="appearance-desc">${data[0].appearance['weight'][0]}</span>
    </li>
    <li>
        <span class="item-appearance">eye-color</span>
        <span class="appearance-desc">${data[0].appearance['eye-color']}</span>
    </li>
    <li>
        <span class="item-appearance">hair-color</span>
        <span class="appearance-desc">${data[0].appearance['hair-color']}</span>
    </li>
    `;

    document.querySelector('.container-connections').innerHTML = `
    <li>
        <span>group--affiliation</span>
        <span>${data[0].connections['group-affiliation']}</span>
    </li>
    <li>
        <span>relatives</span>
        <span>${data[0].connections['relatives']}</span>
    </li>
    `;
}

