import _ from 'lodash';
import './style.css';
import printMe from './print';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click ME';
    btn.onclick = printMe;

    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component());