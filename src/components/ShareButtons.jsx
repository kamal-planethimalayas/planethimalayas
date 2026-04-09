import "./ShareButtons.css";

export default function ShareButtons({ pageUrl, pageTitle }) {
  if (!pageUrl || !pageTitle) return null;

  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(pageTitle);

  const platforms = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      iconClass: "fab fa-facebook",
      color: "#1877F2",
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      iconClass: "fab fa-twitter",
      color: "#1DA1F2",
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`,
      iconClass: "fab fa-linkedin",
      color: "#0077B5",
    },
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`,
      iconClass: "fab fa-whatsapp",
      color: "#25D366",
    },
  ];

  return (
    <div className="share-buttons">
      <h2>{pageTitle}</h2>
      <h3>Share this post:</h3>
      <div className="share-buttons-list">
        {platforms.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn"
            style={{ color: p.color }}
          >
            <i className={p.iconClass}></i>
          </a>
        ))}
      </div>
    </div>
  );
}