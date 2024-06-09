import { A } from '@solidjs/router';

export default function NotFound() {
  return (
    <div class="h-screen flex flex-col">
      <A
        href="/"
        class="container m-auto text-center text-sky-600 hover:underline text-6xl"
      >
        HOME
      </A>
    </div>
  );
}
