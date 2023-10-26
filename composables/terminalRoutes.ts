enum PageEnum {
  Root = "",
  Capabilitys = "capabilities",
  Todo = "todos",
  Posts = "posts"
}

function useCurrentKeys() {
  const { current } = useMagicKeys();
  const { control_w } = useMagicKeys();

  const control_nums = computed(() => {
    const currents = Array.from(current);

    if (currents.length !== 2) return 0;
    if (currents[0] !== "control") return 0;

    const may_number = Number(currents[1]);
    if (isNaN(may_number)) return 0;
    return may_number;
  });

  return { control_nums, control_w };
}

function useRoutes() {
  const routes = useState<PageEnum[]>("tabs-route", () => [
    PageEnum.Root,
    PageEnum.Capabilitys,
    PageEnum.Todo,
    PageEnum.Posts
  ]);

  const only_one_route = computed(() => routes.value.length === 1);

  return { routes, only_one_route };
}

function useTerminalCurrentRoute(routes: Ref<PageEnum[]>) {
  const router = useRouter();
  const current_route = useState("terminal-current-route", () => 0);

  watch(current_route, (new_route) => {
    if (new_route < 0) return;
    router.replace({ path: `/${routes.value[new_route]}` });
  });

  return current_route;
}

export function useTerminalRoutes() {
  const { routes, only_one_route } = useRoutes();
  const { control_nums, control_w } = useCurrentKeys();
  const current_route = useTerminalCurrentRoute(routes);

  const delete_route_by_index = (page_route: number) => {
    if (only_one_route.value) return;

    routes.value.splice(page_route, 1);

    const temp_route = current_route.value;
    const current_max_route = routes.value.length - 1;

    current_route.value = -1;
    setTimeout(() => current_route.value = (current_max_route >= temp_route) ? temp_route : current_max_route, 0);
  };

  whenever(control_nums, tabIndex => current_route.value = tabIndex - 1);
  whenever(control_w, () => delete_route_by_index(current_route.value));

  return {
    routes,
    delete_route_by_index,
    current_route
  };
}
