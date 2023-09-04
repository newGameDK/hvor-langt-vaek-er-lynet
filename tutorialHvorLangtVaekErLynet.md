# Hvor langt væk er lynet?
Nu skal du lave en lyn-afstands måler med din @boardname@. 
Følg med her, så er koden klar om lidt! :-)

## Tryk på knap A
For at bruge knap A, skal du finde en blok til hvis A knappen bliver trykket ind

```blocks
input.onButtonPressed(Button.A, function () {
})
``` 

## Tryk på knap B
Find blokken til at trykke på knap B.
```blocks
input.onButtonPressed(Button.B, function () {
})
```

## Tryk på knap A og knap B samtidig
Den sidste knap vi skal bruge, er når A og B trykkes ind samtidigt

```blocks
input.onButtonPressed(Button.AB, function () {
})
```

## Kodning af knap A 
Når knap A bliver trykket ind, skal vi have startet en tidsmåling. Til det skal vi bruge en variabel som vi kalder startTid
Find knappen 
```blocks
startTid = input.runningTime()
```

## Kodning af knap A 
Og vi vil også gerne have vores []

# How Far Away Is the Lightning?

This guide will help you create a lightning distance meter using a micro:bit. Follow the steps, and you'll have a working code in no time!

## Initialize Your Variables

Before getting into button actions, let's first set up some variables.

```blocks
let elapsedTime = 0
let distance = 0
let endTime = 0
let startTime = 0
lightningIcon = images.createImage(`
    . . # . .
    . # . . .
    . . # . .
    . . . # .
    . . # . .
    `)
noteIcon = images.createImage(`
    . . # # .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
```

## Create Lightning and Note Icons

Now, let's create some icons to display on the micro:bit.

```blocks

  

```

## Button A Pressed

To use button A, find the \`||input.onButtonPressed||\` block for when button A is pressed.

```blocks
input.onButtonPressed(Button.A, function () {
    startTime = input.runningTime()
    lightningIcon.showImage(0)
})
```

## Button B Pressed

Find the block to press button B.

```blocks
input.onButtonPressed(Button.B, function () {
    endTime = input.runningTime()
    elapsedTime = (endTime - startTime) / 1000
    distance = 343 * elapsedTime
    noteIcon.showImage(0)
    basic.pause(1000)
    basic.showNumber(distance)
})
```

## Buttons A and B Pressed Together

The last button function we need is for when buttons A and B are pressed together.

```blocks
input.onButtonPressed(Button.AB, function () {
    startTime = 0
    endTime = 0
    distance = 0
    basic.showString("R")
})
```





FÆRDIG KODE: 

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