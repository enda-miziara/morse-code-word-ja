input.onButtonPressed(Button.A, function () {
    Outcome = "" + Outcome + "0"
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Outcome))
    radio.sendString("" + (Outcome))
})
radio.onReceivedString(function (receivedString) {
    Word = receivedString.split("-")
    OutcomeValue = ""
    for (let value of Word) {
        ReceivedMorseCode = value
        MorseCodeIndex = MorseCode.indexOf(ReceivedMorseCode)
        if (MorseCodeIndex > -1) {
            OutcomeValue = "" + OutcomeValue + AlphaNum[MorseCodeIndex]
        } else {
            OutcomeValue = "" + OutcomeValue + "!"
        }
    }
    basic.showString("" + (OutcomeValue))
})
input.onButtonPressed(Button.B, function () {
    Outcome = "" + Outcome + "1"
})
input.onGesture(Gesture.Shake, function () {
    Outcome = ""
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Outcome = "" + Outcome + "-"
})
let MorseCodeIndex = 0
let ReceivedMorseCode = ""
let OutcomeValue = ""
let Word: string[] = []
let Outcome = ""
let MorseCode: string[] = []
let AlphaNum: string[] = []
radio.setGroup(1)
AlphaNum = [
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
MorseCode = [
"11111",
"01111",
"00111",
"00011",
"00001",
"00000",
"10000",
"11000",
"11100",
"11110",
"01",
"1000",
"1010",
"100",
"0",
"0010",
"110",
"0000",
"00",
"0111",
"101",
"0100",
"11",
"10",
"111",
"0110",
"1101",
"010",
"000",
"1",
"001",
"0001",
"011",
"1001",
"1011",
"1100"
]
