// create class to represent a class (whatever you please)
// then add properties called constructors
// then set properties (this.(whatever the property is)

class Player {
    constructor (name, position) {
        this.name = name;
        this.position = position;
    }
// add describe to detail player 
    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}

// create class to represent a class (whatever you please)
// then add properties called constructors
// then set array to hold players on team(this.(whatever the property is)

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

// create class to represent a class (whatever you please)
// then add properties called constructors
// then set array to hold players on team(this.(whatever the property is)
// add method to hold player (check to see if player is a player in instance class [push = array])
    addPlayers(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            // put in an error message to tell someone if they did something wrong)
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}
// create menu class. it drives application and all choices
class Menu {
    constructor() {
        // initialize all teams
        this.teams = [];
        this.selectedTeam = null;
    }
// start building menu (top down method) start creating menu how you think it should look
    start () {
        let selection = this.showMainMenuOptions();

        // use the while variable (this us to see what selection the user has chosen)
        while (selection != 0) {
        // use the switch to know what to do once they make a specific selection
            switch (selection) {
                case `1`:
                    this.createTeam();
                    break;
                case `2`:
                    this.viewTeam();
                    break;
                case `3`:
                    this.deleteTeam();
                    break;
                case `4`:
                    this.displayTeams();
                    break;
        // default is if they select anything else it is set to nothing)
                default:
                    selection = 0;
            }
        // we need to have a looped selection as long as they don't select 0 or select something outside of 1 thru 4
            selection = this.showMainMenuOptions();
        }
        // if they select 0 an alert will tell them goodbye
        alert('Goodbye!');
    }

    // program methods for application options
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new team
            2) view team
            3) delete team
            4) display all teams
        `);
    }
    
    showTeamMenuOptions(teamInfo) {
        return prompt(`
            0) back
            1) create player
            2) delete player
            ---------------
            ${teamInfo}
        `);
    }

    // we need to build a string with the information for team so it can be displayed in a prompt or message box
    // now list the teams that exist this. (teams))

    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            // use += i (index) to identify each team
            // grab all teams for iteration i ([i])
            // creates a new line ('\n')
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        //alert so we can see the teams
        alert(teamString);
    }
    // create name so the user can create the team name
    createTeam() {
        let name = prompt('Enter name for new team:');
        // this allows the name to be pushed into the array 
        this.teams.push(new Team(name));
    }
    // view the description of a specific team
    viewTeam() {
      let index = prompt('Enter the index of the team you wish to view');
      //validate the user input because the user can be unpredictable *prevent crashes)
      if (index > -1 && index < this.teams.length) {
        this.selectedTeam = this.teams[index];
        // build a description for the team to print out
        let description = 'Team Name: ' + this.selectedTeam.name + '\n';

        for (let i = 0; i < this.selectedTeam.players.length; i++) {
            description += i + ') ' + this.selectedTeam.players[i].name 
                + ' - ' + this.selectedTeam.player[i].position + '\n';
        }
        // show team options and display them for the team
        // sub section for the user to create a player and delete players
        let selection = this.showTeamMenuOptions(description)
        switch(selection) {
            case '1':
                this.createTeamPlayer();
                break;
            case '2':
                this.deletePlayer();
        }

      }
    }

    // same code as deletePlayer code
    deleteTeam() {
        let index = prompt('Enter the index of the team you wish to delete:');
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

    // add it outside the method
    // can create a player and push it to the team
    // selectedTEam helps us reference it without having to call it
    createPLayer() {
        let name = prompt('Enter name for new player:');
        let position = prompt('Enter position for new player:');
        this.selectedTeam.players.push(new Player(name, position));
    }
    
    // validate the code with the if array  
    deletePlayer() {
        let index = prompt('Enter the index of the player you wish to delete:');
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.splice(index, 1);
        }
    }
}

// create instance so that the menu can work
let menu = new Menu();
// menu that shows everything
menu.start();
