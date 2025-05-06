import React from "react";
import { useNavigate } from "react-router-dom";
import resim from "../../assets/images/oglan.svg";

const BlogRow = () => {
  const navigate = useNavigate();

  // Yönlendirme fonksiyonu
  const handleImageClick = (path) => {
    navigate(path); // Belirtilen path'e yönlendirme
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "30px",
        width: "270px", // Inspect'teki genişlik
        height: "670px", // Inspect'teki yükseklik
        cursor:"pointer",
      }}
      onClick={() => handleImageClick("/blog-details")} // Tıklanınca yönlendirme

    >
      {/* 1. Blog Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          padding: "0px 6px 6px 6px", // Inspect'teki padding değerleri
          width: "258px", // İç genişlik
          height: "317px", // İç yükseklik
          borderRadius: "16px",
          border: "1px solid var(--gray-100, #F3F4F6)", // Border rengi
          background: "var(--gray-50, #F9FAFB)", // Arka plan rengi
        }}
      >
        {/* Text Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "16px 10px",
            width: "232px", // Inspect'teki genişlik
            height: "152px", // Inspect'teki yükseklik
            borderRadius: "16px",
            boxSizing: "border-box",
          }}
        >
          {/* Information Container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              alignSelf: "stretch",
              padding: "12px 10px",
              width: "232px", // İç genişlik
              height: "16px", // İç yükseklik
              boxSizing: "border-box",
            }}
          >
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#EA580C" />
            </svg>

            {/* Information Text */}
            <span
              style={{
                color: "var(--gray-500, #6B7280)",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16px",
              }}
            >
              6 minutes read
            </span>
          </div>
          {/* Text Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              width: "232px",
              height: "92px",
              padding: "12px 10px",
              boxSizing: "border-box",
            }}
          >
            {/* Başlık */}
            <span
              style={{
                alignSelf: "stretch",
                color: "#000",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.176px",
              }}
            >
              Our free design system has reached over 10k!
            </span>

            {/* Açıklama */}
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--gray-500, #6B7280)",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "-0.084px",
              }}
            >
              Lorem impsum dolor sit amet dummy amet lottor ximpsu
            </span>
          </div>
        </div>
        {/* Image Area Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            width: "258px", // İç genişlik
            height: "165px", // İç yükseklik
            padding: "3px", // İç boşluk
            borderRadius: "14px", // Köşe yumuşatma
            border: "3px solid #FFF", // Kenar
            background: "#FFF", // Arka plan
            boxShadow:
              "0px 35px 10px 0px rgba(160, 166, 172, 0.00), 0px 23px 9px 0px rgba(160, 166, 172, 0.01), 0px 13px 8px 0px rgba(160, 166, 172, 0.03), 0px 6px 6px 0px rgba(160, 166, 172, 0.06), 0px 1px 3px 0px rgba(160, 166, 172, 0.06)",
            boxSizing: "border-box", // Border dahil
          }}
        >
          {/* Resim */}
          <img
            src={resim}
            alt="Oğlan"
            style={{
              width: "100%", // Resmi alanın tamamını kaplayacak şekilde genişlet
              height: "auto", // Yükseklik oranını koru
              borderRadius: "12px", // Köşe yumuşatma
            }}
          />
        </div>
      </div>
       {/* 1. Blog Container */}
       <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          padding: "0px 6px 6px 6px", // Inspect'teki padding değerleri
          width: "258px", // İç genişlik
          height: "317px", // İç yükseklik
          borderRadius: "16px",
          border: "1px solid var(--gray-100, #F3F4F6)", // Border rengi
          background: "var(--gray-50, #F9FAFB)", // Arka plan rengi
        }}
      >
        {/* Text Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "16px 10px",
            width: "232px", // Inspect'teki genişlik
            height: "152px", // Inspect'teki yükseklik
            borderRadius: "16px",
            boxSizing: "border-box",
          }}
        >
          {/* Information Container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              alignSelf: "stretch",
              padding: "12px 10px",
              width: "232px", // İç genişlik
              height: "16px", // İç yükseklik
              boxSizing: "border-box",
            }}
          >
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#EA580C" />
            </svg>

            {/* Information Text */}
            <span
              style={{
                color: "var(--gray-500, #6B7280)",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16px",
              }}
            >
              6 minutes read
            </span>
          </div>
          {/* Text Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              width: "232px",
              height: "92px",
              padding: "12px 10px",
              boxSizing: "border-box",
            }}
          >
            {/* Başlık */}
            <span
              style={{
                alignSelf: "stretch",
                color: "#000",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.176px",
              }}
            >
              Our free design system has reached over 10k!
            </span>

            {/* Açıklama */}
            <span
              style={{
                alignSelf: "stretch",
                color: "var(--gray-500, #6B7280)",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "-0.084px",
              }}
            >
              Lorem impsum dolor sit amet dummy amet lottor ximpsu
            </span>
          </div>
        </div>
        {/* Image Area Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            width: "258px", // İç genişlik
            height: "165px", // İç yükseklik
            padding: "3px", // İç boşluk
            borderRadius: "14px", // Köşe yumuşatma
            border: "3px solid #FFF", // Kenar
            background: "#FFF", // Arka plan
            boxShadow:
              "0px 35px 10px 0px rgba(160, 166, 172, 0.00), 0px 23px 9px 0px rgba(160, 166, 172, 0.01), 0px 13px 8px 0px rgba(160, 166, 172, 0.03), 0px 6px 6px 0px rgba(160, 166, 172, 0.06), 0px 1px 3px 0px rgba(160, 166, 172, 0.06)",
            boxSizing: "border-box", // Border dahil
          }}
        >
          {/* Resim */}
          <img
            src={resim}
            alt="Oğlan"
            style={{
              width: "100%", // Resmi alanın tamamını kaplayacak şekilde genişlet
              height: "auto", // Yükseklik oranını koru
              borderRadius: "12px", // Köşe yumuşatma
            }}
          />
        </div>
      </div>
      
    </div>
  );
};

export default BlogRow;
