import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.cardContainer}>
          <View style={styles.cardTop}>
            <View style={styles.avatar} />
            <View style={styles.textContainer}>
              <View style={styles.titleLine} />
              <View style={styles.subtitleLine} />
            </View>
          </View>
          <View style={styles.button} />
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardTop}>
            <View style={styles.avatar} />
            <View style={styles.textContainer}>
              <View style={styles.titleLine} />
              <View style={styles.subtitleLine} />
            </View>
          </View>
          <View style={styles.button} />
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardTop}>
            <View style={styles.avatar} />
            <View style={styles.textContainer}>
              <View style={styles.titleLine} />
              <View style={styles.subtitleLine} />
            </View>
          </View>
          <View style={styles.button} />
        </View>

      </View>
      <Text style={styles.footer}>Exercício 03 — DDM</Text>
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
    gap: '4%',
  },
  cardContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#a3a0d6',
    borderRadius: 14,
    padding: '4%',
    backgroundColor: '#c1c1df',
  },
  cardTop: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4%',
  },
  avatar: {
    height: '80%',
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: '#1d1933',
  },
  textContainer: {
    flex: 1,
    height: '60%',
    justifyContent: 'space-evenly',
  },
  titleLine: {
    height: '35%',
    backgroundColor: '#1d1933',
    borderRadius: 8,
    width: '85%',
  },
  subtitleLine: {
    height: '25%',
    backgroundColor: '#6a6a8a',
    borderRadius: 8,
    width: '55%',
  },
  button: {
    flex: 1,
    marginTop: '4%',
    borderRadius: 8,
    backgroundColor: '#1d1933',
  },
  footer: {
    textAlign: 'center',
    color: '#1d1933',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: '4%',
  },
});