import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import Button from "../Button";
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone } from "../../tasksSlice.js";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}>
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    )
};

export default Buttons;