import { PageEnum } from "~/enums/page.enum";

export function useTerminalRoutes() {
  const routes = ref<PageEnum[]>([
    PageEnum.Root,
    PageEnum.Capabilitys,
    PageEnum.Todo,
    PageEnum.Posts
  ]);
  const currentRoute = useState("terminal-current-route", () => 0);
  const { pathname } = useRequestURL();

  onMounted(() => {
    const index = useFindIndex(routes.value, (item: string) => `/${item}` === pathname);
    currentRoute.value = index === -1 ? 0 : index;
  });

  return {
    routes,
    currentRoute
  };
}
