import React, { Component } from 'react';

export class LifeInput extends Component {

    icons = [
        "child_friendly",
        "school",
        "face",
        "work",
        "people",
        "favorite"
    ]

    state = {
        inputValue: ""
    }

    componentDidMount = () => {
        this.inputChange();
    }

    inputChange = () => {
        if (this.props.stage <= this.icons.length) {

            let inputText = "";
            for (let i=0; i<this.props.stage; i++) {
                inputText += this.icons[i]
            }

            this.setState({
                inputValue: inputText
            });
            this.props.onChange();
        }
    }

    render = () => {
        return (<input value= {this.state.inputValue }
            onChange={ this.inputChange }
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            disabled={ this.props.disabled }
            style={{ opacity: this.props.opacity }}
        />);
    }
}

export const BackgroundImage = (props) => {
    return (
    <div className="background"
        style={
            {
                backgroundImage: 'url(' + props.src + ')',
                opacity: props.opacity
            }
        }
    />
    )
}

export const SearchButton = (props) => {
    return (
    <input onClick={ props.onClick }
        style= {{ opacity: props.opacity }}
        type="button"
        value="search" />
    )
}