import type { Meta, StoryObj } from '@storybook/angular';
import { ProjectsComponent } from './projects.component';

const meta: Meta<ProjectsComponent> = {
  component: ProjectsComponent,
  title: 'EducationComponent',
};
export default meta;
type Story = StoryObj<ProjectsComponent>;

export const Primary: Story = {
  args: {},
};
