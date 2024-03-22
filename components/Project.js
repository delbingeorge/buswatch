import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
  Modal,
  Linking,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import UiColors from '../assets/colors';
import {useState} from 'react';

function Project({navigation}) {
  const [viewModel, setViewModel] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.GoBack}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Image
          style={styles.GoBackImg}
          source={require('../assets/icons/GoBack.png')}
        />
        <Text style={styles.GoBackText}>Go Back</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.SubHead}>Add Contributions</Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://bhvsh.notion.site/Bus-Timings-Nitte-de5c216b4a454653b1fd716742c85700',
            );
          }}
          style={styles.RouteView}>
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
              <Text style={styles.RouteMainHead}>Add bus timings</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://bhvsh.notion.site/Bus-Timings-Nitte-de5c216b4a454653b1fd716742c85700',
            );
          }}
          style={styles.RouteView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.RouteLogo}
              source={require('../assets/icons/DataIcon.png')}
            />
            <View style={styles.RouteText}>
              <Text style={styles.RouteMainHead}>Data Credit</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.SubHead}>About the app</Text>
        <TouchableOpacity
          style={styles.RouteView}
          onPress={() => {
            Linking.openURL('https://delb.in/');
          }}>
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
              <Text style={styles.RouteMainHead}>Developer info</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setViewModel(true);
        }}
        style={styles.RouteView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.RouteLogo}
            source={require('../assets/icons/GitStar.png')}
          />
          <View style={styles.RouteText}>
            <Text style={styles.RouteMainHead}>Rate the app</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://forms.gle/Q4hNEWCENdMQ4WYj8');
        }}
        style={styles.RouteView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.RouteLogo}
            source={require('../assets/icons/BugReport.png')}
          />
          <View style={styles.RouteText}>
            <Text style={styles.RouteMainHead}>Report a bug</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          width: Dimensions.get('window').width,
          marginBottom: 10,
          bottom: 0,
        }}>
        <Text
          style={{
            color: UiColors.dark,
            fontFamily: 'HelveticaNowDisplay-Medium',
          }}>
          BusWatch ©
        </Text>
        <Text
          style={{
            color: UiColors.dark,
            fontFamily: 'HelveticaNowDisplay-Medium',
          }}>
          Development version 1.0
        </Text>
      </View>

      {viewModel ? (
        <Modal transparent={true} visible={viewModel} animationType="slide">
          <Pressable
            onPress={() => {
              setViewModel(false);
            }}
            style={styles.ModalBackdrop}></Pressable>
          <View style={styles.RatingText}>
            <Pressable
              style={styles.RatingClosePressable}
              onPress={() => {
                setViewModel(false);
              }}>
              <Image
                style={styles.RatingClose}
                source={require('../assets/icons/CloseIcon.png')}
              />
            </Pressable>
            <Image
              style={styles.RatingImage}
              source={require('../assets/icons/RatingStar.png')}
            />
            <Text style={styles.RateBusWatch}>Rate BusWatch</Text>
            <Text style={styles.RateAppText}>
              We don't need 5 stars, just one.
            </Text>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://github.com/delbingeorge/buswatch');
              }}
              style={styles.buttonContainer}>
              <Image
                style={styles.GitStarIcon}
                source={require('../assets/icons/GitStarIcon.png')}></Image>
              <Text style={styles.buttonText}>Star us in GitHub</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        ''
      )}
    </SafeAreaView>
  );
}

export default Project;

const styles = StyleSheet.create({
  ReviewText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  RatingClosePressable: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  RatingClose: {
    width: 20,
    height: 20,
  },
  RatingImage: {width: 80, height: 80},
  GitStarIcon: {width: 20, height: 20},
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: 8,
    backgroundColor: UiColors.dark,
    paddingVertical: 18,
    paddingHorizontal: 25,
    marginVertical: 10,
    borderRadius: 13,
  },
  buttonText: {
    color: UiColors.light,
    fontFamily: 'HelveticaNowDisplay-Medium',
    fontSize: 18,
  },
  ModalBackdrop: {backgroundColor: '#000000a8', height: '100%'},
  RatingText: {
    // paddingVertical: 60,
    backgroundColor: UiColors.light,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    position: 'absolute',
    width: '100%',
    height: '50%',
    bottom: 0,
  },
  RateAppText: {
    fontSize: 20,
    color: UiColors.dark,
    fontFamily: 'HelveticaNowDisplay-Medium',
  },
  RateBusWatch: {
    fontSize: 28,
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
  },
  BottomInfo: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: 30,
  },
  RouteLogoImg: {width: 25, marginRight: 10, height: 25, objectFit: 'contain'},
  SubHead: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
    fontSize: 19,
    marginBottom: 10,
  },
  GoBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 8,
  },
  GoBackText: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
    fontSize: 20,
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
    width: 28,
    height: 28,
    objectFit: 'contain',
  },
  RouteText: {
    marginLeft: 15,
    rowGap: 4,
  },
  RouteMainHead: {
    color: UiColors.dark,
    fontFamily: 'HelveticaNowDisplay-Bold',
    fontSize: 20,
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
    paddingVertical: 20,
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
