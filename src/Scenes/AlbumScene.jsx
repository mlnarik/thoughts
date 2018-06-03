import React, { Component } from 'react';
import TWEEN from '@tweenjs/tween.js';
import Scene from '../Core/Scene';
import Slider from 'react-slick';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/img/album', false, /\.(png|jpe?g|svg)$/)).sort();

export class AlbumTween extends Scene {
    constructor(props) {
        super(props);

        this.initialTween = new TWEEN.Tween(this.bgFadeIn, this.group);
    }
}

export class AlbumScene extends Component {

    settings = {
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: false,
        fade: true,
        cssEase: 'linear'
    };

    play = () => {
        this.slider.slickNext();
    }

    scene = this.props.scene;

    render = () => {
        if (!this.props.active) return (<div />);
        return (
            <div className="album" onClick={this.play}>
                <Slider {...this.settings} ref={slider => (this.slider = slider)} className="animated-slow fadeIn" >
                    {images.map((img, idx) =>
                        <img key={idx} src={img} alt=''/>)
                    }
                    <div className="animated infinite rotate">refresh</div>
                </Slider>
            </div>);
    }
}

