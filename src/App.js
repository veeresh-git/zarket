import "antd/dist/antd.css";
import { Router } from "react-router-dom";
import Routes from "./Routes/routing";
import history from "./Routes/history";
import { Provider } from "react-redux";
import { initStore } from "./Redux/Store";

function App() {
  return (
    <Provider store={initStore()}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
