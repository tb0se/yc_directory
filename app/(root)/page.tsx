import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

type HomeProps = {
  searchParams: Promise<{ query?: string }>
}

export default async function Home({ searchParams }: HomeProps) {

  const query = (await searchParams).query;
  const posts = [{ _id: 1, _createdAt: new Date(), views: 55, author: { _id: 1, name: "John" }, description: "This is a description.", title: "We Robots", category: 'Robots', image: 'https://unsplash.com/photos/blue-plastic-robot-toy-R4WCbazrD1g' }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect with Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl"> Submit Idea, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">{query ? `Search Results for "${query}"` : 'All startups'}</p>


        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post, index) => (
                <StartupCard key={post._id} post={post} />
              ))
            ) : (<p className="no-results">No startups found</p>)
          }
        </ul>
      </section>
    </>
  );
}
