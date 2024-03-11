import { useSelector, useDispatch } from "react-redux";
import { Button, StyledButtons } from "./styled";
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone } from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);

    const dispatch = useDispatch();

    return (
        <Button>
            {!areTasksEmpty && (
                <>
                    <StyledButtons onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButtons>
                    <StyledButtons
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}>
                        Ukończ wszystkie
                    </StyledButtons>
                </>
            )}
        </Button>
    )
};

export default Buttons;