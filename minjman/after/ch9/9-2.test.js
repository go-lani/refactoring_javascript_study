import { Organization } from './9-2';

describe('9-2 Test', () => {
  let organization = null;
  beforeEach(() => {
    organization = new Organization({
      title: '드림코딩',
      country: '대한민국',
    });
  });
  it('should get title', () => {
    organization.title = '제목 수정';
    expect(organization.title).toBe('제목 수정');
  });
  it('should get country', () => {
    organization.country = '국가 수정';
    expect(organization.country).toBe('국가 수정');
  });
});
