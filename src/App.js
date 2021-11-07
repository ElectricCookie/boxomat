import { Route, Switch, useRouteMatch } from "react-router";
import { BrowserRouter, useHistory } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import "./App.css";
import { AppWrapper } from "./AppWrapper";
import BoxPlanner from "./BoxPlanner";
import Editor from "./Editor";
import ShoppingList from "./ShoppingList";
import About from "./About";
const MenuLink = ({ path, children, exact }) => {
  let match = useRouteMatch({
    path,
    exact,
  });

  let history = useHistory();

  return (
    <Menu.Item onClick={() => history.push(path)} active={match}>
      {children}
    </Menu.Item>
  );
};

function App() {
  return (
    <AppWrapper>
      <BoxPlanner.Provider>
        <BrowserRouter basename="/boxomat">
          <Menu inverted fixed="top">
            <Menu.Item header>Boxomat</Menu.Item>
            <MenuLink path="/" exact>
              Editor
            </MenuLink>
            <MenuLink path="/shopping-list">Shopping List</MenuLink>
            <MenuLink path="/about">About</MenuLink>
          </Menu>

          <Switch>
            <Route path="/" exact>
              <Editor />
            </Route>
            <Route path="/shopping-list">
              <ShoppingList></ShoppingList>
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </BrowserRouter>
      </BoxPlanner.Provider>
    </AppWrapper>
  );
}

export default App;
