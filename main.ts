input.onButtonPressed(Button.A, function () {
    // Start tidsmåling når knap A trykkes
    startTime = input.runningTime()
    lightningIcon.showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    // Nulstil tiden og afstanden ved tryk på A+B
    startTime = 0
    endTime = 0
    distance = 0
    basic.showString("R")
})
input.onButtonPressed(Button.B, function () {
    // Stop tidsmåling når knap B trykkes
    endTime = input.runningTime()
    // Konverter til sekunder
    elapsedTime = (endTime - startTime) / 1000
    // Beregn afstanden
    // Hastighed af lyd i luft er 343 m/s
    distance = 343 * elapsedTime
    // Vis resultatet
    noteIcon.showImage(0)
    // Vent et sekund for at vise noden
    basic.pause(1000)
    basic.showNumber(distance)
})
let elapsedTime = 0
let distance = 0
let endTime = 0
let startTime = 0
let noteIcon: Image = null
let lightningIcon: Image = null
// Definer et simpelt lyn-ikon
lightningIcon = images.createImage(`
    . . # . .
    . # . . .
    . . # . .
    . . . # .
    . . # . .
    `)
// Definer et simpelt node-ikon
noteIcon = images.createImage(`
    . . # # .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
