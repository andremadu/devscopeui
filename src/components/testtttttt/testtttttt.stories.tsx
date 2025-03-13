import testtttttt, { testttttttProps } from "./testtttttt";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof testtttttt> = {
  title: "Componentes/testtttttt",
  component: testtttttt,
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof testtttttt>;

export const Default: Story = {
  args: {
  },
};