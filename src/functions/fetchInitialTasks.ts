import { Task } from 'types/task';

// 1秒後にデフォルトのタスク一覧を取得する関数
// 50%で取得に失敗する
const fetchInitialTasks = () => {
  const initialTasks = [
    { id: 1, title: 'タスク1', done: false },
    { id: 2, title: 'タスク2', done: false },
  ];

  return new Promise<Task[]>((resolve, reject) =>
    setTimeout(() => {
      const random = Math.random();

      console.log(random);

      if (random > 0.5) {
        resolve(initialTasks);
      } else {
        reject(new Error('error!!'));
      }
    }, 1000),
  );
};

export default fetchInitialTasks;
