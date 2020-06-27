import React, { Component } from 'react'
import images from '../../static/assets/images/dice1.png';
import images1 from '../../static/assets/images/dice2.png';
import images2 from '../../static/assets/images/dice3.png';
import images3 from '../../static/assets/images/dice4.png';
import images4 from '../../static/assets/images/dice5.png';
import images5 from '../../static/assets/images/dice6.png';
import images6 from '../../static/assets/images/blank.png';


export default class Dice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dice1: "../../static/assets/images/dice1.png",
            dice2: "../../static/assets/images/dice2.png",
            dice3: "../../static/assets/images/dice3.png",
            dice4: "../../static/assets/images/dice4.png",
            dice5: "../../static/assets/images/dice5.png",
            dice6: "../../static/assets/images/dice6.png",
            winningDice1: "../../static/assets/images/blank.png",
            winningDice2: "../../static/assets/images/blank.png",
            winningDice3: "../../static/assets/images/blank.png",
            winningDice4: "../../static/assets/images/blank.png",
            winningDice5: "../../static/assets/images/blank.png",
            winningDice6: "../../static/assets/images/blank.png",
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
