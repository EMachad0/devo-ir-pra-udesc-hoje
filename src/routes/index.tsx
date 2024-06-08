export default function Home() {
  const onClick = () => {
    console.log('Clicked');
  };

  return (
    <div class="h-screen flex flex-col bg-red-500">
      <div class="container m-auto">
        <h2 class="font-mono text-6xl mb-8 flex flex-row justify-center">
          Devo ir pra&nbsp;<p class="font-semibold">UDESC</p>&nbsp;hoje?
        </h2>
        <h1 class="font-bold text-balance text-8xl text-center">Não</h1>
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
