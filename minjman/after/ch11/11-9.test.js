import { score, ScoringGuide } from './11-9';

describe('11-9 Test', () => {
  let candidate = null;
  let medicalExam = null;
  let scoringGuide = null;
  beforeEach(() => {
    candidate = {
      originState: 4,
    };
    medicalExam = { isSmoker: true };
    scoringGuide = new ScoringGuide();
  });
  it('should get score from Scorer execute method(1)', () => {
    expect(score(candidate, medicalExam, scoringGuide)).toBe(-10);
  });
  it('should get score from Scorer execute method(2)', () => {
    medicalExam.isSmoker = false;
    candidate.originState = 5;
    expect(score(candidate, medicalExam, scoringGuide)).toBe(0);
  });
});
