import * as React from 'react';
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';


class Title extends React.Component {
    public render() {
        return (
            <div>
                <CircularProgress  style={{ color: purple[500] }} thickness={7} />
                <h1 className = "title-container__title">Math API</h1>
                <p className = "title-container__subtitle">Select between 4 mathmatical operations and type in a simple mathmatical equation to calculate! </p>
            </div>
        )
    }
}


export default Title