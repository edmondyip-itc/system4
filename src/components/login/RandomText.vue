<script setup>
const text = () => {
  const texts = [
    'By becoming an Appointed Representative of ITC Compliance, you will benefit from a whole host of unique benefits and remove uncertainty from FCA regulation.',
    'Unlike the vast majority of consultancy firms out there, ITC only preaches what they practice. Meaning that every manual, audit, system or control introduced to clients meet the same rigorous standards as used by ITCs own Network members, where ITC assumes full regulatory accountability.',
    'Of all the activities undertaken by motor dealers, getting it wrong with motor insurance may very well prove to be the most costly. Thats why ITC developed Licence Check.',
    'Unique to ITC is APEX Deal File. This innovative piece of software is exactly what it says; its a Deal File but no paper in sight. APEX Deal File is a smarter electronic equivalent.',
    'When a member of your team asks a customer to send them some information, maybe a proof of income or identity, how is that sensitive data handled?'
  ]
  const random = Math.floor(Math.random() * texts.length)
  return texts[random]
}
</script>

<template>
  <div class="randomText">
    {{ text() }}
  </div>
</template>

<style lang="scss">
  .randomText {
    background: rgba(0,0,0,0.4);
    color: #fff;
    padding: 1rem;
    backdrop-filter: blur(2px);
    border-radius: var(--radius);
  }
</style>