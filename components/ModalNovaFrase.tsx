import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSave: (texto: string) => void;
  frase: string;
  setFrase: (texto: string) => void;
}

export const ModalNovaFrase: React.FC<Props> = ({
  visible,
  onClose,
  onSave,
  frase,
  setFrase,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Cadastrar Nova Frase</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua frase"
            placeholderTextColor="#aaa"
            value={frase}
            onChangeText={setFrase}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => onSave(frase)}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '85%',
    backgroundColor: '#FFF0F5',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
    color: '#7B61FF',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D8BFD8',
    backgroundColor: '#FAF0FF',
    color: '#333',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#E0D7FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#7B61FF',
    fontWeight: 'bold',
  },
});