input.onButtonPressed(Button.A, function () {
    if (Duty < 400) {
        Duty += Duty + 100
        pins.analogWritePin(AnalogPin.P0, Duty)
    }
})
input.onButtonPressed(Button.AB, function () {
    Duty += 200
    pins.analogWritePin(AnalogPin.P0, Duty)
})
input.onButtonPressed(Button.B, function () {
    if (Duty > 23) {
        Duty += Duty - 100
        pins.analogWritePin(AnalogPin.P0, Duty)
    }
})
let Duty = 0
Duty = 0
