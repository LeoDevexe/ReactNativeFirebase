import { View,Text,StyleSheet} from "react-native"
import {useState} from 'react'
import { Input,Icon, Button } from "@rneui/base";
import { guardar } from '../services/ProductosSrv'


export const ProductoForm = ({navigation})=>{

    const [codigo,setCodigo]=useState(null);
    const [nombre,setNombre]=useState(null);
    const [precio,setPrecio]=useState(null);

    const guardarProducto=()=>{
        guardar({
            codigo:codigo,
            nombre:nombre,
            precio:parseFloat(precio)
        });
        limpiar();
        navigation.goBack();
    }
const limpiar = ()=>{
    setCodigo(null);
    setNombre(null);
    setPrecio(null);
}
    
return <View style={styles.container}>
    <Text></Text>
    <Input
    value={codigo}
    onChangeText={setCodigo}
    label='Código'
    keyboardType="number-pad"
    leftIcon={
        <Icon
        name="form"
        size={24}
        color='black'
        type="ant-design"
        />
    }
    />
    <Input
    value={nombre}
    onChangeText={setNombre}
    label='Nombre'
    keyboardType="default"
    leftIcon={
        <Icon
        name="idcard"
        size={24}
        color='black'
        type="ant-design"
        />
    }
    />
    <Input
    value={precio}
    onChangeText={setPrecio}
    label='Precio'
    keyboardType="number-pad"
    leftIcon={
        <Icon
        name="money"
        size={24}
        color='black'
        type="font-awesome"
        />
    }
    />
    <Button
    title='Guardar'
    onPress={guardarProducto}
    />
    </View>
}

const styles =StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'colum',
        backgroundColor:'#fff',
        alingItems: 'strech',
        justifyContent: 'flex-start',

    },
})