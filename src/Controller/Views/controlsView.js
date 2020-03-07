import { elements, styles } from './base';

const controls = [
    'Bubble Sort',
    'Selection Sort',
    'Insertion Sort'
];

// Create control buttons
const createControl = (name, type) => `
    <button class="${styles[type]}">${name}</button>
`;

export const renderControls = () => {
    // create the markup of the controls
    let markup = ``;
    controls.forEach(name => {
        markup += createControl(name, 'control');
    });
    markup += createControl('Sort', 'sortControl');
    // Append Control Buttons to Controls Container
    elements.controlsContainer[0].insertAdjacentHTML('afterbegin', markup);
};