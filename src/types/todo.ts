export interface Todo {
  todo_id: string; // 唯一id
  title: string; // 标题
  remark: string; // 描述
  subTodo?: Todo[]; // 子todo，主todo完成时要求子todo全部完成，但全部子todo完成不代表主todo完成
  dep?: Todo; // 当前todo依赖于某一todo时，只有依赖项完成，当前todo才可完成
  done: boolean; // 是否完成
  start_time?: string; // 启动时间
  deadline?: string; // 截止时间
}