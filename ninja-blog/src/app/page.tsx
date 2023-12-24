import PostCard from "@/components/PostCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h2>Home</h2>
      <PostCard title="A great title" author="Mario" />
    </main>
  );
}
