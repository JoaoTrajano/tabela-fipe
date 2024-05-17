import React from "react";
import {
  Stack,
  Select as SelectMui,
  MenuItem,
  FormControl,
} from "@mui/material";

import InputLabel from "@mui/material/InputLabel";

interface SelectProps {
  label: string;
  list: any[];
  field: string;
  handleChange: (f: any, e?: any) => void;
}

const Select = ({
  label,
  list,
  field,
  handleChange,
}: SelectProps): JSX.Element => {
  return (
    <Stack>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <SelectMui
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          label={label}
          onChange={(e: any) => handleChange(field, e?.target?.value)}
        >
          {list.map((item, index) => {
            return (
              <MenuItem key={index} value={item.codigo}>
                {item.nome}
              </MenuItem>
            );
          })}
        </SelectMui>
      </FormControl>
    </Stack>
  );
};

export default Select;
