import {selector} from 'recoil';
import { filterAtom, todosAtom } from '../atoms/atoms';

export const filteredTodos =  selector({
  key: "filteredTodos",
  get: ({get}) => {   
    const filter = get(filterAtom);
    const todos = get(todosAtom);
    
    return todos.filter(item => item.title.toLowerCase().includes(filter) || item.description.toLowerCase().includes(filter))
  }
})