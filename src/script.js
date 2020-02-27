import lodash from 'lodash';
import './style.css';
import Icon from './assets/images/image-1.png';

function component() {
    const element = document.createElement('div');
    
    element.innerHTML = lodash.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    // add image to div
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
};

document.body.appendChild(component());