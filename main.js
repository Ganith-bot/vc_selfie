SpeechRecognition = window.webkitSpeechRecognition;

var recognition =  new SpeechRecognition();

function start101(){
    document.getElementById("text_of_voice").innerHTML="";
    recognition.start();
    }

recognition.onresult = function run (event) {
    console.log(event);

    var content = event.results[0] [0].transcript;
    console.log(content);

    document.getElementById("text_of_voice").innerHTML=content;
}