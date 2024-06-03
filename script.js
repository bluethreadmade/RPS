//      a prompt will ask if I want to be R P or S
//      if i enter anything else it will tell me that that is invalid
//      the computer will randomly generate an R P or S
//      the computer will display if I win or lose
// the computer will ask if I want to play again or finish playing (no matter win or lose)
// the computer will display my record - (how many wins losses and ties there were)
// the computer will also display how many time I chose each R P or S

// if input is R P or S - carry on - else display no, try again
// generate random R P S from computer
// nested IFs to say who wins or if it's a draw
// count ifs or increments to track outcomes
// multiple arrays:

//steps - start game, get user weapon, validate user weapon, generate computer weapon, call win/lose, 
//ask play again, if yes play again(start game), if no show stats



// Data
    // wins, losses, Rcount Pcount Scount, weapons
    const globalWeapons = ["R", "P", "S"];
    let play = true;
    // const statistics = [
    //     {
    //         wins: 0,
    //         losses: 0,
    //         ties: 0,
    //     }{
    //         R: 0,
    //         P: 0,
    //         S: 0, S
    //     }];

    const resultsTracking = 
            {
                wins: 0,
                losses: 0,
                ties: 0,
            };

// Functions

while (play) {
    console.log("console working");
    userWeapon = getUserWeapon();
    computerWeapon= generateComputerWeapon();
    result(userWeapon,computerWeapon);


    play = confirm(`Play Again?`);
    
    if (!play){
        alert(`Stats:
        Wins: ${resultsTracking.wins}
        Losses: ${resultsTracking.losses}
        Ties: ${resultsTracking.ties}
        `);
        };

    };

// Get a weapon from the user and check if it's valid
function getUserWeapon(){
    let userWeaponLocal = prompt(`${globalWeapons[0]}, ${globalWeapons[1]} or ${globalWeapons[2]}`);

    if (!globalWeapons.includes(userWeaponLocal)) {
        alert("Invalid choice, try again");
    } else{
        alert("all good");
    }

    return userWeaponLocal;
}

// Generate a weapon for the computer to play and let the user know what it is
function generateComputerWeapon(){
    const computerTurnNum = Math.floor(Math.random() * globalWeapons.length);
    const computerWeaponLocal = globalWeapons[computerTurnNum];

    alert(`Computer plays ${computerWeaponLocal}`);
    return computerWeaponLocal;
}


// Compare user weapon and computer weapon, alert win, lose, or draw
// Check for ties first, then user wins, then use losses
// Keep track of number of wins, losses or ties
function result(userWeapon, computerWeapon){

     if (userWeapon === computerWeapon) {
         resultsTracking.ties ++;
         alert(`It's a tie`);

     } 
     else if (
         (userWeapon === "R" && computerWeapon === "S") || 
         (userWeapon === "P" && computerWeapon === "R") || 
         (userWeapon === "S" && computerWeapon === "P")
       )
       {
            resultsTracking.wins ++; 
            alert(`You win!`); 
     } 
     else 
     {
                resultsTracking.losses ++;
                alert(`Computer wins!`);
     };

     console.log(`${resultsTracking.losses}`)
     return resultsTracking;
 }



// User Interactions



// if (!weapons.includes(input)) {
//     alert("Invalid choice, try again");
// } else{
//     var computerTurn = Math.floor(Math.random() * weapons.length);
//     alert(`${computerTurn}`)
//          if (computerTurn == 0) {
//              alert("R");
//              if (input == "R") {
//                 alert("Draw")
//              } else if (input =="P") {
//                 alert("Player Wins")
//              } else {
//                 alert("Player Loses")
//              }

//          } else {
//              if (computerTurn == 1) {
//                  alert("P");
//                  if (input == "P") {
//                     alert("Draw")
//                  } else if (input =="S") {
//                     alert("Player Wins")
//                  } else {
//                     alert("Player Loses")
//                  }
//              }
//              else {
//                  alert("S");
//                  if (input == "S") {
//                     alert("Draw")
//                  } else if (input == "R") {
//                     alert("Player Wins")
//                  } else {
//                     alert("Player Loses")
//                  }
//               }
//         }
//     }




