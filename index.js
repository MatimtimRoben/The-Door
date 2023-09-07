function knockDoor(){
    document.getElementById("imgStatus").src = "close.png";
    document.getElementById("doorStatus").innerHTML = "Knock knock knock!";
    document.getElementById('1mp3File').play();
}

function openDoor(){
    document.getElementById("imgStatus").src = "R.png";
    document.getElementById("doorStatus").innerHTML = "Why do you open the door?";
    document.getElementById('2mp3File').play();
}