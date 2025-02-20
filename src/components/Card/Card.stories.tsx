import Card, { CardProps } from "./Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Componentes/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    buttonText: { control: "text" },
    onClick: { control: "action" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Texto de exemplo",
    description: "Texto de exemplo",
    buttonText: "Texto de exemplo",
    onClick: () => alert("onClick clicado!"),
  },
};