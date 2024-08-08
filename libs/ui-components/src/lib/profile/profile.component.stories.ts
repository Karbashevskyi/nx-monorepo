import type { Meta, StoryObj } from '@storybook/angular';
import { ProfileComponent } from './profile.component';

const meta: Meta<ProfileComponent> = {
  component: ProfileComponent,
  title: 'ProfileComponent',
};
export default meta;
type Story = StoryObj<ProfileComponent>;

export const Primary: Story = {
  args: {},
};
