import React from 'react';
import { FieldHookConfig, useField } from 'formik';
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from '@mui/material';

interface MySelectComponentProps extends FieldHookConfig<any> {
  label: string;
  options: { value: string; label: string }[];
}

const MySelectComponent: React.FunctionComponent<MySelectComponentProps> = ({
  label,
  options,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <FormControl error={meta.touched && meta.error ? true : false}>
      <InputLabel id={props.id || props.name}>{label}</InputLabel>
      <MuiSelect
        labelId={props.id || props.name}
        {...field}
        {...props}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {meta.touched && meta.error ? (
        <FormHelperText>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default MySelectComponent;
