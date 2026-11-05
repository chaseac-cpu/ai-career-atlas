<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import jobs from '../../data/jobs.json'

const query = ref('')
const level = ref('all')
const labels: Record<string, string> = { internships: 'Internship / co-op', 'entry-level': 'Entry / early career', 'mid-level': 'Mid level', senior: 'Senior / staff' }
const results = computed(() => jobs.filter(job =>
  (level.value === 'all' || job.group === level.value) &&
  [job.employer, job.title, job.location, job.required, job.preferred, job.work,
    job.eligibility, job.basis, job.note, job.flag].join(' ').toLowerCase().includes(query.value.trim().toLowerCase())
))
function reset() { query.value = ''; level.value = 'all' }
</script>

<template>
  <section class="job-finder" aria-label="Find researched job examples">
    <div class="job-controls">
      <label>Search examples
        <input v-model="query" type="search" placeholder="Employer, title, skill, or location" />
      </label>
      <label>Career stage
        <select v-model="level">
          <option value="all">All stages</option>
          <option v-for="(label, value) in labels" :key="value" :value="value">{{ label }}</option>
        </select>
      </label>
      <button type="button" @click="reset">Reset</button>
    </div>
    <p role="status" aria-live="polite">{{ results.length }} of {{ jobs.length }} researched examples · Checked November 5, 2026</p>
    <ul class="job-results">
      <li v-for="job in results" :key="job.id">
        <span class="job-stage">{{ labels[job.group] }}</span>
        <a :href="withBase(`/opportunities/${job.group}.html#${job.id}`)">{{ job.title }}</a>
        <span>{{ job.employer }} · {{ job.location }}</span>
        <strong v-if="job.flag" class="job-flag">{{ job.flag }}</strong>
      </li>
    </ul>
    <p v-if="!results.length">No matching examples. Try a broader term or reset the filters.</p>
  </section>
</template>

<style scoped>
.job-finder{margin:28px 0}.job-controls{display:flex;flex-wrap:wrap;align-items:end;gap:14px}.job-controls label{display:grid;gap:6px;font-size:13px;font-weight:600;flex:1 1 200px}.job-controls input,.job-controls select{border:1px solid var(--vp-c-divider);border-radius:8px;background:var(--vp-c-bg);padding:10px 12px;color:var(--vp-c-text-1);width:100%;font:inherit}.job-controls button{border:1px solid var(--vp-c-divider);padding:10px 16px;border-radius:8px;background:var(--vp-c-bg-soft)}.job-controls :is(input,select,button):focus-visible{outline:2px solid var(--vp-c-brand-1);outline-offset:3px}.job-results{list-style:none!important;padding:0!important;display:grid;gap:12px}.job-results li{display:grid;gap:5px;padding:18px 20px;border:1px solid var(--vp-c-divider);border-radius:12px;margin:0!important}.job-results a{font-weight:600;line-height:1.5}.job-results span{font-size:13px;color:var(--vp-c-text-2)}.job-results .job-stage{color:var(--vp-c-brand-1);font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:.07em}.job-flag{font-size:12px;color:var(--vp-c-warning-1)}
</style>
