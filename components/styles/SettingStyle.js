import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.second,
        width: '48rem',
        margin: '2rem 0',
        minHeight: '12.5rem',
        display: 'flex',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '2rem',
        [theme.breakpoints.between('0', '830')]: {
            width: '90%',
        },
    },
    profileImg: {
        borderRadius: '50%',
        width: '90px',
        height: '90px',
        margin: '1rem 0 0.5rem 0'
    },
    divider: {
        backgroundColor: theme.palette.fourth,
        filter: 'opacity(0.2)',
        margin: '3rem auto 0 auto',
        width: '70%'
    },
    emailInput: {
        borderColor: '#38646f',
        '& input': {
            direction: 'ltr',
            color: '#cccccc',
        }, '& fieldset': {
            borderColor: '#38646f !important'
        },
        '& label': {
            color: '#38646f !important'
        },
        width: '19.375rem',
        margin: '2rem 0 0 0',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        [theme.breakpoints.between('370', '410')]: {
            width: '17.375rem',
        },
        [theme.breakpoints.between('320', '370')]: {
            width: '15.375rem',
        },
        [theme.breakpoints.between('0', '320')]: {
            width: '12.375rem',
        },
    },
    labelForms: {
        fontFamily: 'IRANSansX',
        fontSize: '14px'
    },
    showNameInput: {
        borderColor: '#38646f',
        '& input': {
            color: theme.palette.third,
        }, '& fieldset': {
            borderColor: '#38646f'
        },
        width: '19.375rem',
        margin: '2rem 0 0 1rem',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        [theme.breakpoints.between('370', '410')]: {
            width: '17.375rem',
        },
        [theme.breakpoints.between('320', '370')]: {
            width: '15.375rem',
        },
        [theme.breakpoints.between('0', '320')]: {
            width: '12.375rem',
        },
        [theme.breakpoints.between('710', '725')]: {
            marginLeft: '1rem',
        },
        [theme.breakpoints.between('698', '710')]: {
            marginLeft: '0.5rem',
        },
        [theme.breakpoints.between('0', '698')]: {
            marginLeft: '0',
        },
    },
    commentButton: {
        height: '2.5rem',
        width: '10.375rem',
        marginTop: '2rem',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
    },
    buttonText: {
        color: '#ffffff !important'
    },
    alertText: {
        fontSize: '14px',
        color: '#ffa144',
        marginTop: '2rem',
        lineHeight: '1.88',
        textAlign: 'center',
        [theme.breakpoints.between('320', '370')]: {
            fontSize: '12px',
        },
        [theme.breakpoints.between('0', '320')]: {
            fontSize: '10px',
        },
    },
}));

export default useStyle;