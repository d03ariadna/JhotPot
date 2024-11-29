import { Ionicons } from '@expo/vector-icons';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Platform } from 'react-native';

export default function CameraApp() {
  
  const [permission, requestPermission] = useCameraPermissions();
  const [data, setData] = useState('');
  
  const [isScanning, setIsScanning] = useState(false);
  const cameraRef = useRef(null);
  const router = useRouter();

  const params = useLocalSearchParams();
  const { routeToOpen } = params;

    // Función modificada para manejar el escaneo de códigos
  function handleBarcodeScanned({ type, data }) {
    if (isScanning) return;  // Evitar que se escaneen múltiples códigos
    setIsScanning(true);
    // console.log('Barcode scanned:', data);
    // console.log(`Barcode with type ${type} and data ${data} has been scanned!`);
    setData(data);  // Guardar los datos escaneados
    router.replace(
        {
            pathname: routeToOpen,
            params: { dataScanned: data}
        });
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <View className='p-10'>
          <Text style={styles.message}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      </View>
    );
  }

  // function toggleCameraFacing() {
  //   setFacing(current => (current === 'back' ? 'front' : 'back'));
  // }

  // async function takePicture() {
  //   if (!cameraRef.current) {
  //     return;
  //   }


  //   const photo = await cameraRef.current.takePictureAsync();
  //   if (!photo) {
  //     return;
  //   }
  //   setPhoto(photo.uri);
  // }

  // function discardPicture() {
  //   setPhoto(null);
  // }

  return (
      <View style={styles.container}>
          {Platform.OS === "android" ? <StatusBar hidden/>: null}
          <CameraView
            ref={cameraRef}
            style={styles.camera}
            facing={'back'}
            onBarcodeScanned={handleBarcodeScanned}
          >
            {/* <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
                <Ionicons name="camera-outline" size={30} color={'white'}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <Ionicons name="camera-reverse-outline" size={30} color={'white'}/>
            </TouchableOpacity>
            </View> */}
        </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    margin: 64,
  },
  button: {
    display: 'flex',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    margin: 5,
  },
  previewContainer: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
  },
  preview: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 20,
    padding: 5,
  },
});
