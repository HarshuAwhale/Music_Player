let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// create a audio element
let track = document.createElement('audio');

// all song list
let All_song = [
    {
        name: "Let_Me_Down_Slowly",
        path: "../song/song1.mp3",
        img: "../img/img1.jpg",
        singer: "Alec_Benjamin"
    },
    {
        name: "Position",
        path: "../song/song2.mp3",
        img: "../img/img2.jpg",
        singer: "Ariana Grande"
    },
    {
        name: "Into_Your_Arms_Remix",
        path: "../song/song3.mp3",
        img: "../img/img3.jpg",
        singer: "Ava Max"
    },
    {
        name: "Lovely",
        path: "../song/song4.mp3",
        img: "../img/img4.jpg",
        singer: "Billie_Eilish_Khalid"
    },
    {
        name: "Love_To_Hate_Me",
        path: "../song/song5.mp3",
        img: "../img/img5.jpg",
        singer: "BlakPink"
    },
    {
        name: "House_Of_Cards",
        path: "../song/song6.mp3",
        img: "../img/img6.jpg",
        singer: "BTS_(방탄소년단)"
    },
    {
        name: "Promise",
        path: "../song/song7.mp3",
        img: "../img/img7.jpg",
        singer: "BTS_(방탄소년단)_JIMIN"
    },
    {
        name: "Life_Goes_On",
        path: "../song/song8.mp3",
        img: "../img/img8.jpg",
        singer: "BTS_(방탄소년단)"
    },
    {
        name: "Attention",
        path: "../song/song9.mp3",
        img: "../img/img9.jpg",
        singer: "Charlie_Puth"
    },
    {
        name: "We_Don't_Talk_Anymore",
        path: "../song/song10.mp3",
        img: "../img/img10.jpg",
        singer: "Charlie_Puth"
    },
    {
        name: "KISS_AND_MAKE_UP",
        path: "../song/song11.mp3",
        img: "../img/img11.jpg",
        singer: "Dua_Lipa_BLAKPINK"
    },
    {
        name: "_Perfect",
        path: "../song/song12.mp3",
        img: "../img/img12.jpg",
        singer: "Ed_Sheeran"
    },
    {
        name: "_Euphoria",
        path: "../song/song13.mp3",
        img: "../img/img13.jpg",
        singer: "Jungkook_(BTS_방탄소년단)"
    },
    {
        name: "_LALISA_",
        path: "../song/song14.mp3",
        img: "../img/img14.jpg",
        singer: "LISA_(BLACKPINK)"
    },
    {
        name: "MONEY",
        path: "../song/song15.mp3",
        img: "../img/img15.jpg",
        singer: "LISA_(BLACKPINK)"
    },
    {
        name: "love_nwantiti",
        path: "../song/song16.mp3",
        img: "../img/img16.jpg",
        singer: "CKay(feat_Dj_Yo!_&_AX'EL)"
    }
];

// all function


// function load the track
function load_track(index_no){
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();


    total.innerHTML = All_song.length;
    present.innerHTML = index_no +1;
    timer = setInterval(range_slider , 1000);
}
load_track(index_no);


// mute sound
function mute_sound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}

// reset song slider
function reset_slider(){
    slider.value = 0;
}

// checking the song is playing or not
function justplay(){
    if(playing_song==false){
        playsong();
        }else{
        pausesong();
    }
}


// play song
    function playsong(){
        track.play();
        playing_song = true;
        play.innerHTML = '<i class="fa fa-pause"></i>';
    }

// pause song
     function pausesong(){
        track.pause();
        playing_song = false;
        play.innerHTML = '<i class="fa fa-play"></i>';
    }


// next song
function next_song(){
    if(index_no < All_song.length - 1){
       index_no += 1;
       load_track(index_no);
       playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

// previous song
function previous_song(){
    if(index_no > 0){
       index_no -= 1;
       load_track(index_no);
       playsong();
    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}

// character volume
function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

// change slider position
function change_duration(){
    slider_position = track_duration * (slider.value / 100);
    track.currentTime = slider_position;
}


// autoplay function
function autoplay_switch(){
    if(autoplay==1){
        autoplay=0;
        auto_play.style.background = "rgba(255, 255, 255, 0.2)";
    }else{
        autoplay = 1;
        auto_play.style.background = "#FF8A65";
    }
}

function range_slider(){
    let position = 0;

    // update slider position
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

// function will run when the song is over
if(track.ended){
    play.innerHTML = '<i class="fa fa-play"></i>';
    if(autoplay==1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }
}
}