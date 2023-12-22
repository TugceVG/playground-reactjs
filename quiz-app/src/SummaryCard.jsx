import React from "react";

export default function SummaryCard({ questions, correctAnswerCount }) {
  return (
    <div className="summary-card">
      <h4>
        Toplam {questions.length} sorudan {correctAnswerCount} dogru cevap
        verdiniz.
      </h4>
    </div>
  );
}
