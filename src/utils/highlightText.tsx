export const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) return text;
  let idx = text.toLowerCase().indexOf(searchTerm.toLowerCase());
  if (idx !== -1) {
    let before = text.substring(0, idx);
    let highlight = text.substring(idx, idx + searchTerm.length);
    let after = text.substring(idx + searchTerm.length);
    return (
      <span>
        {before}
        <span
          style={{
            textDecoration: 'underline',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          {highlight}
        </span>
        {after}
      </span>
    );
  }
  return text;
};
