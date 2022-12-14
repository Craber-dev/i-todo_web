import React, { useState } from 'react';
import { Todo } from '@/types/todo';
import styles from './index.module.less';

import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

interface TodoCardProps {
  todo: Todo;
}

function TodoCard(props: TodoCardProps) {
  const { title, remark } = props.todo;

  const [checkState, setCheckState] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);
  const [showDep, setShowDep] = useState(true);

  const handleCheckTodo = (e: CheckboxChangeEvent) => {
    setCheckState(e.target.checked);
  };

  return (
    <div className={styles['todo-card-wrapper']}>
      <div className={styles['todo-state']}>
        {showDep && (
          <div className={styles['link-line']}>
            <span className={styles['link-dote']} />
          </div>
        )}
        <Checkbox
          className={styles['check-box']}
          checked={checkState}
          indeterminate={indeterminate}
          onChange={handleCheckTodo}
          style={{ marginTop: showDep ? 5 : 11 }}
        />
      </div>
      <div className={styles['todo-info']}>
        {showDep && (<p className={styles['todo-dep']}>{remark}</p>)}
        <p className={styles['todo-title']}>{title}</p>
        <p className={styles['todo-remark']}>{remark}</p>
      </div>
    </div>
  );
}

export default React.memo(TodoCard);