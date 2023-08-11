import Routes from 'components/Routes';
import web from 'web';
import {useState} from 'react';

export default () => {
  if(!window.web)
    window.web = web;
  const [render, setRender] = useState(1);
  web.render = () => setRender(render * -1);
  window.onstorage = () => web.render();
  return (
    <Routes/>
  );
};
