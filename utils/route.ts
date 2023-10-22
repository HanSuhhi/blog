export function getCurrentPath(route: string) {
  if (route.includes("~")) return "/";
  return `/${route}`;
}
