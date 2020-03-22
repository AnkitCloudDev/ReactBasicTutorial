import React, { Component } from 'react';
import propTypes from 'prop-type';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
  constructor(props){
    super(props);
    this.inputElRef=React.createRef();
  }
componentDidMount(){
  this.inputElRef.current.focus();
  console.log(this.context.authenticated);
}
static contextType=AuthContext;
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <AuthContext.Consumer>
          {(context)=>  context.authenticated? <p>Authenticated</p>: <p> Please Log in</p>}      
          </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl)=> {this.inputEl=inputEl}}
          ref={this.inputElRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
       
      </Aux>
    );
  }
 
};
Person.propTypes={
  click: propTypes.func,
  name: propTypes.toString,
  age: propTypes.number,
  changed: propTypes.func
};

export default withClass(Person, classes.Person);
