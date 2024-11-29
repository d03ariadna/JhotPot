import React, { useRef } from 'react';
import { View, Text, Alert } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import NavigationBar from '@/components/navigation/NavigationBar';
import Button from '@/components/globals/Buttons/Button';
import OutlineButton from '@/components/globals/Buttons/OutlineButton';
import QRCodeGenerator from '@/components/extra/QRCodeGenerator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLocalSearchParams } from 'expo-router';

export default function GenerateQR() {
    const params = useLocalSearchParams();
    const deviceInfoString = params.deviceInfo || '{}'; // Asegúrate de que nunca sea `undefined`
    const deviceInfo = JSON.parse(deviceInfoString);

    // Referencia para capturar el QR
    const qrCodeRef = useRef();

    // Función para capturar y compartir el QR
    const handleShareQR = async () => {
        try {
            const uri = await captureRef(qrCodeRef, {
                format: 'png',
                quality: 0.8,
            });

            if (await Sharing.isAvailableAsync()) {
                await Sharing.shareAsync(uri);
            } else {
                Alert.alert('Error', 'El compartir no está disponible en este dispositivo.');
            }
        } catch (error) {
            console.error('Error al compartir el QR:', error);
        }
    };

    // Función para capturar y guardar el QR
    const handleSaveQR = async () => {
        try {
            // Captura la vista como imagen
            const uri = await captureRef(qrCodeRef, {
                format: 'png',
                quality: 0.8,
            });

            // Solicita permisos de acceso a la galería
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permiso Denegado', 'Se necesita acceso a la galería para guardar la imagen.');
                return;
            }

            // Guarda la imagen en la galería
            await MediaLibrary.saveToLibraryAsync(uri);

            Alert.alert('Éxito', 'El código QR se ha guardado en tu galería.');
        } catch (error) {
            console.error('Error al guardar el QR:', error);
            Alert.alert('Error', 'No se pudo guardar la imagen.');
        }
    };

    return (
        <View style={{ paddingBottom: hp(4) }} className="flex-1">
            <NavigationBar title={'Generate QR Code'} />

            <View style={{ paddingHorizontal: hp(4) }} className="flex-1">
                <View
                    style={{ padding: hp(4), height: hp(35) }}
                    className="border bg-fourth border-sixth rounded-lg items-center"
                    ref={qrCodeRef} // Referencia para capturar esta vista
                >
                    <Text style={{ marginBottom: hp(4) }} className="font-medium text-sm text-text">
                        Now you can share or save your QR
                    </Text>
                    <QRCodeGenerator device={deviceInfo} />
                </View>

                <View className="w-full gap-5 mt-8">
                    <Button title="Share QR" action={handleShareQR} />
                    <OutlineButton title="Save QR" action={handleSaveQR} />
                </View>
            </View>
        </View>
    );
}
