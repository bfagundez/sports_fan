import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const EditButton = ({onClick}) => (
 <Button animated='vertical' primary size='mini' onClick={onClick}>
    <Button.Content hidden>Edit</Button.Content>
    <Button.Content visible>
      <Icon name='pencil' />
    </Button.Content>
  </Button>
)

export default EditButton;
