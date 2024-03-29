import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import UiColors from '../../assets/colors';
import {useState} from 'react';

export default function AddBus({navigation}) {
  const [formData, setFormData] = useState({
    'bus-name': '',
    source: '',
    destination: '',
    time: '',
    'bus-type': '',
  });

  const handleSubmitForm = () => {
    console.log(formData.destination);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.GoBack}
        onPress={() => navigation.navigate('SettingsPage')}>
        <Image
          style={styles.GoBackImg}
          source={require('../../assets/icons/GoBack.png')}
        />
        <Text style={styles.GoBackText}>Go Back</Text>
      </Pressable>
      <View>
        <View>
          <Text style={styles.SubHead}>Add bus details</Text>
        </View>
        <View style={styles.TextInputView}>
          <Text style={styles.TextInputTitle}>Bus Name</Text>
          <TextInput
            onChange={text => setFormData({...formData, 'bus-name': text})}
            style={styles.TextInputStyle}
            placeholderTextColor={'#c0c0c0'}
            placeholder="Blue Star"
          />
        </View>
        <View style={styles.TextInputView}>
          <Text style={styles.TextInputTitle}>Source</Text>
          <TextInput
            onChange={text => setFormData({...formData, source: text})}
            style={styles.TextInputStyle}
            placeholderTextColor={'#c0c0c0'}
            placeholder="Mangalore"
          />
        </View>
        <View style={styles.TextInputView}>
          <Text style={styles.TextInputTitle}>Destination</Text>
          <TextInput
            onChange={text => setFormData({...formData, destination: text})}
            style={styles.TextInputStyle}
            placeholderTextColor={'#c0c0c0'}
            placeholder="Karkala"
          />
        </View>
        <TouchableOpacity onPress={handleSubmitForm} style={styles.SubmitBus}>
          <Text style={styles.$continue}>Submit bus</Text>
        </TouchableOpacity>
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
  GoBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 8,
  },
  GoBackImg: {
    width: 30,
    height: 30,
  },
  GoBackText: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
    fontSize: 20,
  },
  SubHead: {
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
    fontSize: 19.5,
    marginBottom: 10,
  },
  TextInputView: {},
  TextInputTitle: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'HelveticaNowDisplay-Bold',
    color: UiColors.dark,
  },
  TextInputStyle: {
    fontFamily: 'HelveticaNowDisplay-Medium',
    flexDirection: 'row',
    paddingLeft: 18,
    paddingRight: 10,
    paddingVertical: 15,
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    borderRadius: 10,
    color: UiColors.dark,
    fontSize: 16,
    backgroundColor: UiColors.accent,
  },
  SubmitBus: {
    flexDirection: 'row',
    height: 61,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    borderRadius: 10,
    backgroundColor: UiColors.dark,
  },
  $continue: {
    color: UiColors.light,
    fontFamily: 'HelveticaNowDisplay-Bold',
    fontSize: 17,
    letterSpacing: 1.5,
  },
});
