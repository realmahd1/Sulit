import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.second,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        boxShadow: `0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%), 0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 7%), 0px -20px 33.4px rgb(0 0 0 / 9%)`
    },
    input: {
        borderRadius: '20px',
        marginTop: '4rem',
        width: '65%',
        color: theme.palette.third,
        border: '1px solid #38646f',
        padding: '0.5rem',
        transition: '0.3s',
        '& .MuiInput-underline': {
            borderBottom: 'none !important'
        },
    },
    inputFocused: {
        borderRadius: '20px',
        marginTop: '4rem',
        width: '75%',
        color: theme.palette.third,
        border: '1px solid #38646f',
        padding: '0.5rem',
        transition: '0.3s',
    },
    toggleBtn: {
        width: '6.875rem !important',
        height: '2.1875rem !important',
        margin:'2rem 0 0 0',
        '&:focus':{
            outline: 'none',
        }
    },
    userIcon: {
        width: '26px',
        height:'auto',
    },
    icon:{
        marginLeft:'0.5rem',
        marginTop:'1.5rem',
        width: '20px',
        height:'auto',
    },
    title:{
        marginTop:'1.5rem',
        fontSize:'18px',
        '&:hover':{
            color:'#ffa144'
        }
    },
    footerDivider: {
        backgroundColor: theme.palette.fourth,
        filter: 'opacity(0.2)',
        margin: '3rem auto 0 auto',
        width: '70%'
    },
    authBtn: {
        color: '#ffa144',
        width: '8.6875rem',
        height: '2.4375rem',
        margin: '3rem 0 0 0',
        border: '1px solid #ffa144',
        borderRadius: '5px',
        '&:hover': {
            background: '#ffa144',
            color: '#ffffff'
        },
        marginLeft: '0.5rem',
        transition: '0.3s'
    },
    profileImg: {
        borderRadius: '50%',
        width: '70px',
        height: '70px',
        margin: '1rem 0 0 0'
    },
}));

export default useStyle;