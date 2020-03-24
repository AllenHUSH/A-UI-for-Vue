import Card from './Card/index.js';
import Button from './Button/index.js';
import Link from './Link/index.js';
import Icon from './Icon/index.js';
import '../assets/index.styl';
import '../assets/iconfont.js';

const components = [
    Card,
    Button,
    Link,
    Icon
];

const install = function (Vue) {
    components.forEach(elem => {
        Vue.component(elem.name, elem);
    })
}
export default install;