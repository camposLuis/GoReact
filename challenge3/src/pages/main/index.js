import React, { Fragment } from 'react';

import Map from '../../components/Map';
import Usermap from '../../components/Usermap';
import Userbar from '../../components/Userbar';

const Main = () => (
  <Fragment>
    <Map />
    <Userbar />
    <Usermap />
  </Fragment>
);

export default Main;
