import TodoCard from '@/components/TodoCard';
import { Todo } from '@/types/todo';
import React from 'react';
import styles from './index.module.less';

function HomePage() {
  const todoDemo: Todo[] = [
    {
      todo_id: '20221017_000001',
      title: '测试TODO',
      remark: '测试描述',
      done: false,
    }
  ];
  return (
    <div className={styles['home-wrapper']}>
      {
        todoDemo?.map(item => (<TodoCard key={item.todo_id} todo={item} />))
      }
    </div>
  );
}

export default React.memo(HomePage);