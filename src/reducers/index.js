import data from './data';
import modal from './modal';

import { CombineReducers } from 'react-redux';

const rootReducer = CombineReducers({
    data,
    modal
})
export default rootReducer;