import { createMuiTheme } from "@material-ui/core/styles"
import lightGreen from "@material-ui/core/colors/lightGreen"
const theme = createMuiTheme({

    palette: {
        primary: {
            main: lightGreen[500]
        },
        secondary: {
            main: lightGreen[200]
        }
    }

})

export default theme;