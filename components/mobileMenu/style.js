import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.second,
        width: '100%',
        borderRadius: '0 0 0 80px',
        height: '5.625rem',
        zIndex: '100',
        top: 0,
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center',
        boxShadow: `0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%), 0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 7%), 0px -20px 33.4px rgb(0 0 0 / 9%)`
    },
    hamburgerIcon: {
        width: '30px',
        marginRight: '1rem',
        position: 'absolute',
    },
    logo: {
        width: '200px',
        height: '200px',
        margin: '0 auto',
        [theme.breakpoints.between('0', '450')]: {
            width: '150px',
            height: '150px',
        },
    },
    hamburgerMenu: {
        width: '20.5rem'
    },
    overlay: {
        height: '100%',
        width: '100%',
        display: 'none',
        position: 'fixed',
        zIndex: '1',
        top: '0',
        left: '0',
        backgroundColor: '#181719',
        backgroundColor: 'rgba(0,0,0, 0.8)',
    },
    overlaycontent: {
        position: 'relative',
        width: '70%',
        textAlign: 'center',
    },
    closebtn: {
        position: 'absolute',
        top: '1.25rem',
        right: '2.8125rem',
        fontSize: '60px',
        cursor: 'pointer',
        color: '#ffffff',
        '&:hover': {
            color: '#ccc'
        },
    },
    searchInput: {
        padding: '15px',
        fontSize: '17px',
        float: 'left',
        width: '80%',
        background: '#ffffff',
        border: '1px solid #38646f',
        transition: '0.3s',
        '& .MuiInput-underline': {
            borderBottom: 'none !important'
        },
        height: '3.05rem',
        borderRadius: '5px 0 0 5px'
    },
    searchIcon: {
        float: 'left',
        width: '3.05rem',
        padding: '15px',
        background: '#ffa144',
        fontSize: '17px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '0px 5px 5px 0px',
        height: '3.05rem',
        [theme.breakpoints.between('0', '350')]: {
            width: '20%',
        },
    },
}));

export default useStyle;