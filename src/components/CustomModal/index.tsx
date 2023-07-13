import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, StyleSheet } from 'react-native';

const CustomModal = ({ visible, onClose, children }) => {
    const closeModal = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <Modal transparent visible={visible} onRequestClose={closeModal}>
            <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1}
                onPress={closeModal}
            >
            </TouchableOpacity>
            <View style={styles.modal}>
                {children}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
    },

    modal: {
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 20,
        zIndex: 1,
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
});

export default CustomModal;
