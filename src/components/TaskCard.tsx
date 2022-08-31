import { Task } from 'types/task';
import { FC } from 'react';

type Props = {
  task: Task;
};

const TaskCard: FC<Props> = ({ task }) => {
  const { id, title, done } = task;

  console.log(`task-${id} was rendered!!`);

  return (
    <div
      key={id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        border: '1px solid dimgray',
        padding: '4px',
      }}
    >
      <div>id: {id}</div>
      <div>タイトル: {title}</div>
      <div>状態: {done ? '完了' : '未完了'}</div>
    </div>
  );
};

export default TaskCard;
