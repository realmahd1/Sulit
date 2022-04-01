import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.second,
        width: '48rem',
        margin: '2rem 0',
        minHeight: '12.5rem',
        paddingBottom: '2rem',
        display: 'flex',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.between('0', '830')]: {
            width: '90%',
        },
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
        [theme.breakpoints.between('0', '689')]: {
            margin: '0rem 0 1rem 0',
        },
    },
    nameInput: {
        borderColor: '#38646f',
        marginLeft: '2rem',
        '& input': {
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
    titleInput: {
        borderColor: '#38646f',
        '& input': {
            color: theme.palette.third,
        }, '& fieldset': {
            borderColor: '#38646f'
        },
        width: '85%',
        margin: '1rem 0 3rem 0',
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
        width: '10.375rem',
        marginTop: '2rem',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
    },
    buttonText: {
        color: '#ffffff !important'
    },
    footerDivider: {
        backgroundColor: theme.palette.fourth,
        filter: 'opacity(0.2)',
        margin: '3rem auto 0 auto',
        width: '70%'
    },
    suggestionText: {
        marginTop: '2rem !important',
        lineHeight: '1.88',
        textAlign: 'center',
        width: '95%',
        [theme.breakpoints.between('0', '400')]: {
            fontSize: '14px !important'
        },
    },
    commentInput:{
        width: '90% !important',
        border:'1px solid #38646f',
        backgroundColor:'transparent',
        padding:'0.8rem',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        '&:focus':{
            outline: '0',
            border:'1px solid #ffa144',
        },
        borderRadius: '5px',
        resize:'vertical',
        color:'#ffffff',
        lineHeight: '1.88'
    }
}));

export default useStyle;