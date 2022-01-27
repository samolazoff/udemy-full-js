'use strict';

const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

const adv=document.querySelectorAll('.promo__adv img');
adv.forEach(elm=>{
    elm.remove();
});
const genre=document.querySelector('.promo__genre');
genre.innerHTML='Драма';
const bg=document.querySelector('.promo__bg');
bg.style.backgroundImage = 'url("img/bg.jpg")';
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});