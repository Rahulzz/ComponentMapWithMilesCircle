import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default class MapBox extends React.Component {

    state = { latDelta: 0.1, lngDelta: 0.1, circleRadius: 0 }

    componentWillMount = () => {
        var miles = this.props.miles;
        var radius = (miles * 1609.344);
        var delta = ((miles/2) * (1/10));
        this.setState({ latDelta: delta, lngDelta: delta, circleRadius: radius });
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: this.props.latitude,
                        longitude: this.props.longitude,
                        latitudeDelta: this.state.latDelta,
                        longitudeDelta: this.state.lngDelta,
                    }}
                    customMapStyle={this.props.mapStyle}
                >
                    <MapView.Circle
                        center={{
                            latitude: this.props.latitude,
                            longitude: this.props.longitude,
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