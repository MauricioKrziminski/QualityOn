import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
    justifyContent: "center",
  },
  bbb: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 200,
    marginBottom: 200,
  },
  input: {
    backgroundColor: "#1f1e25",
    borderRadius: 10,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 56,
    borderRadius: 10,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 250,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
})
