// import * as View from './Views/index';
import * as View from './Views/controlsView';

// Global State Of The App
const state = {

};

//==========
// Controls
//==========

// Initializing function that runs when the page loads
const init = () => {
    View.renderControls();
};

window.onload = init();