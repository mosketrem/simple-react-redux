import React, { Component } from "react";
import { connect } from "react-redux";
import TextInput from './TextInput';


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextInput: (name, text) => {
            dispatch({
                type: "TEXT",
                payload: {name, text}
            })
        },
        setMulti: (event) => {
            dispatch({
                type: "MULTISELECT",
                payload: {name: event.target.name, checked: event.target.checked}
            })
        },
        setSingle: (event) => {
            dispatch({
                type: "SINGLESELECT",
                payload: {name: event.target.name, checked: event.target.checked}
            })
        },
        handleSubmit: (event) => {
            dispatch({
                type: "RESET",
                payload: {event}
            })
        }
    }
}

const isChecked = (name, prop) => {
    return name === prop
}

const showReset = (p) => {
    return p.multi1 || p.multi2 || p.multi3 ||
            p.input1 !== "" || p.input2 !== "" || p.single
}

class App extends Component {

  render () {
      let textInputs = [
        <TextInput name="input1" key="input1" value={this.props.input1} handler={this.props.setTextInput} />,
        <TextInput name="input2" key="input2" value={this.props.input2} handler={this.props.setTextInput} />
      ];

    return (
        <div>
            <form onSubmit={this.props.handleSubmit}>
                {textInputs}
                <div>
                    <h3>Fruits</h3>
                    <label>
                        <input type="checkbox" name="multi1" checked={this.props.multi1} onChange={this.props.setMulti} />Kiwi</label>
                    <label>
                        <input type="checkbox" name="multi2" checked={this.props.multi2} onChange={this.props.setMulti} />Jackfruit</label>
                    <label>
                        <input type="checkbox" name="multi3" checked={this.props.multi3} onChange={this.props.setMulti} />Mango</label>
                </div>
                <div>
                    <h3>Animals</h3>
                    <label>
                        <input type="checkbox" name="single1" checked={isChecked("single1", this.props.single)} onChange={this.props.setSingle} />Tiger</label>
                    <label>
                        <input type="checkbox" name="single2" checked={isChecked("single2", this.props.single)} onChange={this.props.setSingle} />Sloth</label>
                    <label>
                        <input type="checkbox" name="single3" checked={isChecked("single3", this.props.single)} onChange={this.props.setSingle} />Cheetah</label>
                </div>
                { showReset(this.props) ? <input type="submit" value="Reset" /> : null }
            </form>
        </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);