import { memo } from "react";
import styled from "styled-components";
import type { Post as PostType } from "../types/Post";
import {
  formatPostDate,
  getPreview,
  isPostedWithin24Hours,
} from "../utils/postHelpers";

const FEATURED_AUTHOR = "Nmesoma Peter";

interface PostProps {
  post: PostType;
}

const Card = styled.article<{ $highlighted: boolean }>`
  background: ${(props) => (props.$highlighted ? "#f3e6d0" : "#fffcf7")};
  border: 1px solid ${(props) => (props.$highlighted ? "#d4b888" : "#e4ddd2")};
  border-left: 4px solid ${(props) => (props.$highlighted ? "#8c6a3a" : "#b08d57")};
  border-radius: 14px;
  padding: 1.4rem 1.5rem;
  box-shadow: 0 10px 28px rgba(22, 20, 28, 0.05);
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.22rem;
  color: #16141c;
`;

const Meta = styled.p`
  margin: 0 0 0.8rem;
  color: #6f6a64;
  font-size: 0.88rem;
`;

const Preview = styled.p`
  margin: 0;
  color: #3f3a36;
  line-height: 1.6;
`;

const FeaturedNote = styled.span`
  display: inline-block;
  margin-left: 0.45rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8c6a3a;
`;

function Post({ post }: PostProps) {
  const isHighlighted = post.author === FEATURED_AUTHOR;
  const isNew = isPostedWithin24Hours(post.datePosted);
  const preview = getPreview(post.content);

  return (
    <Card $highlighted={isHighlighted}>
      <TitleRow>
        <Title>{post.title}</Title>
        {isNew ? (
          <span
            style={{
              background: "#7a2832",
              color: "#fff8f6",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.22rem 0.55rem",
              borderRadius: "999px",
              whiteSpace: "nowrap",
            }}
          >
            New!
          </span>
        ) : null}
      </TitleRow>
      <Meta>
        {post.author}
        {isHighlighted ? <FeaturedNote>Featured author</FeaturedNote> : null}
        {" · "}
        {formatPostDate(post.datePosted)}
      </Meta>
      <Preview>{preview}</Preview>
    </Card>
  );
}

export default memo(Post);
