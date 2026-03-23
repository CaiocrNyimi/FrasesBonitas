import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Frase } from './types/Frase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { FraseCard } from './components/FraseCard';
import { ModalNovaFrase } from './components/ModalNovaFrase';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [frases, setFrases] = useState<Frase[]>([]);
  const [fraseAtual, setFraseAtual] = useState<string>('');
  const [novaFrase, setNovaFrase] = useState<string>('');
  const [modalVisivel, setModalVisivel] = useState<boolean>(false);

  const carregarFrases = async () => {
    const frases = await getDocs(collection(db, 'frases'));
    const lista: Frase[] = frases.docs.map(f => ({
      id: f.id,
      texto: f.data().texto,
    }));
    setFrases(lista);
    escolherFrase(lista);
  };

  const escolherFrase = (lista: Frase[]) => {
    if (lista.length === 0) return;

    let novaFrase = fraseAtual;
    let tentativas = 0;

    while (novaFrase === fraseAtual && tentativas < 10) {
      const aleatoria = lista[Math.floor(Math.random() * lista.length)];
      novaFrase = aleatoria?.texto || '';
      tentativas++;
    }
    setFraseAtual(novaFrase);
  };

  const adicionarFrase = async () => {
    if (novaFrase.trim()) {
      await addDoc(collection(db, 'frases'), { texto: novaFrase });
      setNovaFrase('');
      setModalVisivel(false);
      carregarFrases();
    }
  };

  useEffect(() => {
    carregarFrases();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisivel(true)}>
        <Text style={styles.linkText}>Nova Frase</Text>
      </TouchableOpacity>

      <View style={styles.fraseContainer}>
        <FraseCard texto={fraseAtual || 'Carregando...'} />
      </View>

      <TouchableOpacity onPress={() => escolherFrase(frases)} style={styles.reloadButton}>
        <Ionicons name="reload" size={32} color="#007AFF" />
      </TouchableOpacity>

      <ModalNovaFrase
        visible={modalVisivel}
        onClose={() => setModalVisivel(false)}
        onSave={adicionarFrase}
        frase={novaFrase}
        setFrase={setNovaFrase}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F0FF',
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 18,
    color: '#7B61FF',
    marginBottom: 20,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#E0D7FF',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  fraseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  reloadButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});