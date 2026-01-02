import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Kamille Norris' }];
}

export default function Home() {
  return <Welcome />;
}
