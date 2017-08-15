import React, { Component } from 'react';
import './App.css';

const shortHeader = <h2>My Short Message</h2>;
const longHeader = <h1>My Message</h1>;

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: props.initialMessage,
            color: props.initialColor,
            fontSize: props.initialFontSize,
            backgroundColor: props.initialBackgroundColor,
            fontFamily: props.initialFontFamily
        }
    }

    handleChange({ name, value }) {
        this.setState({
            [name]: value,
        });
    }

    render() {

        const header = this.state.message.length < 20 ? shortHeader : longHeader;

        return (
            <div>
                {header}
                <div>
                    <label>
                        Message:
            <input name="message" value={this.state.message}
                            onChange={({ target }) => this.handleChange(target)} />
                    </label>
                    <label>
                        Font Color:
            <input name="color" value={this.state.color} type="color"
                            onChange={({ target }) => this.handleChange(target)} />
                    </label>
                    <label>
                        Font size:
              <input name="fontSize" value={this.state.fontSize} type="font-size"
                            onChange={({ target }) => this.handleChange(target)} />
                    </label>
                    <label>
                        Background Color:
              <input name="backgroundColor" value={this.state.backgroundColor} type="background-color"
                            onChange={({ target }) => this.handleChange(target)} />
                    </label>
                    Font Family:
              <label>
                        <input name="fontFamily" value={this.state.fontFamily} type="font-family"
                            onChange={({ target }) => this.handleChange(target)} />
                    </label>
                </div>
                <div className="display" style={{
                    color: this.state.color,
                    fontSize: this.state.fontSize,
                    backgroundColor: this.state.backgroundColor,
                    fontFamily: this.state.fontFamily
                }}>
                    {this.state.message}
                </div>
            </div>
        );
    }
}

export default App;
