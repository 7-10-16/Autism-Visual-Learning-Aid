import axios from 'axios';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function ExampleScreen({ navigation }) {

    const [name, onChangeName] = React.useState("");
    const [age, onChangeAge] = React.useState(0);
    const [users, setUsers] = React.useState([]);
    const [fruits, setFruits] = React.useState([]);

    const addUser = () => {
        axios.post('https://node-server-udw2.onrender.com/create', 
        {
            name: name, 
            age: age
        }).then(() => {
                console.log("success");
            });
    }

    const getUsers = () => {
        axios.get('https://node-server-udw2.onrender.com/users').then((response) => {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const getFruits = () => {
        axios.get('https://localhost:19007/fruits').then((response) => {
            console.log(response.data);
            setFruits(response.data);
        });
    }

    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput 
                style={{borderWidth: 1, height: 40, width: 100}}
                onChangeText={onChangeName}
                value={name}
            />
            <TextInput 
                style={{borderWidth: 1, height: 40, width: 100}}
                onChangeText={onChangeAge}
                value={age}
                keyboardType="numeric"
            />
            <Button
                onPress={addUser}
                title="Add User"
                color="#841584"
            />
            <Button
                onPress={getFruits}
                title="Show Users"
                color="#841584"
            />
            <Text>
                {users.map(user => {
                    return (
                        //Each child in a list should have a unique "key" prop.
                        <li key={user.user_ID}> 
                            {user.user_fname} - {user.user_age} 
                        </li>
                        )
                })}
            </Text>
            
            <Text>
                {fruits.map(fruit => {
                    return (
                        //Each child in a list should have a unique "key" prop.
                        <li key={fruit.ID}> 
                            {fruit.name}
                        </li>
                        )
                })}
            </Text>
        </View>
    
    );

    
}
