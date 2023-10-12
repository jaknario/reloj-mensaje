import { watchApp } from './src/watch/watch-app';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div>

      <div class='message'></div>

      <div class="clock"></div>


  </div>
`;

const element = document.querySelector('.clock');

watchApp( element );
