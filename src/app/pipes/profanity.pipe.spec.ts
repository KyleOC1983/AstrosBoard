import { ProfanityPipe } from './profanity.pipe';

describe('ProfanityPipe', () => {
  it('create an instance', () => {
    const pipe = new ProfanityPipe();
    expect(pipe).toBeTruthy();
  });
});
