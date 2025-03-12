import React from 'react';
import { useField } from 'formik';
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from '@mui/material';
import * as classes from './select.styles';

interface Props {
  id?: string;
  name: string;
  label?: string;
  options: { value: string; label: string }[];
}

export const MySelectComponent: React.FunctionComponent<Props> = (props) => {
  const { name, label, options } = props;

  const [field, meta] = useField(name);

  return (
    <FormControl error={meta.touched && meta.error ? true : false}>
      <InputLabel id={props.id || props.name}>{label}</InputLabel>
      <Select
        className={classes.select}
        labelId={props.id || props.name}
        {...field}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error ? (
        <FormHelperText>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};
