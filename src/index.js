import * as constants from './constants';
import * as actions from './actions';
import * as reducers from './reducer';
import { default as initialState } from './initial-state';
import * as components from './components/';

export default {
  name: 'GriddleSelection',
  constants,
  actions,
  helpers: {},
  states: initialState,
  reducers,
  components
};
