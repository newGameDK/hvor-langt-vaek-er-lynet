# Hvor langt væk er lynet? @unplugged
Nu skal du lave en lyn-afstands måler med din @boardname@. 
Følg med her, så er koden klar om lidt! :-)

## Tryk på knap A
For at bruge knap A, skal du finde en blok til hvis A knappen bliver trykket ind. 

Du kan få et hint ved at trykke på ledetråd knappen. 

```blocks
input.onButtonPressed(Button.A, function () {
})
``` 

## Tryk på knap B
Find blokken til at trykke på knap B. 

Du kan få et hint ved at trykke på ledetråd knappen.
```blocks
input.onButtonPressed(Button.B, function () {
})
```

## Kodning af knap A (1 af 3) 
Når knap A bliver trykket ind, skal vi have startet en tidsmåling. Til det skal vi bruge en variabel som vi kalder startTid. Opret først variablen startTid. 

Du kan få et hint ved at trykke på ledetråd knappen.

## Kodning af knap A (2 af 3) 
Nu skal vi finde knappen "sæt "startTid" til " og sætte ind i blokken til knap A. 

Du kan få et hint ved at trykke på ledetråd knappen.

```blocks
input.onButtonPressed(Button.A, function () {
    startTid = (0)
})
```

## Kodning af knap A (2 af 3) 
Og så skal vi sætte blokken `|input.køretid (ms)|` ind i den tomme plads. 

Du kan få et hint ved at trykke på ledetråd knappen.

```blocks
input.onButtonPressed(Button.A, function () {
    startTid = input.runningTime()
})
```

## Kodning af knap A (3 af 3)
Vi vil gerne have skærmen viser et lyn-ikon når man trykker A. 

Du kan få et hint ved at trykke på ledetråd knappen. 

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
Knap B trykkes ind når tordenbraget høres. Her er der en række variable vi skal bruge. Først oprettes variablen slutTid, der sættes til køretiden. 

Du kan få et hint ved at trykke på ledetråd knappen.
```blocks
input.onButtonPressed(Button.B, function () {
    // Stop tidsmåling når knap B trykkes
    slutTid = input.runningTime()
})
```

## Kodning af knap B (2 af 7) 
Med regnestykket slutTid - startTid = måltTid, får du den tid der er gået. Vi kalder den sidste variabel måltTid. Du skal nu oprette variablen måltTid og regnestykket. 

Du kan få et hint ved at trykke på ledetråd knappen.

```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
})
```


## Kodning af knap B (3 af 7) 
@boardname@ måler tiden i milisekunder. Vi vil gerne måle i sekunder. Derfor skal vi dividere måltTid med 1000. 

Du kan få et hint ved at trykke på ledetråd knappen.

```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
    måltTid = måltTid / 1000
})
```

## Kodning af knap B (4 af 7) 
Man kan regne afstanden ud, som noget har bevæget sig, hvis man kender hastigheden. Lydens hastighed er ca. 343 meter per sekund. Derfor skal vi gange måltTid med 343 meter per sekund, for at få afstanden til lynet.

Du kan få et hint ved at trykke på ledetråd knappen.
```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
    måltTid = måltTid / 1000
    // Hastighed af lyd i luft er 343 m/s
    distance = 343 * måltTid
})
```
## Kodning af knap B (5 af 7) 
På samme måde som da du indsatte lyn-ikonet, er det smart at @boardname@ viser at den har forstået at tordenbraget var der. Det viser vi her med et ikon mere - fx. et node-ikon.

Du kan få et hint ved at trykke på ledetråd knappen.
```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
    måltTid = måltTid / 1000
    // Hastighed af lyd i luft er 343 m/s
    distance = 343 * måltTid
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
Man skal lige nå at se node-ikonet. Vi lader det derfor stå 1 sekund. Derfor skal du indsætte en pause, der måler i milisekunder. 1 sekund = 1000 ms. 

Du kan få et hint ved at trykke på ledetråd knappen.
```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
    måltTid = måltTid / 1000
    // Hastighed af lyd i luft er 343 m/s
    distance = 343 * måltTid
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
Efter 1 sekund, skal vi vise afstanden til lynet, som vi jo har regnet ud. Den skal vise hvor langt væk lynet var målt i meter. 

Du kan få et hint ved at trykke på ledetråd knappen.
```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
    måltTid = måltTid / 1000
    // Hastighed af lyd i luft er 343 m/s
    distance = 343 * måltTid
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

## Tillykke!
Nu er du færdig med din kode. Du kan nu afprøve om du kan: 1) Ændre pausen så den passer til dig. 2) Ændre så du skriver afstanden i kilometer i stedet for meter. 3) Gøre koden kortere? 4) Bruge 3 eller flere @boardname@ med programmet til at bestemme positionen til en ven der klapper langt væk, hvis alle med afstandsmåleren kender deres positioner.
