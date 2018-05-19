import React, { Component } from 'react';
import './styles/Main.scss';
import './styles/animate.scss';

function importAll(r) {
  return r.keys().map(r);
}

const indexSpacing = 6;

class Image extends Component {
  images = importAll(require.context('./img/random/', false, /\.(png|jpe?g|svg)$/));
  index = 0;


  constructor(props) {
    super(props);
    this.state = {index: this.images.length};
    this.imageClicked = this.imageClicked.bind(this);
  }

  render() {
    return (
      <div className="Image">
        <header className="header">
        </header>
        <div className="row">
            {this.images.map(i => this.renderImage(i))}

        </div>
      </div>
    );


  }
  renderImage(image) {
    this.index++;

    let item = (
      <div itemID={this.index} className="item animated fadeInRight" onClick={this.imageClicked}>
        <img src={image} alt=""/>
      </div>);

    if (this.index % indexSpacing === indexSpacing - 1)
      return (
        <div>
          <div className="item">
            {this.state.index}
          </div>
          {item}
        </div>
      );
    else
      return (
        item
      );

  }
  imageClicked() {
    this.setState({index: this.state.index-1});
  }
}

export default Image;
