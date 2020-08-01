import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Axios from 'axios'
import Asyncstorage from '@react-native-community/async-storage'
import api from '../api/api'
// import { GoogleSignin, statusCodes } from '@react-native-community/google-signin'

const { height, width } = Dimensions.get('window')

export default function Biodata({ navigation }) {

    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        async function getToken() {
            try {
                const token = await Asyncstorage.getItem("token")
                return getVenue(token)
            } catch (err) {
                console.log(err)
            }
        }
        getToken()
        // getCurrentUser()
    }, [])

    const getCurrentUser = async () => {
        const userInfo = await GoogleSignin.signInSilently()
        setUserInfo(userInfo)
    }

    const getVenue = (token) => {
        Axios.get(`${api}/venues`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onLogoutPress = async () => {
        try {
            // await GoogleSignin.revokeAccess()
            // await GoogleSignin.signOut()
            // await Asyncstorage.removeItem("token")
            navigation.navigate('Login')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.partAtas}>
                {/* <Image source={{ uri: userInfo && userInfo.user && userInfo.user.photo }} style={{ width: 80, height: 80, borderRadius: 300, marginBottom: 15 }} /> */}
                {/* <Image source={require('../../assets/images/Singgit_Bramantha.jpg')} style={{ width: 80, height: 80, borderRadius: 300, marginBottom: 15 }} /> */}
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>{userInfo && userInfo.user && userInfo.user.name}</Text>
            </View>
            <View style={styles.partBawah}>
                <View style={styles.boxData}>
                    <View style={styles.baris}>
                        <Text style={styles.tulisan}>Tanggal Lahir</Text>
                        <Text style={styles.tulisan}>27 December 1987</Text>
                    </View>
                    <View style={styles.baris}>
                        <Text style={styles.tulisan}>Jenis Kelamin</Text>
                        <Text style={styles.tulisan}>Laki - laki</Text>
                    </View>
                    <View style={styles.baris}>
                        <Text style={styles.tulisan}>Hobi</Text>
                        <Text style={styles.tulisan}>Ngoding</Text>
                    </View>
                    <View style={styles.baris}>
                        <Text style={styles.tulisan}>No. Telp</Text>
                        <Text style={styles.tulisan}>0811227948</Text>
                    </View>
                    <View style={styles.baris}>
                        <Text style={styles.tulisan}>Email</Text>
                        <Text style={styles.tulisan}>{userInfo && userInfo.user && userInfo.user.email}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => onLogoutPress()} style={styles.buttonKeluar}>
                            <Text style={{ backgroundColor: "#3EC6FF", color: "white", height: 30, paddingHorizontal: 25, paddingVertical: 5, borderRadius: 5, width: width * 0.85, textAlign: 'center' }}>LOGOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
    },
    partAtas: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#3EC6FF",
        height: height * 0.33
    },
    partsBawah: {
        backgroundColor: "white",
    },
    boxData: {
        backgroundColor: "white",
        display: "flex",
        elevation: 5,
        width: width * 0.9,
        borderRadius: 10,
        alignSelf: "center",
        paddingHorizontal: 15,
        marginTop: -25,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingVertical: 10
    },
    tulisan: {
        fontSize: 13,
        marginVertical: 7
    },
    baris: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    buttonKeluar: {
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 10
    },
});
