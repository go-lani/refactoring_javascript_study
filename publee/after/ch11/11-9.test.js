import { score, ScoringGuide } from './11-9';

describe('11-9 Test', () => {
  let candidate;
  let medicalExam;
  let scoringGuide;

  beforeEach(() => {
    candidate = {
      originState: 4,
    };
    medicalExam = { isSmoker: true };
    scoringGuide = new ScoringGuide();
  });

  it('case 1', () => {
    expect(score(candidate, medicalExam, scoringGuide)).toBe(-10);
  });

  it('case2', () => {
    medicalExam.isSmoker = false;
    candidate.originState = 10;
    expect(score(candidate, medicalExam, scoringGuide)).toBe(0);
  });
});
