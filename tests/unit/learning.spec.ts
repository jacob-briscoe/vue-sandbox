import { shallowMount } from '@vue/test-utils';
import { ToDo } from '@/model/ToDo';

test('map functions', () => {
  const myArray = [1, 2, 3, 4];

  const myArrayTimesTwo = myArray.map((value, index, array) => {
    return value * 2;
  });

  expect(myArrayTimesTwo).toEqual([2, 4, 6, 8]);
});

test('filter functions', () => {
  const todos: Array<ToDo> = [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }, { id: 3, text: 'Item 3' }];

  const filteredToDos: Array<ToDo> = todos.filter((value, index, array) => {
    return value.id === 1;
  });

  expect(filteredToDos).toEqual([todos[0]]);
});

test('reduce functions', () => {
  const myArray = [1, 2, 3, 4];

  const sum: number = myArray.reduce((acc, currValue, currIndex, array) => {
    return acc + currValue;
  }, 0);

  expect(sum).toBe(10);

  const todos: Array<ToDo> = [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }, { id: 3, text: 'Item 3' }];

  const singleToDo: ToDo = todos.reduce((acc, currValue, currIndex, array) => {
    return { id: array.length + 1, text: acc.text.concat(`,${currValue.text}`) };
  });

  expect(singleToDo).toEqual({ id: 4, text: 'Item 1,Item 2,Item 3' });
});
