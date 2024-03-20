import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import UiColors from '../assets/colors';

export default function HomeScreen({navigation}) {
  const RouteListInfo = [
    {
      id: 0,
      SrcDes: 'Karkala Bypass - Nitte',
      BusRoute: 'Karkala - Mangalore',
    },
    {
      id: 1,
      SrcDes: 'Nitte - Belman - Padubidri',
      BusRoute: 'Udupi - Mangalore',
    },
    {
      id: 2,
      SrcDes: 'Nitte - Karkala',
      BusRoute: 'Udupi - Mangalore',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.NavView}>
        <Image
          style={styles.NavLogo}
          source={require('../assets/icons/LogoType.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ProjectPage')}>
          <Image
            style={styles.AboutLogo}
            source={require('../assets/icons/HomeMenu.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.RouteList}>
        <Text style={styles.SectionHead}>Select your route</Text>
        <ScrollView style={styles.RouteScrollView}>
          {RouteListInfo.map((value, key) => (
            <TouchableOpacity
              key={key}
              style={styles.RouteView}
              onPress={() =>
                navigation.navigate('DetailsPage', {
                  id: value.id,
                  name: value.SrcDes,
                })
              }>
              <Image
                style={styles.RouteLogo}
                source={require('../assets/icons/Routing.png')}
              />
              <View style={styles.RouteText}>
                <Text style={styles.RouteMainHead}>{value.SrcDes}</Text>
                <Text style={styles.RouteSrcDes}>{value.BusRoute}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UiColors.primary,
    paddingHorizontal: 10,
  },
  NavView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
    height: 40,
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  NavLogo: {
    width: 155,
    height: 35,
    objectFit: 'contain',
  },
  AboutLogo: {
    width: 35,
    height: 25,
    objectFit: 'contain',
  },
  SectionHead: {
    color: UiColors.dark,
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  RouteScrollView: {},
  RouteLogo: {
    width: 35,
    height: 35,
    objectFit: 'contain',
  },
  RouteText: {
    rowGap: 4,
  },
  RouteMainHead: {
    color: UiColors.dark,
    fontWeight: '700',
    fontSize: 20,
  },
  RouteSrcDes: {color: UiColors.dark, fontWeight: '400', fontSize: 15},
  RouteView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
    padding: 17,
    alignItems: 'center',
    rowGap: 15,
    marginBottom: 10,
    columnGap: 15,
    borderRadius: 10,
    backgroundColor: UiColors.secondary,
  },
  RouteList: {},
});
