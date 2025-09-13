export function getInitials(name?: string, email?: string): string {
  let source = name?.trim();

  if (!source && email) {
    source = email.split("@")[0];
  }

  if (!source) return "";

  const first = source.charAt(0).toUpperCase();
  const second = source.length > 1 ? source.charAt(1).toLowerCase() : "";

  return first + second;
}
