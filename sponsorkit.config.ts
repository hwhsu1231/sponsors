import { BadgePreset, defineConfig, presets } from 'sponsorkit'


const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
}

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      }
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 40,
      preset: presets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 160,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 640,
      preset: presets.xl,
    }
  ]
})