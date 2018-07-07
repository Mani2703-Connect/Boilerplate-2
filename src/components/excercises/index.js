import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//eslint-disable-next-line
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
// eslint-disable-next-line
import DraftsIcon from '@material-ui/icons/Drafts';
import { typography } from 'material-ui/styles';


const styles = {
    Paper: {  padding:20, marginTop:100, marginBottom:100, height: 4000, overflowY: 'auto'   }
}

export default () =>
<Grid container >
    <Grid item sm>
        <Paper style= {styles.Paper}>
           <Typography variant="display1" >
           Welcome
            </Typography>
            <Typography variant="subheading" style={{marginTop: 1000}}  >
           Plese select an exercise from the left! 
            </Typography>
        </Paper>
    
    </Grid>
</Grid>

 
