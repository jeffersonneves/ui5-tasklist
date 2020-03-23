import React from 'react';

import "@ui5/webcomponents-icons/dist/icons/add";

import { ObjectPage, ObjectPageSection, Button, ButtonDesign } from "@ui5/webcomponents-react";

import { TaskBoard } from "./TaskBoard";

export function ObjectPLayout() {

  return <ObjectPage
        image="profilePicture.png"
        title="My Taskboard"
        imageShapeCircle={true}
        headerActions={[
          <Button design={ButtonDesign.Emphasized} icon="add">Add Task</Button>
        ]}
        noHeader={false} >
        <ObjectPageSection id="all" title="All Tasks" titleUppercase={false} >
          <TaskBoard />
        </ObjectPageSection>
      </ObjectPage>;

};
