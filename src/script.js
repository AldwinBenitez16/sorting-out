import lodash from 'lodash';

function component() {
    const element = document.createElement('div');
    
    element.innerHTML = lodash.join(['Hello', 'Webpack'], ' ');

    return element;
};

document.body.appendChild(component());