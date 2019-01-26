const fs = require('fs');
const ytdl = require('ytdl-core');
const ytlist = require('youtube-playlist');

function  download(url,name) {
    for(let i=0;i < 4; i++) {
        ytdl(url).pipe(fs.createWriteStream(name));
        console.log('Downloading ' + name);
    }
}

let names = [];
let urls = [];
const url = 'https://www.youtube.com/playlist?list=PLIBjFaUoJJ92WI169JuPoII5H0yMYKdGv'
ytlist(url, 'url').then(res => {
    urls = res.data.playlist;
    // console.log(res.data.playlist);
    /* Array
    [ 'https://youtube.com/watch?v=bgU7FeiWKzc',
    'https://youtube.com/watch?v=3PUVr8jFMGg',
    'https://youtube.com/watch?v=3pXVHRT-amw',
    'https://youtube.com/watch?v=KOVc5o5kURE' ]
     */
});
ytlist(url, 'name').then(res => {
    // console.log(res);
    names = res.data.playlist;
    /*
    { data:
     { playlist:
        [ 'Singleton Design Pattern - Beau teaches JavaScript',
          'Observer Design Pattern - Beau teaches JavaScript',
          'Module Design Pattern - Beau teaches JavaScript',
          'Mediator Design Pattern - Beau teaches JavaScript' ] } }
     */
});
setTimeout(() => {
    for (let i = 55; i < 58; i++) {
        // console.log(i + `: ${names[i-1]} : ${urls[i-1]}`);
        download(urls[i-1],names[i-1]);
    }}, 3000);


