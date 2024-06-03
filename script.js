// Data
const globalWeapons = ["R", "P", "S"];
let play = true;

// wins, losses, Rcount Pcount Scount, weapons
const resultsTracking = 
{
    wins: 0,
    losses: 0,
    ties: 0,
    };

const weaponStats = 
{
    Rock:  0,
    Paper: 0,
    Scissor: 0,
};


// Functions

// While loop, while play is true - run the get the users weapon, generate the computer weapon, run the result function, ask to play again
while (play) {
    userWeapon = getUserWeapon();
    computerWeapon= generateComputerWeapon();
    result(userWeapon,computerWeapon);
    
    play = confirm(`Play Again?`);
    
    // When the answer to Play Again? is cancel, show the statistics
    if (!play){
        alert(`Stats:
        Wins: ${resultsTracking.wins}
        Losses: ${resultsTracking.losses}
        Ties: ${resultsTracking.ties}

        Rock: ${weaponStats.Rock}
        Paper: ${weaponStats.Paper}
        Scissor: ${weaponStats.Scissor}
        `);
    };
    
};

// Get a weapon from the user and check if it's valid
// Incremet user weapon stat
function getUserWeapon(){
    let userWeaponLocal = prompt(`${globalWeapons[0]}, ${globalWeapons[1]} or ${globalWeapons[2]}`);
    userWeaponLocal = userWeaponLocal.toUpperCase();
    
    if (!globalWeapons.includes(userWeaponLocal)) {
        alert("Invalid choice, try again");
        getUserWeapon();
    } 
    else{
        if (userWeaponLocal === "R") {
            weaponStats.Rock ++;            
        } else if(userWeaponLocal === "P") {
            weaponStats.Paper ++;
        } else {
            weaponStats.Scissor ++;
        }
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
// Increment wins, losses or ties
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
    
    
    // Pseudo code
        // a prompt will ask if I want to be R P or S
        // if i enter anything else it will tell me that that is invalid
        // the computer will randomly generate an R P or S
        // the computer will display if I win or lose
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