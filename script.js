'user strict'
const numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
}
const nameFilms1=prompt('Один из последних просмотренных фильмов?','');
const ratingFilms1=prompt('На сколько оцените его?','');
const nameFilms2=prompt('Один из последних просмотренных фильмов?','');
const ratingFilms2=prompt('На сколько оцените его?','');
personalMovieDB.movies[nameFilms1]=ratingFilms1;
personalMovieDB.movies[nameFilms2]=ratingFilms2;
console.log(personalMovieDB);