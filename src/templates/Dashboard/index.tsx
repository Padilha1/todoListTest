import Button from 'components/Button/button';
import Main from 'components/Main';
import Input from 'components/Input';
import { FormEvent, useState } from 'react';

import * as S from './styles';

const Dashboard = () => {
 const [task, setTask] = useState('');
 const [list, setList] = useState<string[]>([]);

 function handleAddTodoList(event: FormEvent) {
   event.preventDefault();
   setList((oldTodoList) => [... oldTodoList, task]);
 }

  return (
    <>
      <S.Container>
        <form onSubmit={handleAddTodoList} action="">
          <Input type="text" 
          placeholder='Digite o Nome do Anime' 
          onChange={(event) => setTask(event.target.value)} 
          />
          <Button type='submit'>Adicionar</Button>
        </form>
        <ul>
           {list.map((todo) => (
            <li key={todo}>
                {todo}
            </li>
           ))}
        </ul>
      </S.Container>
    </>
  );
};

export default Dashboard;
