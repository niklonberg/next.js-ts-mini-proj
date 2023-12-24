interface PostCardProps {
  title: string;
  author: string;
}

export default function PostCard({ title, author }: PostCardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Written by {author}</p>
    </div>
  );
}
