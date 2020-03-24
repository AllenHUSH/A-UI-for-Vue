import Button from './Button.vue';
Button.install = Vue => Vue.component(Button.name, Button);
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Button);
}
export default Button;