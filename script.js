




let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick= function(){
	if(mySong.paused){
	mySong.play();
	icon.src="media/pause.png";
} else{
	mySong.pause();
	icon.src="media/play.png";
}
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
	{
		name: "Boy with love",
		path: "music/boy with love.mp3",
		img: "img/Boy with luv.jpeg",
		singer: "- BTS"
	  },
	  {
		name: "Dynamite",
		path: "music/Dynamite.mp3",
		img: "img/Dynamite.jpeg",
		singer: "- BTS"
	  },
	  {
		name: "DNA",
		path: "music/DNA.mp3",
		img: "img/DNA.jpeg",
		singer: "- BTS"
	  },
	  {
		name: "Anpaman",
		path: "music/anpaman.mp3",
		img: "img/Anpaman.jpeg",
		singer: "- BTS"
	  },
   {
     name: "We are Bulletproof",
     path: "music/We are bulletproof.mp3",
     img: "img/we are bulletproof.jpeg",
     singer: "- BTS"
   },
   {
     name: "4 O' Clock",
     path: "music/4 O Clock.mp3",
     img: "img/4 o clock.jpeg",
     singer: "- RM & V"
   },
   {
     name: "Blue Side",
     path: "music/Blue Side by JHope.mp3",
     img: "img/Blue side.jpg",
     singer: "- JHope"
   },
   {
     name: "Butterfly",
     path: "music/Butterfly.mp3",
     img: "img/Butterfly.jpeg",
     singer: "-BTS"
   },
   {
     name: "Euphoria",
     path: "music/euphoria.mp3",
     img: "img/euphoria.jpeg",
     singer: "- BTS"
   },
   {
	name: "Jamais Vu",
	path: "music/Jamais VU.mp3",
	img: "img/jamais vu.jpeg",
	singer: "-BTS"
  },
  {
	name: "Mikrokosmos",
	path: "music/Mikrokosmos.mp3",
	img: "img/mikrokosmos.jpeg",
	singer: "-BTS"
  },
  {
	name: "Promise",
	path: "music/promise by jimm.mp3",
	img: "img/promise.jpeg",
	singer: "-Jimm"
  },
  {
	name: "Scenery",
	path: "music/Scenery by V .mp3",
	img: "img/Scenery.jpeg",
	singer: "- V"
  },
  {
	name: "Serendipity",
	path: "music/serendipity.mp3",
	img: "img/serendipity.jpeg",
	singer: "- BTS"
  },
  {
	name: "So far Away",
	path: "music/So far away .mp3",
	img: "img/so far away.jpeg",
	singer: "- Jin , Jungkook, Suga"
  },
  {
	name: "Spring Day",
	path: "music/spring day.mp3",
	img: "img/spring day.jpeg",
	singer: "- BTS"
  },
  {
	name: "Stay Gold",
	path: "music/Stay Gold  BTS.mp3",
	img: "img/stay gold.jpg",
	singer: "- BTS"
  },
  {
	name: "Still with You",
	path: "music/Still with You.mp3",
	img: "img/still with you.jpeg",
	singer: "- Jungkook"
  },
  {
	name: "Sweet Night",
	path: "music/Sweet night by V .mp3",
	img: "img/sweet night.jpeg",
	singer: "-V"
  },
  {
	name: "The Truth Untold",
	path: "music/The truth untold.mp3",
	img: "img/the truth untold.jpeg",
	singer: "- BTS"
  },
  {
	name: "Tokyo",
	path: "music/Tokyo by RM.mp3",
	img: "img/tokyo.jpeg",
	singer: "- RM"
  },
  {
	name: "Tonight",
	path: "music/Tonight by Jin.mp3",
	img: "img/tonight.jpeg",
	singer: "- Jin"
  },
  {
	name: "Winter Bear",
	path: "music/Winter Bear by V.mp3",
	img: "img/winter Bear.jpeg",
	singer: "- V"
  },
  {
	name: "Zero O Clock",
	path: "music/Zero O Clock .mp3",
	img: "img/Zero o clock.jpeg",
	singer: "- BTS"
  },
  {
	name: "Airplane Pt2",
	path: "music/airplane pt2.mp3",
	img: "img/Airplane pt2.jpeg",
	singer: "- BTS"
  },
 
  {
	name: "Best of me",
	path: "music/Best of me.mp3",
	img: "img/Best of me.jpeg",
	singer: "- BTS"
  },
  {
	name: "Blood sweat and tears",
	path: "music/Blood sweat and tears.mp3",
	img: "img/Blood sweat and tears.jpeg",
	singer: "- BTS"
  },
  {
	name: "Boy in luv",
	path: "music/boy in luv.mp3",
	img: "img/Boy in luv.jpeg",
	singer: "- BTS"
  },
 
  {
	name: "Boys with fun",
	path: "music/boys with fun.mp3",
	img: "img/Boyz with fun.jpeg",
	singer: "- BTS"
  },
  {
	name: "Danger",
	path: "music/danger.mp3",
	img: "img/danger.jpeg",
	singer: "- BTS"
  },
 
  {
	name: "Dope",
	path: "music/Dope.mp3",
	img: "img/Dope.jpeg",
	singer: "- BTS"
  },
 
  {
	name: "Fake love",
	path: "music/Fake love.mp3",
	img: "img/Fake love.jpeg",
	singer: "- BTS"
  },
  {
	name: "Fire",
	path: "music/Fire.mp3",
	img: "img/Fire.jpeg",
	singer: "- BTS"
  },
  {
	name: "Friends",
	path: "music/friends.mp3",
	img: "img/friends.jpeg",
	singer: "- BTS"
  },
  {
	name: "Go go",
	path: "music/Go go.mp3",
	img: "img/Go go.jpeg",
	singer: "- BTS"
  },
  {
	name: "Home",
	path: "music/Home.mp3",
	img: "img/Home.jpeg",
	singer: "- BTS"
  },
  {
	name: "I need you",
	path: "music/I need you.mp3",
	img: "img/I need you.jpeg",
	singer: "- BTS"
  },
  {
	name: "Idol",
	path: "music/Idol.mp3",
	img: "img/Idol.jpeg",
	singer: "- BTS"
  },
  {
	name: "Jamais Vu",
	path: "music/Jamais Vu.mp3",
	img: "img/Jamais Vu.jpeg",
	singer: "- BTS"
  },
  {
	name: "Jump",
	path: "music/jump.mp3",
	img: "img/jump.jfif",
	singer: "- BTS"
  },
  {
	name: "Make it right",
	path: "music/Make it right.mp3",
	img: "img/Make it right.jpeg",
	singer: "- BTS"
  },
  {
	name: "Mic drop",
	path: "music/Mic drop.mp3",
	img: "img/Mic drop.jpeg",
	singer: "- BTS"
  },
  {
	name: "No more dream",
	path: "music/no more dream.mp3",
	img: "img/no more dream.jpeg",
	singer: "- BTS"
  },
  {
	name: "no",
	path: "music/no.mp3",
	img: "img/no.jpeg",
	singer: "- BTS"
  },
  {
	name: "Not Today",
	path: "music/Not Today.mp3",
	img: "img/Not Today.jpeg",
	singer: "- BTS"
  },
  {
	name: "ON",
	path: "music/on.mp3",
	img: "img/on.jpeg",
	singer: "- BTS"
  },
  {
	name: "Pied Piper",
	path: "music/Pied Piper.mp3",
	img: "img/Pied Piper.jpeg",
	singer: "- BTS"
  },
  {
	name: "Run",
	path: "music/run.mp3",
	img: "img/run.jpeg",
	singer: "- BTS"
  },
  {
	name: "Save me",
	path: "music/Save me.mp3",
	img: "img/Save me.jpeg",
	singer: "- BTS"
  },
  {
	name: "Silver spoon",
	path: "music/silver spoon.mp3",
	img: "img/silver spoon.jpeg",
	singer: "- BTS"
  },
  {
	name: "So what",
	path: "music/So what.mp3",
	img: "img/So what.jpeg",
	singer: "- BTS"
  },
 
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
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


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
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
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
		
     }

	 