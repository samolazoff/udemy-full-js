'user strict'
const numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
}
for (let i = 0; i < 2; i++) {
    const nameFilms=prompt('Один из последних просмотренных фильмов?',''),
          ratingFilms=prompt('На сколько оцените его?','');
    if (nameFilms!=null&&ratingFilms!=null&&nameFilms!=''&&ratingFilms!=''&&nameFilms.length<50) {
        personalMovieDB.movies[nameFilms]=ratingFilms;
    } else {
        i--;
    }
}
if (personalMovieDB.count<10) {
    console.log("Просмотрено довольно мало фильмов");
} else {if (personalMovieDB.count>=10&&personalMovieDB.count<=30) {
    console.log("Вы классический зритель");
} else {
    console.log("Вы киноман");
    }    
}
console.log(personalMovieDB);