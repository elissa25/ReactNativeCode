import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import AppNavigator from "./navigation/AppNavigator";

function App(){
return (
<Provider store={store}>
  <AppNavigator />
  </Provider>
);
};

export default App;