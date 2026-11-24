import type { Meta, StoryObj } from '@storybook/angular';
import { SubscribeComponent } from './subscribe.component';

const meta: Meta<SubscribeComponent> = {
  component: SubscribeComponent,
  title: 'SubscribeComponent',
};
export default meta;
type Story = StoryObj<SubscribeComponent>;

export const Primary: Story = {
  args: {},
};
