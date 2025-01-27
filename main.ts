radio.setGroup(94)

input.onButtonPressed(Button.A, function() {
     Sensors.SetLightLevel()
     basic.clearScreen()
})
let start: boolean = false
Sensors.OnLightDrop(function () {
    if(!start)
    basic.showString("s")
    radio.sendNumber(1)
    start = true
})
input.onButtonPressed(Button.B, function() {
    start = false
})
radio.onReceivedNumber(function (finalTime) {
    if(start){
        console.log(finalTime)
        basic.showNumber(finalTime)
        
    }
})