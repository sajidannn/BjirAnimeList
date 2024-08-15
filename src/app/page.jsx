import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response1 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=8`)
  const topAnime = await response1.json()
  const topManga = await response2.json()

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title="Top Anime" linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>

      {/* anime terbaru */}
      <section>
        <Header title="Top Manga" linkHref="/populer" linkTitle="Ikuti Kuy" />
        <AnimeList api={topManga} />
      </section>
    </>
  );
}

export default Page