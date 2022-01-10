import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://chiliswap.net',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://chiliswap.net',
  },
  {
    label: 'NFT',
    icon: 'PoolIcon',
    href: 'https://chiliswap.net',
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://chiliswap.net',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Gitbook',
        href: 'https://chiliswap.net',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/Z6smT22HTT',
      },
      {
        label: 'Github',
        href: 'https://github.com',
      },
    ],
  },
]

export default config
