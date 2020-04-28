import React from 'react';
import {View, FlatList} from 'react-native';
import {RadioGroupProps} from './App';
import RadioButton from './RadioButton';

const RadioGroup = (props: RadioGroupProps) => {
  const {items, selected, onSelected} = props;

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <RadioButton
            item={item}
            selected={selected}
            onSelected={onSelected}
          />
        )}
      />
    </View>
  );
};

export default RadioGroup;
