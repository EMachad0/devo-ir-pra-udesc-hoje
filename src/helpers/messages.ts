import {
  isFriday,
  isMonday,
  isThursday,
  isWednesday,
  isWeekday,
} from '~/helpers/days-of-the-week';

// Messages for the user
// First element determines if the message is positive or negative
// Second element is the message
// Third element is the function that determines the conditions
type Message = [boolean, string, () => boolean];

const messages: Message[] = [
  [false, 'NÃO', () => true],
  [
    true,
    'Sim! Hoje é um ótimo dia para aprender algo novo.',
    () => isWeekday(),
  ],
  [false, 'Não, hoje é final de semana.', () => !isWeekday()],
  [true, 'Sim, você não quer reprovar né?', () => isWeekday()],
  [false, 'Ainda da tempo de desistir', () => isWeekday()],
  [true, 'Vai estudar!', () => isWeekday()],
  [false, 'Da pra estudar de casa!', () => isWeekday()],
  [true, 'Vai pra UDESC!', () => true],
  [true, 'Vai pro BRUTE!', () => true],
  [true, 'Voleizin!', () => isThursday()],
  [false, 'Na segunda não né?', () => isMonday()],
  [false, 'Na sexta não né?', () => isFriday()],
  [true, 'Na sexta não tem aula!', () => isFriday()],
  [false, 'Nem tem aula hoje!', () => isFriday()],
  [true, 'Sim, mas só se tiver aula', () => isWeekday()],
  [false, 'Fazer o que lá?', () => true],
  [true, "Rebeca's day", () => isWednesday()],
];

export default messages;
