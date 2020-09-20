input.onButtonPressed(Button.A, function () {
    Steen += 1
    basic.showString("Steen")
    Microbit = true
})
input.onButtonPressed(Button.AB, function () {
    Schaar += 1
    basic.showString("Schaar")
    Microbit = true
})
input.onButtonPressed(Button.B, function () {
    Papier += 1
    basic.showString("Papier")
    Microbit = true
})
input.onGesture(Gesture.Shake, function () {
    if (Awon > Bwon) {
        basic.showString("AWon")
    } else if (Awon < Bwon) {
        basic.showString("Bwon")
    } else if (Awon == Bwon) {
        basic.showString("Tie")
    }
})
let SchaarB = 0
let PapierB = 0
let SteenB = 0
let Awon = 0
let Bwon = 0
let Microbit = false
let input2 = false
Microbit = false
let Schaar = 0
let Papier = 0
let Steen = 0
let SpelerB = 0
let rondes = 0
let SpelerA = 0
let Tie = 0
Bwon = 0
Awon = 0
basic.forever(function () {
    if (Microbit == true) {
        SpelerB += randint(0, 3)
        if (SpelerB == 1) {
            basic.showString("Steen")
            SteenB += 1
        } else if (SpelerB == 2) {
            basic.showString("Papier")
            PapierB += 1
        } else if (SpelerB == 3) {
            basic.showString("Schaar")
            SchaarB += 1
        }
        SpelerB = 0
    }
})
basic.forever(function () {
    if (input2 == true) {
        if (Steen == SteenB) {
            basic.showString("Tie")
            Tie += 1
        } else if (Schaar > PapierB) {
            basic.showString("A won")
            Awon += 1
        } else if (SchaarB > Papier) {
            basic.showString("B won")
            Bwon += 1
        } else if (Papier > SteenB) {
            basic.showString("A won")
            Awon += 1
        } else if (PapierB > Steen) {
            basic.showString("B won")
            Bwon += 1
        } else if (SteenB > Schaar) {
            basic.showString("B won")
            Bwon += 1
        } else if (Steen > SchaarB) {
            basic.showString("A won")
            Bwon += 1
        } else if (Papier == PapierB) {
            basic.showString("Tie")
            Tie += 1
        } else if (Schaar == SchaarB) {
            basic.showString("Tie")
            Tie += 1
        } else if (false) {
        	
        }
        input2 = false
        Microbit = false
        Schaar = 0
        Papier = 0
        Steen = 0
        SpelerB = 0
        rondes = 0
        SpelerA = 0
        SchaarB = 0
        PapierB = 0
        SteenB = 0
    }
})
