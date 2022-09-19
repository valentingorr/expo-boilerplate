import React, {
	useEffect,
	useState
} from "react";

import ContextProvider from "./context";
import { createStore } from "redux";
import {
	Provider,
	useSelector,
	useDispatch
} from "react-redux";
import reducers from "./redux/reducers.js";
import * as ACTIONS from "./redux/actions.js";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	View
} from "react-native";

//import Screens
import HomeScreen from "./screens/HomeScreen.js";

const store = createStore(reducers);
const Tab = createBottomTabNavigator();

const App = props => {

	const [user, setUser] = useState({ connected: false });
	const [style, setStyle] = useState({
		colors: {
			primary: "#ffbbbb"
		}
	});

	return (
		<ContextProvider {...{user}}>
			<StatusBar style="auto" backgroundColor="#f00"  barStyle="light-content" />
			<SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
				<NavigationContainer>
					<Tab.Navigator>
						<Tab.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
					</Tab.Navigator>			
				</NavigationContainer>
			</SafeAreaView>
		</ContextProvider>
	);
};

export default props => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};