import Link from 'next/link';
import Image from 'next/image';

const AnimeList = ({ api }) => {

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data.map((anime) => (
        <div key={anime.mal_id} className="shadow-xl">
          <Link href={`/${anime.mal_id}`} className="cursor-pointer">
            <Image
              priority={true}
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AnimeList;


// {anime.data.map(data => {
//   return (
//     <div key={data.mal_id} className="shadow-xl">
//       <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
//     </div>
//   )
// })}