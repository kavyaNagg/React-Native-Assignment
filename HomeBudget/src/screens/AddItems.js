// import React from 'react';
// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// export default function AddItems() {
//   // static navigationOptions = {
//   //     title:'Home',
//   // }
//   return (
//     //const {navigate} = this.props.navigation;
//     <View style={styles.container}>
//       <View
//         style={{
//           height: 1000,
//           width: '100%',
//           backgroundColor: '#fff',
//           marginTop: 100,
//           borderTopLeftRadius: 40,
//           borderTopRightRadius: 40,
//         }}>
//         <View style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
//           <TouchableOpacity onPress={() => navigate('Home', {name: 'Home'})}>
//             <Image
//               resizeMode="contain"
//               style={{
//                 height: 50,
//                 width: 50,
//               }}
//               source={require('../assets/exit.jpg')}
//             />
//           </TouchableOpacity>
//           <Text
//             style={{
//               fontSize: 25,
//               fontWeight: '700',
//               marginLeft: 40,
//               color: '#000',
//             }}>
//             Add Transaction
//           </Text>
//         </View>
//         <View style={{flexDirection: 'row', padding: 30}}>
//           <View
//             style={{
//               height: 40,
//               width: 80,
//               backgroundColor: '#22ce99',
//               borderRadius: 30,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text
//               style={{
//                 color: '#fff',
//                 fontSize: 25,
//                 fontWeight: '700',
//               }}>
//               USD
//             </Text>
//           </View>
//           <TextInput
//             placeholder="amount spent"
//             keyboardType="numeric"
//             style={{
//               fontSize: 30,
//               marginLeft: 10,
//               padding: 10,
//               borderBottomWidth: 2,
//               borderBlockColor: '#000',
//               color: '#000',
//             }}>
//             Amount Spent
//           </TextInput>
//         </View>

//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginHorizontal: 30,
//             paddingTop: 30,
//           }}>
//           <View Style={{flexDirection: 'row', alignItems: 'center'}}>
//             <View
//               style={{
//                 height: 70,
//                 width: 70,
//                 borderRadius: 100,
//                 backgroundColor: '#00192d',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Image
//                 resizeMode="contain"
//                 style={{height: 40, width: 40}}
//                 //source={require{'../assets/note.png'}}
//               ></Image>
//             </View>

//             <View>
//               <TextInput
//                 placeholder="Note"
//                 keyboardType="numeric"
//                 style={{
//                   fontSize: 30,
//                   marginLeft: 10,
//                   padding: 10,
//                   borderBottomWidth: 2,
//                   borderBlockColor: '#000',
//                 }}></TextInput>
//             </View>
//           </View>
//         </View>

//         <View
//           style={{
//             height: '30%',
//             width: '90%',
//             backgroundColor: '#eee',
//             marginHorizontal: 20,
//             borderRadius: 30,
//             marginTop: 30,

//             shadowColor: '#000',
//             shadowOffset: {
//               width: 0,
//               height: 6,
//             },
//             shadowOpacity: 0.37,
//             shadowRadius: 8,
//           }}>
//           <Text
//             style={{
//               padding: 20,
//               fontSize: 25,
//               fontWeight: '500',
//               color: '#000',
//             }}>
//             Last Records
//           </Text>
//           <View
//             style={{
//               borderBottomWidth: 2,
//               width: '90%',
//               opacity: 0.5,
//               marginLeft: 20,
//             }}></View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#22ce99',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
