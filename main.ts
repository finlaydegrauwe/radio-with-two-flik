function getpos () {
    flikx = Flik.get(LedSpriteProperty.X)
    fliky = Flik.get(LedSpriteProperty.Y)
}
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    Dief = game.createSprite(0, 2)
    Flik = game.createSprite(4, 2)
    started = true
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Flik")
    Flik = game.createSprite(4, 2)
    for (let index = 0; index < 100; index++) {
        StartGame()
        basic.pause(1000)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "diefx") {
        Dief.set(LedSpriteProperty.X, value)
    }
    if (name == "diefy") {
        Dief.set(LedSpriteProperty.Y, value)
    }
    if (name == "gameover") {
        Dief.delete()
        Flik.delete()
    }
})
function StartGame () {
    if (input.isGesture(Gesture.LogoUp)) {
        Flik.change(LedSpriteProperty.Y, 1)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        Flik.change(LedSpriteProperty.Y, -1)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        Flik.change(LedSpriteProperty.X, -1)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        Flik.change(LedSpriteProperty.X, 1)
    }
}
let Dief: game.LedSprite = null
let fliky = 0
let Flik: game.LedSprite = null
let flikx = 0
let started = false
radio.setGroup(97)
led.setBrightness(255)
started = false
basic.forever(function () {
    while (started) {
        radio.sendValue("flikx", flikx)
        radio.sendValue("fliky", fliky)
        getpos()
        StartGame()
        basic.pause(1000)
    }
})
basic.forever(function () {
	
})
