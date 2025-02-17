import fs from "fs";
import path from "path";

const componentsDir = path.resolve(__dirname, "../src/components");
const storyTemplate = (componentName: string) => `
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ${componentName} from "../${componentName}/${componentName}";

export default {
  title: "Components/${componentName}",
  component: ${componentName},
} as Meta<typeof ${componentName}>;

export const Default: StoryObj<typeof ${componentName}> = {};
`;

fs.readdirSync(componentsDir).forEach((component) => {
  const componentPath = path.join(componentsDir, component);
  if (fs.statSync(componentPath).isDirectory()) {
    const storyPath = path.join(componentPath, `${component}.stories.tsx`);
    if (!fs.existsSync(storyPath)) {
      fs.writeFileSync(storyPath, storyTemplate(component));
      console.log(`Created: ${storyPath}`);
    }
  }
});
