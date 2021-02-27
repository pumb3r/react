
import './App.css';

import Header from './components/header.jsx';
import Nav from './components/Nav.jsx';
import Content from './components/content.jsx';

const App = () => {
  return (
    <div className='app-wapper'>
      <Header />
      <Nav />
      <Content />
    </div>
  );
}


export default App;
