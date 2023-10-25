enum PageEnum {
  Root = "",
  Capabilitys = "capabilities",
  Todo = "todos",
  Posts = "posts"
}

function useCurrentKeys() {
  const { current } = useMagicKeys();

  const shift_keys = computed(() => {
    const currents = Array.from(current);
    if (currents.length !== 2) return 0;
    if (currents[0] !== "control") return 0;

    const may_number = Number(currents[1]);
    if (isNaN(may_number)) return 0;
    return may_number;
  });

  return shift_keys;
}

export function useTerminalRoutes() {
  const router = useRouter();

  const routes = useState<PageEnum[]>("tabs-route", () => [
    PageEnum.Root,
    PageEnum.Capabilitys,
    PageEnum.Todo,
    PageEnum.Posts
  ]);
  const currentRoute = useState("terminal-current-route", () => 0);

  watch(currentRoute, newRoute => router.replace({ path: `/${routes.value[newRoute]}` }));

  whenever(useCurrentKeys(), tabIndex => currentRoute.value = tabIndex - 1);

  return {
    routes,
    currentRoute
  };
}
