import * as React from 'react';
import './App.css';

import Definition from './components/Definition';
import Form from './components/Form';
import Title from './components/Title';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


class App extends React.Component {
  state = {
    s_operation: undefined,
    s_expression: undefined,
    result: undefined,
    error: undefined
  }
  getDefinition = async (e: any) => {
    e.preventDefault();
    const operation = e.target.querySelector('[name=age]');
    if (operation){
      console.log(operation.value);
      const expression = e.target.elements.expression.value;
      const api_call = await fetch(`https://newton.now.sh/${operation.value}/${expression}`);
      if (expression && operation){
        const data = await api_call.json();
        console.log(data);
        this.setState({
          s_operation: data.operation as any,
          s_expression: data.expression as any,
          result: data.result as any,
          error: ""
        });

      }
    }
  }
  render() {
    return (
      <div>
        <div className= "wrapper">
          <div className = "main">
            <div className = "container">
              <div className = "row">
                <div className="col-xs-4 title-container">
                  <Title />
                </div>
                  <div className="col-xs-7 form-container">
                    <Form
                    // @ts-ignore 
                    getDefinition = {this.getDefinition}/>
                    <Definition
                    // @ts-ignore
                    s_operation = {this.state.s_operation}
                    // @ts-ignore
                    s_expression = {this.state.s_expression}
                    // @ts-ignore
                    result = {this.state.result}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
