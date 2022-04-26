import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Seo from '../components/Seo';

interface Movie {
  id: number;
  title: string;
}

interface HomePorps {
  results: Movie[];
}

export default function Home({ results }: HomePorps) {
  const router = useRouter();
  const onClick = (id: number) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title: 'potato',
        },
      },
      `/movies/${id}`
    );
  };

  return (
    <>
      <Seo title="Home" />
      <h1>Home</h1>
      {results.map((movie) => (
        <Link
          href={{
            pathname: `/movies/${movie.id}/${movie.title}`,
          }}
          key={movie.id}
        >
          <a>{movie.title}</a>
        </Link>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies/popular/language=ko-KR`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
