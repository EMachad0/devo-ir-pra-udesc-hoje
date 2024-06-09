import {
  isFriday,
  isMonday,
  isSaturday,
  isThursday,
  isWednesday,
  isWeekday,
  isWeekend,
} from '~/helpers/days-of-the-week';

// Messages for the user
// First element determines if the message is positive or negative
// Second element is the message, string message is automatically displayed in uppercase
// Third element is the function that determines the conditions, true means it can be displayed
export type Message = {
  positive: boolean | (() => boolean);
  message: string | (() => string);
  condition: boolean | (() => boolean);
};

const messages: Message[] = [
  { positive: false, message: 'NÃO', condition: true },
  {
    positive: true,
    message: 'Sim! Hoje é um ótimo dia para aprender algo novo',
    condition: () => isWeekday(),
  },
  { positive: false, message: 'final de semana', condition: () => isWeekend() },
  {
    positive: false,
    message: 'NÃO TEM PROVA DO PEDRO HOJE',
    condition: () => isSaturday(),
  },
  {
    positive: false,
    message: 'NÃO TEM MARATONA HOJE',
    condition: () => isSaturday(),
  },
  {
    positive: true,
    message: 'Sim, você não quer reprovar né?',
    condition: () => isWeekday(),
  },
  {
    positive: false,
    message: 'Ainda da tempo de desistir',
    condition: () => isWeekday(),
  },
  { positive: true, message: 'Vai estudar!', condition: () => isWeekday() },
  { positive: false, message: 'Da pra estudar de casa!', condition: true },
  { positive: true, message: 'Vai pra UDESC!', condition: () => isWeekday() },
  { positive: true, message: 'Vai pro BRUTE!', condition: () => isWeekday() },
  { positive: true, message: 'Voleizin!', condition: () => isThursday() },
  {
    positive: false,
    message: 'Na segunda não né?',
    condition: () => isMonday(),
  },
  { positive: false, message: 'Na sexta não né?', condition: () => isFriday() },
  {
    positive: true,
    message: 'Na sexta não tem aula!',
    condition: () => isFriday(),
  },
  { positive: false, message: 'Nem tem aula hoje!', condition: isFriday() },
  {
    positive: true,
    message: 'Sim, mas só se tiver aula',
    condition: isWeekday(),
  },
  { positive: false, message: 'Fazer o que lá?', condition: true },
  { positive: true, message: "Rebeca's day", condition: isWednesday() },
];

export default messages;
