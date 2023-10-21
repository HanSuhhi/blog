import { PageEnum } from "~/enums/page.enum";

export function useTerminalRoutes() {
  const routes = ref<PageEnum[]>([PageEnum.Resume, PageEnum.Todo, PageEnum.Articles]);
  const currentRoute = useState("terminal-current-route", () => 0);

  return {
    routes,
    currentRoute
  };
}
