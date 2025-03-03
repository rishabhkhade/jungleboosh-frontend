import React from "react";
import "./Step.scss";

const Step = ({ totalSteps, currentStep, stepLabels }) => {
  return (
    <div className="step_cont cont">
      <div className="line"></div>
      {Array.from({ length: totalSteps }, (_, index) => {
        return (
          <div
            key={index}
            className={`step ${index + 1 === currentStep ? "active" : ""}`}
            style={{ left: `${(index / (totalSteps - 1)) * 100}%` }}
          >
            {index + 1}
            <p className="step_tag">{stepLabels[index]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Step;
