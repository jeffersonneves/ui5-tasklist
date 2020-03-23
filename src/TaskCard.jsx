import React from "react";

import "@ui5/webcomponents-icons/dist/icons/task";
import "@ui5/webcomponents-icons/dist/icons/edit";
import "@ui5/webcomponents-icons/dist/icons/delete";

import { spacing } from "@ui5/webcomponents-react-base";
import { Bar, Button, Card, Icon, Form, FormItem, Input, InputType, ProgressIndicator, DatePicker } from "@ui5/webcomponents-react";

export function TaskCard(params) {

    return <Card
        heading={params.title}
        style={{ width: "300px", ...spacing.sapUiContentPadding }}
        avatar={<Icon name="task" />}
    >
        <Form>
            <FormItem labelText="Task">
                <Input type={InputType.Text} value={params.task} readonly={true} />
            </FormItem>
            <FormItem labelText="Due date">
                <DatePicker value={params.due} readonly={true} />
            </FormItem>
            <FormItem>
                <ProgressIndicator percentValue={params.progress} displayValue={params.progress} />
            </FormItem>
        </Form>
        <Bar renderContentRight={() =>{
                return <>
                    <Button icon="edit" />
                    <Button icon="delete" />
                </>;
            }}/>
    </Card>;
}