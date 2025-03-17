import t, { tProps } from "./t";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof t> = {
  title: "Componentes/t",
  component: t,
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof t>;

export const Default: Story = {
  args: {
  },
};