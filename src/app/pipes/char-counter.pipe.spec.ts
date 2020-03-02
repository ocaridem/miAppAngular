import { CharCounterPipe } from './char-counter.pipe';

describe('CharCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new CharCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
