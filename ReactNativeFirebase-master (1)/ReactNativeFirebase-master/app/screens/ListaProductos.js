import { View, Text, StyleSheet } from "react-native";
import { Button, FAB } from "@rneui/themed";
import { consultar } from "../services/ProductosSrv";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";

export const ListaProductos = ({ navigation }) => {
  const [productos, setProductos] = useState([]);
  useEffect(()=>{
    recuperarProducto();
  
  },[]);

  const recuperarProducto = () => {
    console.log("Recuperando Productos");
    consultar(setProductos);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LISTA DE PRODUCTOS</Text>
      <FlatList 
        data={productos}
        renderItem={({ item }) => {
          return  <Text style={styles.productItem}>{item.nombre}</Text>
        }}
        keyExtractor={(item) => {return item.codigo}}
      />
      <FAB
        title="+"
        placement="right"
        onPress={() => {
          navigation.navigate("ProductoFormNav",{fnRepintarLista:recuperarProducto});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  boton:{
    marginTop:5,
    marginBottom:500
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productItem: {
    backgroundColor: "#77FE00",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16
  },
});
