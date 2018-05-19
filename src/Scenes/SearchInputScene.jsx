import React, {Component} from 'react';
import TWEEN from '@tweenjs/tween.js';
import Scene from '../Core/Scene';
import * as SceneComps from '../Components/Comps';

import bg from "../assets/img/bg.jpg";

export class SearchInputTween extends Scene {


    lifeInput = {opacity: 1};
    twLifeInput = new TWEEN.Tween(this.lifeInput, this.group).to({opacity: 0.3}, 1000);


    constructor(props) {
        super(props);

        this.initialTween = this.twLifeInput;

    }
}

export class SearchInputScene extends Component {

    scene = this.props.scene;

    render = () => {
        if (!this.props.active) return (<div/>);
        return (
            <div className="black">
                <SceneComps.BackgroundImage opacity={0.7} src={bg}/>
                <div className="content">
                    <SceneComps.LifeInput
                        opacity={this.scene.lifeInput}
                        stage={6}
                        onChange={() => {
                        }}/>
                    <SceneComps.SearchButton
                        onClick={this.scene.end}/>
                </div>
            </div>);
    }
}