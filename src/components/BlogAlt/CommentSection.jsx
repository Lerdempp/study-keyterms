import React, { useState } from "react";
import Modal from "./Modal";

const CommentSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState([]); // Yorumları saklamak için state

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Yorum ekleme fonksiyonu
  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]); // Yeni yorumu state'e ekler
  };

  return (
    <div
      style={{
        display: "flex",
        width: "1146px",
        height: "36px",
        alignItems: "center",
        gap: "12px",
        position: "absolute",
        top: "2008px",
      }}
    >
      {/* Comments Label */}
      <div
        style={{
          display: "flex",
          padding: "3px 12px",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          borderRadius: "54px",
          border: "1px solid var(--gray-200, #E5E7EB)",
          background: "#FFF",
          boxShadow:
            "0px 1px 4px 0px rgba(230, 230, 230, 0.12) inset, 0px -2px 2.5px 0px rgba(230, 230, 230, 0.32) inset",
        }}
      >
        <span
          style={{
            color: "var(--gray-700, #374151)",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "-0.084px",
          }}
        >
          Comments
        </span>
      </div>

      {/* Divider Line */}
      <div
        style={{
          width: "907px",
          height: "1px",
          background: "#E5E7EB",
        }}
      ></div>

      {/* Modal Açma Butonu */}
      <div
        style={{
          display: "flex",
          padding: "8px 12px",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          borderRadius: "34px",
          background: "#171717",
          width: "120px",
          cursor: "pointer",
          position: "absolute",
          left: "1026px",
        }}
        onClick={handleOpenModal}
      >
        <span
          style={{
            color: "#FFF",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "-0.084px",
          }}
        >
          Add Comment
        </span>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          addComment={addComment} // addComment prop olarak geçiliyor
        />
      )}

      {/* Yorumları Listeleme */}
      <div style={{ marginTop: "50px" }}>
        {comments.map((comment, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h4>{comment.name}</h4>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
