import React, {Component} from 'react';
import {render} from 'react-dom';
import TrackerTable from './components/trackerTable/trackerTable.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Equaliser from 'material-ui/svg-icons/av/equalizer';
import TrackStore from './components/tracksStore/trackStore';
import injectTouchTapEvent from 'react-tap-event-plugin';
injectTouchTapEvent(); 

const muiTheme = getMuiTheme();

render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<div>
			<h1><Equaliser/>Tracker editor <img src='http://i.giphy.com/Vg3c7Z8eXBZUQ.gif' width={100} style={{margin:'-40px 0'}}/></h1>
			<TrackStore/>
		</div>
	</MuiThemeProvider>
	,document.getElementById('app'));
