import AsyncComponent from './async-component/async-component.vue';

AsyncComponent.install = function(Vue) {
  Vue.component(AsyncComponent.name, AsyncComponent);
};

export default AsyncComponent;