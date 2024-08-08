import type { Meta, StoryObj } from '@storybook/angular';
import { SkillsComponent } from './skills.component';

const meta: Meta<SkillsComponent> = {
  component: SkillsComponent,
  title: 'SkillsComponent',
};
export default meta;
type Story = StoryObj<SkillsComponent>;

export const Primary: Story = {
  args: {},
};
