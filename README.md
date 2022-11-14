redux steps

standards : component first letter capital or camelCase (HomeDetail), folder in small case

1. npm install redux react-redux redux-devtools-extension
2. folder structure 
redux    2.1 action
         2.2 reducer
        type.js  
3. type declare => constant define here for communication between action and reducer
4. action.js =>  import type constant , Action return object , declare type & payload

5. reducer.js => import constant ,  state means information which is used to show on UI , const Reducer= (state= initialState,action){}
6. combineReducer/ rootReducers.js 
7. store.js =>  import rootReducers pass to store using createStore
8. index.js => import store here, and provider
