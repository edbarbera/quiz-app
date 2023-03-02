import { Modal, Pressable, Text, View, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Result({ isVisible, onClose }: { isVisible: boolean, onClose: () => void}) {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Correct!</Text>
        <Pressable onPress={onClose}>
          <MaterialIcons name='check-circle' color='#000' size={22} />
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: 100,
    width: 100,
    backgroundColor: 'rgba(193, 225, 193, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    top: '45%',
    alignSelf: 'center'
  },
  title: {
    fontSize: 26
  }
})