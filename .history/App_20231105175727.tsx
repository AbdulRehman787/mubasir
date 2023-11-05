import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation'; // Add this line
import { Provider } from 'react-redux';
import AddLeadPage from './pages/addlead/addLeadPage';
import AppBootstrap from './pages/bootstrap/AppBootstrap';
import CreateUserPage from './pages/createuser/createUserPage';
import DashboardPage from './pages/dashboard/dashboard';
import LeadDetailsPage from './pages/leaddetails/leadDetailsPage';
import LoginPage from './pages/login/loginPage';
import MiAddPage from './pages/marketadd/miAddPage';
import MiDetailsPage from './pages/marketdetails/miDetailsPage';
import MiListPage from './pages/marketlist/miListPage';
import NotificationListPage from './pages/notifications/notificationListPage';
import SideMenuBar from './pages/sidemenu/sideMenu';
import UserListPage from './pages/users/userListPage';
import ViewLeadPage from './pages/viewlead/viewLeadPage';
import { default as Store } from './storage/store/createAppStore';

console.disableYellowBox = true;

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const SideDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerContent={(props) => <SideMenuBar {...props} />}
      initialRouteName="dashboard"
      screenOptions={{ mode: 'modal', headerShown: false }} // headerMode is replaced with headerShown
    >
      <Drawer.Screen name="dashboard" component={DashboardPage} options={{ drawerLabel: "Demo Screen 3" }} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" mode="modal" headerMode="none" initialRouteParams={{ someParam: 'Bonjour' }}>
        <Stack.Screen name="bootstap" component={AppBootstrap} />
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="milist" component={MiListPage} />
        <Stack.Screen name="notificationlist" component={NotificationListPage} />
        <Stack.Screen name="userlist" component={UserListPage} />
        <Stack.Screen name="midetails" component={MiDetailsPage} />
        <Stack.Screen name="miadd" component={MiAddPage} />
        <Stack.Screen name="createuser" component={CreateUserPage} />
        <Stack.Screen name="dashboard" component={SideDrawerNavigator} />
        <Stack.Screen name="viewlead" component={ViewLeadPage} />
        <Stack.Screen name="leaddetails" component={LeadDetailsPage} />
        <Stack.Screen name="addlead" component={AddLeadPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppContainer = createAppContainer(AppNavigator);

const newStore = configureStore({});
window.storeInstance = newStore;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavigationChange = this.handleNavigationChange.bind(this);
  }

  handleNavigationChange(prevState, newState, action) {
    console.log(prevState, newState, action);
  }

  componentDidMount() {
    // SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={newStore}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
