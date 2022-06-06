function Album(title, artist, year) {
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.play = function () {
    console.log(
      `playing ${title}, auther name is  ${artist} and in year ${year}`
    );
  };
}
let darkside = new Album("Dark Side Of The cheese", "Pink mouse", 1971);
darkside.play();
