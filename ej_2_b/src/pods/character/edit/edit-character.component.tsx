import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { MySelectComponent, TextFieldComponent } from 'common/components';
import { formValidation } from './edit-character.validations';
import { Character } from './character.vm';
import * as classes from './edit-character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const EditCharacterComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <MySelectComponent
            name="status"
            label="Status"
            options={[
              {
                value: 'Alive',
                label: 'Alive',
              },
              {
                value: 'Dead',
                label: 'Dead',
              },
              {
                value: 'unknown',
                label: 'Unknown',
              },
            ]}
          />
          <TextFieldComponent name="species" label="Species" />
          <TextFieldComponent name="type" label="Type" />
          <MySelectComponent
            name="gender"
            label="Gender"
            options={[
              {
                value: 'Female',
                label: 'Female',
              },
              {
                value: 'Male',
                label: 'Male',
              },
              {
                value: 'Genderless',
                label: 'Genderless',
              },
              {
                value: 'unknown',
                label: 'Unknown',
              },
            ]}
          />
          <TextFieldComponent name="bestSentences" label="Best Sentence" />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
