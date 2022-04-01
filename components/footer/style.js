import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.second,
        width: '100%',
        minHeight: '18rem',
        borderRadius: '0 100px 0 100px',
        marginTop: '5rem',
        boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`
    },
    footerTitle: {
        fontWeight: 'bold',
        fontSize: '18px',
        margin: '3.7rem 0 0 0',
        color: '#ffa144'
    },
    footerDescription: {
        color: theme.palette.fourth,
        margin: '1rem 2rem 0 0',
        fontSize:'14px',
        width: '60%'
    },
    footerTitle1: {
        color: theme.palette.fourth,
        marginTop: '0.4rem',
        transition: '0.3s',
        '&:hover': {
            cursor: 'pointer',
            color: '#ffa144'
        }
    },
    footerDivider: {
        backgroundColor: theme.palette.fourth,
        filter: 'opacity(0.2)',
        margin: '3rem auto 0 auto',
        width: '70%'
    },
    footerLogo: {
        width: '150px',
        height: '150px',
        transition: '0.3s',
        marginTop: '1rem',
        marginRight: '0.5rem'     
    },
    socialIcon: {
        width: '25px',
        height: '25px',
        margin: '1rem 1rem -2rem 0',
        filter: 'grayscale(100%)',
        transition: '0.3s',
        '&:hover': {
            filter: 'grayscale(0)',
            cursor: 'pointer',
        }
    },
    copyRightText: {
        [theme.breakpoints.between('0', '600')]: {
            fontSize: '12px',
            position: 'relative',
            bottom: '1rem'
        },
        [theme.breakpoints.between('0', '420')]: {
            width: '300px'
        },
    },
}));

export default useStyle;