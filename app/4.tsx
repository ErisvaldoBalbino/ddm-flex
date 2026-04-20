import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        
        <View style={styles.sectionHeader}>
          <View style={styles.innerBar} />
        </View>

        <View style={styles.sectionMain}>
          <View style={styles.innerMain} />
        </View>

        <View style={styles.row}>
          <View style={styles.sectionCard}>
            <View style={styles.innerCard} />
          </View>
          <View style={styles.sectionCard}>
            <View style={styles.innerCard} />
          </View>
        </View>

        <View style={styles.sectionFooter}>
          <View style={styles.innerBar} />
        </View>

      </View>
      <Text style={styles.footerText}>Exercício 04 — DDM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    backgroundColor: '#cfcfe8',
  },
  content: {
    flex: 1,
    gap: 14,
  },
  sectionHeader: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 14,
    padding: '4%',
    backgroundColor: '#c1c1df',
  },
  sectionMain: {
    flex: 4,
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 14,
    padding: '4%',
    backgroundColor: '#c1c1df',
  },
  row: {
    flex: 2,
    flexDirection: 'row',
    gap: 14,
  },
  sectionCard: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 14,
    padding: '6%',
    backgroundColor: '#c1c1df',
  },
  sectionFooter: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 14,
    padding: '4%',
    backgroundColor: '#c1c1df',
  },
  innerBar: {
    flex: 1,
    backgroundColor: '#1d1933',
    borderRadius: 8,
  },
  innerMain: {
    flex: 1,
    backgroundColor: '#1d1933',
    borderRadius: 8,
  },
  innerCard: {
    flex: 1,
    backgroundColor: '#1d1933',
    borderRadius: 8,
  },
  footerText: {
    textAlign: 'center',
    color: '#1d1933',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: '4%',
  },
});
