const cards=document.querySelectorAll(".mood-cards");
const playlist=document.getElementById("playlist");
const toggleBtn=document.getElementById("themeToggle");


toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        toggleBtn.innerText="Light Mode";
    }else{
        toggleBtn.innerText="Dark Mode";
    }
});
 
const playlists={
    Happy:[
        "I Like Me Better- LAUV",
        "Senorita- Camila Cabello",
        "Perfect -One Direction",
        "Girls Like You- Maroon 5",
        "What Makes You Beautifull- One Direction",
        "Havana - Camila Cabello",
        "Watermelon Sugar- Harry Style",
        "Closer- The Chainsmokers",
        "Peaches- Justin Biber",
        "Lover- Taylor Swift",

    ],

    Workout:[
        "Rasputin- Majestic,Boney M.",
        "Blinding Lights- The Weeknd",
        "Bones- Imagine Dragons",
        "Bad Habits- Ed sheeran",
        "Only Girls- Rihanna",
        "Levitating - Dua lipa",
        "Yellow- Coldplay",
        "Animals- Maroon 5",
        "Never Say Never- Justin Biber ",
        "Who Says- Selena Gomez",
    

    ],




    Sad:[
        "Dancing With Your Ghost- Sasha Alex Sloan",
        "Drunk text- Henry Moodie",
        "In The Stars- Benson Boone",
        "Love Is Gone- SLANDER , Dylan Mattew",
        "Be Alright- Dean Lewis",
        "Somewhere That I Used To Know- Gotye",
        "I love You,I hate you- Gnash",
        "Happier - Olivia Rodrigo",
        "Love Youself- Justin Biber",
        "Drivers License- Olivia Rodrigo",


    ],


    Chill:[
        "Let Her go- Passenger",
        "The Night We Met- Lord Huron",
        "Until I Found You- Stephen Sanchez",
        "Falling - Harry Style",
        "I Wanna Be yours- Arctic Monkeys",
        "Say You Won't let Go- James Arthur",
        "August- Taylor Swift",
        "Lovely- Billie Eilish",
        "Stitches- Shawn Mendes",
        "Baby- Justin Bieber",


         
    ],


    Focus:[
        "Night Owl- Galimatias",
        "Tadow- Masego & FKJ",
        "Sunset Lover- Petit Biscuit",
        "Better - Khalid",
        "Dawn- Tony Anderson",
        "That's So True- Gracie Abrams",
        "You Broke Me First - Tate McRae",
        "Scars To Your Beautiful- Alessia Cara",
        "Ocean Eyes- Billie Eilish",


    ],

    "Its Complicated":[
        "It's Ok If You Forget Me- Alessia Cara",
        "Talking to the Moon- Bruno Mars",
        "See You Again- Charlie Puth",
        "Treat You Better- shawn Mendes",
        "Lose You To Love Me- Selena Gomez",
        "Antihero- Taylor Swift",
        "Story of My Life- One Direction",
        "Night Changes- One Direction",
        "Right person Wrong time- Henry Moodie",


    ],

    



};

cards.forEach(card =>{
    card.addEventListener("click",()=>{
        const mood=card.dataset.mood;
        const songs=playlists[mood];
        console.log(songs);
        playlist.innerHTML="";

        if(!songs||songs.length===0){
            playlist.innerText="<p>No songs available</p>";

            return;
        }

        const shuffled=[...songs].sort(()=>Math.random()-0.5);

        const selected=shuffled.slice(0,3);
        selected.forEach(song=>{
            playlist.innerHTML += `<p> ${song}</p>`;
        });

        
    });
});