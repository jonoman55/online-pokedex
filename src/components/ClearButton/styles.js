import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    root: {
        background: 'hsl(0, 0%, 89%)',
        border: 0,
        borderRadius: '1rem',
        color: theme.palette.getContrastText(grey[50]),
        width: '2rem',
        height: '2rem',
        textTransform: 'none',
        textAlign: 'center',
        margin: 'auto',
        padding: 'auto',
        fontWeight: '2rem',
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
        backgroundColor: grey[50],
        '&:hover': {
            backgroundColor: grey[300], //#c1bebe
        },
    },
}));