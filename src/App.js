import React from "react";
import Tasks from "./features/tasks/TasksPage";
import Task from "./features/tasks/TaskPage";
import Author from "./features/author/Author";
import Navigation from "./Navigation";
import { toTask, toTasks, toAuthor } from "./routes";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";

export default () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={toTask()}>
                <Task />
            </Route>
            <Route path={toTasks()}>
                <Tasks />
            </Route>
            <Route path={toAuthor()}>
                <Author />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);
