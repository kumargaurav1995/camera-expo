//import Expo, { createTHREEViewClass } from 'expo';
import React, { Component }  from 'react';
import { StyleSheet, Text, View,Header, TouchableOpacity} from 'react-native';
import { Camera, Permissions} from "expo";
import Icon from 'react-native-ionicons';



export default class App extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  takePicture = () => {
    const options = {};
    this.camera.capture({ metadata: options })
    .then((data) => console.log(data))
    .catch(err => console.error(err));
 }
  
  render() {
    return (
      <View style={styles.container}>
       <Text>Camera</Text>
      
   
        <Camera 
        style={{  flex: 1,  justifyContent: 'space-between' }}
        type={this.state.type}><View style={styles.camera} ><Text>This is not working, Please dont click</Text>
        <TouchableOpacity style={styles.captureButton} onPress={this.takePicture}>        
        
    </TouchableOpacity></View></Camera>
      <Text style = {styles.capture} onPress = {this.takePicture}>CAPTURE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 40,
    color: 'blue',
  },
  capture:{
    fontSize: 30,
    color: 'red',
    alignSelf: 'center',
  },
  camera : {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}); 



/*class CameraComponent extends React.Component {

  takePicture = () => {
    const options = {};
    this.camera.capture({ metadata: options })
    .then((data) => console.log(data))
    .catch(err => console.error(err));
 }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  render() {
    const { hasCameraPermission } = this.state

    if (hasCameraPermission === null) {
      return <View />
    }
    else if (hasCameraPermission === false) {
      return <Text> No access to camera</Text>
    }
    else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
            style={{ flex: 1, justifyContent: 'space-between' }}
            type={this.state.type}
          >
            <Header
              searchBar
              rounded
              style={{
                position: 'absolute',
                backgroundColor: 'transparent',
                left: 0,
                top: 0,
                right: 0,
                zIndex: 100,
                alignItems: 'center'
              }}
            ></Header>
            </Camera>
            <Text style = {styles.capture} onPress = {this.takePicture}>CAPTURE</Text>
            </View>
      );
}
  }
}
export default CameraComponent;



const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
   },
   capture: {
      fontSize: 30,
      color: 'red',
      alignSelf: 'center',
   }
});*/

/*const THREE = require('three');
const THREEView = createTHREEViewClass(THREE);

console.disableYellowBox = true;

class App extends React.Component {
  componentWillMount() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75,1,1,1000);
    this.camera.position.z = 5;

    this.geometry = new THREE.BoxGeometry(1,1,1);
    this.material = new THREE.MeshBasicMaterial({color: 0x00ff00})
    this.cube = new THREEMesh(this.geometry, this.material);
    this.scene.add(this.cube);
  }
  tick = dt => {
    this.cube.rotation.x += dt * 0.1;
    this.cube.rotation.y += dt * 0.2;
  }
  render() {
    return(
    <THREEView
    style={{flex:1}}
    scene={this.scene}
    camera={this.camera}
    tick={this.tick}
    />
    );

  }
}
Expo.registerRootComponent(App); */
/*export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
