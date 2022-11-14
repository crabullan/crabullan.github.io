function disableselect(e){
    return false
}
function reEnable(e){
    return true
}
document.onselectstart = new Function ("return false")

if (window.sidebar){
    document.onmousedown = disableselect
    document.onclick = reEnable
}

const SpaceBar = 32 
window.addEventListener("keydown", function(){
    if(LevelPlaying.innerHTML == "Level 1"){
        HorseJump(event)
    }
    if(LevelPlaying.innerHTML == "Level 2"){
        HorseJumpV2(event)
    }
})
function HorseJump(event){
    const KeyPressed = event.keyCode
    if(KeyPressed == SpaceBar && Horse.y >= 431){
        Horse.moveY = -8 - speedLevel * 2
    }
}
function HorseJumpV2(event){
    const KeyPressed = event.keyCode
    if(KeyPressed == SpaceBar && Horse.y >= 431){
        Horse.moveY = -12 - speedLevelTwo * 2
    }
}

let GetScore = 0

let LevelOne
let LevelTwo

function StartLevel(){
    if(LevelPlaying.innerHTML == "Level 1"){
        if(LevelOne) clearInterval(LevelOne)
            LevelOne = setInterval(PlGameLevelOne, 10)
    }
    if(LevelPlaying.innerHTML == "Level 2"){
        if(LevelTwo) clearInterval(LevelTwo)
            LevelTwo = setInterval(PlGameLevelTwo, 10)
    }
}
//Pause Game
function PauseLevel(){
    if(LevelPlaying.innerHTML == "Level 1"){
        clearInterval(LevelOne)
    }
    if(LevelPlaying.innerHTML == "Level 2"){
        clearInterval(LevelTwo)
    }
}
//Resume Game
function ResumeLevel(){
    if(LevelPlaying.innerHTML == "Level 1"){
        if (LevelOne) clearInterval(LevelOne)
            LevelOne = setInterval(PlGameLevelOne, 10)
    }
    if(LevelPlaying.innerHTML == "Level 2"){
        if (LevelTwo) clearInterval(LevelTwo)
            LevelTwo = setInterval(PlGameLevelTwo, 10)
    }
}
//Stop Game
function StopLevel(){
    if(LevelPlaying.innerHTML == "Level 1"){
        if (LevelOne) clearInterval(LevelOne)
        LevelComponent()
    }
    if(LevelPlaying.innerHTML == "Level 2"){
        if (LevelTwo) clearInterval(LevelTwo)
        LevelComponent()
    }
}
function RestartLevel(){
    if(LevelPlaying.innerHTML == "Level 1"){
        if (LevelOne) clearInterval(LevelOne)
        LevelOne = setInterval(PlGameLevelOne, 10)
        LevelComponent()
    }
    if(LevelPlaying.innerHTML == "Level 2"){
        if (LevelTwo) clearInterval(LevelTwo)
        LevelTwo = setInterval(PlGameLevelTwo, 10)
        LevelComponent()
    }
}
var PlGame = PlCanvas.getContext('2d');
var gamePlHeight = PlCanvas.height
var gamePlWidth = PlCanvas.width

let Obstacle = []

function LevelComponent(){
    BackgroundSound = new sound("Desert.mp3")
    Horse = new property(100, 0, 235, 169 ,"character.png", "image" )
    Obstacle.splice(0, Obstacle.length)
    frameLevelGame = 0
    speedLevel = 0
    speedLevelTwo = 0
}
function property(x, y, width, height, color, type){
    this.x = x
    this.y = y
    this.goesX = 0
    this.goesY = 0
    this.moveY = 0
    this.moveX = 0
    this.gravity = 2.05
    this.width = width
    this.height = height
    this.color = color
    this.type = type
    if(type == "image"){
        this.image = new Image()
        this.image.src = color ;
    }
    this.update = function(){
        ctx = PlGame
    if (type == "image"){
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height)
    }else{
        ctx.fillStyle = color;
        ctx.fillrect(this.x, this.y, this.width, this.height)
    }
    }
    this.movement = function(){
        this.x += this.goesX
        // this.y += this.goesY
        this.y += this.goesY += this.gravity
        this.hitBottom()
    }
    this.jump = function(){
        this.x += this.moveX
        this.y += this.moveY
        this.hitTop()
    }
    this.hitBottom = function(){
        var rockbottom = 600 - this.height;
        if (this.y > rockbottom){
            this.y = rockbottom
        }
    }
    this.hitTop = function(){
        var rocktop = 200
        if(this.y < rocktop){
            Horse.moveY = 1
        }
    }
    this.DetectionScoreLevelOne = function(ScoreOneobj){
        var OneScoreleft = this.x
        var OneScoreright = this.x + 2.5 + (speedLevel / 2)
        var ScoreOneleft = ScoreOneobj.x
        var ScoreOneright = ScoreOneobj.x + 2.5 + (speedLevel / 2)
        if (OneScoreright >= ScoreOneleft && OneScoreleft <= ScoreOneright){
                GetScore += 1
                Score.innerHTML = GetScore
                ScoreGame.innerHTML = GetScore
        }
    }
    this.DetectionScoreLevelTwo = function(ScoreTwoobj){
        var TwoScoreleft = this.x
        var TwoScoreright = this.x + 3.25 + (speedLevelTwo / 2)
        var ScoreTwoleft = ScoreTwoobj.x
        var ScoreTworight = ScoreTwoobj.x + 3.25 + (speedLevelTwo / 2)
        if (TwoScoreright >= ScoreTwoleft && TwoScoreleft <= ScoreTworight){
                GetScore += 1
                Score.innerHTML = GetScore
                ScoreGame.innerHTML = GetScore
        }
    }
    this.crashWith = function(Nextobj) {
        var Memeleft = this.x;
        var Memeright = this.x + (this.width) - 40
        var Memetop = this.y;
        var Memebottom = this.y + (this.height) - 10
        var TheNextleft = Nextobj.x;
        var TheNextright = Nextobj.x + (Nextobj.width) - 40
        var TheNexttop = Nextobj.y;
        var TheNextbottom = Nextobj.y + (Nextobj.height) - 10
        var crash = true;
        if ((Memebottom < TheNexttop) || (Memetop > TheNextbottom) || (Memeright < TheNextleft) || (Memeleft > TheNextright)) {
            crash = false;
        }
        return crash;
    }
}
function clearPlgame(){
    PlGame.clearRect(0, 0, gamePlWidth, gamePlHeight)
}
function PlGameLevelOne(){
    for (i = 0; i < Obstacle.length; i += 1){
        if (Horse.crashWith(Obstacle[i])){
            BackgroundSound.stop()
            StopLevel()
            DisplayGameOverLevelOne()
            return
        }
    }
    if(Score.innerHTML == "50"){
        BackgroundSound.stop()
        StopLevel()
        DisplayLevelOneFinish()
    }
    if(Score.innerHTML <= "10"){
        AllertScore.innerHTML = "First Time Playing?"
    }
    if(Score.innerHTML > "10"){
        AllertScore.innerHTML = "Keep Crying Baby?"
    }
    if(Score.innerHTML >= "40"){
        AllertScore.innerHTML = "Pretty Close to Win!"
    }
    clearPlgame()
    speedLevel += 1 / 2000
    frameLevelGame += 1
    if(frameLevelGame == 1 || everyInterval(600)){
        var rand1 = Math.random();
        if (rand1 < 0.34) {
            rand1 = "Obs1.png"
        } else if (rand1 >= 0.34 && rand1 < 0.67) {
            rand1 = "Obs2.png"
        } else {
            rand1 = "Obs3.png";
        }

        var rand2 = Math.random();
        if (rand2 < 0.34) {
            rand2 = "Obs2.png"
        } else if (rand2 >= 0.34 && rand2 < 0.67) {
            rand2 = "Obs3.png"
        } else {
            rand2 = "Obs4.png";
        }

        var rand3 = Math.random();
        if (rand3 < 0.34) {
            rand3 = "Obs3.png"
        } else if (rand3 >= 0.34 && rand3 < 0.67) {
            rand3 = "Obs4.png"
        } else {
            rand3 = "Obs1.png";
        }
        var rand4 = Math.random();
        if (rand4 < 0.34) {
            rand4 = "Obs4.png"
        } else if (rand4 >= 0.34 && rand4 < 0.67) {
            rand4 = "Obs1.png"
        } else {
            rand4 = "Obs2.png";
        }
        Obstacle.push(new property(1200, 600 - 50, 50, 70, rand1, "image"))
        Obstacle.push(new property(1800, 600 - 50, 50, 70, rand2, "image"))
        Obstacle.push(new property(2400, 600 - 50, 50, 70, rand3, "image"))
        Obstacle.push(new property(3000, 600 - 50, 50, 70, rand4, "image"))
    }
    for(i = 0; i < Obstacle.length; i += 1){
        // Obstacle[i].goesX = -1
        Obstacle[i].goesX = -5 - speedLevel

        Obstacle[i].movement()
        Obstacle[i].update()
        Horse.DetectionScoreLevelOne(Obstacle[i])
    }
    Horse.movement()
    Horse.jump()
    Horse.goesY = 1 + speedLevel
    Horse.update()
}
function PlGameLevelTwo(){
    for (i = 0; i < Obstacle.length; i += 1){
        if (Horse.crashWith(Obstacle[i])){
            BackgroundSound.stop()
            StopLevel()
            DisplayGameOverLevelTwo()
            return
        }
    }
    if( Score.innerHTML == "75"){
        BackgroundSound.stop()
        StopLevel()
        DisplayLevelTwoFinish()
    }
    if(Score.innerHTML <= "20"){
        AllertScore.innerHTML = "First Time Playing?"
    }
    if(Score.innerHTML > "20"){
        AllertScore.innerHTML = "Keep Crying Baby?"
    }
    if(Score.innerHTML > "60"){
        AllertScore.innerHTML = "Pretty Close to Win!"
    }
    clearPlgame()
    speedLevelTwo += 1 / 1500
    frameLevelGame += 1
    if(frameLevelGame == 1 || everyInterval(200)){
        var rand1 = Math.random();
        if (rand1 < 0.34) {
            rand1 = "Obs1.png"
        } else if (rand1 >= 0.34 && rand1 < 0.67) {
            rand1 = "Obs2.png"
        } else {
            rand1 = "Obs3.png";
        }

        var rand2 = Math.random();
        if (rand2 < 0.34) {
            rand2 = "Obs2.png"
        } else if (rand2 >= 0.34 && rand2 < 0.67) {
            rand2 = "Obs3.png"
        } else {
            rand2 = "Obs4.png";
        }

        Obstacle.push(new property(1200, 600 - 50, 50, 70, rand1, "image"))
        Obstacle.push(new property(1800, 600 - 50, 50, 70, rand2, "image"))
    }
    for(i = 0; i < Obstacle.length; i += 1){
        Obstacle[i].goesX = -6.5 - speedLevelTwo
        Obstacle[i].movement()
        Obstacle[i].update()
        Horse.DetectionScoreLevelTwo(Obstacle[i])
    }
    Horse.movement()
    Horse.jump()
    Horse.goesY = 2 + speedLevelTwo
    Horse.update()
}
function everyInterval(n){
    if((frameLevelGame / n) % 1 == 0){
        return true
    }
    return false
}