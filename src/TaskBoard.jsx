import React from "react";

// import { spacing } from "@ui5/webcomponents-react-base";
import { FlexBox, FlexBoxJustifyContent, FlexBoxWrap } from "@ui5/webcomponents-react";

import { TaskCard } from "./TaskCard";

export function TaskBoard(){

    var items = []
    for (var i=0; i<10; i++){
        const title = "Card "+i;
        items.push(<TaskCard 
            title={title} 
            task="Do something" 
            due="31/12/2020" 
            progress={i*8} />)
    }

    return <div>
        <FlexBox justifyContent={FlexBoxJustifyContent.Center} wrap={FlexBoxWrap.Wrap} >
            {items}
        </FlexBox>
    </div>;
}