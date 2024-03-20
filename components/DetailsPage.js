import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
  ScrollViewBase,
} from 'react-native';
import UiColors from '../assets/colors';
import {ScreenStack} from 'react-native-screens';

function DetailsPage({route, navigation}) {
  const {id} = route.params;

  let date = new Date();

  const busSchedule = [
    [
      {
        Time: '07:41',
        Name: 'Rajarajeshwari',
        Type: 'Express',
        ReachesNitteAt: '07:50',
      },
      {Time: '07:45', Name: 'Kanthi', Type: 'Local', ReachesNitteAt: '07:59'},
      {Time: '07:50', Name: 'Vishal', Type: 'Express', ReachesNitteAt: '07:59'},
      {Time: '07:52', Name: 'Mercy', Type: 'Local', ReachesNitteAt: '08:07'},
      {Time: '07:58', Name: 'Naveen', Type: 'Local', ReachesNitteAt: '08:12'},
      {Time: '08:00', Name: 'Vishal', Type: 'Express', ReachesNitteAt: '08:10'},
      {Time: '08:05', Name: 'Ayra', Type: 'Express', ReachesNitteAt: '08:15'},
      {Time: '08:05', Name: 'Shahil', Type: 'Local', ReachesNitteAt: '08:19'},
      {Time: '08:15', Name: 'Vishal', Type: 'Express', ReachesNitteAt: '08:25'},
      {Time: '08:25', Name: 'Reshma', Type: 'Express', ReachesNitteAt: '08:35'},
      {Time: '08:30', Name: 'Sangam', Type: 'Local', ReachesNitteAt: '08:45'},
      {
        Time: '08:35',
        Name: 'Vishal ',
        Type: 'Express',
        ReachesNitteAt: '08:47',
      },
      {Time: '08:48', Name: 'Vishal', Type: 'Express', ReachesNitteAt: '09:02'},
      {
        Time: '08:59',
        Name: 'Annapoorneshwari',
        Type: 'Express',
        ReachesNitteAt: '09:10',
      },
      {Time: '09:00', Name: 'Jeevan', Type: 'Local', ReachesNitteAt: '09:15'},
      {Time: '09:05', Name: 'Mercy', Type: 'Local', ReachesNitteAt: '09:21'},
      {
        Time: '09:10',
        Name: 'Navadurga Prasad',
        Type: 'Express',
        ReachesNitteAt: '09:19',
      },
      {
        Time: '11:01',
        Name: 'Padmambika',
        Type: 'Express',
        ReachesNitteAt: '11:10',
      },
    ],
    [
      {
        Time: '08:00',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '08:10',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '08:45', Name: 'Sangam', type: 'Local', destination: 'Padubidri'},
      {
        Time: '08:46',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '09:20', Name: 'Mercy', type: 'Local', destination: 'Mangalore'},
      {
        Time: '09:20',
        Name: 'Navadurga Prasad',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '09:30',
        Name: 'Navadurga Prasad',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '09:45',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '09:54',
        Name: 'Christa Jyothi',
        type: 'Local',
        destination: 'Udupi',
      },
      {
        Time: '09:58',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '09:59', Name: 'Decent', type: 'Local', destination: 'Udupi'},
      {
        Time: '10:05',
        Name: 'Laxmi Ganesh',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '10:11', Name: 'Sangam', type: 'Local', destination: 'Padubidri'},
      {Time: '10:18', Name: 'Pranam', type: 'Local', destination: 'Kateel'},
      {
        Time: '10:23',
        Name: 'Christa Jyothi',
        type: 'Local',
        destination: 'Udupi',
      },
      {
        Time: '10:26',
        Name: 'Reshma',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '10:36',
        Name: 'Sangam',
        type: 'Fast Service - Local',
        destination: 'Udupi',
      },
      {
        Time: '10:50',
        Name: 'Padmambikaa',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '11:08', Name: 'Pranam', type: 'Local', destination: 'Kateel'},
      {
        Time: '11:10',
        Name: 'Padmambikaa',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '11:20',
        Name: 'Christa Kiran',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '11:26', Name: 'Naveen', type: 'Local', destination: 'Udupi'},
      {Time: '11:28', Name: 'Naveen', type: 'Local', destination: 'Udupi'},
      {
        Time: '11:29',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '11:33', Name: 'Naveen', type: 'Local', destination: 'Udupi'},
      {Time: '11:36', Name: 'Jason', type: 'Local', destination: 'Mulki'},
      {
        Time: '11:40',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '11:44',
        Name: 'Rashmi Travels',
        type: 'Local',
        destination: 'Udupi via Kapu',
      },
      {
        Time: '11:51',
        Name: 'Padmambikaa',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '12:00',
        Name: 'Navadurga Prasad',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '12:09',
        Name: 'Rajarajeshwari',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '12:09',
        Name: 'Shree Annapoorneshwari',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '12:11', Name: 'Srilaxmi', type: 'Local', destination: 'Kateel'},
      {Time: '12:18', Name: 'Naveen', type: 'Local', destination: 'Udupi'},
      {
        Time: '12:25',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '12:33',
        Name: 'Navadurga Prasad',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '12:35',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '12:38',
        Name: 'Shree Padma',
        type: 'Fast Service - Local',
        destination: 'Udupi',
      },
      {
        Time: '12:45',
        Name: 'Padmambikaa',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '12:52',
        Name: 'Shahil',
        type: 'Local',
        destination: 'Udupi via Padubidri',
      },
      {
        Time: '12:56',
        Name: 'Rajarajeshwari',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '01:07',
        Name: 'Christa Jyothi',
        type: 'Local',
        destination: 'Udupi',
      },
      {
        Time: '01:10',
        Name: 'Navadurga Prasad',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '01:21',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '01:30', Name: 'Kanthi', type: 'Local', destination: 'Udupi'},
      {
        Time: '01:32',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '01:43', Name: 'Kanthi', type: 'Local', destination: 'Udupi'},
      {Time: '01:50', Name: 'Bharathi', type: 'Local', destination: 'Udupi'},
      {
        Time: '01:59',
        Name: 'Laxmi Ganesh',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '02:00',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '02:07', Name: 'Sangam', type: 'Local', destination: 'Mulki'},
      {Time: '02:10', Name: 'Sangam', type: 'Local', destination: 'Udupi'},
      {
        Time: '02:15',
        Name: 'Laxmi Ganesh',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '02:34', Name: 'Pranam', type: 'Local', destination: 'Kateel'},
      {
        Time: '02:37',
        Name: 'Padmambikaa',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '02:44',
        Name: 'Navadurga Prasad',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '02:55', Name: 'Pranam', type: 'Local', destination: 'Kateel'},
      {
        Time: '02:57',
        Name: 'Padmambikaa',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '03:05',
        Name: 'Reshma',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '03:12',
        Name: 'Christa Jyothi',
        type: 'Local',
        destination: 'Udupi',
      },
      {Time: '03:16', Name: 'Star', type: 'Local', destination: 'Udupi'},
      {
        Time: '03:20',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '03:31', Name: 'Naveen', type: 'Local', destination: 'Udupi'},
      {
        Time: '03:33',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '03:43',
        Name: 'Sangam',
        type: 'Fast Service - Local',
        destination: 'Padubidri',
      },
      {Time: '03:45', Name: 'Naveen', type: 'Local', destination: 'Udupi'},
      {
        Time: '03:48',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '03:54', Name: 'Naveen', type: 'Local', destination: 'Udupi'},
      {
        Time: '03:59',
        Name: 'Padmambikaa',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '04:10', Name: 'Ayra', type: 'Express', destination: 'Mangalore'},
      {
        Time: '04:19',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '04:25', Name: 'Naveen', type: 'Local', destination: 'Udupi'},
      {
        Time: '04:29',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '04:30',
        Name: 'Bharathi',
        type: 'Express',
        destination: 'Padubidri',
      },
      {
        Time: '04:35',
        Name: 'Sai Ram',
        type: 'Fast Service - Local',
        destination: 'Padubidri',
      },
      {
        Time: '04:41',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '04:49',
        Name: 'Shree Padma',
        type: 'Local',
        destination: 'Udupi via Kapu',
      },
      {
        Time: '04:56',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '05:02', Name: 'Mercy', type: 'Local', destination: 'Mangalore'},
      {
        Time: '05:07',
        Name: 'Navadurga Prasad',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '05:20',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
      {Time: '05:21', Name: 'Shree Padma', type: 'Local', destination: 'Udupi'},
      {
        Time: '05:22',
        Name: 'Navadurga Prasad',
        type: 'Express',
        destination: 'Mangalore',
      },
      {
        Time: '05:38',
        Name: 'Vishal',
        type: 'Express',
        destination: 'Mangalore',
      },
    ],
    [
      {Time: '07:30', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {Time: '07:32', Name: 'Reshma', type: 'Hybrid', source: 'Udupi'},
      {
        Time: '07:35',
        Name: 'Navadurga Prasad',
        type: 'Express',
        source: 'Shivmogga',
      },
      {Time: '07:51', Name: 'Srilaxmi', type: 'Local', source: 'Kateel'},
      {Time: '08:03', Name: 'Kusuma', type: 'Express', source: 'Mangalore'},
      {Time: '08:08', Name: 'Milan', type: 'Local', source: 'Udupi'},
      {Time: '08:10', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {Time: '08:22', Name: 'Mercy', type: 'Local', source: 'Mangalore'},
      {
        Time: '08:36',
        Name: 'Navadurga Prasad',
        type: 'Express',
        source: 'Mangalore',
      },
      {Time: '08:37', Name: 'Keerthi', type: 'Local', source: 'Udupi'},
      {
        Time: '08:41',
        Name: 'Navadurga Prasad',
        type: 'Express',
        source: 'Mangalore',
      },
      {Time: '09:17', Name: 'Sangam', type: 'Local', source: 'Udupi'},
      {
        Time: '09:20',
        Name: 'Laxmi Ganesh',
        type: 'Express',
        source: 'Mangalore',
      },
      {
        Time: '09:49',
        Name: 'Padmambikaa',
        type: 'Express',
        source: 'Mangalore',
      },
      {Time: '09:51', Name: 'Naveen', type: 'Local', source: 'Udupi'},
      {Time: '09:56', Name: 'Naveen', type: 'Local', source: 'Udupi'},
      {Time: '10:08', Name: 'P.M Travels', type: 'Local', source: 'Udupi'},
      {
        Time: '10:17',
        Name: 'Padmambikaa',
        type: 'Express',
        source: 'Mangalore',
      },
      {
        Time: '10:28',
        Name: 'Padmambikaa',
        type: 'Express, UC',
        source: 'Mangalore',
      },
      {Time: '10:30', Name: 'Jeevan', type: 'Local, UC', source: 'Manchakal'},
      {
        Time: '10:55',
        Name: 'Shree Padma',
        type: 'Local, UC',
        source: 'Udupi via Kapu',
      },
      {
        Time: '11:01',
        Name: 'Padmambikaa',
        type: 'Express, UC',
        source: 'Mangalore',
      },
      {Time: '11:17', Name: 'Naveen', type: 'Local, UC', source: 'Udupi'},
      {Time: '11:33', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {Time: '11:39', Name: 'Kanthi', type: 'Local', source: 'Udupi'},
      {Time: '11:51', Name: 'Kanthi', type: 'Local', source: 'Udupi'},
      {
        Time: '12:03',
        Name: 'Shahil',
        type: 'Local',
        source: 'Udupi via Padubidri',
      },
      {Time: '12:05', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {Time: '12:11', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {Time: '12:11', Name: 'Christa Jyothi', type: 'Local', source: 'Udupi'},
      {Time: '12:14', Name: 'Nandini', type: 'Local', source: 'Mangalore'},
      {Time: '12:16', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {
        Time: '12:24',
        Name: 'Navadurga Prasad',
        type: 'Express',
        source: 'Mangalore',
      },
      {Time: '12:36', Name: 'Vishal', type: 'Express, UC', source: 'Mangalore'},
      {Time: '12:43', Name: 'Sangam', type: 'Local', source: 'Mulki'},
      {Time: '12:44', Name: 'Bharathi', type: 'Express', source: 'Padubidri'},
      {Time: '12:50', Name: 'Bharathi', type: 'Express', source: 'Udupi'},
      {
        Time: '12:52',
        Name: 'Navadurga Prasad',
        type: 'Express',
        source: 'Mangalore',
      },
      {Time: '01:03', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {Time: '01:10', Name: 'Milan', type: 'Local', source: 'Udupi'},
      {Time: '01:16', Name: 'Sangam', type: 'Local', source: 'Udupi'},
      {
        Time: '01:20',
        Name: 'Keerthi',
        type: 'Fast Service - Local',
        source: 'Udupi',
      },
      {
        Time: '01:23',
        Name: 'Laxmi Ganesh',
        type: 'Express',
        source: 'Mangalore',
      },
      {Time: '01:35', Name: 'Reshma', type: 'Express', source: 'Mangalore'},
      {Time: '01:43', Name: 'Christa Jyothi', type: 'Local', source: 'Udupi'},
      {
        Time: '01:49',
        Name: 'Padmambikaa',
        type: 'Express',
        source: 'Mangalore',
      },
      {Time: '02:06', Name: 'Pranam', type: 'Local', source: 'Kateel'},
      {
        Time: '02:08',
        Name: 'Padmambikaa',
        type: 'Express, UC',
        source: 'Mangalore',
      },
      {Time: '02:15', Name: 'Sangam', type: 'Local', source: 'Udupi'},
      {Time: '02:25', Name: 'Rashmi Travels', type: 'Local', source: 'Kateel'},
      {Time: '02:36', Name: 'Naveen', type: 'Local', source: 'Udupi'},
      {Time: '02:38', Name: 'Vishal', type: 'Express, UC', source: 'Mangalore'},
      {
        Time: '02:51',
        Name: 'Padmambikaa',
        type: 'Express',
        source: 'Mangalore',
      },
      {
        Time: '02:52',
        Name: 'Christa Kiran',
        type: 'Express',
        source: 'Mangalore',
      },
      {Time: '03:06', Name: 'Naveen', type: 'Local', source: 'Udupi'},
      {
        Time: '03:09',
        Name: 'Padmambikaa',
        type: 'Express',
        source: 'Mangalore',
      },
      {Time: '03:23', Name: 'Naveen', type: 'Local', source: 'Udupi'},
      {Time: '03:25', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {Time: '03:28', Name: 'Ayra', type: 'Express', source: 'Mangalore'},
      {
        Time: '03:32',
        Name: 'Shree Padma',
        type: 'Local, UC',
        source: 'Udupi via Kapu',
      },
      {Time: '03:40', Name: 'Sangam', type: 'Local', source: 'Udupi'},
      {Time: '03:43', Name: 'Vishal', type: 'Express, UC', source: 'Mangalore'},
      {
        Time: '03:55',
        Name: 'Shree Annapoorneshwari',
        type: 'Express',
        source: 'Mangalore',
      },
      {Time: '04:08', Name: 'Mercy', type: 'Express', source: 'Mangalore'},
      {
        Time: '04:12',
        Name: 'Navadurga Prasad',
        type: 'Express',
        source: 'Mangalore',
      },
      {Time: '04:21', Name: 'Kanthi', type: 'Local', source: 'Udupi'},
      {Time: '04:26', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {Time: '04:40', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {Time: '04:44', Name: 'Sangam', type: 'Local', source: 'Udupi'},
      {Time: '04:46', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {Time: '04:58', Name: 'Bharathi', type: 'Express', source: 'Udupi'},
      {Time: '04:59', Name: 'Vishal', type: 'Express', source: 'Mangalore'},
      {Time: '05:07', Name: 'Pranam', type: 'Local', source: 'Kateel'},
      {Time: '05:40', Name: 'Sangam', type: 'Local, UC', source: 'Udupi'},
      {
        Time: '05:39',
        Name: 'Rajarajeshwari',
        type: 'Express, UC',
        source: 'Mangalore',
      },
      {Time: '05:49', Name: 'Keerthi', type: 'Local, UC', source: 'Udupi'},
      {
        Time: '05:51',
        Name: 'Laxmi Ganesh',
        type: 'Express, UC',
        source: 'Mangalore',
      },
    ],
  ];

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

      <View style={styles.ResultView}>
        <Text style={styles.SectionTitle}>Result for</Text>
        <Text style={styles.SectionHead}>Karkala Bypass - Nitte</Text>
        <View style={styles.BottonInfo}>
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
          <Text style={{textAlign: 'center', paddingVertical: 5}}>
            NB: Some external factors can affect the timings of the bus.
          </Text>
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.SubHead}>Next bus</Text>
          <View style={styles.RouteView}>
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
                <Text style={styles.RouteMainHead}>Bus Name</Text>
                <Text style={styles.RouteSrcDes}>19:10</Text>
              </View>
            </View>
            {/* <Text style={styles.ReachingTime}>{item.ReachesNitteAt}</Text> */}
          </View>
        </View>
        <Text style={styles.SubHead}>All buses</Text>
        <FlatList
          style={{height: 495}}
          showsVerticalScrollIndicator={false}
          data={busSchedule[id]}
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
              {/* <Text style={styles.ReachingTime}>{item.ReachesNitteAt}</Text> */}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
export default DetailsPage;

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
    width: 35,
    height: 35,
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
    fontWeight: '600',
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
    padding: 17,
    alignItems: 'center',
    rowGap: 15,
    marginBottom: 10,
    columnGap: 15,
    borderRadius: 5,
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
