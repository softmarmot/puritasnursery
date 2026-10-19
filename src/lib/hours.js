import { business, hours } from './site.js';

const toMinutes = (t) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

export function formatTime(t) {
  const [h, m] = t.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const h12 = h % 12 || 12;
  return m ? `${h12}:${String(m).padStart(2, '0')} ${suffix}` : `${h12} ${suffix}`;
}

export const formatRange = (h) => (h.open ? `${formatTime(h.open)} – ${formatTime(h.close)}` : 'Closed');

// Weekday and minutes since midnight at the nursery, wherever the visitor is.
function nurseryNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: business.timeZone,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23'
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type).value;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

export function openStatus(date) {
  const { day, minutes } = nurseryNow(date);
  const today = hours[day];
  if (today.open && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    return { day, open: true, label: `Open now until ${formatTime(today.close)}` };
  }
  if (today.open && minutes < toMinutes(today.open)) {
    return { day, open: false, label: `Closed now · opens at ${formatTime(today.open)}` };
  }
  for (let i = 1; i <= 7; i++) {
    const next = hours[(day + i) % 7];
    if (next.open) {
      const when = i === 1 ? 'tomorrow' : next.day;
      return { day, open: false, label: `Closed now · opens ${when} at ${formatTime(next.open)}` };
    }
  }
  return { day, open: false, label: 'Closed' };
}

// Rows for the hours table, with weekdays that share hours grouped together.
export function groupedHours() {
  const order = [1, 2, 3, 4, 5, 6, 0];
  const groups = [];
  for (const i of order) {
    const h = hours[i];
    const last = groups.at(-1);
    if (last && last.open === h.open && last.close === h.close) {
      last.days.push(i);
    } else {
      groups.push({ days: [i], open: h.open, close: h.close });
    }
  }
  return groups.map((g) => ({
    ...g,
    label:
      g.days.length === 1
        ? hours[g.days[0]].day
        : `${hours[g.days[0]].day} – ${hours[g.days.at(-1)].day}`,
    range: formatRange(g)
  }));
}
