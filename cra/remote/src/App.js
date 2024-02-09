import LocalButton from './Button';
import React from 'react';

const Header = React.lazy(() => import('sharedcomponent/Header'));
const Footer = React.lazy(() => import('sharedcomponent/Footer'));
import '../../sharedcomponent/styles.css';



const App = () => (
  <div>
    <React.Suspense fallback="Loading Header ...">
      <Header title='Remote' />
    </React.Suspense>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <React.Suspense fallback="Loading Footer ...">
      <Footer/>
    </React.Suspense>
  </div>
);

export default App;
