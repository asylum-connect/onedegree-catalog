import React from 'react';
import Typography from '@material-ui/core/Typography';

const PrivacyText = () => (
  <Typography variant="body1">
    The AsylumConnect catalog uses Google Analytics with{' '}
    <a
      href="https://support.google.com/analytics/answer/2763052?hl=en"
      target="_blank"
      rel="noopener noreferrer"
    >
      anonymized IP addresses
    </a>{' '}
    to help analyze how visitors use this site. Google Analytics uses cookies,
    which are small text files placed on your computer, to collect standard
    visitor behavior information in an anonymous form. No personally
    identifiable information is collected about you, unless you explicitly
    submit that information on this website. If you would like to opt-out of
    Google Analytics, you may do so by clicking{' '}
    <a
      href="https://tools.google.com/dlpage/gaoptout"
      target="_blank"
      rel="noopener noreferrer"
    >
      here
    </a>
    .
  </Typography>
);

export default PrivacyText;
