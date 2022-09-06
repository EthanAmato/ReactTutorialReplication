import React from 'react';
import ReactDOM from 'react-dom/client';
class ConditionalStyle extends React.Component {
    render() {
      return (
        <div style={{ color: Math.random() < 0.5 ? 'green': 'red' }}>
          How do you like this?
        </div>
      );
    }
  }

  export default ConditionalStyle
  