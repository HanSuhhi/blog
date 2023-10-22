export const CapabilitySymbol = Symbol("capability");
export const getCapabilities = () => inject<DisplayCapabilityList[]>(CapabilitySymbol)!;
