import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        height: theme.spacing(6),
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
    },
    searchContainer: {
        margin: 'auto',
        width: `calc(100% - ${theme.spacing(6 + 6)}px)`, // 6 button + 6 margin
    },
    notchedOutline: {
        borderColor: 'hsl(0, 0%, 90%) !important'
    },
    focusedOutline: {
        borderColor: 'hsl(11, 89%, 47%) !important'
    },
    cssLabel: {
        color: 'hsl(0, 0%, 0%) !important'
    },
}));