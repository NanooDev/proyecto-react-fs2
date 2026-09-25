import { Link, Route, Switch } from "wouter";

const App = () => (
  <>
    <Link href="/">Home</Link>
    <Link href="/login">Login</Link>
    <Link href="/register">Register</Link>

    <Switch>
      <Route path="/inbox" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route>404: No such page!</Route>
    </Switch>
  </>
);
export default App
