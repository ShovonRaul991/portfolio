import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";

function BadgeCard({ badgeEmbedCode }) {
  useEffect(() => {
    // Load the Credly badge embed script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.Credly) {
        window.Credly.init();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <Card className="badge-card">
      <Card.Body>
        {/* Injecting badge embedding HTML */}
        <div dangerouslySetInnerHTML={{ __html: badgeEmbedCode }}></div>
      </Card.Body>
    </Card>
  );
}

export default BadgeCard;
