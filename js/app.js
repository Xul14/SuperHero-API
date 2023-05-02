'use strict'

import './routes.js'

const searchForm = document.querySelector('.menu_search')
let searchList = document.getElementById('search-list')

let activeTab = 1, allData;

// const init = () => {
//     // showActiveTabBody();
//     showActiveTabHead();
// }

// const showActiveTabHead = () => allTabsHead[activeTab - 1].classList.add('active-tab');

// const showActiveTabBody = () => {
//     hideAllTabBody();
//     allTabsBody[activeTab - 1].classList.add('show-tab');
// }

// const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
// const hideAllTabHead = () => allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove('active-tab'));

// even listeners
// window.addEventListener('DOMContentLoaded', () => init());
// button event listeners
// allTabsHead.forEach(singleTabHead => {
//     singleTabHead.addEventListener('click', () => {
//         hideAllTabHead();
//         activeTab = singleTabHead.dataset.id;
//         showActiveTabHead();
//         showActiveTabBody();
//     });
// });

const getInputValue = (event) => {
  event.preventDefault()
  let searchText = searchForm.search.value
  console.log(searchText);
  fetchAllSuperHero(searchText)
}

searchForm.addEventListener('submit', getInputValue)

const fetchAllSuperHero = async (searchText) => {
  let url = `https://www.superheroapi.com/api.php/1299701917246334/search/${searchText}`

  try {
    const response = await fetch(url)
    allData = await response.json()

    if (allData.response === 'success') {
      showSearchList(allData.results)
      console.log(allData);
    }
  } catch (error) {
    console.log('error');
  }
}

const showSearchList = (data) => {
  searchList.innerHTML = ""

  data.forEach(dataItem => {
    const divElem = document.createElement('div')
    divElem.classList.add('search-list-item')
    divElem.innerHTML = `
    <img src = "${dataItem.image.url ? dataItem.image.url : ""}" alt = "">
    <p data-id = "${dataItem.id}">${dataItem.name}</p>
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

searchList.addEventListener('click', (event) => {
  let searchId = event.target.dataset.id;
  let singleData = allData.results.filter(singleData => {
      return searchId === singleData.id;
  })
  showSuperheroDetails(singleData);
  searchList.innerHTML = "";
});
