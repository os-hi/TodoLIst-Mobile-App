import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const TodoItem = ({item, pendingTodos}) => {
    return ( 
        <TouchableOpacity onPress={() => pendingTodos(item.id)} style={styles.todo}>
            <Text>{item.todo}</Text>
            <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="#AE6B1C" />
        </TouchableOpacity>
     );
}
const styles = StyleSheet.create({
    todo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FBE9D4',
        marginTop: 10,
        borderRadius: 12,
    }
})
 
export default TodoItem;