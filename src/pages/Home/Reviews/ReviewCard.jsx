import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-400 rounded-3xl p-8 w-80 shadow-sm">
      
      {/* Quote Icon */}
      <div className="text-5xl text-teal-200 mb-4">
        ❝
      </div>

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed text-sm mb-6">
        {review?.review ||
          "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-teal-300 mb-6"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <img className="w-12 h-12 rounded-full" src={review?.user_photoURL} alt="" />

        {/* Name & Role */}
        <div>
          <h3 className="font-semibold text-lg text-teal-900">
            {review?.userName || "Awlad Hossin"}
          </h3>
          <p className="text-gray-500 text-sm">
            {review?.date || "Senior Product Designer"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard