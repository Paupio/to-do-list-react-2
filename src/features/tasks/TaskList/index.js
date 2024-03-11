import { useSelector, useDispatch } from "react-redux";
import { TasksList, Item, Content, Button } from "./styled";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <TasksList>
            {tasks.map(task => (
                <Item
                    hidden={task.done && hideDone}
                >
                    <Button
                        Done
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </TasksList>
    )
};

export default TaskList;