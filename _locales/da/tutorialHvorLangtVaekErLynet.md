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
Find blokken til at trykke på knap B (det er den samme som til A, så du kan også bare kopiere den, og vælge B i drop-down menuen)
```blocks
input.onButtonPressed(Button.B, function () {
})
```

## Kodning af knap A (1 af 3) 
Når knap A bliver trykket ind, skal vi have startet en tidsmåling. Til det skal vi bruge en variabel som vi kalder startTid. Opret først variablen startTid.  

## Kodning af knap A (2 af 3) 
Nu skal vi finde knappen "sæt "startTid" til " og sætte ind i blokken til knap A 

Find knappen 
```blocks
input.onButtonPressed(Button.A, function () {
    startTid = (0)
})
```

## Kodning af knap A (2 af 3) 
Og så skal vi sætte blokken `|input.køretid (ms)|` ind i den tomme plads. 

Find knappen 
```blocks
input.onButtonPressed(Button.A, function () {
    startTid = input.runningTime()
})
```

## Kodning af knap A (3 af 3)
Vi vil gerne have skærmen viser et lyn-ikon når man trykker A. Derfor udvider vi lige blokken sådan her: 

```blocks
input.onButtonPressed(Button.A, function () {
    startTid = input.runningTime()
    basic.showLeds(`
    . . # . .
    . # . . .
    . . # . .
    . . . # .
    . . # . .
    `)
})
```

## Kodning af knap B (1 af 7) 
Knap B trykkes ind når tordenbraget høres. Her er der en række variable vi skal bruge. Først slutTid, der sættes til køretiden sådan her:
```blocks
input.onButtonPressed(Button.B, function () {
    // Stop tidsmåling når knap B trykkes
    endTime = input.runningTime()
})
```

## Kodning af knap B (2 af 7) 
Den regner ud hvor lang tid der er gået, sådan her: 

```blocks
input.onButtonPressed(Button.B, function () {
    endTime = input.runningTime()
    elapsedTime = endTime - startTime
})
```


## Kodning af knap B (3 af 7) 
Og dividerer tallet med 1000 fordi vi går fra milisekunder til sekunder

```blocks
input.onButtonPressed(Button.B, function () {
    endTime = input.runningTime()
    elapsedTime = endTime - startTime
    elapsedTime = elapsedTime / 1000
})
```

## Kodning af knap B (4 af 7) 
Nu ganger vi tiden der er gået med lydens hastighed, der er 343 meter per sekund

```blocks
input.onButtonPressed(Button.B, function () {
    endTime = input.runningTime()
    elapsedTime = endTime - startTime
    elapsedTime = elapsedTime / 1000
    // Hastighed af lyd i luft er 343 m/s
    distance = 343 * elapsedTime
})
```
## Kodning af knap B (5 af 7) 
Og vi vil også gerne vise et torden-ikon. Fx. en node.

```blocks
input.onButtonPressed(Button.B, function () {
    endTime = input.runningTime()
    elapsedTime = endTime - startTime
    elapsedTime = elapsedTime / 1000
    // Hastighed af lyd i luft er 343 m/s
    distance = 343 * elapsedTime
    basic.showLeds(`
    . . # # .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
})
```

## Kodning af knap B (6 af 7) 
Vi lader ikonet stå 1 sekund. Det gør vi med en pause, der måler i milisekunder. Derfor skal der stå 1000.

```blocks
input.onButtonPressed(Button.B, function () {
    endTime = input.runningTime()
    elapsedTime = endTime - startTime
    elapsedTime = elapsedTime / 1000
    // Hastighed af lyd i luft er 343 m/s
    distance = 343 * elapsedTime
    basic.showLeds(`
    . . # # .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
    // Vent et sekund for at vise noden
    basic.pause(1000)
})
```

## Kodning af knap B (7 af 7) 
Efter 1 sekund, viser den hvor langt væk lynet var - målt i meter.

```blocks
input.onButtonPressed(Button.B, function () {
    endTime = input.runningTime()
    elapsedTime = endTime - startTime
    elapsedTime = elapsedTime / 1000
    // Hastighed af lyd i luft er 343 m/s
    distance = 343 * elapsedTime
    basic.showLeds(`
    . . # # .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
    // Vent et sekund for at vise noden
    basic.pause(1000)
    basic.showNumber(distance)
})
```