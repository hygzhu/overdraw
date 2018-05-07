import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import "./canvas.component.css"; // Styles
import { mouseMove, mouseClick, setContext } from "./canvas.action"

const mapStateToProps = (state) => {
    return {
        canvas: state.canvas
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mouseMove: (x, y) => dispatch(mouseMove(x, y)),
        mouseClick: (status) => dispatch(mouseClick(status)),
        setContext: (context) => dispatch(setContext(context))
    }
}

class Canvas extends Component {

    constructor(props){
        super(props);

        this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
        this.handleOnMouseMove = this.handleOnMouseMove.bind(this);
        this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
        this.canvasDraw = this.canvasDraw.bind(this);
    }

    componentDidMount(){
        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');
        this.props.setContext(context);
    }

    handleOnMouseDown(e){
        this.props.mouseClick(true);
    }

    handleOnMouseMove(e){
        const rect = this.refs.canvas.getBoundingClientRect();
        let new_x = e.clientX - rect.left;
        let new_y = e.clientY - rect.top;

        if(this.props.canvas.drawing){
            this.canvasDraw(this.props.canvas.x, this.props.canvas.y, new_x, new_y);
        }
        this.props.mouseMove(new_x, new_y);
    }

    handleOnMouseUp(e){
        this.props.mouseClick(false);
    }

    canvasDraw(x1, y1, x2, y2){
        let context = this.props.canvas.context;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        this.props.setContext(context);
    }

    render() {
        const { } = this.props;

        return (
                <canvas
                ref="canvas"
                className="canvas"
                onMouseDown={this.handleOnMouseDown}
                onMouseMove={this.handleOnMouseMove}
                onMouseUp={this.handleOnMouseUp}/>
            );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Canvas);