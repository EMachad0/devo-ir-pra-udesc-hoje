import type { Message } from '~/helpers/messages';
import valueOf from '~/helpers/maybe-function';

type EvaluatedMessage = {
  positive: boolean;
  message: string;
  condition: boolean;
};

function evaluateMessage(message: Message) {
  return {
    positive: valueOf(message.positive),
    message: valueOf(message.message),
    condition: valueOf(message.condition),
  } as EvaluatedMessage;
}

export default evaluateMessage;
