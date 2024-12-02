let btn =  document.getElementById("btn");
let content = document.getElementById("content");
let voice = document.getElementById("voice");


function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume =2;
    text_speak.lang ="hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day = new Date();
    let hour = day.getHours();
    if(hour>=0 && hour<12){
        speak("Good Morning  Sir");
    }
    else if(hour>=12 && hour<16){
        speak("Good Afternoon sir");
    }
    else{
        speak("Good Evening Sir");
    }
}

window.addEventListener('load',()=>{
    wishMe();
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new speechRecognition();
recognition.onresult = (event)=>{
   let currIndex = event.resultIndex;
  let transcript = event.results[currIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
    console.log(event);

}

btn.addEventListener('click',()=>{
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
})



function takeCommand(message){
    voice.style.display = "none";
    btn.style.display = "flex";
   
    if(message.includes("hello")){
        speak("hello sir, what can i help you");
    }
    else if(message.includes("who are you?")){
        speak("i am virtual assistance , created by shaan sir");
    }
    else if(message.includes("i like you")){
        speak("sakal dekha hai bhosri wala nika yaha se")
    }
    else if(message.includes("i love you")){
        speak("sorry i have boyfriend");
    }
    else if(message.includes("alexa, who is sameer")){
        speak("smaeer is your best friend");
    }
    else  if(message.includes("open youtube")){
        speak("opening youtube....");
        window.open("https://www.youtube.com/","_blank");
    }
    else if(message.includes("play my fav song")){
        speak("command accepted sir..");
        window.open("https://youtu.be/4Jp_6DnWh10?si=gO06_X0-D561mwgQ","_blank");
    }
    else if(message.includes("who is nasrin?")){
        speak("nasrin kali maaaii hai....");
    }
    else  if(message.includes("who is danish?")){
        speak("dansih ")
    }
    else if(message.includes("play song")){
        speak("okey sir...");
        window.open("https://youtu.be/5KKQXViMcWM?si=uKLR8w2PIrq70yeP","_blank");
    }
    else if(message.includes("search apna college channel in youtube")){
        speak("command accepted sir");
        window.open("https://youtube.com/@apnacollegeofficial?si=EEdy8pijftQQrxQv","_blank");
    }
    else if(message.includes("open facebook")){
        speak("okey sir..");
        window.open("https://www.facebook.com/","_blank");
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
        speak(time);
    }
    else  if(message.includes("open instagram")){
        speak("okey sir...");
        window.open("https://www.instagram.com/","_blank");
    }
    else{
        speak(`this is what i found on internet regarding ${message}`);
         window.open(`https://www.google.com/search?q=${message}`);
    }
}


