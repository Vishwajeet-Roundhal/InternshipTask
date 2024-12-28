import React from 'react';
import "../styles/Statistics.css"

// InfoCard component
const InfoCard = ({ title, value, description, illustration }) => (
  <div className={`info-card ${title.toLowerCase().replace(" ", "-")}`}>
    <div className="info-content">
      <h3 className="info-title">{title}</h3>
      <div className="info-value">{value}</div>
      <p className="info-description">{description}</p>
    </div>
    <div className="info-illustration">
      <img src={illustration} alt={`${title} illustration`} />
    </div>
  </div>
);

// InfoSection component
const InfoSection = () => {
  return (
    <div className="info-container">
      <h2 className="info-title">
        Experience The <span className="highlight">Statistical</span> Power Of Skillup
      </h2>
      <p className="info-description">
        Our programs are designed to drive real outcomes, helping you to scale your career and reach new heights. Here's what our participants are sharing:
      </p>
      
      <div className="info-grid">
        <InfoCard
          title="Participants"
          value="7,234+"
          description="Our workshops are structured to yield concrete results, advancing your career in measurable ways."
          illustration="https://s3-alpha-sig.figma.com/img/7e41/631b/2d5e93a30ce06465adfd2edfa68545a0?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l-AArebcubVc80XnrGDGwI2oJ5xw5GWmPmpPMeah841OZ9L8u-fz3DWA1~QafL-ZQvYkVQcIotkTvWZcVnc75vXW19JcMCIl8Fc05Yt5Lys00R0AaJk1kSvJfwrUpft03QiEvKnv5dIJtCCTQBvXPripQgT4w2iJxw5uTlTwqpe-U07bW-oWOvUMAZ3AekbOWItfjfoVy96oeoMEoiEh2EqR2~gWto-6qNKNeH-kTXWoLgSWqixYedZzIwLwerVBumny03SYBA7IJPMm3kkwxGZWUhBnDMLOHjW4OJBdJGVV1l3bqGXpaxisD~J0oOOm2uHMB8WvsJXYugefMC9SMA__"
        />
        
        <InfoCard
          title="Experts"
          value="1,200+"
          description="We provide you with guidance from top-notch professionals who are experts in their fields."
          illustration="https://s3-alpha-sig.figma.com/img/c02e/53aa/6d699d445f69226ee6dd8f91c7019580?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LLrgBEaPzcvitXqo18p6LjfMhKrgd-vQtnXZXu2EyOdPl-cTHuLNc-rGcowfFkzeGG61Kq0obdKv9IsL8ILvmpyEr7qFK3GqyuhWF9X7A-Jhywb702qEa674Gv878~dWbajUqf1-7xZcL1~u3K6DLpRoHrLlp-bN0MuQw745ALRbSGmXAz0g6FrcZL2KgkEavZ1ZuJ2nQYnhdA0pojjzFol-CcDVeUW9SGuTlN0a3CX1crRihb5wgG-QcV9n~g6obUo3hudEQGApUq9WqkOeRJK5Z7W6lhns8~USHMICuPFcmxRiVwLycU-DCKKNb51NCzdgCZRm3mkJhbFAQVeo2w__"
        />
        
        <InfoCard
          title="Success Rate"
          value="73%"
          description="We pride ourselves on our high success rate, with a significant percentage of our participants landing jobs after completing our courses."
          illustration="https://s3-alpha-sig.figma.com/img/9dec/1130/9eddc775610cd293dc136bdd22fdeb3d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EdAP7yEgsL9-DoWfyZfq5mgtfRu5nBL-Ig2FqJOP4tq-e9Lz4e6SguV4Rt12nSu2n5x3epjmUPlA0ACXTWfYXlbSAdU78rOT9QP7fkqLsRAJQmDpRU9bc9Ok4nSkFns-~uXiJsvIcxL8ENPZVqTwPDcyHpEypn-UksbVpRpvjeVqi3Ncv5wEoyLzENKGe4yij6KEaUa162bNk-pxs0GZ47osRA~mg-cG0qeAdNHr2ek5OvpB20bREkAR0ViiYsLibYRGXeq7q5KhAZoT2QIY3fsoWLnrnw4PdugoQH030JAl-9ttxax-lhJaTSKw~ZxL69VZphZzAF01ptwenQs9Pw__"
        />
      </div>
    </div>
  );
};

export default InfoSection;
