import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { blue, purple } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: "linear-gradient(to right,purple,blue)"
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="/" exact>All Students</NavLink>
                <NavLink className={classes.tabs} to="/add" exact>Add Student</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;