import Home from 'components/Home';

export default () => {
  switch(window.web.tab){
    default:
      return <Home/>;
  }
};
