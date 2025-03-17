import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#4b0902",
  },
  input: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "#360602",
    padding: 20,
    borderRadius: 15,
    marginTop:20,
    marginRight: 75,
    marginLeft: 75,
    marginBottom: 20,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginLeft: 10,
  },
  itemList: {
    fontSize: 18,
    marginRight: 10,
  },
 taskbuttons : {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
 },

  taskcard: {
    marginVertical: 10,
    marginHorizontal: 0,
    padding: 5,
    borderRadius: 0,
    backgroundColor: "#f0e6e5",
    elevation: 3, // For Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  appBar: {
    backgroundColor: "#f0e6e5",
    padding: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  titlehead: {
    marginTop:20,
    color: "#400702",
    fontSize: 28,
    fontWeight: "bold",
  },

  tabhead : {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4b0902",
  },
  tabBar: {
    marginTop:20,
    backgroundColor: "#98554f",
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  tabIndicator: {
    backgroundColor: "white",
    height: 5,
  },
  containertab: {
    flex: 1,
    marginTop: -30,
  },
});

export default styles;
