import { useState } from 'react';
import { Task } from 'types/task';
import TaskCard from 'components/TaskCard';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [title, setTitle] = useState('');

  return (
    <div>
      <div
        style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '12px',
        }}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <input
          placeholder='タイトル'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={() => {
            setTasks((current) => [
              ...current,
              {
                // 既存のタスクIDのうち最大の値 + 1をIDとする
                id:
                  tasks.length > 0
                    ? Math.max(...tasks.map(({ id }) => id)) + 1
                    : 1,
                title,
                done: false,
              },
            ]);
            setTitle('');
          }}
        >
          タスク追加
        </button>
      </div>
    </div>
  );
};

export default App;
