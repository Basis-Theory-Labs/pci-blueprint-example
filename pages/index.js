import { 
  useBasisTheory,
  BasisTheoryProvider
} from '@basis-theory/basis-theory-react';
import { CardForm } from './card-form';

export default function App() {
  const { bt } = useBasisTheory(process.env.NEXT_PUBLIC_BASIS_THEORY_PUBLIC_KEY, { elements: true });

  return (
    <BasisTheoryProvider bt={bt}>
      <CardForm />
    </BasisTheoryProvider>
  );
}
