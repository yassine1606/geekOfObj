import {personnage} from "./class.js";
import {guerrier} from "./class.js";
import {mage} from "./class.js";
import {archer} from "./class.js";
import {boss} from "./class.js";
import * as CLASS from "./class.js";


// boss
export let sauron = new boss('sauron', 100, 25);
export let chronos = new boss('chronos', 100, 25);
export let lilith = new boss('lilith', 100, 25);

//guerrier
export let guerrier1 = new guerrier('guerrier1', 100, 50, 0);

// mage 
export let mage1 = new mage ('Mage1', 100, 50, 0);

// archer
export let archer1 = new archer('archer1', 100, 50, 0);