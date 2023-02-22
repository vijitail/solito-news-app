import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { NewsDetailScreen } from '../../features/latest-news/detail-screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleStyle: {
          color: '#fff',
        },
      }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Latest News',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={NewsDetailScreen}
        options={{
          title: 'News',
        }}
      />
    </Stack.Navigator>
  )
}
