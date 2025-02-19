import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"], // Garante que o Storybook gera a aba Docs automaticamente
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "success", "danger", "outline"],
    },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const Success: StoryObj<typeof Button> = {
  args: {
    label: "Success Button",
    variant: "success",
  },
};

export const Danger: StoryObj<typeof Button> = {
  args: {
    label: "Danger Button",
    variant: "danger",
  },
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    label: "Outline Button",
    variant: "outline",
  },
};

export const FullWidth: StoryObj<typeof Button> = {
  args: {
    label: "Full Width Button",
    fullWidth: true,
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};
