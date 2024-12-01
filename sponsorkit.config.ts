import { BadgePreset, defineConfig, tierPresets } from 'sponsorkit'


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
      title: 'Sponsors',          /* 0~9 */
      preset: tierPresets.xs,
    },
    {
      title: 'Bronze Sponsors',   /* 10~39 */
      monthlyDollars: 10,
      preset: tierPresets.small,
    },
    {
      title: 'Silver Sponsors',   /* 40~159 */
      monthlyDollars: 40,
      preset: tierPresets.base,
    },
    {
      title: 'Gold Sponsors',     /* 160~639 */
      monthlyDollars: 160,
      preset: tierPresets.medium,
    },
    {
      title: 'Platinum Sponsors', /* 640~2559 */
      monthlyDollars: 640,
      preset: tierPresets.large,
    },
    {
      title: 'Diamond Sponsors',  /* 2560~ */
      monthlyDollars: 2560,
      preset: tierPresets.xl,
    }
  ],

  renders: [
    {
      name: 'sponsors',
      width: 800,
      renderer: 'tiers'
    },
    {
      name: 'sponsors-wide',
      width: 1800,
      renderer: 'tiers'
    },
    {
      name: 'sponsors-part1',
      width: 800,
      renderer: 'tiers',
      filter: (sponsor) => sponsor.monthlyDollars >= 9.9
    },
    {
      name: 'sponsors-part2',
      width: 800,
      renderer: 'tiers',
      filter: (sponsor) => sponsor.monthlyDollars < 9.9 && sponsor.monthlyDollars >= 0
    },
    {
      name: 'sponsors-past',
      width: 800,
      renderer: 'tiers',
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
