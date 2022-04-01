import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    title1: {
        fontSize: '20px',
        fontWeight: 'bold',
        [theme.breakpoints.between('400', '500')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.between('0', '400')]: {
            fontSize: '16px',
        },
    },
    title2: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '8rem',
        [theme.breakpoints.between('0', '960')]: {
            marginTop: '6rem',
        },
        [theme.breakpoints.between('400', '500')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.between('0', '400')]: {
            fontSize: '16px',
        },
    },
    title3: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '3rem',
        [theme.breakpoints.between('0', '960')]: {
            marginTop: '0',
        },
        [theme.breakpoints.between('400', '500')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.between('0', '400')]: {
            fontSize: '16px',
        },
    },
    title4: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '8rem',
        [theme.breakpoints.between('0', '960')]: {
            marginTop: '0rem',
        },
        [theme.breakpoints.between('400', '500')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.between('0', '400')]: {
            fontSize: '16px',
        },
    },
    main: {
        width: '1270px',
        margin: '4rem auto 0 auto',
        [theme.breakpoints.between('0', '1230')]: {
            width: '100%',
        },

    },
    postImageParent: {
        width: '12.875rem',
        height: '100%',
        [theme.breakpoints.between('0', '550')]: {
            width: '100%',
        },
    },
    postCard: {
        backgroundColor: theme.palette.second,
        width: '33.75rem',
        height: '15rem',
        display: 'flex',
        margin: '2rem 0 0 0',
        borderRadius: '10px',
        boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
        '&:hover': {
            backgroundColor: theme.palette.hover,
            boxShadow: `-4px 3px 2.2px 0px rgb(0 0 0 / 3%), 0 6.7px 5.3px 0px rgb(0 0 0 / 5%), 0 12.5px 10px 0px rgb(0 0 0 / 6%), -8px 7px 17.9px 0px rgb(0 0 0 / 7%), 4px -19px 33.4px 0px rgb(0 0 0 / 9%), -2px 20px 80px 0px rgb(0 0 0 / 12%)`
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
        color: '#ffa144',
        fontSize: '20px !important',
        margin: '1rem !important',
        minHeight: '3rem',
        maxHeight: '6rem',
        width: '16.25rem',
        wordBreak: 'break-word',
        lineHeight: '1.88',
    },
    mostViewPostHeader: {
        color: '#ffa144',
        fontSize: '20px !important',
        margin: '1rem !important',
        minHeight: '4rem',
        maxHeight: '6rem',
        width: '16.25rem',
        wordBreak: 'break-word',
        lineHeight: '1.44',
        [theme.breakpoints.between('0', '550')]: {
            width: '95%',
        },
    },
    shortExplanation: {
        color: '#cccccc',
        margin: '0 1rem 0 0 !important',
        width: '18.25rem',
        height: '6rem',
        overflow: 'hidden'
    },
    mostViewShortExplanation: {
        color: '#cccccc',
        margin: '0 1rem 0 0 !important',
        width: '18.25rem',
        height: '6rem',
        overflow: 'hidden',
        [theme.breakpoints.between('0', '550')]: {
            width: '95%',
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
    newestShortExplanation: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: '34rem',
        height: '40px',
        padding: '1.2rem 1.2rem 0 0 !important',
        display: 'inline-block',
        direction: 'rtl',
        whiteSpace: 'nowrap',
        color: theme.palette.fourth,
        [theme.breakpoints.between('1200', '1300')]: {
            width: '30rem',
        },
        [theme.breakpoints.between('1000', '1200')]: {
            width: '23rem',
        },
        [theme.breakpoints.between('960', '1000')]: {
            width: '20rem',
        },
        [theme.breakpoints.between('750', '960')]: {
            width: '33rem',
        },
        [theme.breakpoints.between('600', '750')]: {
            width: '25rem',
        },
        [theme.breakpoints.between('560', '600')]: {
            width: '22rem',
        },
        [theme.breakpoints.between('500', '560')]: {
            width: '20rem',
            fontSize: '14px !important'
        },
        [theme.breakpoints.between('445', '500')]: {
            width: '18rem',
            fontSize: '14px !important'
        },
        [theme.breakpoints.between('400', '445')]: {
            width: '16rem',
            fontSize: '14px !important'
        },
        [theme.breakpoints.between('375', '400')]: {
            width: '14rem',
            fontSize: '14px !important'
        },
        [theme.breakpoints.between('321', '375')]: {
            width: '13rem',
            fontSize: '12px !important'
        },
        [theme.breakpoints.between('0', '321')]: {
            width: '11rem',
            fontSize: '12px !important'
        },
    },
    newestPostSection: {
        backgroundColor: theme.palette.second,
        width: '48rem',
        minHeight: '10.5rem',
        margin: '3rem 0 6rem 0',
        borderRadius: '10px',
        boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
        [theme.breakpoints.between('1300', '1400')]: {
            width: '47rem',
        },
        [theme.breakpoints.between('1200', '1300')]: {
            width: '46rem',
            marginRight: '2rem'
        },
        [theme.breakpoints.between('1040', '1200')]: {
            width: '38rem',
            marginRight: '2rem'
        },
        [theme.breakpoints.between('1000', '1040')]: {
            width: '36rem',
            marginRight: '2rem'
        },
        [theme.breakpoints.between('960', '1000')]: {
            width: '33rem',
            marginRight: '2rem'
        },
        [theme.breakpoints.between('0', '960')]: {
            width: '90%',
        },
    },
    newestDivider: {
        backgroundColor: theme.palette.fourth,
        filter: 'opacity(0.5)',
        margin: '1rem auto 0 auto',
        width: '90%'
    },
    newestparent: {
        transition: "0.3s",
        '&:hover': {
            backgroundColor: theme.palette.hover,
            cursor: 'pointer',
            boxShadow: `-4px 3px 2.2px 0px rgb(0 0 0 / 3%), 0 6.7px 5.3px 0px rgb(0 0 0 / 5%), 0 12.5px 10px 0px rgb(0 0 0 / 6%), -8px 7px 17.9px 0px rgb(0 0 0 / 7%), 4px -19px 33.4px 0px rgb(0 0 0 / 9%), -2px 20px 80px 0px rgb(0 0 0 / 12%)`
        }
    },
    newestPostImg: {
        minWidth: '135px',
        borderRadius: '5px',
        height: '90px',
        margin: '1.2rem 5% 1.2rem 0',
        [theme.breakpoints.between('1100', '1200')]: {
            minWidth: '110px',
            height: '73.3px',
        },
        [theme.breakpoints.between('960', '1100')]: {
            minWidth: '100px',
            height: '66.6px',
        },
        [theme.breakpoints.between('650', '900')]: {
            minWidth: '110px',
            height: '73.3px',
        },
        [theme.breakpoints.between('500', '700')]: {
            minWidth: '100px',
            height: '66.66px',
        },
        [theme.breakpoints.between('0', '500')]: {
            minWidth: '75px',
            height: '50px',
        },
    },
    showAllText: {
        margin: '2rem 0 1rem 0',
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#38646f',
        fontSize: '18px',
        [theme.breakpoints.between('0', '400')]: {
            fontSize: '16px',
        },
    },
    newestPostHeader: {
        margin: '1.3rem 1.2rem 0 0 !important',
        [theme.breakpoints.between('0', '550')]: {
            fontSize: '14px !important'
        },
        color: '#ffa144',
        lineHeight: '1.4'
    },
    tipsSection: {
        backgroundColor: theme.palette.second,
        width: '27rem',
        minHeight: '10.5rem',
        margin: '3rem 0 6rem 0',
        borderRadius: '10px',
        boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
        [theme.breakpoints.between('1000', '1100')]: {
            width: '21rem',
            margin: '3rem -1rem 6rem 0',
        },
        [theme.breakpoints.between('1100', '1200')]: {
            width: '23rem',
        },
        [theme.breakpoints.between('1200', '1300')]: {
            width: '25rem',
        },
        [theme.breakpoints.between('960', '1000')]: {
            width: '20rem',
        },
        [theme.breakpoints.between('0', '960')]: {
            width: '90%',
        },
    },
    tipsparent: {
        transition: "0.3s",
        '&:hover': {
            backgroundColor: theme.palette.hover,
            cursor: 'pointer',
            boxShadow: `-4px 3px 2.2px 0px rgb(0 0 0 / 3%), 0 6.7px 5.3px 0px rgb(0 0 0 / 5%), 0 12.5px 10px 0px rgb(0 0 0 / 6%), -8px 7px 17.9px 0px rgb(0 0 0 / 7%), 4px -19px 33.4px 0px rgb(0 0 0 / 9%), -2px 20px 80px 0px rgb(0 0 0 / 12%)`
        }
    },
    tipsShortExplanation: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: '15rem',
        height: '40px',
        padding: '0.8rem 1.2rem 0 0 !important',
        display: 'inline-block',
        direction: 'rtl',
        whiteSpace: 'nowrap',
        color: theme.palette.fourth,
        [theme.breakpoints.between('960', '1200')]: {
            width: '12rem',
        },
        [theme.breakpoints.between('750', '960')]: {
            width: '33rem',
        },
        [theme.breakpoints.between('600', '750')]: {
            width: '25rem',
        },
        [theme.breakpoints.between('560', '600')]: {
            width: '22rem',
        },
        [theme.breakpoints.between('500', '560')]: {
            width: '20rem',
            fontSize: '14px !important'
        },
        [theme.breakpoints.between('445', '500')]: {
            width: '18rem',
            fontSize: '14px !important'
        },
        [theme.breakpoints.between('400', '445')]: {
            width: '16rem',
            fontSize: '14px !important'
        },
        [theme.breakpoints.between('375', '400')]: {
            width: '14rem',
            fontSize: '14px !important'
        },
        [theme.breakpoints.between('321', '375')]: {
            width: '13rem',
            fontSize: '12px !important'
        },
        [theme.breakpoints.between('0', '321')]: {
            width: '11rem',
            fontSize: '12px !important'
        },
    },
    dateParent: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: '2rem',
        [theme.breakpoints.between('0', '420')]: {
            marginLeft: '1rem',
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
    newestPostDate: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        paddingLeft: '0.3rem',
        [theme.breakpoints.between('420', '500')]: {
            fontSize: '14px'
        },
        [theme.breakpoints.between('0', '420')]: {
            fontSize: '12px'
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
    categoryParent: {
        padding: '0.3rem',
        height: '1.875rem',
        backgroundColor: '#38646f',
        borderRadius: '10px 1px',
        marginRight: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
        [theme.breakpoints.between('0', '420')]: {
            marginRight: '1rem',
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
        boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
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