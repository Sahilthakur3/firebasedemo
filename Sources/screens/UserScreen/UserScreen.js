import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import appleAuth, { AppleButton } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DefaultPreference from 'react-native-default-preference';



export default function UserScreen({ navigation }) {
    const [names, setname] = useState("")
    const [ages, setage] = useState("")
    const [pass, setpass] = useState("")
    global.myvar=names

    async function Storedata() {
        firestore()
            .collection('User1')
            .doc(names)
            .set({
                name: names,
                age: ages,
                password: pass
            })
            .then(() => {
                console.log('User added!');
               // DefaultPreference.get('11').then(function (names) { console.log(names) });
               // DefaultPreference.set('11', 'my value').then(function () { console.log('done') });
                navigation.navigate("UserDetails")

            });
    }


    return (
        <View style={{ flex: 1, }}>
            <Text
                style={{
                    alignSelf: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 150
                }}>

                Welcome to hello world
            </Text >

            <TextInput
                onChangeText={(names) => setname(names)}
                style={{
                    alignSelf: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 50
                }}
                placeholder="Enter user name here">

            </TextInput>
            <TextInput
                onChangeText={(ages) => setage(ages)}
                style={{
                    alignSelf: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 50
                }}
                placeholder="enter user age ">

            </TextInput>

            <TextInput
                onChangeText={(pass) => setpass(pass)}
                style={{
                    alignSelf: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 50
                }}
                placeholder="enter user password here">

            </TextInput>

            <TouchableOpacity
                onPress={() => Storedata()}
                style={{
                    height: 50,
                    width: 200,
                    backgroundColor: "blue",
                    marginTop: 50,
                    justifyContent: "center",
                    borderRadius: 20,
                    alignSelf: "center"
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        alignSelf: "center",

                    }}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    )
}
