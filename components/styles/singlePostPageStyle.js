import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    postDetailParent: {
        backgroundColor: theme.palette.second,
        boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
        width: '55rem',
        minHeight: '20rem',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        [theme.breakpoints.between('1450', '1600')]: {
            width: '50rem',
        },
        [theme.breakpoints.between('1400', '1450')]: {
            width: '48rem',
        },
        [theme.breakpoints.between('1350', '1400')]: {
            width: '46rem',
        },
        [theme.breakpoints.between('1300', '1350')]: {
            width: '45rem',
        },
        [theme.breakpoints.between('1250', '1300')]: {
            width: '41rem',
        },
        [theme.breakpoints.between('1200', '1250')]: {
            width: '39rem',
        },
        [theme.breakpoints.between('1000', '1200')]: {
            width: '35rem',
        },
        [theme.breakpoints.between('960', '1000')]: {
            width: '30rem',
        },
        [theme.breakpoints.between('0', '960')]: {
            width: '95%',
        },
    },
    postImageSection: {
        position: 'relative',
        textAlign: 'center'
    },
    postImage: {
        filter: 'opacity(0.6)',
        borderRadius: '5px',
        width: '55rem',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.between('1450', '1600')]: {
            width: '50rem',
        },
        [theme.breakpoints.between('1400', '1450')]: {
            width: '48rem',
        },
        [theme.breakpoints.between('1350', '1400')]: {
            width: '46rem',
        },
        [theme.breakpoints.between('1300', '1350')]: {
            width: '45rem',
        },
        [theme.breakpoints.between('1250', '1300')]: {
            width: '41rem',
        },
        [theme.breakpoints.between('1200', '1250')]: {
            width: '39rem',
        },
        [theme.breakpoints.between('1000', '1200')]: {
            width: '35rem',
        },
        [theme.breakpoints.between('960', '1000')]: {
            width: '30rem',
        },
        [theme.breakpoints.between('0', '960')]: {
            width: '100%',
            height: '56.2%',
        },
    },
    postHeader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '24px !important',
        [theme.breakpoints.between('0', '360')]: {
            fontSize: '18px !important'
        },
        [theme.breakpoints.between('360', '430')]: {
            fontSize: '20px !important'
        },
    },
    bookmarkIcon: {
        position: 'absolute',
        top: '10%',
        left: '7%',
        transform: 'translate(-50%, -50%)',
    },
    postTextParent: {
        width: '95%',
        overflowX: 'hidden',
        marginTop: '1rem'
    },
    newPostTitle: {
        margin: '9rem 0 0 0rem',
        fontSize: '20px',
        [theme.breakpoints.between('0', '600')]: {
            margin: '5rem 0 0 0 !important',
        },
        [theme.breakpoints.between('400', '600')]: {
            fontSize: '18px'
        },
        [theme.breakpoints.between('0', '400')]: {
            fontSize: '16px'
        },
    },
    postAuthor: {
        margin: '0 1rem 0.2rem 0',
        [theme.breakpoints.between('0', '400')]: {
            fontSize: '14px !important'
        },
    },
    category: {
        fontSize: '14px !important',
        color: theme.palette.fourth,
        marginRight: '1rem !important',
        [theme.breakpoints.between('0', '400')]: {
            fontSize: '12px !important'
        },
    },
    postTime: {
        fontSize: '14px !important',
        color: '#ffa144',
        marginRight: '1rem',
        [theme.breakpoints.between('0', '450')]: {
            fontSize: '12px !important'
        },
    },
    text: {
        fontSize: '14px !important',
        color: theme.palette.fourth,
        marginTop: '0.2rem',
        [theme.breakpoints.between('0', '450')]: {
            fontSize: '12px !important'
        },
    },
    postDivider: {
        backgroundColor: theme.palette.fourth,
        filter: 'opacity(0.2)',
        margin: '2rem auto 0 auto',
        width: '70%'
    },
    commentSection: {
        backgroundColor: theme.palette.second,
        boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
        width: '55rem',
        minHeight: '20rem',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        marginTop: '3rem',
        padding: '0 0 2rem 0',
        [theme.breakpoints.between('1450', '1600')]: {
            width: '50rem',
        },
        [theme.breakpoints.between('1400', '1450')]: {
            width: '48rem',
        },
        [theme.breakpoints.between('1350', '1400')]: {
            width: '46rem',
        },
        [theme.breakpoints.between('1300', '1350')]: {
            width: '45rem',
        },
        [theme.breakpoints.between('1250', '1300')]: {
            width: '41rem',
        },
        [theme.breakpoints.between('1200', '1250')]: {
            width: '39rem',
        },
        [theme.breakpoints.between('1000', '1200')]: {
            width: '35rem',
        },
        [theme.breakpoints.between('960', '1000')]: {
            width: '30rem',
        },
        [theme.breakpoints.between('0', '960')]: {
            width: '95%',
        },
    },
    commentTitle: {
        fontSize: '18px !important',
        margin: '2rem 5% 2rem 0 !important',
        fontWeight: 'bold',
        display: 'flex'
    },
    commentIcon: {
        marginLeft: '0.5rem',
        [theme.breakpoints.between('400', '500')]: {
            width: '18px',
            height: '18px',
        },
        [theme.breakpoints.between('0', '400')]: {
            width: '16px',
            height: '16px',
        },
    },
    noticeText: {
        margin: '2rem 6% 0 0 !important',
        [theme.breakpoints.between('500', '650')]: {
            fontSize: '14px !important'
        },
        [theme.breakpoints.between('0', '500')]: {
            fontSize: '12px !important'
        },
    },
    commentButton: {
        height: '2.5rem',
        width: '10.375rem',
        [theme.breakpoints.between('0', '521')]: {
            marginTop: '1.5rem'
        },
    },
    commentBox: {
        width: '95%',
        minHeight: '11.55rem',
        borderRadius: '5px',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        margin: '1rem 0 1rem 0',
    },
    adminCommentBox: {
        width: '95%',
        minHeight: '11.55rem',
        borderRadius: '5px',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        margin: '1rem 0 1rem 0',
        border: '1px dashed #38646f'
    },
    buttonText: {
        color: '#ffffff !important'
    },
    commentText: {
        margin: '1.5rem 1rem 0 0 !important',
        '& span': {
            background: 'transparent !important',
            color: `${theme.palette.third} !important`
        }
    },
    commentImg: {
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        [theme.breakpoints.between('400', '550')]: {
            width: '50px',
            height: '50px',
        },
        [theme.breakpoints.between('0', '400')]: {
            width: '40px',
            height: '40px',
        },
    },
    replyBox: {
        width: '85%',
        minHeight: '11.55rem',
        borderRadius: '5px',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        margin: '1rem 0 1rem 0',
    },
    adminReplyBox: {
        width: '85%',
        minHeight: '11.55rem',
        borderRadius: '5px',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        margin: '1rem 0 1rem 0',
        border: '1px dashed #38646f'
    },
    loginText: {
        margin: '0 3rem 1rem 0'
    },
    authorImage: {
        borderRadius: '50%',
        width: '90px',
        height: '90px',
        [theme.breakpoints.between('350', '450')]: {
            width: '70px',
            height: '70px',
        },
        [theme.breakpoints.between('0', '350')]: {
            width: '50px',
            height: '50px',
        },
    },
    replyIcon: {
        width: '20px',
        height: '20px',
        [theme.breakpoints.between('0', '400')]: {
            width: '18px',
            height: '18px',
        },
    },
    shortLinkParent: {
        width: '16.875rem',
        height: '2.375rem',
        border: '0.5px solid #cccccc',
        borderRadius: '5px',
        direction: 'ltr',
        paddingLeft: '1rem',
        fontFamily: 'IRANSansX !important',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    shortLinkChildren: {
        fontFamily: 'IRANSansX !important',
        height: '100%',
        color: `${theme.palette.fourth} !important`
    },
    dividerPhone: {
        width: '1px',
        height: '34px',
        margin: '0 0.6rem 0 0',
        backgroundColor: '#cccccc !important'
    },
    phone: {
        marginRight: '0.72rem',
        width: '18px',
        height: '18px'
    },
    noCommentAlert: {
        marginBottom: '2rem',
        [theme.breakpoints.between('410', '500')]: {
            fontSize: '14px !important'
        },
        [theme.breakpoints.between('345', '410')]: {
            fontSize: '12px !important'
        },
        [theme.breakpoints.between('0', '345')]: {
            fontSize: '10px !important'
        },
    },
    worldShortExplanation: {
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
    worldSection: {
        backgroundColor: theme.palette.second,
        width: '27rem',
        minHeight: '10.5rem',
        margin: '2rem 0 0 0',
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
            width: '24rem',
        },
        [theme.breakpoints.between('1300', '1400')]: {
            width: '25rem',
        },
        [theme.breakpoints.between('960', '1000')]: {
            width: '20rem',
        },
        [theme.breakpoints.between('0', '960')]: {
            width: '95%',
        },

    },
    mostviewparent: {
        transition: "0.3s",
        '&:hover': {
            backgroundColor: theme.palette.hover,
            cursor: 'pointer',
            boxShadow: `-4px 3px 2.2px 0px rgb(0 0 0 / 3%), 0 6.7px 5.3px 0px rgb(0 0 0 / 5%), 0 12.5px 10px 0px rgb(0 0 0 / 6%), -8px 7px 17.9px 0px rgb(0 0 0 / 7%), 4px -19px 33.4px 0px rgb(0 0 0 / 9%), -2px 20px 80px 0px rgb(0 0 0 / 12%)`
        }
    },
    worldPostImg: {
        minWidth: '135px',
        borderRadius: '5px',
        height: '90px',
        margin: '1.2rem 5% 1.2rem 0',
        [theme.breakpoints.between('1200', '1500')]: {
            minWidth: '120px',
            height: '67.49px',
        },
        [theme.breakpoints.between('1100', '1200')]: {
            minWidth: '110px',
            height: '73.3px',
        },
        [theme.breakpoints.between('960', '1100')]: {
            minWidth: '80px',
            height: '44.99px',
        },
        [theme.breakpoints.between('600', '960')]: {
            minWidth: '110px',
            height: '73.3px',
        },
        [theme.breakpoints.between('0', '600')]: {
            minWidth: '75px',
            height: '50px',
        },
    },
    postDate: {
        margin: '0 0 0 0.8rem',
        color: theme.palette.primary.main,
        [theme.breakpoints.between('0', '600')]: {
            fontSize: '14px'
        },
    },
    postDate2: {
        marginLeft: '5px',
        [theme.breakpoints.between('0', '600')]: {
            fontSize: '14px'
        },
    },
    newPostHeader: {
        margin: '1.3rem 1.2rem 0 0 !important',
        [theme.breakpoints.between('0', '550')]: {
            fontSize: '14px !important'
        },
        color: '#ffa144',
        lineHeight: '1.4'
    },
    postDateIcon: {
        width: '15px',
        height: '22px',
        marginLeft: '5%',
        [theme.breakpoints.between('0', '600')]: {
            width: '13px',
            height: '20px'
        },
    },
    mostViewDivider: {
        backgroundColor: theme.palette.fourth,
        filter: 'opacity(0.5)',
        margin: '1rem auto 0 auto',
        width: '90%'
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
    categoryTitle: {
        [theme.breakpoints.between('0', '500')]: {
            fontSize: '14px'
        }
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
    dateParent: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: '2rem',
        [theme.breakpoints.between('0', '420')]: {
            marginLeft: '1rem',
        },
    },
    commentInput: {
        width: '90% !important',
        border: '1px solid #38646f',
        backgroundColor: 'transparent',
        padding: '0.8rem',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        '&:focus': {
            outline: '0',
            border: '2px solid #38646f',
        },
        borderRadius: '5px',
        resize: 'vertical',
        color: '#ffffff',
        lineHeight: '1.88',
        margin: '0 auto'
    },
    likeBtn: {
        color: '#ffffff',
        width: '10px',
        height: '10px',
        "&:hover": {
            color: 'red'
        }
    },
    likeCount: {
        fontWeight: 'bold',
        marginRight: '0.2rem',
    },
}));

export default useStyle;