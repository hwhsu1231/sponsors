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
  providers: [
    'patreon',
    'afdian',
  ],
  afdian: {
    exechangeRate: 4,
  },

  outputDir: 'static',
  formats: [ 'json', 'svg', 'png' ],

  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: 'Sponsors',
      preset: presets.xs,
    },
    {
      title: 'Bronze Sponsors',
      monthlyDollars: 10,
      preset: presets.small,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 40,
      preset: presets.base,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 160,
      preset: presets.medium,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 640,
      preset: presets.large,
    },
    {
      title: 'Diamond Sponsors',
      monthlyDollars: 2560,
      preset: presets.xl,
    }
  ],

  renders: [
    {
      name: 'sponsors',
      width: 800
    },
    {
      name: 'sponsors-wide',
      width: 1800
    },
    {
      name: 'sponsors-part1',
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars >= 9.9
    },
    {
      name: 'sponsors-part2',
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars < 9.9 && sponsor.monthlyDollars >= 0
    },
    {
      name: 'sponsors-past',
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars < 0
    },
    {
      name: 'sponsors-circles',
      width: 1000,
      includePastSponsors: true,
      renderer: 'circles',
      circles: {
        radiusPast: 3
      }
    }
  ]
})
