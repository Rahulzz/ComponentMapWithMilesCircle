import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

export default class MapBox extends React.Component {

    state = { latitude: 0, longitude: 0, latDelta: 0.1, lngDelta: 0.1, circleRadius: 0 }

    componentWillMount = () => {
        Geocoder.init('ENTER API KEY'); // use a valid API key

        var lat = 0;
        var lng = 0;

        if (this.props.zipCode) {
            Geocoder.from("'" + this.props.zipCode + "'")
                .then(json => {
                    var location = json.results[0].geometry.location;
                    lat = location.lat;
                    lng = location.lng;
                    this.setState({ latitude: lat, longitude: lng});
                })
                .catch(error => console.warn(error));
        }
        else if (this.props.latitude && this.props.longitude) {
            lat = this.props.latitude;
            lng = this.props.longitude;
        }

        var miles = this.props.miles;
        var radius = (miles * 1609.344);
        var delta = ((miles / 2) * (1 / 10));
        this.setState({ latitude: lat, longitude: lng, latDelta: delta, lngDelta: delta, circleRadius: radius });
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: this.state.latDelta,
                        longitudeDelta: this.state.lngDelta,
                    }}
                    customMapStyle={this.props.mapStyle}
                >
                    <MapView.Circle
                        center={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                        }}
                        radius={this.state.circleRadius}
                        strokeWidth={this.props.circleBorderWidth}
                        strokeColor={this.props.circleBorderColor}
                        fillColor={this.props.circleFillColor}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});