import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
    },
  logo: {
    alignSelf: "center",
    width: '50%', 
    resizeMode: "contain",
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
    marginBottom: 210,
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
