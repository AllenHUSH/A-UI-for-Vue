import Card from './Card.vue';
Card.install = Vue => Vue.component(Card.name, Card);
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Card);
}
export default Card;