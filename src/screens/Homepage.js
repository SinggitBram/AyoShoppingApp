import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, Image, Dimensions, TextInput } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import IonIcons from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

export default function Homepage() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItems, setCarouselItems] = useState([
        {
            gambar: require('../assets/images/promo1.jpg'),
        },
        {
            gambar: require('../assets/images/promo2.jpg'),
        },
        {
            gambar: require('../assets/images/promo3.jpeg'),
        },
        {
            gambar: require('../assets/images/promo4.jpg'),
        },
        {
            gambar: require('../assets/images/promo5.jpg'),
        },
    ])

    const renderItem = ({ item }) => {
        console.log(item.gambar)

        return (
            <View style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: height * 0.3,
                marginLeft: 5,
                marginRight: 5,
            }}>
                <Image source={item.gambar} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputText}>
                <IonIcons style={{ marginRight: 5 }} name="search" size={24} color="black" />
                <TextInput placeholder="Search for LCD TV" style={{ fontSize: 13, height: 40, width: width * 0.6 ,backgroundColor:'#dfe6e9'}}></TextInput>
                <IonIcons style={{ marginRight: 10 }} name="heart" size={24} color="grey" />
                <IonIcons style={{ marginRight: 10 }} name="mail" size={24} color="grey" />
                <IonIcons style={{ marginRight: 10 }} name="notifications" size={24} color="grey" />


            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'flex-start' }}>
                <Carousel
                    layout={"default"}
                    ref={ref => ref}
                    data={carouselItems}
                    sliderWidth={300}
                    itemWidth={330}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setActiveIndex(index)} />
            </View>
            <View style={{ marginVertical: 10, width: width, backgroundColor: "#6c5ce7" }}>
                <Text style={{ fontSize: 20, textAlign: "center", color: "white" }}>Kategori Pilihan</Text>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.categoryItem}>
                    <Image source={require('../assets/images/elektronik.jpg')} style={{ width: '90%', height: '90%', borderRadius: 10 }} />
                    <Text style={styles.tulisanKategori}>Elektronik</Text>
                </View>
                <View style={styles.categoryItem}>
                    <Image source={require('../assets/images/obat.jpg')} style={{ width: '90%', height: '90%', borderRadius: 10 }} />
                    <Text style={styles.tulisanKategori}>Kesehatan</Text>
                </View>
                <View style={styles.categoryItem}>
                    <Image source={require('../assets/images/kecantikan.jpg')} style={{ width: '90%', height: '90%', borderRadius: 10 }} />
                    <Text style={styles.tulisanKategori}>Kecantikan</Text>
                </View>
                <View style={styles.categoryItem}>
                    <Image source={require('../assets/images/dapur.jpg')} style={{ width: '90%', height: '90%', borderRadius: 10 }} />
                    <Text style={styles.tulisanKategori}>Dapur</Text>
                </View>
                <View style={styles.categoryItem}>
                    <Image source={require('../assets/images/ibu.jpg')} style={{ width: '90%', height: '90%', borderRadius: 10 }} />
                    <Text style={styles.tulisanKategori}>Ibu & Anak</Text>
                </View>
                <View style={styles.categoryItem}>
                    <Image source={require('../assets/images/makanan.jpg')} style={{ width: '90%', height: '90%', borderRadius: 10 }} />
                    <Text style={styles.tulisanKategori}>Makanan & Minuman</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a29bfe',
        alignItems: 'center',
        display: 'flex',
    },
    categoryContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: height * 0.4,
        width: width * 0.95,
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryItem: {
        display: 'flex',
        width: '33%',
        height: '40%',
        marginBottom: 15
    },
    tulisanKategori: {
        color: "#191970"
    },
    inputText: {
        width: width,
        paddingHorizontal: 10,
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        display: 'flex',
        backgroundColor:'#dfe6e9'
    },
});