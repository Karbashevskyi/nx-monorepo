import type { Meta, StoryObj } from '@storybook/angular';
import { ExperienceComponent } from './experience.component';

const meta: Meta<ExperienceComponent> = {
  component: ExperienceComponent,
  title: 'ExperienceComponent',
};
export default meta;
type Story = StoryObj<ExperienceComponent>;

export const Primary: Story = {
  args: {},
};
