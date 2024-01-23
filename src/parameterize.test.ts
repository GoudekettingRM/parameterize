import { parameterize } from './index';

describe('parameterize', () => {
  it('should normalize and parameterize a string with special characters', () => {
    expect(parameterize('Äpfel & Birnen!')).toEqual('apfel-birnen');
  });

  it('should handle Greek characters', () => {
    expect(parameterize('αβγ')).toEqual('abg');
  });

  it('should respect the character cap', () => {
    expect(parameterize('Hello World', { charCap: 5 })).toEqual('hello');
  });

  it('should replace spaces with specified separator', () => {
    expect(parameterize('Hello World', { separator: '_' })).toEqual('hello_world');
  });
});
