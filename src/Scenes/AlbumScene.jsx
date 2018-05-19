import React, { Component } from 'react';
import TWEEN from '@tweenjs/tween.js';
import Scene from '../Core/Scene';
import * as SceneComps from '../Components/Comps';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/img/random', false, /\.(png|jpe?g|svg)$/));

export class AlbumTween extends Scene {

    fadeImage = { opacity: 0 };
    imageTw = new TWEEN.Tween(this.fadeImage, this.group)
        .to({ opacity: 1 }, 4000)
        .easing(TWEEN.Easing.Quartic.InOut)
        .yoyo(true)
        .repeat(images.length*2);

    constructor(props) {
        super(props);

        this.initialTween = this.imageTw;
    }
}

export class AlbumScene extends Component {

    scene = this.props.scene;

    currentImage = images[0];
    imageIndex = 0;

    constructor(props) {
        super(props);

        this.scene.imageTw.onComplete(this.changePicture);
    }


    render = () => {
        if (!this.props.active) return (<div />);
        return (
            <div className="black">
                <SceneComps.BackgroundImage
                    opacity={this.scene.fadeImage.opacity}
                    src={images[parseInt((this.scene.imageTw._repeat-1)/2, 10)]} />
            </div>);
    }

    changePicture = () => {

        this.scene.imageTw.stop();
        this.scene.imageTw.start(0);
    }
}

