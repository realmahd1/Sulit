import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    noticeBox: {
        background: '#38646f',
        borderRadius: '5px',
        width: '25rem',
        minHeight: '3.125rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.between('0', '460')]: {
            width: '90%',
        },
        boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
    },
    postBox: {
        backgroundColor: theme.palette.second,
        width: '48rem',
        margin: '2rem 0',
        height: '12.5rem',
        display: 'flex',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        transition: '0.3s',
        '&:hover': {
            boxShadow: `${theme.palette.second} 0px 7px 29px 0px`
        },
        [theme.breakpoints.between('550', '830')]: {
            width: '90%',
        },
        [theme.breakpoints.between('460', '550')]: {
            flexDirection: 'column',
            width: '90%',
            height: '28.25rem',
        },
        [theme.breakpoints.between('400', '460')]: {
            flexDirection: 'column',
            width: '90%',
            height: '26.25rem',
        },
        [theme.breakpoints.between('370', '400')]: {
            flexDirection: 'column',
            width: '90%',
            height: '24.25rem',
        },
        [theme.breakpoints.between('330', '370')]: {
            flexDirection: 'column',
            width: '90%',
            height: '22.25rem',
        },
        [theme.breakpoints.between('0', '330')]: {
            flexDirection: 'column',
            width: '95%',
            height: '20.25rem',
        },
    },
    postHeader: {
        margin: '1.2rem 1rem 0 0 !important',
        fontSize: '18px !important',
        [theme.breakpoints.between('390', '436')]: {
            fontSize: '16px !important'
        },
        [theme.breakpoints.between('0', '390')]: {
            fontSize: '14px !important'
        },
    },
    postExplanation: {
        margin: '1rem 1rem 0 0 !important',
        width: '90%',
        color: theme.palette.fourth,
        height: '7rem',
        overflow: 'hidden',
        [theme.breakpoints.between('410', '436')]: {
            fontSize: '14px !important',
            height: '6rem',
        },
        [theme.breakpoints.between('400', '410')]: {
            fontSize: '13px !important',
            height: '5rem',
        },
        [theme.breakpoints.between('331', '400')]: {
            fontSize: '12px !important',
            height: '5rem',
        },
        [theme.breakpoints.between('0', '331')]: {
            fontSize: '11px !important',
            height: '5rem',
        },
    },
    postImageParent: {
        minWidth: '35.15%',
        height: '100%',
        [theme.breakpoints.between('0', '550')]: {
            width: '100%',
        },
    },
    pageTitle: {
        color: '#ffa144',
        fontSize: '24px',
        margin: '3rem 0',
        fontWeight: 'bold',
        [theme.breakpoints.between('0', '400')]: {
            fontSize: '18px !important'
        },
    },
    mostViewPostHeader: {
        color: '#ffa144',
        fontSize: '20px !important',
        margin: '1rem !important',
        maxHeight: '4rem',
        width: '90%',
        wordBreak: 'break-word',
        lineHeight: '1.44',
        overflow: 'hidden',
        [theme.breakpoints.between('0', '550')]: {
            width: '95%',
        },
    },
    mostViewDate: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.between('0', '550')]: {
            margin: '0 0 0.5rem 0.5rem'
        },
    },
    dateIcon: {
        width: '15px',
        [theme.breakpoints.between('420', '500')]: {
            width: '14px',
        },
        [theme.breakpoints.between('0', '420')]: {
            width: '12px',
        },
    },
    postDate: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        paddingLeft: '0.3rem',
        [theme.breakpoints.between('0', '420')]: {
            fontSize: '14px'
        },
    },
    mostViewShortExplanation: {
        color: '#cccccc',
        margin: '0 1rem 0 0 !important',
        width: '90%',
        height: '6rem',
        overflow: 'hidden',
        [theme.breakpoints.between('0', '550')]: {
            width: '95%',
        },
    },
    postNotFoundImage: {
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
    postNotFoundText: {
        fontWeight: 'bold',
        [theme.breakpoints.between('0', '440')]: {
            fontSize: '14px'
        },
    },
    textParent: {
        flexDirection: 'column',
        width: '62.85%',
        [theme.breakpoints.between('0', '550')]: {
            width: '99%',
        },
    },
    mostViewcategoryParent: {
        padding: '0.3rem',
        height: '1.875rem',
        backgroundColor: '#38646f',
        borderRadius: '10px 1px',
        marginRight: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.between('0', '550')]: {
            margin: '0 0.5rem 0.5rem 0'
        },
    },
    category: {
        [theme.breakpoints.between('0', '500')]: {
            fontSize: '14px'
        }
    }
}));

export default useStyle;