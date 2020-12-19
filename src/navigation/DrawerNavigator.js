import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import {DrawerScreen} from '../screens/DrawerScreen';
import {Maps} from '../screens';

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      openByDefault={false}
      drawerContent={(props) => <DrawerScreen {...props} />}>
      <Drawer.Screen name="Maps" component={Maps} />
    </Drawer.Navigator>
  );
};
