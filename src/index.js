import * as constants from './constants';
import * as reducers from './reducer';
import { default as initialState } from './initial-state';
import * as components from './components/';

export default {
  name: 'GriddleSelection',
  constants,
  helpers: {},
  states: initialState,
  reducers,
  components
};
