import { ComponentStory, ComponentMeta } from "@storybook/react";

import Container from "../../components/Container";

export default {
  title: "Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args}>hello</Container>;

export const Primary = Template.bind({});
Primary.args = { color: "red" };
