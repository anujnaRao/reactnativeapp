import React from 'react';
import { View, FlatList } from 'react-native';
import { EListItem } from 'react-native-element';

function Menu(props) {

    const renderMenuItem = ({item, index}) => {

        return (
                <EListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: require('./images/uthappizza.png')}}
                  />
        );
    };

    return (
            <FlatList 
                data={props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}


export default Menu;