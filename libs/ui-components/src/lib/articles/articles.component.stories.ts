import type { Meta, StoryObj } from '@storybook/angular';
import { ArticlesComponent } from './articles.component';

const meta: Meta<ArticlesComponent> = {
  component: ArticlesComponent,
  title: 'ArticlesComponent',
};
export default meta;
type Story = StoryObj<ArticlesComponent>;

export const Primary: Story = {
  args: {},
};
