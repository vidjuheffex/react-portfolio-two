import React, {Component} from 'react';

class References extends Component {
  constructor(props){
    super(props);
    this.state = {
      references: [
        {
          name: 'John Doe',
          number: '555-555-5555',
          role: 'Former Boss'
        },
        {
          name: 'John Doe',
          number: '555-555-5555',
          role: 'Former Boss'
        },
        {
          name: 'John Doe',
          number: '555-555-5555',
          role: 'Former Boss'
        }]
    };
  }
  render(){
    let contacts = this.state.references.map((e,i) => {
      return (
        <div style={{padding: 10}}key={i}>
          <p>{e.name}</p>
          <p>{e.number}</p>
          <p>{e.role}</p>
        </div>
      );
    });
    
    return (
      <div>
        <h1>
          References
        </h1>
        {contacts}
      </div>
    );
  }
}

export default References;
