import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-element';

function Menu(props) {

     renderMenuItem = ({item, index}) => {

        return (
            <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            onPress={() => props.onPress(item.id)}
            leftAvatar={{ source: require('./images/uthappizza.png')}}
          />
        );
    }

    return (
            <FlatList 
                data={props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}


export default Menu;