import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.block1}>
          <View style={styles.avatar} />
          <View style={styles.titleLine} />
          <View style={styles.subtitleLine} />
        </View>

        <View style={styles.block2}>
          <View style={styles.smallCard} />
          <View style={styles.smallCard} />
          <View style={styles.smallCard} />
        </View>

        <View style={styles.block3}>
          <View style={styles.buttonHalf} />
          <View style={styles.buttonHalf} />
        </View>

        <View style={styles.block4}>
          <View style={styles.infoLineThick} />
          <View style={styles.infoLineThin} />
        </View>
      </View>
      <Text style={styles.footerText}>Exercício 06 — DDM</Text>
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
  block1: {
    flex: 4,
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 14,
    backgroundColor: '#c1c1df',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
    gap: '4%',
  },
  avatar: {
    height: '55%',
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: '#1d1933',
    marginBottom: '2%',
  },
  titleLine: {
    height: '10%',
    width: '60%',
    backgroundColor: '#1d1933',
    borderRadius: 8,
  },
  subtitleLine: {
    height: '6%',
    width: '45%',
    backgroundColor: '#6a6a8a',
    borderRadius: 8,
  },
  block2: {
    flex: 1.8,
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 14,
    backgroundColor: '#c1c1df',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  smallCard: {
    width: '26%',
    height: '65%',
    backgroundColor: '#1d1933',
    borderRadius: 8,
  },
  block3: {
    flex: 1.2,
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 14,
    backgroundColor: '#c1c1df',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '4%',
    gap: 14,
  },
  buttonHalf: {
    flex: 1,
    height: '100%',
    backgroundColor: '#1d1933',
    borderRadius: 8,
  },
  block4: {
    flex: 1.5,
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 14,
    backgroundColor: '#c1c1df',
    padding: '5%',
    justifyContent: 'space-evenly',
  },
  infoLineThick: {
    height: '30%',
    width: '100%',
    backgroundColor: '#1d1933',
    borderRadius: 8,
  },
  infoLineThin: {
    height: '25%',
    width: '100%',
    backgroundColor: '#6a6a8a',
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
