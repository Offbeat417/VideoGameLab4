class Character{
    constructor(name,energy,power, id){
        this.name=name;
        this.energy=energy;
        this.power=power;
        this.id=id;
    }

    display = function(){
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy : ${this.energy} <br> Power: ${this.power}`;
    }

    attack = function(opponent){
        let newEnergy = opponent.energy - this.power;
        opponent.energy=newEnergy;
        opponent.display();
        if (opponent.energy ==0){
            document.getElementById(opponent.id).innerHTML=`You Lose! Loser`;
            document.getElementById(this.id).innerHTML=`You Win! Winner...`;
        }

        // reset = function () {
        //     let defaultEnergy = 100;
        //     c1.energy = defaultEnergy;
        //     c2.energy = defaultEnergy;
        // } failing, close buy still errors out

        
    }
}
//objects
const c1 = new Character("Mario",100,20,"c1");
const c2 = new Character("Bowser",100,32,"c2");

c1.display();
c2.display();