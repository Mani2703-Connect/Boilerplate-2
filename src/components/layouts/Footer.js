import React, { Fragment } from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

import TextField from '@material-ui/core/TextField';


const theme = createMuiTheme({
  overrides: {
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // error: will use the default color
    },
  },
});

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    fontsize: 25,
    marginLeft: theme.spacing.unit*30
    ,
    marginRight: theme.spacing.unit*15,
    marginTop: theme.spacing.unit*5,
    width: 300,
  },
  menu: {
    width: 300,
  },
});

const Genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
 
];

class TextFields extends React.Component {
  state = {
    name: ' ',
    age: 'in digit',
    Number:'',
    Gender: ' ',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
         <TextField
          id="Username"
          label="Username"
          defaultValue=" "
          className={classes.textField}
          margin="normal"
        />

         <TextField
          id="Email id"
          label="Email id"
          defaultValue=" "
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="select-Gender"
          select
          label="Please select your gender"
          className={classes.textField}
          value={this.state.Gender}
          onChange={this.handleChange('Gender')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
                >
          {Genders.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

         <TextField
          id="Age"
          label="Age"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
         <TextField
          id=" Mobile number"
          label=" Mobile Number"
          value={this.state.Number}
          onChange={this.handleChange('Number')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          Enter your weight
          id=" Enter your weight* "
          label="Enter your weight(in kg)* "
          defaultValue= " "
          className={classes.textField}
          margin="normal"
        />
         <TextField
          Enter your Height
          id="Enter your Height*"
          label="Enter your Height(in meter)*"
          defaultValue=" "
          className={classes.textField}
          margin="normal"
        />
          </form>
          
    );
  }
}

 
  
TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);


/*<Paper>
        <Tabs
          value = {0}  
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        </Tabs>
    </Paper>*/