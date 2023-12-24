import PostCard from "@/components/PostCard";
import Image from "next/image";

const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/posts"
  );

  if (!response.ok) {
    console.log("couldnt fetch data");
  }

  return response.json();
};

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main>
      <h2>Home</h2>
      <PostCard title="A great title" author="Mario" />
    </main>
  );
}
