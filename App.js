import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import UserScreen from './Sources/screens/UserScreen/UserScreen';
import UsrDetails from './Sources/screens/UserDetails/UsrDetails';
import firestore from '@react-native-firebase/firestore';
// import  firebase from 'firebase';
//import firestore from 'firebase/firestore'
function HomeScreen({ navigation }) {
  const [data, setdata] = useState("")
  const [username, setname] = useState("")
  const [userage, setage] = useState("")
  const [confirm, setConfirm] = useState(null);
  useEffect(() => {
    console.log("hello")
    // Update the document title using the browser API
    navigation.navigate("UserScreen")
  });

  async function signInWithPhoneNumber() {
    // const confirmation = await auth().signInWithPhoneNumber("+91821918236");
    // setConfirm(confirmation)
    // console.log(confirmation)
    //navigation.navigate("UserScreen")

    //  const userDocument = await firestore().collection('Users').doc('099YE4aF8KBrc3BbJJj0').get().name;
    //  console.log(userDocument)

    
    firestore()
      .collection('User1')
      .doc('student')
      .set({
        name: 'Sahil',
        age: 20,
      })
      .then(() => {
        console.log('User added!');
      });



    // firestore()
    // .collection('Users')
    // .doc('7THt7MXqKQ8t7xuqk2ma')
    // .get()
    // .then(documentSnapshot => {
    //   console.log('User exists: ', documentSnapshot.exists);

    //   if (documentSnapshot.exists) {
    //     console.log('User data: ', documentSnapshot.data().name.username);
    //   }
    // }
    // )
  }




    //  async function intit(){
    // //   const users =  firestore().collection('Users').get();
    // //   const user = await firestore().collection('Users').doc('099YE4aF8KBrc3BbJJj0').get();
    // //   user==setdata(user)
    // // console.log("data id" ,data)

    // firestore()
    // .collection('Users')
    // .doc('7THt7MXqKQ8t7xuqk2ma')
    // .get()
    // .then(documentSnapshot => {
    //   console.log('User exists: ', documentSnapshot.exists);

    //   if (documentSnapshot.exists) {
    //     console.log('User data: ', documentSnapshot.data().name.username);
    //   }
    // }
    // )}

    // firestore()
    // .collection('Users')
    // .get()
    // .then(querySnapshot => {
    //   console.log('Total users: ', querySnapshot.size);

    //   querySnapshot.forEach(documentSnapshot => {
    //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //   });
    // });


    // function store(){

    //   firestore()
    // .collection('Users')
    // .add({
    //   name: username,
    //   age: 30,
    // })
    // .then(() => {
    //   console.log('User added!');
    // });
    // }
    // var jsonData = JSON.stringify(data)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <TextInput placeholder="enter  number"
          onChangeText={(username) => setname(username)} >

        </TextInput>
        <Text
          // onPress={()=>console.log(users)}
          onPress={() => signInWithPhoneNumber()}
        >get code</Text>

      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  function App({ navigation }) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen name="UserScreen" component={UserScreen} />
          <Stack.Screen name="UserDetails" component={UsrDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;







// import React, { useState } from 'react';
// import { Button, TextInput,View,Text} from 'react-native';
// import auth from '@react-native-firebase/auth';

// export default function PhoneSignIn() {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);
//   //const [confirm, setConfirm] = useState("+918219183236");

//   const [code, setCode] = useState('');

//   // Handle the button press

//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//     console.log(confirmation)
//   }

//   const [code1, setCode1] = useState('123456');
//   // console.log('route', confirm);


//     async function confirmCode() {
//     try {
//       console.log(code1);
//       await confirm.confirm(code1);
//       console.log(code1);
//     } catch (error) {
//       console.log('Invalid code.');
//       // return(confirmCode)
//     }
//   }

//   // if (!confirm) {
//   //   return (
//   //     <Button
//   //       title="Phone Number Sign In"
//   //       onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
//   //     />
//   //   );
//   // }

//   return (
//     <View style={{justifyContent:"center",marginTop:100}}>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() =>signInWithPhoneNumber("+917876633297")} />
//       <Button title="Confirm Code" onPress={() =>confirmCode()} />
//     </View>
//   );
// }