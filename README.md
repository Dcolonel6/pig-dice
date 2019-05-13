# Pig Dice


### Author: DENNIS NJOGU

## Description
This is a simple web application that emulates a pig dice game. For more information on how to play the game please click [here](https://en.wikipedia.org/wiki/Pig_(dice_game))

## BDD
<table>
   <tr>
     <th>Behavior</th>
     <th>Input</th>
     <th>Output</th>
   </tr>
   <tr>
       <td>Player 1 clicks the roll button</td>
       <td>Values are captured</td>
       <td>Dice rolls and number is generated</td>
   </tr>
   <tr>
       <td>If Player 1 rolls any number other than 1, that roll is added to round total</td>
       <td>Roll = 2</td>
       <td>Round total = 2</td>
   </tr>
   <tr>
       <td>If Player 1 rolls a 1, no score is added and round for Player 1 ends</td>
       <td>Roll = 1</td>
       <td>Round total = 2 / Total score = 2 / Player 2 begins</td>
   </tr>
   <tr>
       <td>Repeat for Player 2 </td>
       <td>Roll = 1</td>
       <td>Round total = 0 / Total score = 0 / Player 1 begins</td>
   </tr>
   <tr>
       <td>When a player's total score reaches 100 or more, game ends and winner page shows </td>
       <td>Player 1 total score = 100</td>
       <td>Winner page</td>
   </tr>
</table>

### Prerequisites
You need a web browser installed on your machine to run this program. 

### Setup and Installation
1. Clone the repo to the local machine
2. Cd into the folder named Pig-Dice
3. Open the index.html on your favorite browse

## Live Site
Alternatively you can visit a live link [here]()


## Built With

* HTML
* CSS
* JQUERY

## Contacts
For any enquires kindly send an email at [d.n_mwangi@outlook.com](https://outlook.com)

## License

This project is licensed under the MIT License - for more information kindly visit [LICENSE]() 
