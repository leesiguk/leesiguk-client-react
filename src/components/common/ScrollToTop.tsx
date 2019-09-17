import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const ScrollToTop: React.FC<RouteComponentProps> = ({
  location: { pathname },
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default withRouter(ScrollToTop);
