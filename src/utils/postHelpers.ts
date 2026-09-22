export function getPreview(content: string, wordCount = 12): string {
  const words = content.trim().split(/\s+/);

  if (words.length <= wordCount) {
    return content;
  }

  return `${words.slice(0, wordCount).join(" ")}...`;
}

export function isPostedWithin24Hours(datePosted: string): boolean {
  const postedTime = new Date(datePosted).getTime();
  const now = Date.now();
  const oneDayInMs = 24 * 60 * 60 * 1000;

  return now - postedTime >= 0 && now - postedTime < oneDayInMs;
}

export function formatPostDate(datePosted: string): string {
  return new Date(datePosted).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
