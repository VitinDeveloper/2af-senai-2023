import { Text, View } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';

export default function Home() {

    const [ data, setData ] = useState([
        'Neymar','Cristiano Ronaldo','Messi','Mbape','Haaland'
    ])

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Convidados - Festa</Text>

            {
                data.map( item => (
                    <Text
                        key={item}
                        style={styles.itemList}
                    >
                        {item}
                    </Text>
                ))
            }

        </View>
    )
}