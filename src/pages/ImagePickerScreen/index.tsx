import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Asset, launchCamera, launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';


const ImagePickerScreen = () => {
    const [selectedImage, setSelectedImage] = useState<Asset[] | null>(null);

    const handleSelectImage = () => {
        const options: ImageLibraryOptions = {

            mediaType: 'photo',
            quality: 0.5,

        };

        launchImageLibrary(options, (response) => {
            // Callback para lidar com a resposta da galeria de imagens
            if (response.didCancel) {
                console.log('Usuário cancelou a seleção de imagem');
            } else if (response.errorCode) {
                console.log('Erro ao selecionar a imagem:', response.errorMessage);
            } else {
                console.log('Imagem selecionada:', response.assets);
                // Faça o que você precisa com a imagem selecionada
            }
        });
    };

    const handleOpenCamera = () => {
        launchCamera({
            mediaType: 'photo',
        }, (response) => {
            // Callback para lidar com a resposta da galeria de imagens
            if (response.didCancel) {
                console.log('Usuário cancelou a seleção de imagem');
            } else if (response.errorCode) {
                console.log('Erro ao selecionar a imagem:', response.errorMessage);
            } else {
                console.log('Imagem selecionada:', response.assets);
                // Faça o que você precisa com a imagem selecionada
            }
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={handleSelectImage} style={{ alignSelf: 'center', marginBottom: 16 }}>
                <Text style={{ fontSize: 18, color: 'blue' }}>Select Image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenCamera} style={{ alignSelf: 'center', marginBottom: 16 }}>
                <Text style={{ fontSize: 18, color: 'blue' }}>Take Picture</Text>
            </TouchableOpacity>

            {selectedImage && (
                <Image source={{ uri: selectedImage[0].uri }} style={{ width: 200, height: 200, alignSelf: 'center' }} />
            )}
        </View>
    );
};

export default ImagePickerScreen;
