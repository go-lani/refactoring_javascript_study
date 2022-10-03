import { Employee } from './11-8';
import { score, Scorer, ScoringGuide } from './11-9';

describe('11-9.js', () => {
  let candidate;
  let medicalExam;
  let scoringGuide;
  let scorer;

  candidate = {
    originState: 100,
  };
  medicalExam = { isSmoker: true };
  scoringGuide = new ScoringGuide();

  scorer = new Scorer(candidate, medicalExam, scoringGuide);

  it('scorer passed', () => {
    expect(scorer.execute()).toBe(-5);
  });

  it('scorer passed', () => {
    medicalExam = { isSmoker: false };
    expect(scorer.execute()).toBe(-5);
  });

  it('scorer passed', () => {
    candidate = {
      originState: 2,
    };
    expect(scorer.execute()).toBe(-5);
  });

  it('score function passed', () => {
    expect(score(candidate, medicalExam, scoringGuide)).toBe(-5);
  });
});
