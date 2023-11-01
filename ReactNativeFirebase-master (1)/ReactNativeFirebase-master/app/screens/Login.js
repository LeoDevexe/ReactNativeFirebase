import { useState } from "react"
import { View,Text ,StyleSheet} from "react-native"
import { Icon } from "react-native-vector-icons/Icon";


export const LoginForm=()=>{
    const [usuario,setUsuario]=useState(null);
    const [clave,setClave]=useState(null);

    return <View style={styles.container}>
    <Input
       value={usuario}
       onChangeText={setUsuario}
       label='Mail'
       keyboardType="email-address"
       leftIcon={
        <Icon
        name='user'
        size={24}
        color='black'
        type='ant-design'

        />

       }
    
    />
    <Input
       value={clave}
       onChangeText={setClave}
       label='Contraseña'
  
       leftIcon={
        <Icon
        name='user'
        size={24}
        color='black'
        type='ant-design'

        />

       }
    
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