input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.toggle(-4 + index, 4 - index)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(-3 + index, 4 - index)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(-2 + index, 4 - index)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, 4 - index)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(1 + index, 4 - index)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
