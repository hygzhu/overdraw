import React, { Component } from 'react';
import { connect } from "react-redux";
import "./canvas.component.css"; // Styles
import { mouseMove } from "./canvas.action"

const mapStateToProps = (state) => {
    return {
        lobby: state.canvas
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mouseMove: (x, y) => dispatch(mouseMove(x, y)),
    }
}

class Canvas extends Component {

    constructor(props){
        super(props);

        this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
        this.handleOnMouseMove = this.handleOnMouseMove.bind(this);
        this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
    }

    handleOnMouseDown(e){

    }

    handleOnMouseMove(e){
        console.log("Moved")
        this.props.mouseMove(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }

    handleOnMouseUp(e){

    }

    render() {
        const { } = this.props;

        return (
            <div className="whiteboard">
                <canvas className="canvas"
                onMouseDown={this.handleOnMouseDown}
                onMouseMove={this.handleOnMouseMove}
                onMouseUp={this.handleOnMouseUp}/>
            </div>
            );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Canvas);