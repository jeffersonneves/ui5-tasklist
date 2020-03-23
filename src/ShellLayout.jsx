import React from "react";

import "@ui5/webcomponents-icons/dist/icons/add.js";

import { ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import { TaskBoard } from "./TaskBoard";

export function ShellLayout() {
    return <>
        <ShellBar
            primaryTitle="My tasks"
            logo="profilePicture.png">
            <ShellBarItem icon="add" text="Add" />
        </ShellBar>
        <TaskBoard />
    </>;
}