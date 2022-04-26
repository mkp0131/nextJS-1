import { useRouter } from 'next/router';

type MovieDetailParams = [string, string] | [];

export default function Detail({ propsId }) {
  const router = useRouter();
  const qv = propsId || router.query.id;
  const [id, title] = (qv || []) as MovieDetailParams;
  console.log(id, title);

  return (
    <>
      <div>Movie Detail</div>
      <div>id: {id}</div>
      <div>title: {title}</div>
    </>
  );
}

interface CTXParams {
  params: {
    id: MovieDetailParams;
  };
}

export function getServerSideProps({ params: { id } }: CTXParams) {
  return {
    props: {
      id,
    },
  };
}
