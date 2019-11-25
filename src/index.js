import _ from 'lodash';
import './style.css';
import Logo from './logo.png';
import Style from './main.styl';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
