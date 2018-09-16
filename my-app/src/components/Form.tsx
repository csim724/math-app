import * as React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });

class Form extends React.Component{
    state = {
        age: 'factor'
    };
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };   
    public render(){
        return(
            // @ts-ignore
            <form onSubmit = {this.props.getDefinition}>
                <FormControl error>
                <InputLabel htmlFor="???">Select</InputLabel>
                <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    name="age"
                >
                    <MenuItem value='factor'>Factor</MenuItem>
                    <MenuItem value='simplify'>Simplify</MenuItem>
                    <MenuItem value='derive'>Derive</MenuItem>
                    <MenuItem value='integrate'>Integrate</MenuItem>
                </Select>
                </FormControl>
                <br/><br/>
                <input type='text' name = 'expression' placeholder = 'input (e.g x^2-1)' title = 'Type mathmatical expression here' autoComplete="off"/>
                <button>Get calculation</button>
            </form>
        )
    }
}
export default Form;