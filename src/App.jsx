import React, { Component } from 'react';
import { BeginTween, BeginScene } from './Scenes/BeginScene';
import { InputTween, InputScene } from './Scenes/InputScene';
import { SearchInputTween, SearchInputScene } from './Scenes/SearchInputScene';
import { AlbumTween, AlbumScene } from './Scenes/AlbumScene';
import { EndTween, EndScene } from './Scenes/EndScene';
import * as SceneComps from './Components/Comps';

import './assets/styles/Main.scss';
import './assets/styles/animate.scss';

class App extends Component {

    constructor(props) {
        super(props);

        setInterval(this.siteLifecycle, 1000 / 60);

        this.state = {
            beginTween: new BeginTween(),
            inputTween: new InputTween(),
            searchInputTween: new SearchInputTween(),
            albumTween: new AlbumTween(),
            endTween: new EndTween(),
        }

        this.state.beginTween.chain(this.state.inputTween);
        this.state.inputTween.chain(this.state.searchInputTween);
        //this.state.searchInputTween.chain(this.state.albumTween);
        this.state.searchInputTween.chain(this.state.endTween);

        this.state.beginTween.start();
    }

    siteLifecycle = () => {
        this.state.beginTween.update();
        this.state.inputTween.update();
        this.state.searchInputTween.update();
        this.state.albumTween.update();
        this.state.endTween.update();

        this.setState({});
    }

    render = () => {
        return (
            <div className="App">
                <SceneComps.IntroMusic />
                <BeginScene active={this.state.beginTween.isActive} scene={this.state.beginTween} />
                <InputScene active={this.state.inputTween.isActive} scene={this.state.inputTween} />
                <SearchInputScene active={this.state.searchInputTween.isActive} scene={this.state.searchInputTween} />
                <AlbumScene active={this.state.albumTween.isActive} scene={this.state.albumTween} />
                <EndScene active={this.state.endTween.isActive} scene={this.state.endTween} />
            </div>
        )
    }

}

export default App;
