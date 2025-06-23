import SearchForm from "../../components/SearchForm";

type HomeProps = {
  searchParams: Promise<{ query?: string }>
}

export default async function Home({ searchParams }: HomeProps) {

  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect with Entreprenuers</h1>
        <p className="sub-heading !max-w-3xl"> Submit Idea, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
