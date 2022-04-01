import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    header: {
        background: "url('/images/cover.jpg') no-repeat center center",
        backgroundSize: 'cover',
        height: '700px',
        padding: '25px 0',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: 'inset 0 -800px 500px -500px #181719',
        [theme.breakpoints.between('0', '960')]: {
            padding: '0',
        },
    },
    container: {
        width: '1270px',
        [theme.breakpoints.between('0', '1230')]: {
            width: '100%',
        },
    },
    navParent: {
        width: '52rem',
        display: 'flex',
        [theme.breakpoints.between('1200', '1230')]: {
            width: '48rem',
        },
        [theme.breakpoints.between('1100', '1200')]: {
            width: '46rem',
        },
        [theme.breakpoints.between('1040', '1100')]: {
            width: '42rem',
        },
        [theme.breakpoints.between('1000', '1040')]: {
            width: '40rem',
        },
        [theme.breakpoints.between('960', '1000')]: {
            width: '36rem',
        },
    },
    navItem: {
        paddingLeft: '1.5625rem',
        transition: '0.3s',
        '&:hover': {
            color: '#ffa144'
        }
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
        width: '50%',
        textAlign: 'center',
        [theme.breakpoints.between('0', '600')]: {
            width: '75%',
        },
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
    authBtn: {
        color: '#ffa144',
        width: '8.6875rem',
        height: '2.4375rem',
        margin: '0 0 1rem 0',
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
        [theme.breakpoints.between('400', '550')]: {
            width: '50px',
            height: '50px',
        },
        [theme.breakpoints.between('0', '400')]: {
            width: '40px',
            height: '40px',
        },
        margin: '1rem 0 0.5rem 0'
    },
    divider: {
        backgroundColor: theme.palette.fourth,
        filter: 'opacity(0.2)',
        margin: '2rem auto 0 auto',
        width: '70%'
    },
    headerProfile: {
        backgroundColor: theme.palette.second,
        width: '14.375rem',
        minHeight: '20.875rem',
        paddingBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
    },
    userIcon: {
        width: '26px',
        height: '23px',
        margin: '0 0 0 0.5rem',
    },
    input404: {
        borderRadius: '20px',
        margin: '1rem 0',
        width: '13rem',
        color: theme.palette.third,
        border: '1px solid #38646f',
        padding: '0.5rem',
    },
    notFoundImage: {
        width: '800px',
        height: '450px',
        [theme.breakpoints.between('520', '600')]: {
            width: '711.11px',
            height: '400px',
        },
        [theme.breakpoints.between('440', '520')]: {
            width: '622.22px',
            height: '350px',
        },
        [theme.breakpoints.between('380', '440')]: {
            width: '533.33px',
            height: '300px',
        },
        [theme.breakpoints.between('0', '380')]: {
            width: '444.44px',
            height: '250px',
        },
    },
    notFoundText: {
        fontWeight: 'bold',
        margin: '1rem 0',
        [theme.breakpoints.between('0', '440')]: {
            fontSize: '14px'
        },
    }
}));

export default useStyle;