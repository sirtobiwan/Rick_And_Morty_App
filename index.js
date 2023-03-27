import {createCharacterCard} from './components/card/card.js';

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
const maxPage = 1;
const page = 1;
const searchQuery = '';

const url = 'https://rickandmortyapi.com/api/character';

async function fetchCharacters() {
  cardContainer.innerHTML = '';
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const result = data.results;
      console.log(result);
      result.forEach(createCharacterCard);
    } else {
      console.error('Bad Response');
    }
  } catch (error) {
    console.error('An Error occurred');
  }
}
fetchCharacters();
