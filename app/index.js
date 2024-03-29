import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './styles/reset.css'

import Home from './components/Home'
import Settings from './components/Settings'

const App = (props) => {
  return <div> { props.children } </div>
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="settings" component={Settings} />
		</Route>
	</Router>, document.getElementById('root')
)
