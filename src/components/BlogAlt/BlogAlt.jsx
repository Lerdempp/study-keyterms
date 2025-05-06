import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate hook'unu import et
import resim from "../../assets/images/resim.svg";
import back from "../../assets/icons/back.svg";
import Footer from "../Footer2";
import Comments from "../Comments/Comments.jsx"
import CommentSection from "./CommentSection.jsx";

const BlogAlt = () => {
  const navigate = useNavigate(); // navigate fonksiyonunu al

  return (
    <div
      style={{
        width: "1440px",
        height: "2720px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Geri Butonu */}
      <div
        style={{
          width: "70px",
          height: "24px",
          borderRadius: "32px",
          background: `url(${back})`,
          boxSizing: "border-box",
          flexShrink: "0",
          position: "absolute",
          top: "54px",
          left: "146px",
          cursor: "pointer", // Tıklanabilirlik için el imleci
        }}
        onClick={() => navigate(-1)} // Bir önceki sayfaya dön
      ></div>

      {/* Okuma Süresi Bilgisi */}
      <div
        style={{
          borderRadius: "40px",
          border: "1px dashed #D7ECFF",
          background: "rgba(255, 255, 255, 0.40)",
          boxShadow:
            "0px -4px 12px 0px #FFF inset, 0px 4px 7.7px -2px rgba(170, 215, 255, 0.50)",
          padding: "8px 12px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          position: "absolute",
          textAlign: "center",
          top: "48px",
        }}
      >
        <span
          style={{
            color: "#181818",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "-0.084px",
          }}
        >
          6 minutes read
        </span>
      </div>

      {/* Başlık */}
      <div
        style={{
          position: "absolute",
          top: "108px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "#000",
            fontSize: "56px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "64px",
            letterSpacing: "-0.616px",
          }}
        >
          Easy homework for your <br /> improve by yourself
        </span>
      </div>

      {/* Resim */}
      <div
        style={{
          width: "1148px",
          height: "696px",
          borderRadius: "32px",
          border: "2px solid var(--gray-200, #E5E7EB)",
          background: `url(${resim}) lightgray 50% / cover no-repeat`,
          boxSizing: "border-box",
          flexShrink: "0",
          position: "absolute",
          top: "284px",
        }}
      ></div>

      {/* İlk Paragraf */}
      <div
        style={{
          position: "absolute",
          top: "1028px",
          width: "1152px",
        }}
      >
        <span
          style={{
            color: "#6B7280",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "-0.22px",
          }}
        >
          The journey of self-improvement through homework doesn't have to be
          complicated. Let's explore how you can <br /> make your learning
          process more efficient and enjoyable.
        </span>
      </div>

      {/* Alt Başlık 1 */}
      <div
        style={{
          position: "absolute",
          top: "1140px",
          width: "1152px",
        }}
      >
        <span
          style={{
            color: "#000",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "36px",
            letterSpacing: "0.28px",
          }}
        >
          Understanding the Basics of Self-Study
        </span>
      </div>

      {/* Alt Paragraf 1 */}
      <div
        style={{
          position: "absolute",
          width: "1152px",
          top: "1188px",
        }}
      >
        <span
          style={{
            color: "#6B7280",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "-0.22px",
          }}
        >
          Learning by yourself requires more than just reading textbooks. It's
          about developing a systematic approach that works for you. The key is
          to break down complex subjects into manageable pieces and tackle them
          one at a time.
        </span>
      </div>

      {/* Alt Başlık 2 */}
      <div
        style={{
          position: "absolute",
          top: "1300px",
          width: "1152px",
        }}
      >
        <span
          style={{
            color: "#000",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "36px",
            letterSpacing: "0.28px",
          }}
        >
          Creating Your Perfect Study Environment
        </span>
      </div>

      {/* Liste */}
      <div
        style={{
          position: "absolute",
          width: "1152px",
          top: "1348px",
        }}
      >
        <span
          style={{
            color: "#6B7280",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "-0.22px",
          }}
        >
          A conducive study environment plays a crucial role in effective
          learning. Consider these essential elements:
        </span>
        <ul
          style={{
            marginTop: "16px",
            paddingLeft: "20px",
            color: "#6B7280",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "-0.22px",
          }}
        >
          <li>A quiet, well-lit space</li>
          <li>Organized study materials</li>
          <li>Minimal distractions</li>
          <li>Comfortable seating</li>
          <li>Good ventilation</li>
        </ul>
      </div>

      {/* Alt Başlık 3 */}
      <div
        style={{
          position: "absolute",
          top: "1588px",
          width: "1152px",
        }}
      >
        <span
          style={{
            color: "#000",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "36px",
            letterSpacing: "0.28px",
          }}
        >
          Effective Time Management Strategies
        </span>
      </div>

      {/* Liste 2 */}
      <div
        style={{
          position: "absolute",
          width: "1152px",
          top: "1636px",
        }}
      >
        <span
          style={{
            color: "#6B7280",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "-0.22px",
          }}
        >
          Time management is crucial for successful self-study. Start by:
        </span>
        <ul
          style={{
            marginTop: "16px",
            paddingLeft: "20px",
            color: "#6B7280",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "-0.22px",
          }}
        >
          <li>Setting specific study goals</li>
          <li>Creating a realistic schedule</li>
          <li>Taking regular breaks</li>
          <li>Using time-tracking methods</li>
          <li>Prioritizing tasks effectively</li>
        </ul>
      </div>

      {/* Alt Bölüm */}
      <CommentSection />
      <Comments />
      <Footer />
    </div>
  );
};

export default BlogAlt;
