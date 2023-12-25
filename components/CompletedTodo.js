import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const CompletedTodo = ({item, completedTodosList}) => {
    return ( 
        <TouchableOpacity onPress={() => completedTodosList(item.id)} style={styles.todo}>
            <Text style={{textDecorationLine: 'line-through'}}>{item.todo}</Text>
            <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24} color="#01571A" />
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
        backgroundColor: '#D2F4DC',
        marginTop: 10,
        borderRadius: 12,
    }
})
 
export default CompletedTodo;