import lodash from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
    
    element.innerHTML = lodash.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    return element;
};

document.body.appendChild(component());