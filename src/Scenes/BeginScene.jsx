import React, { Component } from 'react';
import TWEEN from '@tweenjs/tween.js';
import Scene from '../Core/Scene';
import * as SceneComps from '../Components/Comps';

export class BeginTween extends Scene {


    bgFadeIn = {opacity: 0};
    twBgFadeIn = new TWEEN.Tween(this.bgFadeIn, this.group).to({opacity: 1}, 3000);


    constructor(props) {
        super(props);

        this.initialTween = this.twBgFadeIn;

        this.twBgFadeIn.onComplete(this.end);
    }
}

export class BeginScene extends Component {

    scene = this.props.scene;

    render = () => {
        if (!this.props.active) return (<div />);
        return (
            <div>
                <SceneComps.BackgroundImage opacity={this.scene.bgFadeIn.opacity} />
            </div>);
    }
}
