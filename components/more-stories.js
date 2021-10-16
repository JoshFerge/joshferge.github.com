import PostPreview from "../components/post-preview"

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="flex-grid flex-col space-y-12 ">
        {posts.map((post) => (
          <PostPreview key={post.slug} title={post.title} date={post.date} slug={post.slug} />
        ))}
      </div>
    </section>
  )
}
