import type { Meta, StoryObj } from '@storybook/angular';
import { EducationComponent } from './education.component';

const meta: Meta<EducationComponent> = {
  component: EducationComponent,
  title: 'EducationComponent',
};
export default meta;
type Story = StoryObj<EducationComponent>;

export const Primary: Story = {
  args: {},
};
