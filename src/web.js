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
    this.render();
  },
  dstrg(key){
    window.localStorage.removeItem(key);
    this.render();
  }
}