<script setup>
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const props = defineProps(['data', 'title'])

const isOpen = ref(false)
const selectedOption = ref(null)
const selectedLabel = computed(() => selectedOption.value ? props.data.find((n) => n.value === selectedOption.value.value).label : `Select ${props.title}`)
const onSelect = (value) => {
  selectedOption.value = value
  isOpen.value = false
}
const FilterTitle = `${props.title.charAt(0).toUpperCase()}${props.title.slice(1)}`
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger as-child>
      <div class="flex flex-col">
        <div class="text-secondary-foreground/40">{{ FilterTitle }}</div>
        <Button
          variant="outline"
          role="combobox"
          :aria-expanded="isOpen"
          class="w-[200px] justify-between"
        >
          {{ selectedLabel }}
          <Icon class="text-2xl" icon="ri:arrow-drop-down-line"/>
        </Button>
      </div>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command v-model="selectedOption">
        <CommandInput :placeholder="`Search ${title}...`" />
        <CommandEmpty>No {{ title }} found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="n in data"
              :key="n.id"
              :value="n"
              @select="onSelect(n)"
            >
              {{ n.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>