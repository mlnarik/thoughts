import React, { Component } from 'react';
import TWEEN from '@tweenjs/tween.js';
import Scene from '../Core/Scene';
import Slider from 'react-slick';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/img/album', false, /\.(png|jpe?g|svg)$/));

export class AlbumTween extends Scene {
    constructor(props) {
        super(props);

        this.initialTween = new TWEEN.Tween(this.bgFadeIn, this.group);
    }
}

export class AlbumScene extends Component {

    scene = this.props.scene;

    render = () => {
        let settings = {
            arrows: true,
            dots: true,
            infinite: false,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 50,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            fade: true,
            cssEase: 'linear'
        };

        if (!this.props.active) return (<div />);
        return (
            <div className="album">
                <Slider {...settings}>
                    {images.map((img, idx) => <img key={idx} src={img} alt='' className="slide fadeIn animated" />)}
                </Slider>
            </div>);
    }
}

