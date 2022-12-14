import { combineReducers } from 'redux';

import counterSlice from 'src/state/slices/counter';

const rootReducer = combineReducers({ counter: counterSlice.reducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
