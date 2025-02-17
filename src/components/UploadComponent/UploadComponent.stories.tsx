import type { Meta, StoryObj } from '@storybook/react';
import UploadComponent from './UploadComponent';

const meta: Meta<typeof UploadComponent> = {
  title: 'Upload/UploadComponent',
  component: UploadComponent,
};

export default meta;
type Story = StoryObj<typeof UploadComponent>;

export const Default: Story = {};
