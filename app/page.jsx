import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Create & Manage
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Promptopia is a tool for empowering AI teams with collaborative creativity to
     generate, share and manage dynamic prompts
    </p>

    <Feed />
  </section>
);

export default Home;