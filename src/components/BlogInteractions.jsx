import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { blogs } from "../data/blogsData.js";

export default function BlogInteractions({ slug, initialLikes, initialDislikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [thankYou, setThankYou] = useState("");

  // 🔹 Auto-upsert all blog slugs once
  useEffect(() => {
    const ensureAllBlogsExist = async () => {
      try {
        const allSlugs = blogs.map(b => ({ blog_slug: b.slug }));
        const { error } = await supabase
          .from("blog_interactions")
          .upsert(allSlugs, { onConflict: "blog_slug", ignoreDuplicates: true });
        if (error) console.error("Error upserting all blogs:", error);
      } catch (err) {
        console.error(err);
      }
    };
    ensureAllBlogsExist();
  }, []);

  // 🔹 Fetch interaction data for current slug
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_interactions")
          .select("likes, dislikes, comments")
          .eq("blog_slug", slug)
          .single();

        if (error) throw error;

        if (data) {
          setLikes(data.likes ?? 0);
          setDislikes(data.dislikes ?? 0);
          setComments(data.comments ?? []);
        }
      } catch (err) {
        console.error("Error fetching blog interaction:", err);
      }
    };
    fetchData();
  }, [slug]);

  // Like / Dislike handlers
  const handleLike = async () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    const { error } = await supabase
      .from("blog_interactions")
      .update({ likes: newLikes })
      .eq("blog_slug", slug);
    if (error) console.error("Failed to update likes:", error);
  };

  const handleDislike = async () => {
    const newDislikes = dislikes + 1;
    setDislikes(newDislikes);
    const { error } = await supabase
      .from("blog_interactions")
      .update({ dislikes: newDislikes })
      .eq("blog_slug", slug);
    if (error) console.error("Failed to update dislikes:", error);
  };

  // Comment handler
  const handleComment = async () => {
    if (!commentText.trim()) return alert("Comment cannot be empty");

    const newComment = {
      text: commentText,
      user_name: "Anonymous",
      created_at: new Date().toISOString(),
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    setCommentText("");
    setThankYou("✅ Thank you for your comment!");
    setTimeout(() => setThankYou(""), 2000);

    const { error } = await supabase
      .from("blog_interactions")
      .update({ comments: updatedComments })
      .eq("blog_slug", slug);

    if (error) {
      console.error("Failed to post comment:", error);
      alert("Failed to post comment.");
    }
  };

  return (
    <div className="interaction-bar">
      <div className="interaction-group">
        <button onClick={handleLike} className="interaction-btn">
          👍 Like ({likes})
        </button>
        <button onClick={handleDislike} className="interaction-btn">
          👎 Dislike ({dislikes})
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="interaction-btn"
        >
          💬 Comments ({comments.length})
        </button>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        {thankYou && <p style={{ color: "green" }}>{thankYou}</p>}

        {showComments && (
          <div className={`comment-box show`}>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write your comment..."
            />
            <button onClick={handleComment} className="interaction-btn">
              ➕ Post
            </button>
          </div>
        )}

        {showComments && (
          <div className={`comments-list show`}>
            {comments.length === 0 ? (
              <p>No comments yet. Be the first!</p>
            ) : (
              comments.map((c, i) => (
                <div key={i} className="comment">
                  <strong>{c.user_name}</strong>
                  <p>{c.text}</p>
                  <small>{new Date(c.created_at).toLocaleString()}</small>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}