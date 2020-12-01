import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Character from '../screens/character';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    }
  },
  Character: {
    screen: Character,
    navigationOptions: {
      title: 'Character',
    }
  }
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);


