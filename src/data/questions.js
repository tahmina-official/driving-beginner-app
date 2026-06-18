export const questions = [
  {
    id: "red-light",
    question: "What does a steady red traffic light mean?",
    options: [
      "Stop completely before the crosswalk or stop line.",
      "Slow down, then keep driving if the road is clear.",
      "Only stop if another car is already in the intersection.",
      "Speed up to clear the intersection quickly.",
    ],
    answer: "Stop completely before the crosswalk or stop line.",
    explanation: "A steady red light requires a full stop before entering the intersection.",
  },
  {
    id: "blind-spot",
    question: "When should you check your blind spot?",
    options: [
      "Before changing lanes or merging.",
      "Only when backing out of a driveway.",
      "Only after you start turning.",
      "Never, mirrors show every area around the car.",
    ],
    answer: "Before changing lanes or merging.",
    explanation: "Mirrors do not show every area beside your car, so look over your shoulder.",
  },
  {
    id: "following-distance",
    question: "What is a safe following-distance habit in normal conditions?",
    options: [
      "Leave at least three seconds between you and the vehicle ahead.",
      "Stay one car length behind at every speed.",
      "Drive close enough to read the plate clearly.",
      "Use the horn if the car ahead is moving slowly.",
    ],
    answer: "Leave at least three seconds between you and the vehicle ahead.",
    explanation: "A time gap gives you space to react if traffic stops suddenly.",
  },
  {
    id: "school-zone",
    question: "What should you do when entering a marked school zone?",
    options: [
      "Slow down and watch for children.",
      "Maintain highway speed if no buses are visible.",
      "Pass stopped vehicles quickly.",
      "Use high beams to warn pedestrians.",
    ],
    answer: "Slow down and watch for children.",
    explanation: "School zones require extra attention and lower speeds.",
  },
  {
    id: "four-way-stop",
    question: "At a four-way stop, who goes first when two cars arrive at the same time?",
    options: [
      "The driver on the right.",
      "The driver on the left.",
      "The driver with the larger vehicle.",
      "The driver who honks first.",
    ],
    answer: "The driver on the right.",
    explanation: "When arrival timing is equal, yield to the vehicle on your right.",
  },
  {
    id: "turn-signal",
    question: "Why should you signal before turning or changing lanes?",
    options: [
      "To tell other road users what you plan to do.",
      "To make your car easier to start.",
      "To make traffic lights change sooner.",
      "To show that you have the right of way.",
    ],
    answer: "To tell other road users what you plan to do.",
    explanation: "Signals help other drivers, cyclists, and pedestrians predict your movement.",
  },
  {
    id: "yellow-light",
    question: "What does a steady yellow traffic light mean?",
    options: [
      "The light is about to turn red; stop if you can do so safely.",
      "Traffic must stop in every direction.",
      "Pedestrians may cross anywhere.",
      "You should always accelerate.",
    ],
    answer: "The light is about to turn red; stop if you can do so safely.",
    explanation: "Yellow means the signal is changing, so avoid entering if you can stop safely.",
  },
  {
    id: "emergency-vehicle",
    question: "What should you do when an emergency vehicle approaches with lights and siren?",
    options: [
      "Pull to the right and stop when it is safe.",
      "Keep driving at the same speed.",
      "Stop immediately in the lane, even if blocking traffic.",
      "Follow closely behind it to move through traffic.",
    ],
    answer: "Pull to the right and stop when it is safe.",
    explanation: "Make room for emergency vehicles without creating another hazard.",
  },
];

export function getExamResult(score, total) {
  const percentage = total === 0 ? 0 : Math.round((score / total) * 100);

  return {
    percentage,
    passed: percentage >= 80,
  };
}
