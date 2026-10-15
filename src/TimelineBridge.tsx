import { useEffect, useRef } from "react";
import { createApp } from "vue";
import Timeline from "./Timeline.vue";
import { phases, milestones } from "./data";

export default function TimelineBridge() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!host.current) return;
    const app = createApp(Timeline, { phases, milestones });
    app.mount(host.current);
    return () => app.unmount();
  }, []);
  return <div ref={host} className="timeline-host" />;
}
