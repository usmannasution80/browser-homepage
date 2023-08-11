export default {
  tab : null,
  render : () => 0,
  navigate(tab){
    this.set('tab', tab);
  },
  set(key, value){
    this[key] = value;
    this.render();
  },
  strg(key, value){
    if(value === undefined)
      return window.localStorage.getItem(key);
    window.localStorage.setItem(key, value);
    window.dispatchEvent(new Event('storage'));
  },
  dstrg(key){
    window.localStorage.removeItem(key);
    window.dispatchEvent(new Event('storage'));
  }
}