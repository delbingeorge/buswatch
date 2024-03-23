import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import UiColors from '../assets/colors';
import {useEffect} from 'react';

function DetailsPage({route, navigation}) {
  const {fullValue} = route.params;

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  hours = (hours < 10 ? '0' : '') + hours;
  minutes = (minutes < 10 ? '0' : '') + minutes;

  const currentTime = `${hours}:${minutes}`;

  // let currentTimeHours, nextBusTimeHours, hoursDiff, minsDiff;
  let nextBus = getNextBus();

  // if (nextBus != undefined) {
  //   currentTimeHours = currentTime.split(':');
  //   nextBusTimeHours = nextBus.Time.split(':');

  //   hoursDiff = nextBusTimeHours[0] - currentTimeHours[0];
  //   minsDiff = nextBusTimeHours[1] - currentTimeHours[1];

  //   hoursDiff = (hoursDiff < 10 ? '0' : '') + hoursDiff;
  //   minsDiff = (minsDiff < 10 ? '0' : '') + minsDiff;
  // }

  function getNextBus() {
    for (let i = 0; i < fullValue['BusDetails'].length; i++) {
      if (fullValue['BusDetails'][i].Time > currentTime)
        return fullValue['BusDetails'][i];
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.GoBack}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Image
          style={styles.GoBackImg}
          source={require('../assets/icons/GoBack.png')}
        />
        <Text style={styles.SectionHead}>{route.params['name']}</Text>
        {/* <Text style={styles.SectionTitle}>Result for</Text> */}
      </Pressable>

      {/* <View>
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
              </View>
            </View>
          )}
        </View>
      </View> */}

      {/* <View style={styles.ResultView}>
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
              source={require('../assets/icons/BusNext.png')}
            />
            <Text style={styles.BusIdentifierText}>Next Bus</Text>
          </View>
        </View>
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.SubHead}>All buses</Text>
        <Text style={styles.ResultReturn}>
          {fullValue['BusDetails'].length} results
        </Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={fullValue['BusDetails']}
        renderItem={({item, key}) => (
          <View
            key={key}
            style={
              nextBus != undefined || nextBus != null
                ? nextBus.Time == item.Time
                  ? styles.RouteViewNextBusHighlight
                  : styles.RouteView
                : styles.RouteView
            }>
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
                <Text style={styles.RouteMainHead}>
                  {item.Name.length < 17
                    ? item.Name
                    : item.Name.substring(0, 17) + '...'}
                </Text>
                <Text style={styles.RouteSrcDes}>{item.Type}</Text>
              </View>
            </View>
            <View style={styles.RouteText}>
              <Text style={styles.BusTime}>{item.Time}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.NextBusView}>
        {nextBus != undefined ? (
          <View style={styles.RouteViewNextBus}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 14,
              }}>
              <Image
                style={styles.RouteLogo}
                source={require('../assets/icons/BusNext.png')}
              />
              <View>
                <Text style={styles.NextBusHead}>{nextBus.Name}</Text>
                {/* <Text style={styles.NextBusTimeRemain}>
                  {'in ' + hoursDiff + ' hrs' + ' : ' + minsDiff + ' mins'}
                </Text> */}
              </View>
            </View>
            <View>
              <Text style={styles.NextBusTime}>{nextBus.Time}</Text>
            </View>
          </View>
        ) : (
          ''
        )}
        {/* <Text
          style={{
            textAlign: 'center',
            color: UiColors.dark,
            marginVertical: 10,
          }}>
          Some external factors can affect the timings of the bus.
        </Text> */}
      </View>
    </SafeAreaView>
  );
}
export default DetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
    fontSize: 20,
  },
  NextBusView: {
    paddingVertical: 2,
    backgroundColor: UiColors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 30,
  },
  RouteLogoImg: {width: 25, marginRight: 10, height: 25, objectFit: 'contain'},
  SubHead: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
    fontSize: 19,
    marginTop: 10,
  },
  ResultReturn: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: '#00000090',
    fontSize: 14,
    marginTop: 10,
  },
  GoBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 8,
  },
  GoBackText: {
    color: UiColors.dark,
    fontSize: 19,
    fontWeight: '400',
  },
  RouteLogo: {
    width: 35,
    height: 35,
    objectFit: 'contain',
  },
  RouteText: {
    marginLeft: 15,
    columnGap: -2,
  },
  RouteMainHead: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
    fontSize: 18,
    marginBottom: -3,
  },
  NextBusHead: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
    fontSize: 21,
  },
  NextBusTimeRemain: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: '#00000090',
    fontSize: 16,
  },
  BusTime: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
    fontSize: 20,
  },
  RouteSrcDes: {
    color: UiColors.dark,
    fontFamily: 'HelveticaNowDisplay-Medium',
    fontSize: 15,
  },
  NextBusTime: {
    color: UiColors.dark,
    fontWeight: '700',
    fontSize: 26,
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
  RouteViewNextBusHighlight: {
    flexDirection: 'row',
    width: '100%',
    padding: 17,
    alignItems: 'center',
    backgroundColor: '#00000030',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: 10,
  },
  RouteViewNextBus: {
    flexDirection: 'row',
    width: '100%',
    padding: 17,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  RouteView: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 17,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: UiColors.secondary,
  },
  ResultView: {marginVertical: 12},
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
