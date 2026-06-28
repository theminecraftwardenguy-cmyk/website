// Profanity filter — uses word boundaries to avoid false positives
// e.g. "mass", "classic", "bass", "assassin", "scunthorpe" are all safe
const BANNED = [
  'fuck', 'shit', 'bitch', 'cunt', 'dick', 'pussy', 'bastard',
  'crap', 'piss', 'cock', 'whore', 'slut', 'retard',
  'nigger', 'nigga', 'faggot', 'fag', 'dyke', 'kike', 'spic', 'chink',
];

// \b word boundaries prevent matching substrings inside normal words
const BANNED_RE = new RegExp(
  BANNED.map(w => `\\b${w}\\b`).join('|'),
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
