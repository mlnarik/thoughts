import React, { Component } from 'react';
import TWEEN from '@tweenjs/tween.js';
import Scene from '../Core/Scene';
import * as SceneComps from '../Components/Comps';

import bg from "../assets/img/bg.jpg";

export class EndTween extends Scene {

    background = {opacity: 1};
    lifeInput = {opacity: 1};
    twLifeInput = new TWEEN.Tween(this.lifeInput, this.group).to({opacity: 0}, 1500);

    constructor(props) {
        super(props);

        this.initialTween = this.twLifeInput;
    }
}

export class EndScene extends Component {

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
                    />
                    <SceneComps.SearchButton
                        opacity={this.scene.lifeInput.opacity}
                    />
                    <h1>refresh</h1>
                </div>
            </div>);
    }
}