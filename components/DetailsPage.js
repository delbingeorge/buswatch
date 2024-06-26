import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
  Linking,
} from 'react-native';
import UiColors from '../assets/colors';
import {useEffect, useState} from 'react';

function DetailsPage({route, navigation}) {
  const {fullValue} = route.params;
  const [currentTime, setRenderInterval] = useState(getTime());

  function getTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    const reRenderInterval = setInterval(() => {
      setRenderInterval(getTime());
    }, 0);

    return () => clearInterval(reRenderInterval);
  });

  let currentTimeHours, nextBusTimeHours, hoursDiff, minsDiff;
  let nextBus = getNextBus();

  if (nextBus != undefined) {
    currentTimeHours = currentTime.split(':');
    nextBusTimeHours = nextBus.Time.split(':');

    hoursDiff = nextBusTimeHours[0] - currentTimeHours[0];
    if (hoursDiff < 0) {
      hoursDiff += 24;
    }

    minsDiff = nextBusTimeHours[1] - currentTimeHours[1];
    if (minsDiff < 0) {
      minsDiff += 60;
      hoursDiff--;
    }

    hoursDiff = (hoursDiff < 10 ? '0' : '') + hoursDiff;
    minsDiff = (minsDiff < 10 ? '0' : '') + minsDiff;
  }

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
          width:"90%",
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf:'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.SubHead}>All buses</Text>
        <Text style={styles.ResultReturn}>
          {fullValue['BusDetails'].length} results
        </Text>
      </View>

      <FlatList
        style={{paddingBottom: 20, paddingHorizontal: 12}}
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
                <Text
                  style={
                    nextBus != undefined || nextBus != null
                      ? nextBus.Time == item.Time
                        ? styles.RouteMainHeadHighlight
                        : styles.RouteMainHead
                      : styles.RouteMainHead
                  }>
                  {item.Name.length < 17
                    ? item.Name
                    : item.Name.substring(0, 17) + '...'}
                </Text>
                <Text
                  style={
                    nextBus != undefined || nextBus != null
                      ? nextBus.Time == item.Time
                        ? styles.RouteSrcDesHighlight
                        : styles.RouteSrcDes
                      : styles.RouteSrcDes
                  }>
                  {item.Type}
                </Text>
              </View>
            </View>
            <View style={styles.RouteText}>
              <Text
                style={
                  nextBus != undefined || nextBus != null
                    ? nextBus.Time == item.Time
                      ? styles.BusTimeHighlight
                      : styles.BusTime
                    : styles.RouteMainHead
                }>
                {item.Time}
              </Text>
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
              {nextBus.Type == 'Express' ? (
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
              <View>
                <Text style={styles.NextBusHead}>{nextBus.Name}</Text>
                <Text style={styles.NextBusTimeRemain}>
                  {'in ' + hoursDiff + ' hrs' + ' : ' + minsDiff + ' mins'}
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.NextBusTime}>{nextBus.Time}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.RouteViewNextBus}>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={styles.RouteLogo}
                source={require('../assets/icons/BusNext.png')}
              />
              <View>
                <Text style={styles.BusNotFoundText}>
                  Sorry, couldn't locate any bus!
                </Text>
                <Pressable
                  style={styles.AddBusButton}
                  onPress={() => {
                    Linking.openURL('https://forms.gle/t7Z2Y2fZWR4t8Ekd6');
                  }}>
                  <Image
                    style={styles.AddBusIcon}
                    source={require('../assets/icons/AddBusIcon.png')}
                  />
                  <Text style={styles.BusNotFoundSubText}>Add missing bus</Text>
                </Pressable>
              </View>
            </View>
          </View>
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
    paddingHorizontal: 20,
    // marginHorizontal: 100,
  },
  NavView: {
    flexDirection: 'row',
    width: '93%',
    height: 40,
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  SectionHead: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
    fontSize: 25,
  },
  NextBusView: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    paddingVertical: 4,
    backgroundColor: '#151515',
    marginHorizontal: -10,
    marginTop: 5,
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
    marginVertical: 10,
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
    paddingHorizontal: 10,
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
  RouteMainHeadHighlight: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.light,
    fontSize: 18,
    marginBottom: -3,
  },
  NextBusHead: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.light,
    fontSize: 21,
    marginBottom: -4,
  },
  NextBusTimeRemain: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: '#e2e2e2',
    fontSize: 14,
  },
  BusNotFoundText: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: '#e2e2e2',
    fontSize: 16,
  },
  BusNotFoundSubText: {
    fontFamily: 'HelveticaNowDisplay-Medium',
    color: '#01bb88',
    fontSize: 14,
  },
  BusTime: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
    fontSize: 20,
  },
  BusTimeHighlight: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.light,
    fontSize: 20,
  },
  RouteSrcDes: {
    color: UiColors.dark,
    fontFamily: 'HelveticaNowDisplay-Medium',
    fontSize: 15,
  },
  RouteSrcDesHighlight: {
    color: UiColors.light,
    fontFamily: 'HelveticaNowDisplay-Medium',
    fontSize: 15,
  },
  NextBusTime: {
    color: '#01bb88',
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
    backgroundColor: '#151515',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: 10,
  },
  RouteViewNextBus: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    shadowColor: '#000000',
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
  AddBusButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  AddBusIcon: {
    width: 12,
    height: 12,
  },
});
