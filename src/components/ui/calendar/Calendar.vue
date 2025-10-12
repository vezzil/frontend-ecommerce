<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { DatePicker } from 'v-calendar';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

defineOptions({
  name: 'Calendar',
  inheritAttrs: false
});

const props = defineProps({
  modelValue: {
    type: [Date, Object, Array],
    default: null
  },
  mode: {
    type: String,
    default: 'single',
    validator: (value: string) => ['single', 'multiple', 'range'].includes(value)
  },
  class: {
    type: String,
    default: ''
  },
  showOutsideDays: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: [Boolean, Function, Array],
    default: false
  },
  minDate: {
    type: Date,
    default: undefined
  },
  maxDate: {
    type: Date,
    default: undefined
  },
  locale: {
    type: String,
    default: 'en-US'
  },
  firstDayOfWeek: {
    type: Number,
    default: 0,
    validator: (value: number) => value >= 0 && value <= 6
  },
  // Add other props as needed
});

const emit = defineEmits(['update:modelValue', 'dayclick', 'daymouseenter', 'daymouseleave']);

const attrs = useAttrs();

const date = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const attributes = ref([
  {
    key: 'today',
    highlight: {
      color: 'blue',
      fillMode: 'light',
      class: '!bg-accent !text-accent-foreground',
    },
    dates: new Date()
  }
]);
</script>

<template>
  <div :class="cn('w-full p-3', props.class)">
    <DatePicker
      v-model="date"
      :mode="mode"
      :is-required="true"
      :show-weeknumbers="false"
      :show-iso-weeknumbers="false"
      :hide-weekdays="false"
      :show-adjacent-months="showOutsideDays"
      :disabled="disabled"
      :min-date="minDate"
      :max-date="maxDate"
      :locale="locale"
      :first-day-of-week="firstDayOfWeek"
      :attributes="attributes"
      :class="cn('w-full', $attrs.class)"
      v-bind="$attrs"
      @dayclick="$emit('dayclick', $event)"
      @daymouseenter="$emit('daymouseenter', $event)"
      @daymouseleave="$emit('daymouseleave', $event)"
    >
      <template #header="{ handleMove, handleToday, title }">
        <div class="flex items-center justify-between px-1 mb-4">
          <h2 class="text-sm font-medium">{{ title }}</h2>
          <div class="flex space-x-1">
            <button
              type="button"
              :class="cn(
                buttonVariants({ variant: 'outline' }),
                'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
              )"
              @click="handleMove(-1)"
            >
              <ChevronLeft class="h-4 w-4" />
            </button>
            <button
              type="button"
              :class="cn(
                buttonVariants({ variant: 'outline' }),
                'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
              )"
              @click="handleMove(1)"
            >
              <ChevronRight class="h-4 w-4" />
            </button>
          </div>
        </div>
      </template>

      <template #day-popover="{ day, format }">
        <div class="text-xs">
          {{ format(day.date, 'MMM D, YYYY') }}
        </div>
      </template>
    </DatePicker>
  </div>
</template>

<style>
/* Custom styling to match the original design */
:root {
  --vc-day-content-hover-bg: hsl(var(--accent));
  --vc-day-content-hover-opacity: 0.1;
  --vc-day-content-selected-bg: hsl(var(--primary));
  --vc-day-content-selected-opacity: 1;
  --vc-day-content-disabled-opacity: 0.5;
  --vc-focus-ring: 0 0 0 2px hsl(var(--ring));
}

.vc-container {
  --day-width: 36px;
  --day-height: 36px;
  --week-width: calc(var(--day-width) * 7);
  border: none;
  font-family: inherit;
}

.vc-weekday {
  @apply text-muted-foreground text-xs font-normal w-9 h-9 flex items-center justify-center;
}

.vc-day {
  @apply h-9 w-9 p-0 text-sm font-normal;
}

.vc-day-content {
  @apply h-9 w-9 flex items-center justify-center rounded-md;
}

.vc-day-content:hover {
  @apply bg-accent;
}

.vc-highlight {
  @apply bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground;
}

.vc-day-content.is-disabled {
  @apply text-muted-foreground opacity-50;
}

.vc-day-content.is-not-in-month {
  @apply text-muted-foreground opacity-50;
}

.vc-day-content.is-today {
  @apply bg-accent text-accent-foreground;
}
</style>
