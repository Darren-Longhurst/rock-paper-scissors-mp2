const { getChoiceIcon, getComputerChoice, getWinner } = require("/assets/js/js_tests/gameLogic");

// ---- getChoiceIcon tests ----
test("returns rock icon when choice is rock", () => {
  expect(getChoiceIcon("rock")).toContain("fa-hand-rock");
});

test("returns paper icon when choice is paper", () => {
  expect(getChoiceIcon("paper")).toContain("fa-hand-paper");
});

test("returns scissors icon when choice is scissors", () => {
  expect(getChoiceIcon("scissors")).toContain("fa-hand-scissors");
});

// ---- getComputerChoice tests ----
test("computer choice should be rock, paper, or scissors", () => {
  const choice = getComputerChoice();
  expect(["rock", "paper", "scissors"]).toContain(choice);
});

// ---- getWinner tests ----
test("rock beats scissors", () => {
  expect(getWinner("rock", "scissors")).toBe("player");
});

test("scissors beats paper", () => {
  expect(getWinner("scissors", "paper")).toBe("player");
});

test("paper beats rock", () => {
  expect(getWinner("paper", "rock")).toBe("player");
});

test("same choice results in tie", () => {
  expect(getWinner("rock", "rock")).toBe("tie");
});

test("computer wins when appropriate", () => {
  expect(getWinner("rock", "paper")).toBe("computer");
});
