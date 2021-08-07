import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default function UsrDetails() {
    useEffect(() => {
        console.log("hello")
        // Update the document title using the browser API
        getdata();
    });

    const [names, setname] = useState()
    const [ages, setage] = useState()
    const [pass, setpass] = useState()
    async function getdata() {
        firestore()
            .collection('User1')
            .doc(global.myvar)
            .get()
            .then(documentSnapshot => {
                console.log('User exists: ', documentSnapshot.exists);

                if (documentSnapshot.exists) {
                    console.log('User data: ', documentSnapshot.data().age);
                    setage(documentSnapshot.data().age)
                    console.log("age is", ages)
                    console.log('User data: ', documentSnapshot.data().name);
                    setname(documentSnapshot.data().name)
                    console.log("name is", names)

                    console.log('User data: ', documentSnapshot.data().password);
                    setpass(documentSnapshot.data().password)
                    console.log("age is", pass)
                }
            }
            )
    }

    return (
        <View style={{ flex: 1, }}>
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 150, alignSelf: "center"
                }}>
                username : {names}
            </Text>
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 50, alignSelf: "center"
                }}>

                userage : {ages}
            </Text>
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 50, alignSelf: "center"
                }}>

                userpassword :   {pass}
            </Text>
        </View>
    )
}
