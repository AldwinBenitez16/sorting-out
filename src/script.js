import lodash from 'lodash';
import './style.css';
import Icon from './assets/images/image-1.png';
import print from './print';

function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    
    // create hello div
    element.innerHTML = lodash.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    // add image to div
    const myIcon = new Image();
    myIcon.src = Icon;

    // add button properties
    button.innerHTML = 'Print';
    button.onclick = print;

    element.appendChild(myIcon);
    element.appendChild(button);

    return element;
};

document.body.appendChild(component());