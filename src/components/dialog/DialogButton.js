import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import AsylumConnectButton from '../AsylumConnectButton';

const styles = (theme) => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4rem',
  },
});

const DialogButton = ({children, classes, handleRequestClose}) => (
    <div className={classes.buttonContainer}>
      <AsylumConnectButton onClick={handleRequestClose} variant="secondary">
        { children }
      </AsylumConnectButton>
    </div>
);

DialogButton.propTypes = {
  classes: PropTypes.shape({
    buttonContainer: PropTypes.string
  }).isRequired,
  children: PropTypes.node.isRequired,
  handleRequestClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(DialogButton);