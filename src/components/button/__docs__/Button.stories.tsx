import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "Button",
    intent: "primary",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Button",
    intent: "secondary",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
