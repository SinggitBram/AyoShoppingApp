import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken('pk.eyJ1Ijoic2luZ2dpdGJyYW0iLCJhIjoiY2tkZmoxdXZ2MWU4azJ5bXQwN2poaHZ3MiJ9.ntcYXv_7f2lrqkcP1kbyTA')

const coordinates = [
    [107.609810, -6.914744, 'Bandung'],//bandung
    [106.816666, -6.200000, 'Jakarta'],//jakarta
    [112.768845, -7.250445, 'Surabaya'],//surabaya
    [110.416664, -6.966667, 'Semarang'],//semarang
    [110.370529, -7.797068, 'Yogyakarta'],//yogyakarta
    [140.717000, -2.533000, 'Jayapura'],//jayapura
    [98.678513, 3.597031, 'Medan'],//medan
    [119.423790, -5.135399, 'Makassar'],//makassar
    [102.266579, -3.788892, 'Bengkulu'],//bengkulu
    [104.756554, -2.990934, 'Palembang'],//palembang
    [128.190643, -3.654703, 'Ambon'],//ambon
    [103.607254, -1.609972, 'Jambi'],//jambi
    [114.590111, -3.316694, 'Banjarmasin'],//banjarmasin
    [115.188919, -8.409518, 'Bali']//banjarmasin
]

export default function Maps() {

    useEffect(() => {
        const getLocation = async () => {
            try {
                const permission = await MapboxGL.requestAndroidLocationPermissions()
            }
            catch (error) {
                console.log(error)
            }
        }
        getLocation()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <MapboxGL.MapView style={{ flex: 1 }}>
                <MapboxGL.UserLocation
                    visible={true}
                />
                <MapboxGL.Camera
                    followUserLocation={true}
                />
                {coordinates.map((kordinat, i) => {
                    return (
                        <MapboxGL.PointAnnotation
                            key={i}
                            id={i.toString()}
                            coordinate={[kordinat[0], kordinat[1]]}
                        >
                            <MapboxGL.Callout
                                title={`Longitude: ${kordinat[0]} Latitude: ${kordinat[1]} Kota: ${kordinat[2]}`}
                            />
                        </MapboxGL.PointAnnotation>
                    )
                })}
            </MapboxGL.MapView>
        </View>
    );
}
