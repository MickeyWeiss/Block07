/* Pseudocode: First I'll assign a value for the first number and then a series of arithmetics to arrive at first combination value. Then so on for second and third values */
const YouHaveReceived = "You have received this message because you have been chosen to open an important vault."
const HereIsTheCombo = "Here is the secret combination:"
const CombinedString = YouHaveReceived + HereIsTheCombo
console.log(CombinedString)
/* First Combined String Above */
const FirstNumber = 5
const SecondNumber = 2
const CombinedString2 = FirstNumber * SecondNumber
console.log(CombinedString2)
/* Second Combined String Above*/
const ThirdNumber = 50
const FourthNumber = 10
const CombinedString3 = ThirdNumber - FourthNumber
console.log(CombinedString3)
/* Third Combined String Above */
const FifthNumber = 13
const SixthNumber = 3
const CombinedString4 = FifthNumber * SixthNumber
console.log(CombinedString4)
/* Final Combined String Above */
alert(CombinedString + CombinedString2 + CombinedString3 + CombinedString4)
/* Alert generated populating all combined strings above */

/* One thing I was unable to figure out was how to space the final digits for the code by spaces or commas */