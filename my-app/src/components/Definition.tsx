import * as React from 'react';

// tslint:disable

class Definition extends React.Component{
    public render(){
        return(
            <div className = "lolol__info">
               <br/><br/><br/>
               <p>Expression: {(this.props as any).s_expression}</p>
               <p>Operation: {(this.props as any).s_operation}</p>
               <p>Answer: {(this.props as any).result}</p>
            </div>
        )
    }
}

export default Definition;