import { Routing } from 'pages/routing';
import { withRouter } from './hocs/with-router';

import './index.scss';

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return <Routing />;
};

// eslint-disable-next-line react-refresh/only-export-components
export default withRouter(App);
