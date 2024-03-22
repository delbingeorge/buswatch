import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import UiColors from '../assets/colors';
import {useEffect, useState} from 'react';

export default function HomeScreen({navigation}) {
  const [data, setData] = useState([]);
  // const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/dllbn/bswtch/main/data-bswtch.json',
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  // const handleSearchText = text => {
  //   setSearch(text);
  // };

  // const handleSearch = () => {
  //   RouteListInfo.map(value => {
  //     if (value.BusRoute.includes(search)) {
  //       console.log(true);
  //       console.log(search);
  //     } else {
  //       console.log(false);
  //     }
  //   });
  // };

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
        {/* <View style={{marginBottom: 10}}>
          <TextInput
            style={{
              backgroundColor: UiColors.secondary,
              fontSize: 18,
              fontWeight: '600',
              paddingVertical: 16,
              borderRadius: 8,
              paddingHorizontal: 15,
            }}
            onChangeText={handleSearchText}
            value={search}
            onSubmitEditing={handleSearch}
            placeholder="Search the place"></TextInput>
        </View> */}

        <Text style={styles.SectionHead}>Select your route</Text>
        <ScrollView style={styles.RouteScrollView}>
          {data.map((value, key) => (
            <TouchableOpacity
              key={key}
              style={styles.RouteView}
              onPress={() =>
                navigation.navigate('DetailsPage', {
                  id: value.id,
                  name: value.SrcDes,
                  fullValue: value,
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
    fontSize: 19,
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
    fontSize: 19,
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
