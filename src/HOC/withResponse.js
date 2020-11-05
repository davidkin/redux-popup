import React from 'react';
import { useMediaQuery } from 'react-responsive';

const withResponse = (Component) => (props) => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 768px)' });

  return <Component {...props} isMobileScreen={isMobileScreen} />;
};

export default withResponse;
