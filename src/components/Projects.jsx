import Questionary from "../components/Questionary";
import { Box, Tabs } from "@mantine/core";

export default function Projects() {
  const ideas = [
    {
      label: "First idea",
    },
    {
      label: "Second idea",
    },
    {
      label: "Third idea",
    },
  ];

  const questions = [
    {
      label: "What do you want to achieve today?",
      placeholder: "Issue",
    },
    {
      label: "How can you reach your goal?",
      placeholder: "Main issue",
    },
    {
      label: "Divide the main idea in various sub tasks:",
      placeholder: "Sub tasks",
      tasks: true,
    },
  ];

  return (
    <Box className="flex">
      <Box className="mt-[2.45rem] h-[1px] bg-[#373A40] w-4" />
      <Tabs variant="outline" className="flex-1">
        {ideas.map((idea, index) => (
          <Tabs.Tab label={idea.label} key={index}>
            {questions.map((question, index) => (
              <Questionary
                label={question.label}
                placeholder={question.placeholder}
                tasks={question.tasks}
                key={index}
              />
            ))}
          </Tabs.Tab>
        ))}
      </Tabs>
      <Box className="mt-[2.45rem] h-[1px] bg-[#373A40] w-4" />
    </Box>
  );
}
