import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "@components/Typography";

export default {
  title: "Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args}>hello</Typography>;

export const Primary = Template.bind({});

export const size_1 = Template.bind({});
size_1.args = { size: 1 };

export const color = Template.bind({});
color.args = { color: "red" };

export const font = Template.bind({});
font.args = { font: "GloryBold" };
