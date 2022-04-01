import { createTheme } from "@material-ui/core";
const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#38646f',
        },
        background: {
            default: '#181719'
        },
        second: '#1d2637',
        third: '#ffffff',
        fourth: '#cccccc',
        hover:'#171e2b'
    },
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: 'IRANSansX !important',
                fontStyle: 'normal',
                color: '#f3f3f9'
            },
        },
    }

})
export default DarkTheme