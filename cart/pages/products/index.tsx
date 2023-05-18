import Product from "../../components/Product/Product";
import { css } from "@emotion/react";

export interface ProductResponse {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  rated: string;
  title: string;
  poster: string | undefined; //img path name
  countries: string[];
  fullplot: string;
  num_mflix_comments: number;
  cast: string[];
  directors: string[];
  writers: string[];
  awards: { wins: number; nominations: number; text: string };
  lastupdated: string;
  year: number;
  imdb: { rating: number; votes: number; id: number };
  type: string;
  tomatoes: {
    viewer: any[];
    dvd: string;
    critic: any[];
    lastUpdated: string;
    rotten: number;
    production: string;
    fresh: number;
  };
}

const wrapper = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 32px 20px;
`;

export default function Products({ data }: Record<"data", ProductResponse[]>) {
  return (
    <div css={wrapper}>
      {data.map((v) => (
        <Product key={v._id} {...v} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/products`); // env 환경 분리
  const data = await res.json();

  return { props: { data } };
}
