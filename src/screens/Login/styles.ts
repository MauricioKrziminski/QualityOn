import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    alignSelf: "center",
    width: '50%', 
    marginBottom: 20, 
    resizeMode: "contain",
  },
  aaa: {
    flexDirection: "column",
    // marginBottom: 240,
  },
  input: {
    backgroundColor: "#1f1e25",
    borderRadius: 10,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    height: 56,
    borderRadius: 10,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 230,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  registerText: {
    color: "#fff",
    fontSize: 16,
    textAlign: 'center',
  },
});
