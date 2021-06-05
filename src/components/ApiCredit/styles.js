import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomStyle: 'dashed',
        borderBottomWidth: '1px',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        padding: '15px',
    },
    font: {
        textAlign: 'center',
        fontSize: '1.25rem',
        fontWeight: 'bold',
    },
    icon: {
        padding: '5px',
    },
    link: {
        padding: '5px',
        color: 'hsl(11, 89%, 47%)',
        textDecoration: 'none',
        '&:hover': {
            color: 'hsl(0, 0%, 50%)',
            textDecoration: 'underline',
        },
    },
});