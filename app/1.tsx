import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Perfil</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.section, styles.sectionLarge]}>
          <View style={styles.innerBlock} />
        </View>

        <View style={[styles.section, styles.sectionRow]}>
          <View style={styles.sideBlock} />
          <View style={styles.sideBlock} />
        </View>

        <View style={[styles.section, styles.sectionSmall]}>
          <View style={styles.innerBlock} />
        </View>
      </View>

      <Text style={styles.footer}>Exercício 01 — DDM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    backgroundColor: '#c8c8e6',
  },
  content: {
    flex: 1,
    gap: 10,
  },
  section: {
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 14,
    padding: 10,
    backgroundColor: '#bdbde0',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  sectionLarge: {
    flex: 2,
  },
  sectionRow: {
    flex: 1.4,
    flexDirection: 'row',
    gap: 10,
  },
  sectionSmall: {
    flex: 1,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#1a1a3e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  innerBlock: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#1a1a3e',
  },
  sideBlock: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#1a1a3e',
  },
  footer: {
    textAlign: 'center',
    color: '#2e2e4a',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 12,
    paddingBottom: 4,
  },
});