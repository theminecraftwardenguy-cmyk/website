// Basic profanity / banned word filter
const BANNED = [
  'fuck', 'shit', 'ass', 'bitch', 'cunt', 'dick', 'pussy', 'bastard',
  'damn', 'hell', 'crap', 'piss', 'cock', 'whore', 'slut', 'retard',
  'nigger', 'nigga', 'faggot', 'fag', 'dyke', 'kike', 'spic', 'chink',
];

const BANNED_RE = new RegExp(
  BANNED.map(w => w.replace(/./g, c => `[${c}]+`)).join('|'),
  'gi'
);

export function containsProfanity(text: string): boolean {
  BANNED_RE.lastIndex = 0;
  return BANNED_RE.test(text);
}

export function censorText(text: string): string {
  BANNED_RE.lastIndex = 0;
  return text.replace(BANNED_RE, m => '*'.repeat(m.length));
}
