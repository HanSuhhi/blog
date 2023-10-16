type LiItemControl = "r" | "w" | "x"

type LiItem = [
  name: string,
  /**
   * @description "-" - file "d" - directory "l" - "symlink"
   */
  file_type: "-" | "d" | "l",
  children_length: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  status?: "learning" | "rusty"
]

type DisplayLiItem = [
  name: stirng,
  file_system: string,
  children_length: number,
  getMonthAbbreviation: string,
  day: number,
  hour: number,
  minute: number,
  type?: LiItem['7']
]