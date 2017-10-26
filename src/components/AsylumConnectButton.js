import React from 'react';

import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types'
import classNames from 'classnames';

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';

// Define a custom style for button
const styles = theme => ({
  button: {
    border: '1.7px solid',
    padding: '0 20',
    'border-radius': '50px',
    minHeight: '30px'
  },
  primary: {
    color: theme.palette.primary[500],
    backgroundColor: theme.palette.common.white,
    borderColor: theme.palette.primary[500],
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary[500],
    },
  },
  secondary: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary[500],
    borderColor: theme.palette.secondary[500],
    '&:hover': {
      backgroundColor: theme.palette.secondary[600],
      borderColor: theme.palette.secondary[600],
    },
  },
});

// Custom Button component with variant property
function AsylumConnectButton(props) {
  const { children, classes, className, variant, onClick} = props;

  return (
    <Button className={classNames(
        classes.button,
        {
          [classes.primary]: variant === 'primary',
          [classes.secondary]: variant === 'secondary',
        },
        className,
      )}
      onClick={onClick}
      type="submit"
    >
      {children}
    </Button>
  );
}

AsylumConnectButton.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary','secondary']),
};

// Inject style to Custom Button component
export default withStyles(styles)(AsylumConnectButton);