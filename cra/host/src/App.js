import React from 'react';
import '../../sharedcomponent/styles.css';
import ContentData from './components/contentData/contentData';


const RemoteButton = React.lazy(() => import('remote/Button'));
const Header = React.lazy(() => import('sharedcomponent/Header'));
const Footer = React.lazy(() => import('sharedcomponent/Footer'));

const App = () => (
  <div>
    <React.Suspense fallback="Loading Header ...">
      <Header title='Host' />
    </React.Suspense>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <ContentData 
        title="Test Title"
        name="Test Name"
        text="Test Text"
      />
    <React.Suspense fallback="Loading Footer ...">
      <Footer />
    </React.Suspense>
  </div>
);

export default App;
