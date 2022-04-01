import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    AuthBox: {
        backgroundColor: theme.palette.second,
        boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
        width: '28.375rem',
        minHeight: '23.75rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.between('450', '500')]: {
            width: '27.375rem',
        },
        [theme.breakpoints.between('440', '450')]: {
            width: '26rem',
        },
        [theme.breakpoints.between('410', '440')]: {
            width: '24rem',
        },
        [theme.breakpoints.between('370', '410')]: {
            width: '22rem',
        },
        [theme.breakpoints.between('320', '370')]: {
            width: '20rem',
        },
        [theme.breakpoints.between('0', '320')]: {
            width: '18rem',
        },
    },
    logo: {
        width: '200px',
        height: '200px',
        marginTop: '-1rem'
    },
    authTitle: {
        fontWeight: 'bold',
        marginTop: '-1.9rem',
        fontSize: '18px !important'
    },
    labelForms: {
        fontFamily: 'IRANSansX',
        fontSize: '14px'
    },
    emailInput: {
        borderColor: '#38646f',
        '& input': {
            direction: 'ltr',
            color: theme.palette.third,
        }, '& fieldset': {
            borderColor: '#38646f'
        },
        width: '19.375rem',
        margin: '2.9rem 0 1rem 0',
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
    commentButton: {
        height: '2.5rem',
        width: '12.375rem',
        margin: '2rem 0 2rem 0',
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
    buttonText: {
        color: '#ffffff !important'
    },
    registerInput: {
        borderColor: '#38646f',
        '& input': {
            direction: 'ltr',
            color: theme.palette.third,
        }, '& fieldset': {
            borderColor: '#38646f'
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
    showNameInput: {
        borderColor: '#38646f',
        '& input': {
            color: theme.palette.third,
        }, '& fieldset': {
            borderColor: '#38646f'
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
    passwordInput: {
        borderColor: '#38646f',
        width: '19.375rem',
        margin: '2.86rem 0 0 0',
        direction: 'ltr',
        '& input': {
            color: theme.palette.third,
        }, '& fieldset': {
            borderColor: '#38646f'
        },
        [theme.breakpoints.between('370', '410')]: {
            width: '17.375rem',
        },
        [theme.breakpoints.between('320', '370')]: {
            width: '15.375rem',
        },
        [theme.breakpoints.between('0', '320')]: {
            width: '12.375rem',
        },
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
    },
}));

export default useStyle;