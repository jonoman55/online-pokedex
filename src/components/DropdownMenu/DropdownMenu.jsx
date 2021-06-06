import React from 'react';
import { FormControl, Select, MenuItem, InputLabel, Input } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(gen, theme) {
    return {
        fontWeight:
            gen ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
};

// TODO : Fix the issue where the current selection disappears if you click out of the dropdown menu
export default function DropdownMenu({ genList, onChange }) {
    const [gen, setGen] = React.useState('Generation 1');
    const classes = useStyles();
    const theme = useTheme();

    const handle = async (e) => {
        setGen(e.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id='dropdown-menu-label'>Gen Selector</InputLabel>
                <Select
                    labelId='dropdown-menu-label'
                    id='dropdown-menu'
                    value={gen}
                    onClick={handle}
                    onChange={onChange}
                    input={<Input />}
                    MenuProps={MenuProps}
                >
                    {genList.map((g, i) => (
                        <MenuItem key={i} value={g} style={getStyles(g, theme)}>
                            {g}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

