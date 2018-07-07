import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import logo from '../../../src/SoleFIT_logo.jpg'



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
    // Name of the component ⚛️ / style sheet    
    MuiAppBar: {
      // Name of the rule
      root: {
        // Some CSS
       /* background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        colorBackground: 'Yellow',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',*/
      },
    },
},
});


const styles = {
  root: {
    flexGrow: 1,
  },
     
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};




export function abar (props) {
  const { classes } = props;
  
   

return (

    <div>
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="headline" color="inherit">
        SOLEFIT
          </Typography>
        </Toolbar>
      </AppBar>

    </div>
    
   

<Grid container >
    <Grid item sm>
        <Paper style= {styles.Paper}>
           <Typography variant="display2" color="secondary" align="center" style={{marginTop: 0}} backgroundcolor="accent2" >
         MY PROFILE
            </Typography>

            
            <Typography variant="subheading"   >
           
            </Typography>
        </Paper>
    
    </Grid>
</Grid>

    </MuiThemeProvider>
      </div>
  );
}

abar.propTypes = {
  classes: PropTypes.object.isRequired,

};





export default withStyles(styles)(abar);
 /*        <Typography variant="title" color="inherit" className={classes.flex}>
            Title
            <img src={logo} height="30" width="40" />
          </Typography> */
         // <Button color="inherit">Login</Button>