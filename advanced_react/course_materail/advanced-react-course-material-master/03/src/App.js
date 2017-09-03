/*
- Make the Play button work
- Make the Pause button work
- Disable the play button if it's playing
- Disable the pause button if it's not playing
- Make the PlayPause button work
- Make the JumpForward button work
- Make the JumpBack button work
- Make the progress bar work
  - change the width of the inner element to the percentage of the played track
  - add a click handler on the progress bar to jump to the clicked spot

Here is the audio API you'll need to use, `audio` is the <audio/> dom nod
instance, you can access it as `this.audio` in `AudioPlayer`

```js
// play/pause
audio.play()
audio.pause()

// change the current time
audio.currentTime = audio.currentTime + 10
audio.currentTime = audio.currentTime - 30

// know the duration
audio.duration

// values to calculate relative mouse click position
// on the progress bar
event.clientX // left position *from window* of mouse click
const rect = node.getBoundingClientRect()
rect.left // left position *of node from window*
rect.width // width of node
```

Other notes about the `<audio/>` tag:

- You can't know the duration until `onLoadedData`
- `onTimeUpdate` is fired when the currentTime changes
- `onEnded` is called when the track plays through to the end and is no
  longer playing

Good luck!
*/

import "./index.css";
import React from "react";
import * as PropTypes from "prop-types";
import podcast from "./podcast.mp3";
import mario from "./mariobros.mp3";
import FaPause from "react-icons/lib/fa/pause";
import FaPlay from "react-icons/lib/fa/play";
import FaRepeat from "react-icons/lib/fa/repeat";
import FaRotateLeft from "react-icons/lib/fa/rotate-left";

class AudioPlayer extends React.Component {
    static childContextTypes = {
        handleClick: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired
    };

    state = { activeButtonIndex: "", disabled: false };

    handleClick = title => {
        debugger;
        this.setState({
            activeButtonIndex: title,
            disabled: title === this.state.activeButtonIndex
        });
    };

    getChildContext() {
        return {
            handleClick: this.handleClick,
            disabled: this.state.disabled
            // activeButtonIndex: this.state.activeButtonIndex
        };
    }

    render() {
        // const children = React.Children.map(
        //     this.props.children,
        //     (child, index) => {
        //         return React.cloneElement(child, {
        //             activeButton: this.props.activeButtonIndex === index,
        //             handleClick: () => this.handleClick,
        //             disabled: false
        //         });
        //     }
        // );

        return (
            <div className="audio-player">
                <audio
                    src={null}
                    onTimeUpdate={null}
                    onLoadedData={null}
                    onEnded={null}
                    ref={n => (this.audio = n)}
                />
                {this.props.children}
            </div>
        );
    }
}

class PlayPause extends React.Component {
    render() {
        return null;
    }
}

class Progress extends React.Component {
    static contextTypes = {
        handleClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="progress" onClick={this.context.handleClick}>
                <div
                    className="progress-bar"
                    style={{
                        width: "23%"
                    }}
                />
            </div>
        );
    }
}

class RadioGroup extends React.Component {
    static contextTypes = {
        handleClick: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired
        // title: PropTypes.string.isRequired
    };

    render() {
        return (
            <button
                className="icon-button"
                onClick={() => this.context.handleClick(this.props.title)}
                disabled={this.context.disabled}
                title={this.props.title}
            >
                {this.props.children}
            </button>
        );
    }
}

const Exercise = () =>
    <div className="exercise">
        <AudioPlayer source={mario}>
            <RadioGroup title="play">
                <FaPlay />
            </RadioGroup>
            <RadioGroup title="pause">
                <FaPause />
            </RadioGroup>
            {" "}
            <span className="player-text">Mario Bros. Remix</span>
            <Progress />
        </AudioPlayer>

        <AudioPlayer source={podcast}>
            <RadioGroup title="play">
                <PlayPause />
            </RadioGroup>
            <RadioGroup title="Back 10 Seconds">
                <FaRotateLeft />
            </RadioGroup>
            <RadioGroup title="Forward 10 Seconds">
                <FaRepeat />
            </RadioGroup>
            {" "}
            <span className="player-text">
                React30 Episode 010: React Virtualized
            </span>
            <Progress />
        </AudioPlayer>
    </div>;

export default Exercise;
