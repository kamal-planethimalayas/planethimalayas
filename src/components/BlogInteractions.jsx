import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient.js"; // ✅ your working client

export default function BlogInteractions({ slug, initialLikes, initialDislikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [thankYou, setThankYou] = useState("");
  const [showShare, setShowShare] = useState(false);
  const [pageUrl, setPageUrl] = useState(null);
const [pageTitle, setPageTitle] = useState(null);

useEffect(() => {
  if (typeof window !== "undefined") {
    setPageUrl(window.location.href);
  }
  if (typeof document !== "undefined") {
    setPageTitle(document.title);
  }
}, []);



  // ✅ Close dropdowns on outside click / Esc
  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest(".share-dropdown") && !e.target.closest(".interaction-btn")) {
        setShowShare(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") {
        setShowShare(false);
        setShowComments(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // 🔹 Like button
  const handleLike = async () => {
    const { data, error } = await supabase
      .from("blog_interactions")
      .update({ likes: likes + 1 })
      .eq("blog_slug", slug)
      .select();
    if (!error) setLikes(data[0].likes);
  };

  // 🔹 Dislike button
  const handleDislike = async () => {
    const { data, error } = await supabase
      .from("blog_interactions")
      .update({ dislikes: dislikes + 1 })
      .eq("blog_slug", slug)
      .select();
    if (!error) setDislikes(data[0].dislikes);
  };

  // 🔹 Fetch comments on load
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("blog_interactions")
        .select("comments")
        .eq("blog_slug", slug)
        .single();

      if (error) {
        console.error(error);
        return;
      }
      if (data && data.comments) setComments(data.comments);
    };
    fetchComments();
  }, [slug]);

  // 🔹 Post a new comment
  const handleComment = async () => {
    if (!commentText.trim()) return alert("Comment cannot be empty");

    const newComment = {
      text: commentText,
      user_name: "Anonymous",
      created_at: new Date().toISOString(),
    };

    const updatedComments = [newComment, ...comments];

    const { data, error } = await supabase
      .from("blog_interactions")
      .update({ comments: updatedComments })
      .eq("blog_slug", slug)
      .select();

    if (!error) {
      setComments(updatedComments);
      setCommentText("");
      setThankYou("✅ Thank you for your comment!");
      setTimeout(() => setThankYou(""), 2000);
    } else {
      console.error(error);
      alert("Failed to post comment.");
    }
  };


  return (
    <div className="interaction-bar">
      {/* All buttons in one group → symmetric */}
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
        <button
          onClick={() => setShowShare(!showShare)}
          className="interaction-btn"
        >
          🔗 Share
        </button>

        {/* ✅ Share Dropdown */}
       {showShare && pageUrl && pageTitle && (
  <div className="share-dropdown show">
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Facebook
    </a>
    <a
      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Twitter
    </a>
    <a
      href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(pageTitle)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
    <a
      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle + " " + pageUrl)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
    </a>
  </div>
)}
      </div>

      {/* ✅ Comments Section */}
      <div className="comments-section">
        {thankYou && <p style={{ color: "green" }}>{thankYou}</p>}

        {showComments && (
          <div className={`comment-box ${showComments ? "show" : ""}`}>
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
          <div className={`comments-list ${showComments ? "show" : ""}`}>
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