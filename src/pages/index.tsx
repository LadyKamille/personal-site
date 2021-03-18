import Layout from '../components/layout';

const Home = ({ ...props }) => (
  <Layout {...props}>
    <h1>Welcome!</h1>
    <p>This website is currently under development</p>

    <form>
      <div>My Form Label</div>
      <input type="text" />

      <button>Submit</button>
    </form>
  </Layout>
);

export default Home;
