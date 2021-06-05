import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'hsl(0, 0%, 0%)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'hsl(11, 89%, 47%) !important',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'hsl(0, 0%, 90%) !important',
            },
            '&:hover fieldset': {
                borderColor: 'hsl(0, 2%, 60%) !important',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'hsl(11, 89%, 47%) !important',
            },
        },
    },
})(TextField);

export default CssTextField;
