import { createTheme } from "@material-ui/core";

const rtlTheme = createTheme({
    direction: "rtl",
    palette: {
        primary: {
            main: '#ffa144',
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: 'IRANSansX !important',
                fontStyle: 'normal'
            },
        },
        MuiFormLabel:{
            root:{
                color: '#38646f',
            }
        },
    }

})

export default rtlTheme