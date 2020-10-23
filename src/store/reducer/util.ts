import { ApiRedditComment, RedditComment } from "../";

const sortComments = (a: ApiRedditComment, b: ApiRedditComment) => {
  if (a.depth < b.depth) {
    return 1;
  }

  if (a.depth > b.depth) {
    return -1;
  }

  if (a.created_utc > b.created_utc) {
    return 1;
  }

  return -1;
};

export const createRedditComments = (
  apiComments?: ApiRedditComment[]
): RedditComment[] => {
  if (!apiComments) {
    return [];
  }

  const comments: RedditComment[] = [];

  apiComments.sort(sortComments);

  const tmpCommentMap = new Map<string, RedditComment[]>();

  apiComments.forEach((comment) => {
    const parentId = comment.parent_id || "";
    if (comment.depth === 0) {
      comments.push({
        ...comment,
        comments: tmpCommentMap.get(comment.id) || [],
      });
    }

    const existingComments = tmpCommentMap.get(parentId) || [];
    existingComments.push({
      ...comment,
      comments: tmpCommentMap.get(comment.id) || [],
    });

    tmpCommentMap.set(parentId, existingComments);
  });

  return comments;
};
