import { Provider } from "react-redux";

import store from "./store/index";
import { Catalog } from "./components/Catalog";
import { Cart } from "./components/Cart";

export default function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}
