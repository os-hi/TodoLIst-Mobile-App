import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Pressable, Text  } from "react-native";
const TodoForm = ({addTodoList}) => {
    const [text, setText] = useState('');

    const changeHandler = (value) =>{
        setText(value);
    }
    const submitTodo = (text) =>{
        addTodoList(text)
    }
    return ( 
        <View style={styles.todoForm}>
            <TextInput
                placeholder="Add your tasks here"
                onChangeText={changeHandler}
                style={styles.todoInput}
            />
            <Pressable onPress={() => submitTodo(text)} style={styles.button}> 
                <Text style={styles.add}>+</Text>
            </Pressable>
        </View> 
     );
}
const styles = StyleSheet.create({
    todoForm: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        backgroundColor: '#F2F6FE',
        marginBottom: 10
    },
    todoInput:{
        flex: 1
    },
    button:{
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
    },
    add:{
        fontSize: 30,
    }
});
 
export default TodoForm



;