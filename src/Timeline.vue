<script setup lang="ts">
import { computed, ref } from "vue";
import type { Phase } from "./data";

const props = defineProps<{
  phases: Phase[];
  milestones: { date: string; title: string; text: string }[];
}>();
const selected = ref(1);
const active = computed(() =>
  props.phases.find((phase) => phase.id === selected.value)!,
);
const months = ["Oct ’26", "Nov", "Dec", "Jan ’27", "Feb", "Mar", "Apr"];
const showCalendar = ref(false);

function selectPhase(id: number) {
  selected.value = id;
}
function navigate(event: KeyboardEvent, index: number) {
  const keys = [
    "ArrowRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowUp",
    "Home",
    "End",
  ];
  if (!keys.includes(event.key)) return;
  event.preventDefault();
  const next =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? props.phases.length - 1
        : (index +
            (event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1) +
            props.phases.length) %
          props.phases.length;
  selectPhase(props.phases[next].id);
  (event.currentTarget as HTMLElement).parentElement
    ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    [next]?.focus();
}
</script>

<template>
  <div class="timeline-app">
    <p class="schedule-basis">
      A schedule organised by dates, workload, and demonstrable outputs.
    </p>
    <div class="phase-tabs" role="tablist" aria-label="Development phases">
      <button
        v-for="(phase, index) in phases"
        :id="`phase-tab-${phase.id}`"
        :key="phase.id"
        role="tab"
        :aria-selected="selected === phase.id"
        aria-controls="phase-panel"
        :tabindex="selected === phase.id ? 0 : -1"
        :class="{
          selected: selected === phase.id,
          'light-tab': phase.lowWorkload,
        }"
        @click="selectPhase(phase.id)"
        @keydown="navigate($event, index)"
      >
        <span class="phase-number">0{{ phase.id }}</span>
        <span>{{ phase.shortTitle }}</span>
        <span class="phase-period">{{ phase.periodLabel }}</span>
      </button>
    </div>

    <div
      id="phase-panel"
      class="phase-panel"
      role="tabpanel"
      :aria-labelledby="`phase-tab-${active.id}`"
      tabindex="0"
    >
      <div class="phase-overview" :key="active.id">
        <div class="phase-eyebrow">
          <span class="eyebrow">PHASE 0{{ active.id }}</span
          ><span class="planned">Planned</span
          ><span v-if="active.lowWorkload" class="planned light-label"
            >Low workload</span
          >
        </div>
        <h3>{{ active.title }}</h3>
        <p class="phase-dates">{{ active.dates }}</p>
        <p class="phase-summary">{{ active.summary }}</p>
        <div class="phase-window">
          <span>{{ active.periodLabel }}</span>
          <div>Planned<br />delivery window</div>
        </div>
      </div>
      <div class="phase-work" :key="`work-${active.id}`">
        <span class="eyebrow">THE WORK</span>
        <ul>
          <li v-for="task in active.tasks" :key="task">{{ task }}</li>
        </ul>
        <div class="deliverable">
          <span class="eyebrow">WHAT WE WILL DELIVER</span>
          <p>{{ active.deliverable }}</p>
        </div>
      </div>
    </div>

    <div class="timeline-notes">
      <p>
        <span>Team buffer</span>16 Dec 2026 – 5 Jan 2027<br /><small
          >Reserved for flexibility; not university holiday dates.</small
        >
      </p>
      <p>
        <span>Low-workload period</span>6 Jan – 28 Feb 2027<br /><small
          >At most one small asynchronous task per member per week; adjusted to
          availability.</small
        >
      </p>
      <p>
        <span>Submission checks</span>31 Mar – 1 Apr 2027<br /><small
          >Final report and software due 1 Apr, 15:00.</small
        >
      </p>
    </div>

    <details
      class="calendar-details"
      @toggle="showCalendar = ($event.target as HTMLDetailsElement).open"
    >
      <summary>
        View the full project calendar
        <span>{{ showCalendar ? "−" : "+" }}</span>
      </summary>
      <div
        class="calendar-scroll"
        tabindex="0"
        aria-label="Monthly project calendar, scroll horizontally on small screens"
      >
        <table>
          <caption>
            Proposed monthly schedule · cells show dates within each month
          </caption>
          <thead>
            <tr>
              <th scope="col">Development phase</th>
              <th v-for="month in months" :key="month" scope="col">
                {{ month }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="phase in phases"
              :key="phase.id"
              :class="{ 'light-calendar-row': phase.lowWorkload }"
            >
              <th scope="row">0{{ phase.id }} / {{ phase.shortTitle }}</th>
              <td v-for="(cell, index) in phase.cells" :key="index">
                <span v-if="cell" class="calendar-bar">{{ cell }}</span>
              </td>
            </tr>
            <tr class="buffer-row">
              <th scope="row">Team buffer</th>
              <td></td>
              <td></td>
              <td><span>16–31</span></td>
              <td><span>1–5</span></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Submission checks</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><span class="calendar-bar">31</span></td>
              <td><span class="calendar-bar">1</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>

    <div class="milestone-heading">
      <h3>Dates that matter.</h3>
      <p>
        Team targets & tentative course milestones · course dates subject to
        formal notices.
      </p>
    </div>
    <div class="milestones">
      <article v-for="milestone in milestones" :key="milestone.title">
        <time>{{ milestone.date }}</time>
        <h4>{{ milestone.title }}</h4>
        <p>{{ milestone.text }}</p>
      </article>
    </div>
  </div>
</template>
