/* jshint esversion:6 */
import './index.css';

import numeral from 'numeral';
const courseValue = numeral(1000).format('$0,0.00');
//debug the code
//debugger;
/*eslint-disable no-console */
console.log(`I would pay ${courseValue} for this!`);
