export default {
  render : () => 0,
  navigate(tab){
    this.set('tab', tab);
  },
  set(key, value){
    this[key] = value;
    this.render();
  },
  tab : null,
}