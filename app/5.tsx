import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        
        <View style={styles.topBar}>
          <View style={styles.searchField} />
          <View style={styles.squareButton} />
        </View>

        <View style={styles.gridContainer}>
          <View style={styles.gridRow}>
            <View style={styles.card}>
                <View style={styles.cardInner} />
            </View>
            <View style={styles.card}>
                <View style={styles.cardInner} />
            </View>
          </View>
          <View style={styles.gridRow}>
            <View style={styles.card}>
                <View style={styles.cardInner} />
            </View>
            <View style={styles.card}>
                <View style={styles.cardInner} />
            </View>
          </View>
          <View style={styles.gridRow}>
            <View style={styles.card}>
                <View style={styles.cardInner} />
            </View>
            <View style={styles.card}>
                <View style={styles.cardInner} />
            </View>
          </View>
        </View>

      </View>
      <Text style={styles.footerText}>Exercício 05 — DDM</Text>
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
    gap: 16,
  },
  topBar: {
    flex: 1.2, 
    flexDirection: 'row',
    gap: 16,
  },
  searchField: {
    flex: 1, 
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 100, 
    backgroundColor: '#c1c1df',
  },
  squareButton: {
    aspectRatio: 1, 
    borderRadius: 12,
    backgroundColor: '#1d1933',
  },
  gridContainer: {
    flex: 9, 
    gap: 16,
  },
  gridRow: {
    flex: 1, 
    flexDirection: 'row',
    gap: 16,
  },
  card: {
    flex: 1, 
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 14,
    padding: '6%',
    backgroundColor: '#c1c1df',
  },
  cardInner: {
    flex: 1,
    backgroundColor: '#1d1933',
    borderRadius: 8,
  },
  footerText: {
    textAlign: 'center',
    color: '#1d1933',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: '3%',
  },
});
