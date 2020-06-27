import React, { Component } from 'react'
import Image1 from '../../static/assets/images/dice1.png';
import Image2 from '../../static/assets/images/dice2.png';
import Image3 from '../../static/assets/images/dice3.png';
import Image4 from '../../static/assets/images/dice4.png';
import Image5 from '../../static/assets/images/dice5.png';
import Image6 from '../../static/assets/images/dice6.png';
import ImageBlank from '../../static/assets/images/blank.png';


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
        }
    }
    render() {
        return (
            <div className="game-wrapper">
                <div className="rolling-number-wrapper">
                    <img src={this.state.dice1} height={100} width={100}></img>
                    <img src={this.state.dice2}></img>
                    <img src={this.state.dice3}></img>
                    <img src={this.state.dice4}></img>
                    <img src={this.state.dice5}></img>
                    <img src={this.state.dice6}></img>
                </div> 
                <div className="winning-numbers-wrapper">
                    <img src={this.state.winningDice1}></img>
                    <img src={this.state.winningDice2}></img>
                    <img src={this.state.winningDice3}></img>
                    <img src={this.state.winningDice4}></img>
                    <img src={this.state.winningDice5}></img>
                    <img src={this.state.winningDice6}></img>
                </div>
                
            </div>
        )
    }
}
