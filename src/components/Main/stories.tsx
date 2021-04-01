import { Story, Meta } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Basic',
    description: 'Lorem ipsum dolor sit amet.'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Another title.',
  description: 'Laudantium, laboriosam.'
}

export const Default: Story = (args) => <Main {...args} />
