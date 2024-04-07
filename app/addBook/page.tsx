import type { Metadata } from 'next';
import { AddBook } from '../components/AddBookPage';


export default function IndexPage() {
  return (<AddBook/>
  );
}

export const metadata: Metadata = {
  title: 'Add Book',
};
