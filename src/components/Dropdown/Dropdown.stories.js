import { Dropdown } from "./Dropdown"

export default {
    title: "Example/Dropdown",
    component: Dropdown,
    description: "This is a Drowpdown component",
    tags: ["autodocs"],
    argTypes: { 

    },
}

export const asText = {
    args: {
        name: "Dropdown",     
        items: [],   
    },
    argTypes: {
        onClick: { action: "clicked" },
    }
}
