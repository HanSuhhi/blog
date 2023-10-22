import { PageEnum } from "~/enums/page.enum";

export function useTerminalRoutes() {
  const routes = ref<PageEnum[]>([
    PageEnum.Root,
    PageEnum.Capabilitys,
    PageEnum.Todo,
    PageEnum.Posts
  ]);
  const currentRoute = useState("terminal-current-route", () => 0);

  return {
    routes,
    currentRoute
  };
}
