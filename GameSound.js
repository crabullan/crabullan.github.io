//memulai music
function playSound(){
    BackgroundSound.loop()
}
//menghentikan music
function stopSound(){
    BackgroundSound.stop()
}
function offSound(){
    BackgroundSound.volume(0)
}
function onSound(){
    BackgroundSound.volume(1)
}
function sound(src){
    this.sound = document.createElement("audio")
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto")
    this.sound.setAttribute("control", "none")
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play()
    }
    this.stop = function(){
        this.sound.pause();
    }
    this.loop = function(){
        this.sound.setAttribute("loop", "loop")
        this.sound.play()
    }
    this.volume = function(vol){
        this.sound.volume = vol;
    }
}