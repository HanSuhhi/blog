export function getCurrentPath(route: string) {
  if (!route) return "/";
  return `/${route}`;
}
