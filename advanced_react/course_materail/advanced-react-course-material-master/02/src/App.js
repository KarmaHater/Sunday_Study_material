import "./index.css";
import React, { Component } from "react";
import FaPlay from "react-icons/lib/fa/play";
import FaPause from "react-icons/lib/fa/pause";
import FaForward from "react-icons/lib/fa/forward";
import FaBackward from "react-icons/lib/fa/backward";

class RadioGroup extends Component {
    state = {
        isActive: this.props.defaultValue
    };

    onSelect = value => {
        this.setState({
            isActive: value
        });
    };

    render() {
        const children = React.Children.map(
            this.props.children,
            (child, index) => {
                return React.cloneElement(child, {
                    isActive: this.state.isActive === child.props.value,
                    onSelect: this.onSelect
                });
            }
        );

        return (
            <fieldset className="radio-group">
                <legend>{this.props.legend}</legend>
                {children}
            </fieldset>
        );
    }
}

class RadioButton extends Component {
    render() {
        const { isActive } = this.props; // <-- should come from somewhere
        const className = "radio-button " + (isActive ? "active" : "");

        return (
            <button
                className={className}
                onClick={() => this.props.onSelect(this.props.value)}
            >
                {this.props.children}
            </button>
        );
    }
}

const App = () =>
    <div>
        <RadioGroup defaultValue="pause" legend="Radio Group">
            <RadioButton value="back"><FaBackward /></RadioButton>
            <RadioButton value="play"><FaPlay /></RadioButton>
            <RadioButton value="pause"><FaPause /></RadioButton>
            <RadioButton value="forward"><FaForward /></RadioButton>
        </RadioGroup>
    </div>;

export default App;
