import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pictogram from "@components/Pictogram";

export default {
  title: "Pictogram",
  component: Pictogram,
} as ComponentMeta<typeof Pictogram>;

const Template: ComponentStory<typeof Pictogram> = (args) => <Pictogram {...args} />;

export const home = Template.bind({});
home.args = { type: "home" };

export const search = Template.bind({});
search.args = { type: "search" };

export const write = Template.bind({});
write.args = { type: "write" };

export const logout = Template.bind({});
logout.args = { type: "logout" };
