import React, { Component } from 'react';
import TWEEN from '@tweenjs/tween.js';
import Scene from '../Core/Scene';
import * as SceneComps from '../Components/Comps';
import { IntroMusic } from '../Components/Audio';

import bg from "../assets/img/bg.jpg";

export class InputTween extends Scene {

    background = {opacity: 0};
    lifeInput = {opacity: 0};
    twLifeInput = new TWEEN.Tween(this.lifeInput, this.group).to({opacity: 1}, 1500);
    twBackground = new TWEEN.Tween(this.background, this.group).to({opacity: "+0.1"}, 300);

    constructor(props) {
        super(props);

        this.initialTween = this.twLifeInput;
    }
}

export class InputScene extends Component {

    maxInputLength = 6;

    scene = this.props.scene;

    state = { sequence: 0 }

    render = () => {
        if (!this.props.active) return (<div />);
        return (
            <div className="black">
                <SceneComps.BackgroundImage opacity={this.scene.background.opacity}
                    src={bg} />
                <div className="content">
                    <SceneComps.LifeInput
                        opacity={this.scene.lifeInput.opacity}
                        stage={this.state.sequence}
                        onChange={this.userTypingAction}
                    />
                </div>
            </div>);
    }

    userTypingAction = () => {
        this.scene.twBackground.start();

        if (this.state.sequence >= this.maxInputLength) {
            this.scene.end();
        }

        if (this.state.sequence === 1) {
            var a = new IntroMusic();
            a.play();
        }

        this.setState({
            sequence: this.state.sequence + 1
        });


    }
}