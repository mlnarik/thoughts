import { Component } from 'react';
import TWEEN from '@tweenjs/tween.js';

export default class Scene extends Component{
    isActive = false;
    group = new TWEEN.Group();
    initialTween = undefined;
    chainedScene = undefined;

    start = () => {
        this.isActive = true;
        this.initialTween.start();
    }
    update = () => this.group.update();
    end = () => {
        this.isActive = false;
        if (this.chainedScene) {
            this.chainedScene.start()
        }
    }
    chain = (scene) => {
        this.chainedScene = scene;
    }

}