import { StyleSheet, Text, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const Header = () => {
    
    return ( 
        <View style={styles.header}>
            <FontAwesome name="user-circle" size={30} color="#373737" />
        </View>
     );
}
const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    
})
 
export default Header;