// Part 1: Build the gameObject function

function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  
  function numPointsScored(playerName) {
    let game = gameObject();
    
    
    for (let teamKey in game) {
      let team = game[teamKey];
      let players = team.players;
      
      
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
    return 0; 
  }
  
  
  function shoeSize(playerName) {
    let game = gameObject();
    

    for (let teamKey in game) {
      let team = game[teamKey];
      let players = team.players;
      
      
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
    return 0; 
  }
  
 
  function teamColors(teamName) {
    let game = gameObject();
    
   
    if (game.home.teamName === teamName) {
      return game.home.colors;
    } else if (game.away.teamName === teamName) {
      return game.away.colors;
    }
    return []; 
  }
  
    function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  
  function playerNumbers(teamName) {
    let game = gameObject();
    let team;
    
    
    if (game.home.teamName === teamName) {
      team = game.home;
    } else if (game.away.teamName === teamName) {
      team = game.away;
    } else {
      return []; 
    }
    
    
    let numbers = [];
    for (let playerName in team.players) {
      numbers.push(team.players[playerName].number);
    }
    
    return numbers;
  }
  
  
  function playerStats(playerName) {
    let game = gameObject();
    
    
    for (let teamKey in game) {
      let team = game[teamKey];
      let players = team.players;
      
      
      if (players[playerName]) {
        return players[playerName];
      }
    }
    return {}; 
  }
  
  
  function bigShoeRebounds() {
    let game = gameObject();
    let biggestShoe = 0;
    let rebounds = 0;
    
    
    for (let teamKey in game) {
      let team = game[teamKey];
      let players = team.players;
      
      
      for (let playerName in players) {
        let player = players[playerName];
        
        
        if (player.shoe > biggestShoe) {
          biggestShoe = player.shoe;
          rebounds = player.rebounds;
        }
      }
    }
    
    return rebounds;
  }
  
  
  function mostPointsScored() {
    let game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints = "";
    
    for (let teamKey in game) {
      let players = game[teamKey].players;
      
      for (let playerName in players) {
        if (players[playerName].points > maxPoints) {
          maxPoints = players[playerName].points;
          playerWithMostPoints = playerName;
        }
      }
    }
    
    return playerWithMostPoints;
  }
  

  function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    
    // Calculate total points for home team
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
    
   
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
    
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  

  function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";
    
    for (let teamKey in game) {
      let players = game[teamKey].players;
      
      for (let playerName in players) {
        if (playerName.length > longestName.length) {
          longestName = playerName;
        }
      }
    }
    
    return longestName;
  }
  

  function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = "";
    

    for (let teamKey in game) {
      let players = game[teamKey].players;
      
      for (let playerName in players) {
        if (players[playerName].steals > mostSteals) {
          mostSteals = players[playerName].steals;
          playerWithMostSteals = playerName;
        }
      }
    }
    
  
    return longestName === playerWithMostSteals;
  }

  console.log("Game Object:", gameObject());
  console.log("Alan Anderson points:", numPointsScored("Alan Anderson"));
  console.log("Reggie Evans shoe size:", shoeSize("Reggie Evans"));
  console.log("Brooklyn Nets colors:", teamColors("Brooklyn Nets"));
  console.log("Team names:", teamNames());
  console.log("Brooklyn Nets player numbers:", playerNumbers("Brooklyn Nets"));
  console.log("Mason Plumlee stats:", playerStats("Mason Plumlee"));
  console.log("Player with biggest shoe's rebounds:", bigShoeRebounds());
  console.log("Player with most points:", mostPointsScored());
  console.log("Winning team:", winningTeam());
  console.log("Player with longest name:", playerWithLongestName());
  console.log("Does player with longest name have most steals?", doesLongNameStealATon());