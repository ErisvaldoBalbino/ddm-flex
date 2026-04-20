import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.section, styles.sectionRowBall]}>
          <View style={styles.innerBall} />
          <View style={styles.innerBall} />
          <View style={styles.innerBall} />
        </View>

        <View style={[styles.section, styles.sectionRowSquare1]}>
          <View style={styles.innerSquare} />
          <View style={styles.innerSquare} />
          <View style={styles.innerSquare} />
        </View>

        <View style={[styles.section, styles.sectionRowSquare2]}>
          <View style={styles.innerRectangle} />
          <View style={styles.innerRectangle} />
          <View style={styles.innerRectangle} />
          <View style={styles.innerRectangle} />
        </View>

        <View style={[styles.section, styles.sectionRowSquare3]}>
          <View style={styles.innerSquare} />
          <View style={styles.innerSquare} />
        </View>
      </View>

      <Text style={styles.footer}>Exercício 02 — DDM</Text>
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
  sectionRowBall: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 70,
  },
  sectionRowSquare1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  sectionRowSquare2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 10,
  },
    sectionRowSquare3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  innerBall: {
    width: '20%',
    height: '50%',
    borderRadius: '100%',
    backgroundColor: '#1a1a3e',
  },
  innerSquare: {
    width: '20%',
    height: '50%',
    borderRadius: 10,
    backgroundColor: '#1a1a3e',
  },
  innerRectangle: {
    width: '22%',
    height: '45%',
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