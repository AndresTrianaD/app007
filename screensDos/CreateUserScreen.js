import React, {useState}  from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'

const CreateUserScreen = () => {

    const [state, setState] = useState({
      name: "",
      email: "",
      phone: "",
    })

    const handleChangeText = (name, value) => {
      setState({...state, [name]: value})
    }

  return (
    <ScrollView style={styles.container}>
        <View state={styles.inputGroup}>
          <TextInput 
            placeholder="Name User" 
            onChangeText={(value) => handleChangeText('name',value)}
            />
        </View>
        <View state={styles.inputGroup}>
          <TextInput 
            placeholder='Email User'
            onChangeText={(value) => handleChangeText('email',value)}
            />
        </View>
        <View state={styles.inputGroup}>
          <TextInput 
            placeholder='Phone User'
            onChangeText={(value) => handleChangeText('phone',value)}
            />
        </View>
        <View>
          <Button title='Save User'/>
        </View>
    </ScrollView>
  )
  }

const styles=StyleSheet.create({
  container:{ 
    flex: 1,
    padding: 35,
  },
  inputGroup:{
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  }
})

export default CreateUserScreen

//permite ver el valor en la conola
//<TextInput placeholder='Email User'onChangeText={(value) => console.log(value)}/>