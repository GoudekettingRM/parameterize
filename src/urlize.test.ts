import { urlize } from './index';

describe('urlize', () => {
  it('should normalize and urlize a string with special characters', () => {
    expect(urlize('Äpfel & Birnen!')).toEqual('apfel-birnen');
  });

  it('should handle Greek characters', () => {
    expect(urlize('αβγ')).toEqual('abg');
  });

  it('should respect the character cap', () => {
    expect(urlize('Hello World', { charCap: 5 })).toEqual('hello');
  });

  it('should replace spaces with specified separator', () => {
    expect(urlize('Hello World', { separator: '_' })).toEqual('hello_world');
  });
});
