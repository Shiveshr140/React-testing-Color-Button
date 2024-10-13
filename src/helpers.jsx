// We'll replace the hyphens with spaces that doesn't need regular expression. So replace all the hyphens with spaces, and then let's change the beginning letter of every word to
// to be capitalized. And that I'm going to use some slightly tricky regular expression stuff. So here's the regular expression I want something to be at a word boundary and a lowercase letter.
// Use parentheses so I can capture what that lowercase letter is. The g flag means find them all and then I'll replace with whatever the match was to uppercase.
// Then we'll return that result.
// \b (Word boundary)
// ([a-z]) (Capture group for lowercase letters):
// g (Global flag): continue till all matches found

export default function KebabCaseToTitleCase(colorName) {
  const colorWithSpaces = colorName.replaceAll("-", " ");
  const colorWithCaps = colorWithSpaces.replace(/\b([a-z])/g, (match) =>
    match.toUpperCase()
  );
  return colorWithCaps;
}
