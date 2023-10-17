import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { cargarConfig } from "./app/utils/FirebaseConfig";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductoForm } from "./app/screens/ProductoForm";
import { ListaProductos } from "./app/screens/ListaProductos";

const Stack = createNativeStackNavigator();
export default function App() {
  cargarConfig();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="ListaProductosNav"
          component={ListaProductos}
          options={{
            title: "Lista de Productos",
          }}
        />
        <Stack.Screen
          name="ProductoFormNav"
          component={ProductoForm}
          options={{
            title: "Formulario Producto",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
