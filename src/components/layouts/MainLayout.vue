<script setup>
import { computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useLogin } from '@/stores/login'
import PageHeader from '@/components/layouts/PageHeader.vue'
import SideBar from './SideBar.vue'

const store = useLogin()
const router = useRouter()
const isLogin = computed(() => store.loginState)
watchEffect(() => {
  if(!isLogin.value) {
    router.push({ name: 'login' })
  }
})
</script>

<template>
  <div id="layout" v-if="!isLogin" class="h-screen bg-primary">
    <main>
      <slot>
      </slot>
    </main>
  </div>
  <div id="layout" class="dashboard h-screen z-0" v-else>
    <SideBar class="row-span-4" />
    <div class="h-[500px] overflow-hidden fixed w-full -z-10">
      <svg width="100%" id="svg" viewBox="0 0 1440 390" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,60 C 53.209206458261775,58.87255238749571 106.41841291652355,57.74510477499142 184,57 C 261.58158708347645,56.25489522500858 363.53555479216766,55.89213328753005 432,53 C 500.46444520783234,50.10786671246995 535.4393679148059,44.686362074888365 602,53 C 668.5606320851941,61.313637925111635 766.7069735486086,83.36241841291653 844,79 C 921.2930264513914,74.63758158708347 977.7327378907592,43.86396427344555 1033,43 C 1088.2672621092408,42.13603572655445 1142.3620748883545,71.18172449330127 1210,79 C 1277.6379251116455,86.81827550669873 1358.8189625558227,73.40913775334937 1440,60 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,140 C 52.463071109584334,139.53555479216766 104.92614221916867,139.0711095843353 179,137 C 253.07385778083133,134.9288904156647 348.7585022329097,131.2511164548265 425,129 C 501.2414977670903,126.7488835451735 558.0398488491926,125.92442459635865 630,132 C 701.9601511508074,138.07557540364135 789.0821023703195,151.0511851597389 852,150 C 914.9178976296805,148.9488148402611 953.6317416695294,133.8708347646857 1016,126 C 1078.3682583304706,118.12916523531432 1164.390930951563,117.46547578151838 1239,121 C 1313.609069048437,124.53452421848162 1376.8045345242185,132.26726210924082 1440,140 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,220 C 79.7265544486431,212.8381999312951 159.4531088972862,205.6763998625902 218,201 C 276.5468911027138,196.3236001374098 313.9141188594984,194.1326004809344 375,192 C 436.0858811405016,189.8673995190656 520.8904156647201,187.79319821367224 605,194 C 689.1095843352799,200.20680178632776 772.5242184816216,214.69460666437652 847,228 C 921.4757815183784,241.30539333562348 987.0127104087942,253.4283751288217 1045,248 C 1102.9872895912058,242.5716248711783 1153.4249398832017,219.59189282033668 1218,212 C 1282.5750601167983,204.40810717966332 1361.2875300583992,212.20405358983166 1440,220 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,300 C 63.18996908278942,314.9721745104775 126.37993816557884,329.944349020955 198,320 C 269.62006183442116,310.055650979045 349.6702164204741,275.19477842665754 428,270 C 506.3297835795259,264.80522157334246 582.9391961525249,289.27653727241494 651,295 C 719.0608038474751,300.72346272758506 778.5729989694262,287.6990724836826 833,282 C 887.4270010305738,276.3009275163174 936.7688079697698,277.9271727928547 1012,284 C 1087.2311920302302,290.0728272071453 1188.3517691514944,300.59223634489865 1264,304 C 1339.6482308485056,307.40776365510135 1389.8241154242528,303.7038818275507 1440,300 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3" transform="rotate(-180 720 200)"></path></svg>
    </div>
    <main>
      <PageHeader />
      <slot></slot>
    </main>
  </div>
</template>

<style lang="scss">
#layout {
  &.dashboard {
    @apply grid grid-cols-[200px_minmax(500px,_1fr)] grid-rows-[60px_minmax(500px,_1fr)];
  }
}
</style>