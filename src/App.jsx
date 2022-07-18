import Header from './components/Header';
import Questionary from './components/Questionary';

export default function App() {
  const questions = [
    {
      label: 'What is blocking you?',
      placeholder: 'Issue',
    },
    {
      label: 'What seems to be the main issue?',
      placeholder: 'Main issue',
    },
    {
      label: 'Divide the main issue in various sub tasks:',
      placeholder: 'Sub tasks',
      tasks: true,
    },
  ];

  return (
    <>
      <Header />
      {questions.map((question) => (
        <Questionary
          label={question.label}
          placeholder={question.placeholder}
          tasks={question.tasks}
        />
      ))}
    </>
  );
}
