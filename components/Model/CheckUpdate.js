import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import UiColors from '../../assets/colors';
import {useEffect, useState} from 'react';

export default function CheckUpdate() {
  const [notifyData, setNotifyData] = useState([]);
  useEffect(() => {
    const fetchUpData = async () => {
      try {
        const updateJsonData = await fetch(
          'https://raw.githubusercontent.com/dllbn/bswtch/main/push-notification.json',
        );
        const updateResponse = await updateJsonData.json();
        setNotifyData(updateResponse);
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    fetchUpData();
  }, []);
  return (
    <Modal transparent={true} visible={notifyData['notify']} animationType="">
      <View style={styles.RatingText}>
        <Image
          style={styles.RatingImage}
          source={require('../../assets/icons/UpdateIcon.png')}
        />
        <Text style={styles.RateBusWatch}>{notifyData['notify-title']}</Text>
        <Text style={styles.RateAppText}>{notifyData['notify-content']}</Text>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(updateLink);
          }}
          style={styles.buttonContainer}>
          <Image
            style={styles.GitStarIcon}
            source={require('../../assets/icons/DownloadIcon.png')}></Image>
          <Text style={styles.buttonText}>Download Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setNotifyData(false);
          }}>
          <Text
            style={
              ([styles.buttonText],
              {
                fontSize: 17,
                color: 'black',
                fontFamily: 'HelveticaNowDisplay-Medium',
              })
            }>
            Remind me later
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

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
    width: '100%',
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
