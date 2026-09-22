import type { Post as PostType } from "../types/Post";
import Post from "./Post";
import "./PostList.css";

function PostList() {
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();

  const samplePosts: PostType[] = [
    {
      id: 1,
      title: "TypeScript catches mistakes before you run the app",
      author: "Esther Katemi",
      content:
        "TypeScript is JavaScript with types. If a post should have a title that is text, and you put a number there by mistake, the editor warns you. That helps beginners fix errors early.",
      datePosted: twoHoursAgo,
    },
    {
      id: 2,
      title: "A component is just a small piece of the page",
      author: "Nmesoma Peter",
      content:
        "Think of the header, the list, and each card as Lego blocks. Each block has one job. You build the blog by putting those blocks together in App.",
      datePosted: "2026-09-10T09:30:00.000Z",
    },
    {
      id: 3,
      title: "CSS is how the page gets its look",
      author: "Nancy Etuhoko",
      content:
        "HTML puts the words on the page. CSS chooses the colours, space, and fonts. If a card looks plain, you change the CSS, not the post text.",
      datePosted: "2026-08-22T14:15:00.000Z",
    },
  ];

  return (
    <section className="post-list" aria-labelledby="post-list-heading">
      <div className="post-list__intro">
        <h2 id="post-list-heading">Latest insights</h2>
        <p>Quick web development tips from the Dev Insights team.</p>
      </div>
      <div className="post-list__items">
        {samplePosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostList;
