import Link from './Link.vue';
Link.install = Vue => Vue.component(Link.name, Link);
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Link);
}
export default Link;