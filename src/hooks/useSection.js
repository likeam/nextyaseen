import { useState } from "react";

export function useSection(initialSection = "yaseen") {
  const [activeSection, setActiveSection] = useState(initialSection);
  return { activeSection, setActiveSection };
}
