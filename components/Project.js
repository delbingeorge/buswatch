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
            Linking.openURL('https://forms.gle/t7Z2Y2fZWR4t8Ekd6');
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

      <TouchableOpacity
        style={styles.RouteView}
        onPress={() => {
          Linking.openURL('https://forms.gle/ULLPnt2Y3CCvzUwH8');
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.RouteLogo}
            source={require('../assets/icons/SuggestionIcon.png')}
          />
          <View style={styles.RouteText}>
            <Text style={styles.RouteMainHead}>Suggest feature</Text>
          </View>
        </View>
      </TouchableOpacity>

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

      <View style={styles.DeveloperCredit}>
        <Text style={styles.FooterCredit}>Bus Watch ©</Text>
        <Text style={styles.FooterCredit}>Development version 1.0</Text>
      </View>

      {viewModel ? (
        <Modal transparent={true} visible={viewModel} animationType="slide">
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
            <Text style={styles.RateBusWatch}>Rate Bus Watch</Text>
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
              <Text style={styles.buttonText}>Star us on GitHub</Text>
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
  container: {
    flex: 1,
    fontFamily: 'Anderson-Bold',
    backgroundColor: UiColors.primary,
    paddingHorizontal: 10,
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
    fontFamily: 'HelveticaNowDisplay-Bold',
    fontSize: 18,
  },
  ModalBackdrop: {backgroundColor: '#000000a8', height: '100%'},
  RatingText: {
    backgroundColor: UiColors.light,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    position: 'absolute',
    width: '100%',
    height: '100%',
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
  DeveloperCredit: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    marginBottom: 10,
    bottom: 0,
  },
  FooterCredit: {
    color: UiColors.dark,
    fontFamily: 'HelveticaNowDisplay-Medium',
  },
});
