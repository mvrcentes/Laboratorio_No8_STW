import { Form } from "./Form"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: "Example/Form",
    component: Form,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
        // color: { control: "color" },
    },
    
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        label: "Form",
    },
}

export const Tierra = {
    args: {
        label: "Form",
        backgroundImage: "tierra",
    },
}

export const Trampa = {
    args: {
        label: "Form",
        backgroundImage: "trampa",
    },
}

export const Asteroides = {
    args: {
        label: "Form",
        backgroundImage: "asteroides",
    },
}



