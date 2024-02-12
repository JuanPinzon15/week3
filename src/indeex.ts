class player {
    private team: string = ''
    private position: string = ''
    private goals: number;

    constructor(team: string, position: string, goals: number) {
        this.team = team;
        this.position = position;
        this.goals = goals;
    }

    geTeam(): string {
        return this.team 
    }
    getPosition(): string {
        return this.position
    }
    getGoals(): number {
        return  this.goals
    }
    setGoals(goals: number){
        this.goals= goals
    }

    PlayerInfo(): void {
        console.log(`Team: ${this.team}`);
        console.log(`Position: ${this.position}`);
        console.log(`Goals: ${this.goals}`);

    }
    UpdateGoals(NewGoals: number){
        this.goals= NewGoals
    }

}

let player1 = new player('Real Madrid', 'Striker', 50)

player1.PlayerInfo();

console.log(`Uploading Goals`);
player1.UpdateGoals(50+2);
player1.PlayerInfo();