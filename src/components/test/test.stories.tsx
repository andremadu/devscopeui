import Test from "./test";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof test> = {
  title: "Componentes/test",
  component: test,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof test>;

export const Default: Story = {
  args: {},
};
