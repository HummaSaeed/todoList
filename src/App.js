import "./App.css";
import Input from "./Input/Input";
import { Provider } from "react-redux";
import store from "./Store";
import ListItem from "./ListItem/ListItem";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="app__container">
          <div className="listitem__container">
            <ListItem />
          </div>
          <Input />
        </div>
      </div>
    </Provider>
  );
}

export default App;
