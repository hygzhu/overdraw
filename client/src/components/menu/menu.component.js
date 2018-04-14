import React, { Component } from 'react';
import { connect } from "react-redux";
import "./menu.component.css"; // Styles
import { multiplayer } from "../game/game.action"; 

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        multiplayer: () => dispatch(multiplayer()),
    }
  }
  

class Menu extends Component  {

    render() {
        const { multiplayer } = this.props
        return (
                <div>
                    <h1 style={{margin: 0}}>Overdraw</h1>
                    <br/>
                    <br/>
                    <h3>Multiplayer</h3>
                    <button onClick={multiplayer}>Play</button>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);