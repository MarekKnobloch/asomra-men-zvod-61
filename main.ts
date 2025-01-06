radio.setGroup(94)
Sensors.SetLightLevel()
input.onButtonPressed(Button.A, function () {
    Sensors.SetLightLevel()
})
let start: boolean = false
Sensors.OnLightDrop(function () {
    if(!start)
    basic.showString("start")
    radio.sendNumber(1)
    start = true
})

radio.onReceivedNumber(function (receivedNumber) {

})