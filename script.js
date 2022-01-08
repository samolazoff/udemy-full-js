'user strict'
const personalMovieDB={
    count: 0,
    movies: {},
    actors: {},
    generes: [],
    privat: false,
    discoverAmountFilms:function() {
        while(this.count==0
            ||this.count==null
            ||isNaN (this.count)){
            this.count=+prompt('Сколько фильмов вы уже посмотрели?','');
        }
        if (personalMovieDB.count<10) {
            console.log("Просмотрено довольно мало фильмов");
        } else {if (personalMovieDB.count>=10&&personalMovieDB.count<=30) {
            console.log("Вы классический зритель");
        } else {
            console.log("Вы киноман");
            }    
        }
    },
    showMyDB:function(){
        console.log(this.privat?true:this);
    },
    writeYourGenres:function() {
        for (let i = 0; i < 3; i++) {
            let genre=prompt(`Ваш любимый жанр под номером ${i+1}`);
            if(genre==null||genre===''){
                i--;
            }else{
                this.generes.push(genre);
            }
        }
        this.generes.forEach(element => {
            console.log(`Любимый жанр №${this.generes.indexOf(element)+1} - это ${element}`);
        });
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const nameFilms=prompt('Один из последних просмотренных фильмов?',''),
                  ratingFilms=prompt('На сколько оцените его?','');
            if (nameFilms!=null&&ratingFilms!=null&&nameFilms!=''&&ratingFilms!=''&&nameFilms.length<50) {
                this.movies[nameFilms]=ratingFilms;
            } else {
                i--;
            }
        }
    },
    toggleVisibleMyDB: function(){
        if(this.privat){
            this.privat=false;
        }else{
            this.privat=true;
        }
    },
    start: function(){
        this.discoverAmountFilms();
        this.rememberMyFilms();
        this.writeYourGenres();
        this.showMyDB();
    }
}
