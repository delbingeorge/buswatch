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
import {useEffect, useState} from 'react';

function Project({navigation}) {
  const [viewModel, setViewModel] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [notifyData, setNotifyData] = useState([]);

  useEffect(() => {
    const fetchUpData = async () => {
      try {
        const updateJsonData = await fetch(
          'https://raw.githubusercontent.com/dllbn/bswtch/main/push-notification.json',
        );
        const updateResponse = await updateJsonData.json();
        setNotifyData(updateResponse);
        setIsUpdate(updateResponse['notify']);
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    fetchUpData();
  }, [notifyData['notify']]);
  console.log(notifyData['notify']);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.GoBack}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Image
          style={styles.GoBackImg}
          source={require('../assets/icons/GoBack.png')}
        />
        <Text style={styles.GoBackText}>Go Back</Text>
      </Pressable>
      <View>
        <Text style={styles.SubHead}>Add Contributions</Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://forms.gle/t7Z2Y2fZWR4t8Ekd6');
          }}
          style={styles.SettingsView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.SettingsLogo}
              source={require('../assets/icons/EditInfo.png')}
            />
            <View style={styles.SettingsText}>
              <Text style={styles.SettingsMainHead}>Add bus details</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://bhvsh.notion.site/Bus-Timings-Nitte-de5c216b4a454653b1fd716742c85700',
            );
          }}
          style={styles.SettingsView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.SettingsLogo}
              source={require('../assets/icons/DataIcon.png')}
            />
            <View style={styles.SettingsText}>
              <Text style={styles.SettingsMainHead}>Data credit</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.SubHead}>About the app</Text>

      <TouchableOpacity
        style={styles.SettingsView}
        onPress={() => {
          Linking.openURL('https://delb.in/');
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.SettingsLogo}
            source={require('../assets/icons/DevMode.png')}
          />
          <View style={styles.SettingsText}>
            <Text style={styles.SettingsMainHead}>Developer info</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.SettingsView}
        onPress={() => {
          Linking.openURL('https://forms.gle/ULLPnt2Y3CCvzUwH8');
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.SettingsLogo}
            source={require('../assets/icons/SuggestionIcon.png')}
          />
          <View style={styles.SettingsText}>
            <Text style={styles.SettingsMainHead}>Suggest a feature</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setViewModel(true);
        }}
        style={styles.SettingsView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.SettingsLogo}
            source={require('../assets/icons/GitStar.png')}
          />
          <View style={styles.SettingsText}>
            <Text style={styles.SettingsMainHead}>Rate the app</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://forms.gle/Q4hNEWCENdMQ4WYj8');
        }}
        style={styles.SettingsView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.SettingsLogo}
            source={require('../assets/icons/BugReport.png')}
          />
          <View style={styles.SettingsText}>
            <Text style={styles.SettingsMainHead}>Report a bug</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setIsUpdate(true);
        }}
        style={styles.SettingsView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.SettingsLogo}
            source={require('../assets/icons/DownloadIconBlack.png')}
          />
          <View style={styles.SettingsText}>
            <Text style={styles.SettingsMainHead}>Check for updates</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.DeveloperCredit}>
        <Text style={styles.FooterCreditHead}>Bus Watch © 2024</Text>
        <Text style={styles.FooterCredit}>Version 1.10.30 Stable</Text>
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

      {notifyData['notify'] ? (
        <Modal transparent={true} visible={isUpdate} animationType="slide">
          <View style={styles.RatingText}>
            <Image
              style={styles.RatingImage}
              source={require('../assets/icons/UpdateIcon.png')}
            />
            <Text style={styles.RateBusWatch}>
              {notifyData['notify-title']}
            </Text>
            <Text style={styles.RateAppText}>
              {notifyData['notify-content']}
            </Text>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL(notifyData['action-btn']);
              }}
              style={styles.buttonContainer}>
              <Image
                style={styles.GitStarIcon}
                source={require('../assets/icons/DownloadIcon.png')}></Image>
              <Text style={styles.buttonText}>Download Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsUpdate(false);
              }}>
              <Text
                style={
                  ([styles.buttonText],
                  {
                    fontSize: 16,
                    color: 'black',
                    fontFamily: 'HelveticaNowDisplay-Bold',
                  })
                }>
                Remind me later
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        <Modal transparent={true} visible={isUpdate} animationType="slide">
          <View style={styles.RatingText}>
            <Pressable
              style={styles.RatingClosePressable}
              onPress={() => {
                setIsUpdate(false);
              }}>
              <Image
                style={styles.RatingClose}
                source={require('../assets/icons/CloseIcon.png')}
              />
            </Pressable>
            <Image
              style={styles.RatingImage}
              source={require('../assets/icons/UpdateIcon.png')}
            />
            <Text style={styles.RateBusWatch}>Up to date!</Text>
            <Text style={styles.RateAppText}>
              Current Version 1.10.30 Stable
            </Text>
          </View>
        </Modal>
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
  SettingsLogo: {
    width: 26,
    height: 26,
    objectFit: 'contain',
  },
  SettingsText: {
    marginLeft: 15,
    rowGap: 4,
  },
  SettingsMainHead: {
    color: UiColors.dark,
    fontFamily: 'HelveticaNowDisplay-Bold',
    fontSize: 18,
  },
  GoBackImg: {
    width: 30,
    height: 30,
  },
  SettingsView: {
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
    paddingVertical: 14,
    paddingHorizontal: 25,
    marginVertical: 10,
    borderRadius: 8,
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
    fontSize: 16,
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
    fontSize: 19.5,
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
  FooterCreditHead: {
    color: UiColors.dark,
    fontFamily: 'HelveticaNowDisplay-Medium',
  },
  FooterCredit: {
    color: '#00000080',
    fontSize: 13,
    fontFamily: 'HelveticaNowDisplay-Medium',
  },
});
