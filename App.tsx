import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import RadioGroup from './RadioGroup';

export type Item = {
  id: number;
  name: string;
};

export type RadioGroupProps = {
  items: Item[];
  selected?: Item;
  onSelected(item: Item): void;
};

export type RadioButtonProps = {
  item: Item;
  selected?: Item;
  onSelected(item: Item): void;
};

const App = () => {
  const [selected, setSelected] = useState<Item>();

  const items: Item[] = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Orange'},
    {id: 3, name: 'Kiwi'},
    {id: 4, name: 'Watermelon'},
    {id: 5, name: 'Strawberry'},
    {id: 6, name: 'Cherry'},
  ];

  const onSelected = (item: Item) => {
    setSelected(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Please select an item: {selected ? selected.name : 'Nothing selected'}
      </Text>
      <RadioGroup selected={selected} onSelected={onSelected} items={items} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    padding: 10,
  },
});

export default App;
