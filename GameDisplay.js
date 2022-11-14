let PlCanvas = document.getElementById("LevelCanvas")
let CanvasMenu = document.getElementById("CanvasMenu")

let TittleGame = document.getElementById("TittleGame")
let PlayMenu = document.getElementById("PlayMenu")
let SettingMenu = document.getElementById("SettingMenu")
let AboutMenu = document.getElementById("AboutMenu")

let LevelOneButton = document.getElementById("LevelOneButton")
let LevelTwoButton = document.getElementById("LevelTwoButton")
let BackButton = document.getElementById("BackButton")

let TittleGameOver = document.getElementById("TittleGameOver")
let NextLevelButton = document.getElementById("NextLevelButton")
let RestartButton = document.getElementById("RestartButton")
let MainMenuButton = document.getElementById("MainMenuButton")
let TittleScore = document.getElementById("TittleScore")
let ScoreGame = document.getElementById("ScoreGame")
let AllertScore = document.getElementById("AllertScore")

let LevelPlaying = document.getElementById("LevelPlaying")
let DisplayScore = document.getElementById("DisplayScore")
let Score = document.getElementById("Score")

let TittleAbout = document.getElementById("TittleAbout")
let AboutGame = document.getElementById("AboutGame")

let TittleSetting = document.getElementById("TittleSetting")
let TittleGameAudio = document.getElementById("TittleGameAudio")
let GameAudio = document.getElementById("GameAudio")
let ButtonOnAudio = document.getElementById("ButtonOnAudio")
let ButtonOfAudio = document.getElementById("ButtonOfAudio")
function showPlCanvas(){
    PlCanvas.style.visibility = "visible"
}
function hidePlCanvas(){
    PlCanvas.style.visibility = "hidden"
}
function showCanvasMenu(){
    CanvasMenu.style.visibility = "visible"
}
function hideCanvasMenu(){
    CanvasMenu.style.visibility = "hidden"
}
function showTittleGame(){
    TittleGame.style.visibility = "visible"
}
function hideTittleGame(){
    TittleGame.style.visibility = "hidden"
}
function showPlayMenu(){
    PlayMenu.style.visibility = "visible"
}
function hidePlayMenu(){
    PlayMenu.style.visibility = "hidden"
}
function showSettingMenu(){
    SettingMenu.style.visibility = "visible"
}
function hideSettingMenu(){
    SettingMenu.style.visibility = "hidden"
}
function showAboutMenu(){
    AboutMenu.style.visibility = "visible"
}
function hideAboutMenu(){
    AboutMenu.style.visibility = "hidden"
}
function showBackButton(){
    BackButton.style.visibility = "visible"
}
function hideBackButton(){
    BackButton.style.visibility = "hidden"
}
function showLevelOneButton(){
    LevelOneButton.style.visibility = "visible"
}
function hideLevelOneButton(){
    LevelOneButton.style.visibility = "hidden"
}
function showLevelTwoButton(){
    LevelTwoButton.style.visibility = "visible"
}
function hideLevelTwoButton(){
    LevelTwoButton.style.visibility = "hidden"
}
function showTittleGameOver(){
    TittleGameOver.style.visibility = "visible"
}
function hideTittleGameOver(){
    TittleGameOver.style.visibility = "hidden"
}
function showNextLevelButton(){
    NextLevelButton.style.visibility = "visible"
}
function hideNextLevelButton(){
    NextLevelButton.style.visibility = "hidden"
}
function showRestartButton(){
    RestartButton.style.visibility = "visible"
}
function hideRestartButton(){
    RestartButton.style.visibility = "hidden"
}
function showMainMenuButton(){
    MainMenuButton.style.visibility = "visible"
}
function hideMainMenuButton(){
    MainMenuButton.style.visibility = "hidden"
}
function showTittleScore(){
    TittleScore.style.visibility = "visible"
}
function hideTittleScore(){
    TittleScore.style.visibility = "hidden"
}
function showScoreGame(){
    ScoreGame.style.visibility = "visible"
}
function hideScoreGame(){
    ScoreGame.style.visibility = "hidden"
}
function showAllertScore(){
    AllertScore.style.visibility = "visible"
}
function hideAllertScore(){
    AllertScore.style.visibility = "hidden"
}
function showLevelPlaying(){
    LevelPlaying.style.visibility = "visible"
}
function hideLevelPlaying(){
    LevelPlaying.style.visibility = "hidden"
}
function showDisplayScore(){
    DisplayScore.style.visibility = "visible"
}
function hideDisplayScore(){
    DisplayScore.style.visibility = "hidden"
}
function showScore(){
    Score.style.visibility = "visible"
}
function hideScore(){
    Score.style.visibility = "hidden"
}
function showTittleAbout(){
    TittleAbout.style.visibility = "visible"
}
function hideTittleAbout(){
    TittleAbout.style.visibility = "hidden"
}
function showAboutGame(){
    AboutGame.style.visibility = "visible"
}
function hideAboutGame(){
    AboutGame.style.visibility = "hidden"
}
function showTittleSetting(){
    TittleSetting.style.visibility = "visible"
}
function hideTittleSetting(){
    TittleSetting.style.visibility = "hidden"
}
function showTittleGameAudio(){
    TittleGameAudio.style.visibility = "visible"
}
function hideTittleGameAudio(){
    TittleGameAudio.style.visibility = "hidden"
}
function showGameAudio(){
    GameAudio.style.visibility = "visible"
}
function hideGameAudio(){
    GameAudio.style.visibility = "hidden"
}
function showButtonOnAudio(){
    ButtonOnAudio.style.visibility = "visible"
}
function hideButtonOnAudio(){
    ButtonOnAudio.style.visibility = "hidden"
}
function showButtonOfAudio(){
    ButtonOfAudio.style.visibility = "visible"
}
function hideButtonOfAudio(){
    ButtonOfAudio.style.visibility = "hidden"
}
function DisplayMainMenu(){
    hidePlCanvas()
    showTittleGame()
    showPlayMenu()
    showSettingMenu()
    showAboutMenu()

    hideLevelOneButton()
    hideLevelTwoButton()
    hideBackButton()

    hideTittleAbout()
    hideAboutGame()

    hideTittleGameOver()
    hideNextLevelButton()
    hideRestartButton()
    hideMainMenuButton()
    hideTittleScore()
    hideScoreGame()
    hideAllertScore()

    hideTittleSetting()
    hideTittleGameAudio()
    hideGameAudio()
    hideButtonOfAudio()
    hideButtonOnAudio()

    hideLevelPlaying()
    hideDisplayScore()
    hideScore()

    showCanvasMenu()

    TutorialDisplay.style.visibility = "hidden"
    CloseTutorialButton.style.visibility = "hidden"
}
let TutorialDisplay = document.getElementById("TutorialDisplay")
let CloseTutorialButton = document.getElementById("CloseTutorialButton")
function DisplayTutorial(){
    TutorialDisplay.style.visibility = "visible"
    CloseTutorialButton.style.visibility = "visible"
}
function OkeTutorial(){
    TutorialDisplay.style.visibility = "hidden"
    CloseTutorialButton.style.visibility = "hidden"
    ButtonLevelOne()
}
function ButtonLevelOne(){
    hideBackButton()
    hideLevelOneButton()
    hideLevelTwoButton()

    showLevelPlaying()
    showDisplayScore()
    showScore()

    hideCanvasMenu()
    showPlCanvas()

    LevelComponent()
    LevelPlaying.innerHTML = "Level 1"
    StartLevel()
    BackgroundSound.loop()
}
function ButtonLevelTwo(){
    if(LevelTwoButton.innerHTML == "Level 2"){
        
        hideBackButton()
        hideLevelOneButton()
        hideLevelTwoButton()
    
        showLevelPlaying()
        showDisplayScore()
        showScore()
    
        hideCanvasMenu()

        hideCanvasMenu()
        showPlCanvas()
    
        LevelComponent()
        LevelPlaying.innerHTML = "Level 2"
        StartLevel()
        BackgroundSound.loop()
    }
}
BackButton.onclick = function(){
    DisplayMainMenu()
}
PlayMenu.onclick = function(){
    hidePlayMenu()
    hideSettingMenu()
    hideAboutMenu()

    showBackButton()
    showLevelOneButton()
    showLevelTwoButton()
}
SettingMenu.onclick = function(){
    hidePlayMenu()
    hideSettingMenu()
    hideAboutMenu()

    showTittleSetting()
    showTittleGameAudio()
    showGameAudio()
    showButtonOfAudio()
    showButtonOnAudio()

    showBackButton()
}
AboutMenu.onclick = function(){
    hidePlayMenu()
    hideSettingMenu()
    hideAboutMenu()

    showBackButton()
    showTittleAbout()
    showAboutGame()
}
NextLevelButton.onclick = function(){
    if(NextLevelButton.innerHTML == "Next Level"){
        LevelComponent()
        LevelPlaying.innerHTML = "Level 2"
        StartLevel()
    }
    if(NextLevelButton.innerHTML == "Previous Level"){
        LevelComponent()
        LevelPlaying.innerHTML = "Level 1"
        StartLevel()
    }
    Score.innerHTML = "0"
    GetScore = 0

    showLevelPlaying()
    showDisplayScore()
    showScore()

    hideTittleGameOver()
    hideNextLevelButton()
    hideRestartButton()
    hideMainMenuButton()
    hideTittleScore()
    hideScoreGame()
    hideAllertScore()
    BackgroundSound.loop()
}
RestartButton.onclick = function(){
    RestartButton.innerHTML = "Restart"
    RestartLevel()
    Score.innerHTML = "0"
    GetScore = 0

    showLevelPlaying()
    showDisplayScore()
    showScore()

    hideTittleGameOver()
    hideNextLevelButton()
    hideRestartButton()
    hideMainMenuButton()
    hideTittleScore()
    hideScoreGame()
    hideAllertScore()
    BackgroundSound.loop()
}

MainMenuButton.onclick = function(){
    Score.innerHTML = "0"
    GetScore = 0

    DisplayMainMenu()
    StopLevel()
}
function DisplayGameOverLevelOne(){
    hideLevelPlaying()
    hideDisplayScore()
    hideScore()
    
    TittleGameOver.style.animation = "TiiteGameOverStyle2 2s infinite"
    showAllertScore()
    showTittleGameOver()
    showRestartButton()
    showMainMenuButton()
    showTittleScore()
    showScoreGame()
    TittleGameOver.innerHTML = "GAME OVER!"
}
function DisplayGameOverLevelTwo(){
    hideLevelPlaying()
    hideDisplayScore()
    hideScore()
    TittleGameOver.style.animation = "TiiteGameOverStyle2 2s infinite"
    showAllertScore()
    showTittleGameOver()
    showRestartButton()
    showMainMenuButton()
    showTittleScore()
    showScoreGame()
    TittleGameOver.innerHTML = "GAME OVER!"
}
function DisplayLevelOneFinish(){
    LevelTwoButton.style.cursor = "pointer"
    hideLevelPlaying()
    hideDisplayScore()
    hideScore()
    TittleGameOver.style.animation = "TiiteGameOverStyle 2s infinite"
    LevelTwoButton.innerHTML = "Level 2"
    showTittleGameOver()
    showNextLevelButton()
    showRestartButton()
    showMainMenuButton()
    showTittleScore()
    showScoreGame()
    NextLevelButton.innerHTML = "Next Level"
    TittleGameOver.innerHTML = "Congratulations Your Finish Level 1"
    RestartButton.innerHTML = "Play Again"
}
function DisplayLevelTwoFinish(){
    hideLevelPlaying()
    hideDisplayScore()
    hideScore()
    TittleGameOver.style.animation = "TiiteGameOverStyle 2s infinite"
    showTittleGameOver()
    showNextLevelButton()
    showRestartButton()
    showMainMenuButton()
    showTittleScore()
    showScoreGame()
    NextLevelButton.innerHTML = "Previous Level"
    TittleGameOver.innerHTML = "Congratulations You Find The Master"
    RestartButton.innerHTML = "Play Again"
}
ButtonOnAudio.onclick = function(){
    GameAudio.innerHTML = "ON"
    ButtonOnAudio.style.backgroundColor = "saddlebrown"
    ButtonOnAudio.style.border = "5px solid rgb(80, 6, 6)"
    ButtonOnAudio.style.color = "Black"
    ButtonOnAudio.style.webkitTextStrokeWidth = "1px"
    ButtonOnAudio.style.webkitTextStrokeColor = "whitesmoke"
    ButtonOnAudio.style.letterSpacing = "2px"

    ButtonOfAudio.style.backgroundColor = "sandybrown"
    ButtonOfAudio.style.border = "5px solid brown"
    ButtonOfAudio.style.color = "white"
    ButtonOfAudio.style.webkitTextStrokeWidth = "1px"
    ButtonOfAudio.style.webkitTextStrokeColor = "black"
    ButtonOfAudio.style.letterSpacing = "normal"
    onSound()
}
ButtonOfAudio.onclick = function(){
    GameAudio.innerHTML = "OFF"
    ButtonOfAudio.style.backgroundColor = "saddlebrown"
    ButtonOfAudio.style.border = "5px solid rgb(80, 6, 6)"
    ButtonOfAudio.style.color = "Black"
    ButtonOfAudio.style.webkitTextStrokeWidth = "1px"
    ButtonOfAudio.style.webkitTextStrokeColor = "whitesmoke"
    ButtonOfAudio.style.letterSpacing = "2px"

    ButtonOnAudio.style.backgroundColor = "sandybrown"
    ButtonOnAudio.style.border = "5px solid brown"
    ButtonOnAudio.style.color = "white"
    ButtonOnAudio.style.webkitTextStrokeWidth = "1px"
    ButtonOnAudio.style.webkitTextStrokeColor = "black"
    ButtonOnAudio.style.letterSpacing = "normal"
    offSound()
}
