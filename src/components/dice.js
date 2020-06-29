import React, { Component } from 'react'
import Chance from 'chance';

import Image1 from '../../static/assets/images/dice1.png';
import Image2 from '../../static/assets/images/dice2.png';
import Image3 from '../../static/assets/images/dice3.png';
import Image4 from '../../static/assets/images/dice4.png';
import Image5 from '../../static/assets/images/dice5.png';
import Image6 from '../../static/assets/images/dice6.png';
import ImageBlank from '../../static/assets/images/blank.png';

// const weightedDice = {
//     1: 2,
//     2: 5,
//     3: 5,
//     4: 4,
//     5: 2,
//     6: 6
// }
// let times = 0;
// let diceNumbers = [];


export default class Dice extends Component {
    
    constructor(props) {
        super(props);

        

        this.state = {
            dice1: Image1,
            dice2: Image2,
            dice3: Image3,
            dice4: Image4,
            dice5: Image5,
            dice6: Image6,
            winningDice1: ImageBlank,
            winningDice2: ImageBlank,
            winningDice3: ImageBlank,
            winningDice4: ImageBlank,
            winningDice5: ImageBlank,
            winningDice6: ImageBlank,
            howManyDice: 6
        }
        // this.handleClick = this.handleClick.bind(this);
        // this.gettingTheWeightedNumbers = this.gettingTheWeightedNumbers.bind(this);
        // this.settingTheNumberOfTimesToRun = this.settingTheNumberOfTimesToRun.bind(this);
        // this.settingTheImages = this.settingTheImages.bind(this);
    }

    // gettingTheWeightedNumbers() {
    //     let arrayOfObjects = Object.keys(this.weightedDice);
    //     let arrayOfWeights = Object.values(this.weightedDice);
    //     return Chance.weighted(arrayOfObjects, arrayOfWeights);
    // }

    // settingTheNumberOfTimesToRun() {
    //     while (times <= this.howManyDice) {
    //        diceNumbers.push(this.gettingTheWeightedNumbers)
    //        times += 1;
    //     }
    //     return diceNumbers;
    // }

    // settingTheImages() {
    //     let newArray = this.settingTheNumberOfTimesToRun;
    //     newArray.forEach(item => {
    //         if (item === 1 || item === 5) {
                
    //         }
    //     })

    // }





    handleClick() {
            setTimeout(function() {
                let randomNumber1 = Math.floor(Math.random() * 6) + 1;
                let randomNumber2 = Math.floor(Math.random() * 6) + 1;
                let randomNumber3 = Math.floor(Math.random() * 6) + 1;
                let randomNumber4 = Math.floor(Math.random() * 6) + 1;
                let randomNumber5 = Math.floor(Math.random() * 6) + 1;
                let randomNumber6 = Math.floor(Math.random() * 6) + 1;

                document.querySelector(".img1").setAttribute("src",
                    "{Image" + randomNumber1 + "}");

                if (randomNumber1 === 1) {
                    document.querySelector(".w-img1").setAttribute("src",
                    "{Image1}");

                }
                if (randomNumber1 === 5) {
                    document.querySelector(".w-img1").setAttribute("src",
                        "{Imgage5}");
                }

                document.querySelector(".img2").setAttribute("src",
                    "{Image" + randomNumber2 + "}");

                if (randomNumber2 === 1) {
                    document.querySelector(".w-img2").setAttribute("src",
                    "{Image1}");
                }
                if (randomNumber2 === 5) {
                    document.querySelector(".w-img2").setAttribute("src",
                        "{Imgage5}");
                }

                document.querySelector(".img3").setAttribute("src",
                    "{Image" + randomNumber3 + "}");
                if (randomNumber3 === 1) {
                    document.querySelector(".w-img3").setAttribute("src",
                    "{Image1}");
                }
                if (randomNumber3 === 5) {
                    document.querySelector(".w-img3").setAttribute("src",
                        "{Imgage5}");
                }

                document.querySelector(".img4").setAttribute("src",
                    "{Image" + randomNumber4 + "}");
                if (randomNumber4 === 1) {
                    document.querySelector(".w-img4").setAttribute("src",
                    "{Image1}");
                }
                if (randomNumber4 === 5) {
                    document.querySelector(".w-img4").setAttribute("src",
                        "{Imgage5}");
                }

                document.querySelector(".img5").setAttribute("src",
                    "{Image" + randomNumber5 + "}");
                if (randomNumber5 === 1) {
                    document.querySelector(".w-img5").setAttribute("src",
                    "{Image1}");
                }
                if (randomNumber5 === 5) {
                    document.querySelector(".w-img5").setAttribute("src",
                        "{Imgage5}");
                }

                document.querySelector(".img6").setAttribute("src",
                    "{Image" + randomNumber6 + "}");
                if (randomNumber6 === 1) {
                    document.querySelector(".w-img6").setAttribute("src",
                        "{Image1}");
                }
                if (randomNumber6 === 5) {
                    document.querySelector(".w-img6").setAttribute("src",
                        "{Imgage5}");
                }
            }, 2500);
        }
      


    render() {
        return (
            <div className="game-wrapper">
                <div className="title">
                    New Dice Game
                </div>
                <div className="rolling-number-wrapper">
                    <img clasName="img1" src={Image1}></img>
                    <img clasName="img2" src={Image2}></img>
                    <img clasName="img3" src={Image3}></img>
                    <img clasName="img4" src={Image4}></img>
                    <img clasName="img5" src={Image5}></img>
                    <img clasName="img6" src={Image6}></img>
                </div> 
                <div className="winning-numbers-wrapper">
                    <img clasName="w-img1" src={this.state.winningDice1}></img>
                    <img clasName="w-img2" src={this.state.winningDice2}></img>
                    <img clasName="w-img3" src={this.state.winningDice3}></img>
                    <img clasName="w-img4" src={this.state.winningDice4}></img>
                    <img clasName="w-img5" src={this.state.winningDice5}></img>
                    <img clasName="w-img6" src={this.state.winningDice6}></img>
                </div>

                <button type="button" onClick={this.handleClick}>Roll</button>
                
            </div>
        )
    }
}
