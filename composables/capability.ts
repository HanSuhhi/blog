export async function useCapability() {
  const data = await queryContent<{ body: [name: string, capablities: Array<CapabilityList>] }>("/capabilities").findOne();

  const showingCapabilities = computed(() => {
    return data.body.map(([capability_name, ...capablities]) => {
      return {
        capability_name,
        capabilities: capablities.map(([name, file_type, children_length, month, day, hour, minute, type]) => {
          const file_name = name + (file_type === "d" ? "/" : "");
          const file_system = `${file_type}rwxr--r--`;

          return [
            file_name,
            file_system,
            children_length,
            getMonthAbbreviation(month as number),
            day,
            hour,
            minute,
            type
          ] as DisplayCapabilityList;
        })
      };
    });
  });

  return { showingCapabilities };
}
