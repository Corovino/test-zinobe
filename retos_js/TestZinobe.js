/*
 *  function that allows you to reverse a string
 *   @params none
 *   return String
 */
let reverseString = (str) => (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
reverseString("hello");

/*
 *  function that orders array numbers
 *   @params{Array} [2, 25, 4, 2, 4, 7]
 *   return Array
 */
const numberTes = [2, 25, 4, 2, 4, 7]
numberTes.sort((a, b) => a - b);

/*
 *  function that orders array object
 *   @params{Array} [{},{}]
 *   return Array
 */

let characteres = [{
        name: 'Homero Simpson',
        age: 53,
        profession: 'nuclear energy operator'
    },
    {
        name: 'Moe Szyslak',
        age: 57,
        profession: 'barman'
    },
    {
        name: 'Montgomery Burns',
        age: 86,
        profession: 'nuclear energy boss'
    },
    {
        name: 'Apu Nahasapeemapetilon',
        age: 45,
        profession: 'owner operator'
    }
];

characteres.sort((a, b) => {
    if (a.name > b.name) return 1;

    if (a.name < b.name) return -1;

    return 0;
});


/*
 *  function that capitalizes a string
 *   @params{String} 
 *   return String
 */

let upperCaseText = text => text.toUpperCase();
upperCaseText("zinobe")

/*
 *  Number Factorial
 *   @params{Number} 
 *   return Number
 */

let factorialize = (num) => {
    if (num === 0 || num === 1) return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}


/*
 *   
 *   @params{Number} 
 *   return Number
 */


class Game {

    constructor() {
        this.stone = 0;
        this.paper = 1;
        this.scissors = 2;
        this.opciones = ["stone", "paper", " scissors"];

        this.userOption;
        this.machineOption = this.getRamdom(0, 2);

        this.userOption = prompt("\nstone: 0\npaper: 1\n scissors: 2", 0)

        alert("The machine select:" + this.opciones[this.machineOption]);
        this.validateOptios();
    }

    getRamdom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    validateOptios() {
        if (this.userOption == this.stone) {

            if (this.machineOption == this.stone) {
                alert("Tie");
            } else if (this.machineOption == this.paper) {
                alert("You lose!");
            } else if (this.machineOption == this.scissors) {
                alert("You win!");
            }

        } else if (this.userOption == this.paper) {

            if (this.machineOption == this.stone) {
                alert("You win!");
            } else if (this.machineOption == this.paper) {
                alert("Tie");
            } else if (this.machineOption == this.scissors) {
                alert("You lose!");
            }

        } else if (this.userOption == this.scissors) {

            if (this.machineOption == this.stone) {
                alert("You lose!");
            } else if (this.machineOption == this.paper) {
                alert("You win!");
            } else if (this.machineOption == this.scissors) {
                alert("Tie");
            }

        } else

        {
            alert("You must choose a number between 0 and 2");
        }
    }

}

let game = new Game()