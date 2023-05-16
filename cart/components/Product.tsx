import { ObjectId } from "mongodb";
import Image from "next/image";

interface PrT {
  _id: ObjectId;
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

export default function Product({ poster, title, plot }: Partial<PrT>) {
  return (
    <div className="flex flex-col gap-2">
      {poster ? (
        <Image src={poster} alt={`${title} poster `} width={120} height={100} />
      ) : (
        <div className="object-cover w-32 h-36 bg-empty-poster"></div>
      )}
      <div>
        <h2> title: {title}</h2>
        <p>plot: {plot}</p>
      </div>
    </div>
  );
}
