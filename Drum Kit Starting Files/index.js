'use strict'

const buttons=document.querySelectorAll('.drum');
const sounds={'w':'sounds/tom-1.mp3','a':'sounds/tom-2.mp3','s':'sounds/tom-3.mp3','d':'sounds/tom-1.mp3','j':'sounds/crash.mp3','k':'sounds/kick-bass.mp3','l':'sounds/snare.mp3'};
const keyList=['w','a','s','d','j','k','l'];
function soundSelector(event) {
    //if checks if key pressed is one of the required keys
    //its not nesseasry for buttons but its allows for both buttons and keys to be run though the same function
    if(keyList.includes(event)){
    //sounds[event] pulls the sounds from the sounds array for letters that pass the if statement
    const audio= new Audio(sounds[event]);
    audio.play();
    }}
//used forEach loop to attach my event listeners
buttons.forEach(button=>{
        button.addEventListener('click',function () {
        soundSelector(button.classList[0]);
        buttonAnimation(button.classList[0]);
    });
})
document.addEventListener('keydown',function (event) {
    soundSelector(event.key);
    buttonAnimation(event.key)
})
function buttonAnimation(currentKey) {
    const activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100)

}