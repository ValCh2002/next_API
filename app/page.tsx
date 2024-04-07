import type { Metadata } from 'next';
import { ShowBooks } from './components/ShowBooksPage';


export default function IndexPage() {
  return (<ShowBooks/>
  );
}

export const metadata: Metadata = {
  title: 'Redux Toolkit',
};
