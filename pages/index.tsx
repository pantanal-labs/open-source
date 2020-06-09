import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <div className="container mx-auto">
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className="text-gray-200">Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  </div>
);

export default IndexPage;
