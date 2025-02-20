import Switch, { SwitchProps } from "./Switch";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Switch> = {
  title: "Componentes/Switch",
  component: Switch,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    buttonText: { control: "text" },
    onClick: { control: "action" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    title: "Texto de exemplo",
    description: "Texto de exemplo",
    buttonText: "Texto de exemplo",
    onClick: () => alert("onClick clicado!"),
  },
};