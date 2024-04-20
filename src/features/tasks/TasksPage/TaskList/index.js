import { useSelector, useDispatch } from "react-redux";
import { TasksList, Item, Content, Button } from "./styled";
import { selectTasksByQuery, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName.js";
import { useQueryParameter } from "../queryParameters.js";
import { toTask } from "../../../../routes";

const TaskList = () => {
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const query = useQueryParameter(searchQueryParamName);


    const dispatch = useDispatch();

    return (
        <TasksList>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        Done
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done} to={toTask({ id: task.id })}>
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