import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from "../styles/constants";

interface SortModalProps {
    visible: boolean;
    onClose: () => void;
    selectedOption: string;
    onSelectOption: (option: string) => void;
}

const SortModal: React.FC<SortModalProps> = ({ visible, onClose, selectedOption, onSelectOption }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Sort records by:</Text>

                    <TouchableOpacity style={styles.optionContainer} onPress={() => onSelectOption('Upload date: latest')}>
                        <View style={styles.radioButton}>
                            {selectedOption === 'Upload date: latest' && <View style={styles.radioButtonInner} />}
                        </View>
                        <Text style={styles.optionText}>Upload date: latest</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionContainer} onPress={() => onSelectOption('Upload date: oldest')}>
                        <View style={styles.radioButton}>
                            {selectedOption === 'Upload date: oldest' && <View style={styles.radioButtonInner} />}
                        </View>
                        <Text style={styles.optionText}>Upload date: oldest</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionContainer} onPress={() => onSelectOption('Most popular')}>
                        <View style={styles.radioButton}>
                            {selectedOption === 'Most popular' && <View style={styles.radioButtonInner} />}
                        </View>
                        <Text style={styles.optionText}>Most popular</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onClose} style={styles.confirmButton}>
                        <Text style={styles.confirmButtonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContainer: {
        width: 320,
        padding: 20,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.white,
        letterSpacing: 0.1,
        marginBottom: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
    },
    optionText: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.white,
        marginLeft: 16,
    },
    radioButton: {
        height: 24,
        width: 24,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonInner: {
        height: 14,
        width: 14,
        borderRadius: 100,
        backgroundColor: COLORS.secondary,
    },
    confirmButton: {
        marginTop: 80,
        backgroundColor: COLORS.secondary,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: COLORS.white,
        fontSize: 14,
        letterSpacing: 0.5,
        fontWeight: '600',
    },
});

export default SortModal;
