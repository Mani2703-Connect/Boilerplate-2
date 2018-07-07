import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { typography } from 'material-ui/styles';
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

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    fontSize: 35,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 25,
  },
}))(TableCell);

let id = 0;
function createData( Name,BMI_Range_from,BMI_Range_to) {
  id += 1;
  return { id, Name,BMI_Range_from,BMI_Range_to  };
}

const data = [
  createData('Underweight', 0,18.5),
  createData('Healthy weight', 18.5, 25),
  createData('Overweight', 25 ,30),
  createData('Obese', 30,35),
 
];



  
     



const styles = theme => ({
  root: {
    flexGrow: 1,width: '100%', height: '100',
    marginTop: theme.spacing.unit * 0,
    

  },
  flex: {
    flex: 1,
  },
  table: {
    minWidth: 100,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}
);


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
        SOULFIT
          </Typography>
        </Toolbar>
      </AppBar>

    </div>
     
   

<Grid container >
    <Grid item sm>
        <Paper style= {styles.Paper}>
      
           <Typography variant="display2" color="secondary" align="center" style={{marginTop: 1}} backgroundcolor="accent2" >
          BODY MASS INDEX (BMI)
            </Typography>
            <Typography variant="display1" style={{marginTop: 15}}  color="primary" >
            What is BMI?
          </Typography>
            <Typography variant="title" style={{marginTop: 15}}>     
           
BMI is used as a screening tool to indicate whether a person is underweight, overweight, obese or a healthy weight for their height.


If a person's BMI is out of the healthy BMI range, their health risks may increase significantly.

BMI values are age-independent and the same for both sexes.


 However, BMI may not correspond to the same degree of fatness in different populations due to different body proportions.
             </Typography>
              </Paper>
    
    </Grid>
</Grid>

<Paper style= {styles.Paper} className={classes.root }>
      <Table className={classes.table} >
      <TableHead>
        <TableRow>
          <CustomTableCell   >Category</CustomTableCell>
          <CustomTableCell numeric>BMI_Range_From</CustomTableCell>
          <CustomTableCell numeric>BMI_Range_To</CustomTableCell>


          </TableRow>
      </TableHead>
      <TableBody>
      {data.map(n => {
          return (
            <TableRow className={classes.row} key={n.id}>
              <CustomTableCell component="th" scope="row">
                {n.name}
              </CustomTableCell>
              <CustomTableCell numeric >{n.BMI_Range_From}</CustomTableCell>
              <CustomTableCell numeric >{n.BMI_Range_To}</CustomTableCell>

              </TableRow>
          );
        })}
      </TableBody>
    </Table>


     

    
  </Paper>


    </MuiThemeProvider>
      </div>
  );
}



abar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(abar);

