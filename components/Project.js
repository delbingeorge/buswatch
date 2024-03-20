import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import UiColors from '../assets/colors';

function Project({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.GoBack}
        onPress={() => navigation.navigate('HomeScreen')}>
        {/* <Image source={require('../assets/icons/GoBack.png')} /> */}
        <Image
          style={styles.GoBackImg}
          source={require('../assets/icons/GoBack.png')}
        />
        <Image
          style={styles.NavLogo}
          source={require('../assets/icons/LogoType.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.SubHead}>Contribute to database</Text>
        <View style={styles.RouteView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.RouteLogo}
              source={require('../assets/icons/EditInfo.png')}
            />
            <View style={styles.RouteText}>
              <Text style={styles.RouteMainHead}>Add Bus timings</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.SubHead}>About the Developer</Text>
        <View style={styles.RouteView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.RouteLogo}
              source={require('../assets/icons/DevMode.png')}
            />
            <View style={styles.RouteText}>
              <Text style={styles.RouteMainHead}>Developer Info</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          width: Dimensions.get('window').width,
          marginBottom: 10,
          bottom: 0,
        }}>
        <Text>Bus Watch</Text>
        <Text>Dev Version 1.0</Text>
      </View>
    </SafeAreaView>
  );
}

export default Project;

const styles = StyleSheet.create({
  BottonInfo: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: 30,
  },
  RouteLogoImg: {width: 25, marginRight: 10, height: 25, objectFit: 'contain'},
  SubHead: {
    color: UiColors.dark,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  GoBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 8,
  },
  GoBackText: {
    color: UiColors.dark,
    fontSize: 19,
    fontWeight: '400',
  },
  container: {
    flex: 1,
    fontFamily: 'Anderson-Bold',
    backgroundColor: UiColors.primary,
    paddingHorizontal: 10,
  },
  NavView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
    height: 20,
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  SectionHead: {
    fontFamily: 'Anderson-Bold',
    color: UiColors.dark,
    fontSize: 23,
    fontWeight: '700',
  },
  RouteLogo: {
    width: 30,
    height: 30,
    objectFit: 'contain',
  },
  RouteText: {
    marginLeft: 15,
    rowGap: 4,
  },
  RouteMainHead: {
    fontFamily: 'Anderson-Bold',
    color: UiColors.dark,
    fontSize: 20,
    fontWeight: '700',
  },
  ReachingTime: {
    fontSize: 25,
    color: UiColors.dark,
  },
  RouteSrcDes: {
    fontFamily: 'Anderson-Bold',
    color: UiColors.dark,
    fontSize: 17,
  },
  GoBackImg: {
    width: 30,
    height: 30,
  },
  NavLogo: {
    width: 155,
    height: 35,
    objectFit: 'contain',
  },
  RouteView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
    paddingVertical: 28,
    paddingHorizontal: 17,
    alignItems: 'center',
    rowGap: 15,
    marginBottom: 10,
    columnGap: 15,
    borderRadius: 10,
    backgroundColor: UiColors.secondary,
  },
  ResultView: {marginBottom: 5},
  SectionTitle: {
    fontSize: 18,
    color: UiColors.dark,
    fontWeight: '600',
  },
  BusIdentifier: {
    flexDirection: 'row',
    alignItems: 'center',
    color: UiColors.dark,
  },
  BusIdentifierText: {color: UiColors.dark, fontWeight: '500', fontSize: 16},
});
