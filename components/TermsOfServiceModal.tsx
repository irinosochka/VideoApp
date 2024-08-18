import React from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from "../styles/constants";

interface TermsOfServiceModalProps {
    visible: boolean;
    onClose: () => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ visible, onClose }) => {
    return (
        <Modal animationType="slide" visible={visible}>
            <View style={styles.termsOfServiceContainer}>
                <Text style={styles.title}>Terms of Service</Text>

                <ScrollView style={{ marginVertical: 25 }}>
                    <Text style={styles.txtToS}>
                        1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis.
                    </Text>
                    <Text style={styles.txtToS}>
                        2. Support for Expo services is only available in English, via e-mail.
                    </Text>
                    <Text style={styles.txtToS}>
                        3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.
                    </Text>
                    <Text style={styles.txtToS}>
                        4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service.
                    </Text>
                    <Text style={styles.txtToS}>
                        5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo's trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you.
                    </Text>
                    <Text style={styles.txtToS}>
                        6. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by Expo.
                    </Text>
                    <Text style={styles.txtToS}>
                        7. We may, but have no obligation to, remove Content and Accounts containing Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.
                    </Text>
                    <Text style={styles.txtToS}>
                        8. Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Expo customer, employee, member, or officer will result in immediate account termination.
                    </Text>
                    <Text style={styles.txtToS}>
                        9. You understand that the technical processing and transmission of the Service, including your Content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
                    </Text>
                    <Text style={styles.txtToS}>
                        10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
                    </Text>
                </ScrollView>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={onClose}>
                        <Text style={styles.btnText}>I understand</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    termsOfServiceContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 50,
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
    },
    txtToS: {
        fontSize: 12,
        color: COLORS.secondary,
        lineHeight: 24,
        marginBottom: 16,
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    btn: {
        backgroundColor: COLORS.secondary,
        width: '100%',
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    btnText: {
        color: COLORS.white,
        fontSize: 16,
        letterSpacing: 1,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default TermsOfServiceModal;
