import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';
import { toArgs } from '../../../../../utils/storybook.helper';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'CardComponent'
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  args: toArgs<CardComponent>({
    title: 'Primary'
  })
};
