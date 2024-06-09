import messages from '~/helpers/messages';
import { createSignal, onMount } from 'solid-js';

export default function Home() {
  const messagesShuffled = messages.toSorted(() => Math.random() - 0.5);
  const [messageIndex, setMessageIndex] = createSignal<number>(0);

  const message = () => messagesShuffled[messageIndex()];
  const bg = () => (message()[0] ? 'bg-green-500' : 'bg-red-500');

  const onClick = () => {
    do {
      setMessageIndex((prev) => (prev + 1) % messagesShuffled.length);
    } while (!message()[2]());
  };

  onMount(() => {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') onClick();
    });
  });

  return (
    <div class={`h-screen flex flex-col ${bg()}`}>
      <div class="container m-auto">
        <h2 class="font-mono text-6xl mb-8 flex flex-row justify-center">
          Devo ir pra&nbsp;<p class="font-semibold">UDESC</p>&nbsp;hoje?
        </h2>
        <h1 class="font-bold text-balance text-8xl text-center uppercase">
          {message()[1]}
        </h1>
        <button
          class="flex flex-row font-mono mt-8 w-full justify-center"
          onClick={onClick}
        >
          Pressione&nbsp;
          <div class="rounded outline outline-2 outline-offset-2 outline-neutral-400">
            Espaço
          </div>
          &nbsp;ou clique aqui
        </button>
      </div>
    </div>
  );
}
