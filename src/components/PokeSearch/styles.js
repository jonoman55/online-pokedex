import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        height: theme.spacing(6),
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
    },
    searchWrapper: {
        margin: 'auto',
        width: `calc(100% - ${theme.spacing(6 + 6)}px)`, // 6 button + 6 margin
    },
}));