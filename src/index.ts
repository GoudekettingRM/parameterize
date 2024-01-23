import { CHARACTER_MAP, type CharacterMap } from './characterMap';

type TParameterizeOptions = {
  charCap?: number;
  separator?: string;
};

class CharNormalizer {
  private static map: CharacterMap | null = null;
  private static chars: string | null = null;
  private static regex: RegExp;

  public static initialize(): void {
    if (this.map) return;
    this.map = CHARACTER_MAP;
    this.chars = Object.keys(CHARACTER_MAP).join('');
    this.regex = new RegExp(`[${this.chars}]|[^${this.chars}]+`, 'g');
  }

  public static normalize(slug: string): string {
    this.initialize();
    return slug.replace(this.regex, (match) => this.map![match] || match);
  }
}

const parameterize = (str: string, opts?: TParameterizeOptions): string => {
  const options = opts || {};

  str = CharNormalizer.normalize(str)
    .replace(/[^-\w\s]/g, '')
    .trim()
    .replace(/[-\s]+/g, options.separator ?? '-')
    .toLowerCase();

  return str.substring(0, options.charCap);
};

export { parameterize };
