import React from 'react'
import { useState, useReducer } from 'react';
import {v4 as uuidv4} from "uuid";
import List from './List';



const initialList = [
    {
      id: 'a',
      name: 'Robin',
    },
    {
      id: 'b',
      name: 'Dennis',
    },
  ];
  
  const listReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          list: state.list.concat({ name: action.name, id: action.id }),
        };
        case 'REMOVE_ITEM':
          return {
            ...state,
            list: state.list.filter((item) => item.id !== action.id),
          };
      default:
        throw new Error();
    }
  };


const AddItem = () =>{ 

  const [name, setName] = useState('');
    const [listData, dispatchListData] = useReducer(listReducer, {
        list: initialList,
        isShowList: true,
      });
    
 
      function handleRemove(id) {
        dispatchListData({ type: 'REMOVE_ITEM', id });
      }
    
      if (!listData.isShowList) {
        return null;
      }
    
  
    
      function handleChange(event) {
        setName(event.target.value);
      }
    
      function handleAdd() {
        dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4() });
    
        setName('');
      }

    return(
    <div>
        <h1>ToDo App</h1>
        <div style={{backgroundColor:'#FE2712'}}>
      <input type="text" value={name} onChange={handleChange}  />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <List list={listData.list} onRemove={handleRemove} />
      </div>
    </div>
    
  )};

export default AddItem