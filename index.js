import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

// estoy creando una clase
class Toggle extends React.Component {
    //llamo a las propiedades
  constructor(props){
    super(props);
    this.state = { color: green };
    // esto lo hago para usar this y set state, si no no podria
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
      // esto me cambia el color
    const newColor = this.state.color == green ? yellow : green;
    //refresca el estado cambiando el color
    this.setState({ color: newColor });
  }
  
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
  				Change color
				</button>
      </div>
    );
  }
}