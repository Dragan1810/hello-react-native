import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";

const URLmini =
  "http://212.200.54.246:5001/api/StockTraceability/GetTraceabilityByBarcodeMobile?Barcode=";
const TestBarcode = "0186060082601331030164001000001800000692";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hasCameraPermission: null,
      timer: false
    };
  }
  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };

  _handleBarCodeRead = async ({ type, data }) => {
    Alert.alert("Scan successful!", JSON.stringify(data));
    console.log("Ding");
    await this.setState({ hasCameraPermission: false });
    this.props.navigation.navigate("ScanItem", { code: data });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ? (
          <Text>Requesting for camera permission</Text>
        ) : this.state.hasCameraPermission === false ? (
          <Text>Camera permission is not granted</Text>
        ) : (
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={{ height: 150, width: 600 }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000000"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
});
