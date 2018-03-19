import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import MobileStepper from 'material-ui/MobileStepper';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

import config from '../../config/config.js';
import AsylumConnectButton from '../AsylumConnectButton';

import OrganizationAutocomplete from './OrganizationAutocomplete';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  flex: {display: 'flex'},
  link: {
    color: theme.palette.primary[500],
    cursor: 'pointer',
  },
  paddingVertical: {padding: '2.5rem 6rem'},
  marginBottom: {marginBottom: '2rem'},
  marginBottomLg: {marginBottom: '3rem'},
  spacingTop: {marginTop: '1rem'},
  backgroundTransparent: {backgroundColor: 'transparent'}
});

const SignupForm = ({
  classes,
  email,
  handleBlurOrganizations,
  handleChange,
  handleMessageNew,
  handleOrganizationSearchChange,
  handleOrganizationSelect,
  handleOrganizationsFetchRequested,
  handleOrganizationsClearRequested,
  handleRequestOpen,
  handleSelect,
  handleSubmit,
  history,
  isLoadingOrganizations,
  organizations,
  organizationSearch,
  organizationSelection,
  password,
  passwordConfirmation,
  selection,
}) => (
  <div className={classes.container}>
    {selection === '' && (
      <div className={classes.container}>
        <Typography className={classes.marginBottomLg} type="display3">
          Which are you?
        </Typography>
        <AsylumConnectButton
          className={classes.marginBottom}
          onClick={() => handleSelect('seeker')}
          variant="secondary">
          I am an asylum seeker
        </AsylumConnectButton>
        <AsylumConnectButton
          className={classes.marginBottomLg}
          onClick={() => handleSelect('provider')}
          variant="secondary">
          I am a service provider
        </AsylumConnectButton>
      </div>
    )}
    {selection !== '' && (
      <form className={classes.container} onSubmit={handleSubmit}>
        <TextField
          id="email"
          label={selection === 'seeker' ? 'Email' : 'Organization Email'}
          margin="normal"
          name="email"
          onChange={handleChange}
          required
          type="email"
          value={email}
        />
        <TextField
          error={password.length > 0 && password.length < 8}
          helperText={password.length > 0 && password.length < 8 ? 'Password must be at least 8 characters.' : null}
          id="password"
          label="Password"
          margin="normal"
          name="password"
          onChange={handleChange}
          required
          type="password"
          value={password}
        />
        <TextField
          id="passwordConfirmation"
          label="Confirm Password"
          margin="normal"
          name="passwordConfirmation"
          onChange={handleChange}
          required
          type="password"
          value={passwordConfirmation}
        />
        {selection === 'provider' && (
          <OrganizationAutocomplete
            handleBlurOrganizations={handleBlurOrganizations}
            handleMessageNew={handleMessageNew}
            handleOrganizationSearchChange={handleOrganizationSearchChange}
            handleOrganizationSelect={handleOrganizationSelect}
            handleOrganizationsFetchRequested={
              handleOrganizationsFetchRequested
            }
            handleOrganizationsClearRequested={
              handleOrganizationsClearRequested
            }
            history={history}
            isLoadingOrganizations={isLoadingOrganizations}
            organizationSearch={organizationSearch}
            organizationSelection={organizationSelection}
            organizations={organizations}
          />
        )}
        <Typography type="body1">
          Can't find your organziation? While our Suggest a Resource form is currently under construction, <a href="https://goo.gl/forms/0Joi30DrOqf65duy2" target="_blank">please use this Google Form</a> to suggest new resource(s) for inclusion in the AsylumConnect catalog. Once your organization has been approved by the AsylumConnect team, you will then be able to sign up for a free service provider user account to claim your organization's profile on the live resource catalog.
        </Typography>
        <Typography type="body1" className={classes.paddingVertical}>
          By clicking "Sign Up," you agree to One Degree's{` `}
          <a href="https://www.1degree.org/privacy" target="_blank">
            Privacy Policy
          </a>
          {` `}and{` `}
          <a href="https://www.1degree.org/terms-of-use" target="_blank">
            Terms of Use
          </a>
          .
        </Typography>
        <AsylumConnectButton variant="secondary">Sign Up</AsylumConnectButton>
      </form>
    )}
    {selection === '' && (
      <div onClick={() => handleRequestOpen('login')}>
        <Typography type="body1">
          <span className={classes.link}>Already have an account?</span>
        </Typography>
      </div>
    )}
    <MobileStepper
      className={classes.spacingTop+' '+classes.backgroundTransparent}
      type="dots"
      steps={2}
      position="static"
      activeStep={selection === '' ? 0 : 1}
      nextButton={<div />}
      backButton={<div />}
    />
    {selection !== '' && (
      <div className={classes.flex}>
        <Button dense onClick={() => handleSelect('')}>
          <KeyboardArrowLeft />
          Back
        </Button>
      </div>
    )}
  </div>
);

SignupForm.defaultProps = {
  organizationSelection: null,
};

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  handleBlurOrganizations: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleOrganizationSearchChange: PropTypes.func.isRequired,
  handleOrganizationSelect: PropTypes.func.isRequired,
  handleOrganizationsFetchRequested: PropTypes.func.isRequired,
  handleOrganizationsClearRequested: PropTypes.func.isRequired,
  handleRequestOpen: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  organizations: PropTypes.arrayOf(PropTypes.object).isRequired,
  organizationSearch: PropTypes.string.isRequired,
  organizationSelection: PropTypes.object,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
};

export default withStyles(styles)(SignupForm);
