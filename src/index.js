import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {persistor, store} from './Util/Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Util/Menu';
import Header from './Util/Header';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import PWAPrompt from 'react-ios-pwa-prompt';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Menu  key="MenuComponent"/>	
					<Header key="HeaderComponent" />
					<App />
				</PersistGate>
			</Provider>
		</BrowserRouter>
		<PWAPrompt
			promptOnVisit={1}
			timesToShow={3}
			copyClosePrompt="Close"
			permanentlyHideOnDismiss={false}
			/>
	 </React.StrictMode>
);


serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
