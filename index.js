import {createCharacterCard} from './components/card/card.js';
console.clear();
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = document.querySelector('[data-js="search-bar__input"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

// const url = `https://rickandmortyapi.com/api/character?page=${page}`;

async function fetchCharacters() {
  cardContainer.innerHTML = '';
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`,
    );

    if (response.ok) {
      const data = await response.json();
      const result = data.results;
      let maxPage = data.info.pages;
      console.log(maxPage)

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



nextButton.addEventListener('click', async () => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`,
  );
  const data = await response.json();
      let maxPage = data.info.pages;
   if(page != maxPage){
  page++;
  fetchCharacters();}
});

prevButton.addEventListener('click', () => {
  if(page>1){
  page--;
  fetchCharacters();}
  console.log(maxPage)
});

searchBar.addEventListener('input', () => {
  searchQuery = searchBarInput.value;
  console.log(searchQuery);
  fetchCharacters();
});
