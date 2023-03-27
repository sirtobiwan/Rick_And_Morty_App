import {createCharacterCard} from './components/card/card.js';
console.clear();
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = '';

//let url = `https://rickandmortyapi.com/api/character?page=${page}`;

async function fetchCharacters() {
  cardContainer.innerHTML = '';
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    );

    if (response.ok) {
      const data = await response.json();
      const result = data.results;
      let maxPage = data.info.pages;

      result.forEach(createCharacterCard);
      pagination.innerHTML = `${page} / ${maxPage}`;
    } else {
      console.error('Bad Response');
    }
  } catch (error) {
    console.error('An Error occurred');
  }
}
fetchCharacters();

nextButton.addEventListener('click', () => {
  page++;
  //console.log(response);
  fetchCharacters();
});
prevButton.addEventListener('click', () => {
  page--;
  //console.log(response);
  fetchCharacters();
});
