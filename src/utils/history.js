import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state)
})

unlisten()

export default history;