import Icon from './Icon.vue';
Icon.install = Vue => Vue.component(Icon.name, Icon);
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Icon);
}
export default Icon;