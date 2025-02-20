import Switch, { SwitchProps } from "./Switch";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Switch> = {
  title: "Componentes/Switch",
  component: Switch,
  argTypes: {
    state: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    state: true,
  },
};