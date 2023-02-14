import { hello } from '@/utils/constants';
import Logo from '@/assets/Logo';
export default function Home() {
  return (
    <div>
      <Logo />
      <h1 className="text-blue-600"> {hello}</h1>
    </div>
  );
}
