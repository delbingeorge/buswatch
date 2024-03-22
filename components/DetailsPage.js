import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import UiColors from '../assets/colors';

function DetailsPage({route, navigation}) {
  const {fullValue} = route.params;

  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();

  let currentTime = hours + ':' + mins;

  console.log(currentTime);

  let nextBus = getNextBus();
  // console.log(nextBus);
  function getNextBus() {
    for (let i = 0; i < fullValue['BusDetails'].length; i++) {
      if (fullValue['BusDetails'][i].Time > currentTime) {
        return fullValue['BusDetails'][i];
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.GoBack}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Image
          style={styles.GoBackImg}
          source={require('../assets/icons/GoBack.png')}
        />
        <Text style={styles.SectionHead}>{route.params['name']}</Text>
        {/* <Text style={styles.SectionTitle}>Result for</Text> */}
      </TouchableOpacity>

      <View style={styles.ResultView}>
        <View style={styles.BottomInfo}>
          <View style={styles.BusIdentifier}>
            <Image
              style={styles.RouteLogoImg}
              source={require('../assets/icons/BusExpress.png')}
            />
            <Text style={styles.BusIdentifierText}>Express</Text>
          </View>
          <View style={styles.BusIdentifier}>
            <Image
              style={styles.RouteLogoImg}
              source={require('../assets/icons/BusLocal.png')}
            />
            <Text style={styles.BusIdentifierText}>Local</Text>
          </View>
          <View style={styles.BusIdentifier}>
            <Image
              style={styles.RouteLogoImg}
              source={require('../assets/icons/BusHybrid.png')}
            />
            <Text style={styles.BusIdentifierText}>Hybrid</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: UiColors.dark,
              paddingVertical: 5,
            }}>
            NB: Some external factors can affect the timings {'\n'} of the bus.
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.SubHead}>Next bus</Text>
        <View style={styles.RouteView}>
          {nextBus ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={styles.RouteLogo}
                source={require('../assets/icons/BusExpress.png')}
              />
              <View style={styles.RouteText}>
                <Text style={styles.RouteMainHead}>{nextBus.Name}</Text>
                <Text style={styles.RouteSrcDes}>{nextBus.Time}</Text>
              </View>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={styles.RouteLogo}
                source={require('../assets/icons/BusExpress.png')}
              />

              <View style={styles.RouteText}>
                <Text style={styles.RouteMainHead}>No Bus Found!</Text>
                {/* <Text style={styles.RouteSrcDes}>{value.ReachesNitteAt}</Text> */}
              </View>
            </View>
          )}
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.SubHead}>All buses</Text>
        <Text style={styles.SubHead}>
          {fullValue['BusDetails'].length} results
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={fullValue['BusDetails']}
        style={styles.FlatListStyle}
        renderItem={({item, key}) => (
          <View key={key} style={styles.RouteView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {item.Type == 'Express' ? (
                <Image
                  style={styles.RouteLogo}
                  source={require('../assets/icons/BusExpress.png')}
                />
              ) : (
                <Image
                  style={styles.RouteLogo}
                  source={require('../assets/icons/BusLocal.png')}
                />
              )}
              <View style={styles.RouteText}>
                <Text style={styles.RouteMainHead}>{item.Name}</Text>
                <Text style={styles.RouteSrcDes}>{item.Time}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
export default DetailsPage;

const styles = StyleSheet.create({
  BottomInfo: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    width: 35,
    height: 35,
    objectFit: 'contain',
  },
  RouteText: {
    marginLeft: 15,
    rowGap: 4,
  },
  RouteMainHead: {
    // fontFamily: 'Anderson-Bold',
    color: UiColors.dark,
    fontWeight: '700',
    fontSize: 20,
  },
  ReachingTime: {
    fontSize: 25,
    color: UiColors.dark,
  },
  RouteSrcDes: {
    // fontFamily: 'Anderson-Bold',
    color: UiColors.dark,
    fontWeight: '400',
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
    padding: 17,
    alignItems: 'center',
    rowGap: 15,
    marginBottom: 10,
    columnGap: 15,
    borderRadius: 10,
    backgroundColor: UiColors.secondary,
  },
  ResultView: {margin: 5},
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
