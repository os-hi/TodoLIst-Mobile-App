
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Keyboard, TouchableWithoutFeedback, Alert} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import CompletedTodo from './components/CompletedTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { todo: 'Learn React Native', isCompleted: false, id: 1 },
    { todo: 'Learn React', isCompleted: false, id: 2 },
    { todo: 'Learn Vue', isCompleted: false, id: 3 },
  ]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const pendingTodos = (id) =>{
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].isCompleted = !todos[i].isCompleted
        completedTodos.push(todos[i])
      } 
    }
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.isCompleted !== true)
    })
  }
  const completedTodosList = (id) =>{
    for (let i = 0; i < completedTodos.length; i++) {
      if (completedTodos[i].id === id) {
        completedTodos[i].isCompleted = !completedTodos[i].isCompleted
        todos.push(completedTodos[i])
      } 
    }
    setCompletedTodos(prevTodos => {
      return prevTodos.filter(todo => todo.isCompleted !== false)
    })
  }
  const addTodoList = (text) =>{
    if (text.length > 3) {
    setTodos(prevTodos => {
      return [
        { todo: text, isCompleted: false, id: Math.random().toString() },
         ...prevTodos
      ]
    })
  }else{
    Alert.alert('OOPS!', 'Todo must be over 3 characters long', [
      {text: 'Understood', onPress: () => console.log('alert closed')}
    ])
  }
}
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Header/>
          <View style={styles.content}>
            <Text style={styles.greeting}>Hi, Erika</Text>
            <TodoForm addTodoList={addTodoList}/>
            <View style={styles.list}>
              <Text style={styles.status}>Today</Text>
              <FlatList 
                keyExtractor={(item) => item.id}
                data={todos}
                renderItem={({item}) => (
                  <TodoItem item={item} pendingTodos={pendingTodos}/>
                )}
              />
            </View>
            <View style={styles.list}>
              <Text style={styles.status}>Completed</Text>
              <FlatList 
                keyExtractor={(item) => item.id}
                data={completedTodos}
                renderItem={({item}) => (
                  <CompletedTodo item={item} completedTodosList={completedTodosList}/>
                )}
              />
            </View>
          </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 40,
    backgroundColor: '#fff',
  },
  greeting:{
    fontSize: 20,
    marginBottom: 35,
    color: '#051d5f',
  },
  content:{
    flex: 1,
  },
  list:{
    flex: 1,
    
  },
  status:{
    fontSize: 18,
    marginVertical: 15,
    color: '#051d5f',
  }
  
});
