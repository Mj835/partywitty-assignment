import type { PartyPackageEvent } from '@/features/party-packages/types'
import CircleAvatar from '@/assets/circle-avatar.png'
import ProfileAvatar from '@/assets/profile-avatar.png'
import FBarBlue from '@/assets/event-fbar-blue.png'
import FBarFireworks from '@/assets/event-fbar-fireworks.png'
import FBarSparklers from '@/assets/event-fbar-sparklers.png'
import ZoyaAvatar from '@/assets/mini-avatar-zoya.png'

const circleAvatars = [
  CircleAvatar,
  ProfileAvatar,
  ProfileAvatar,
]

export const partyPackageEvents = [
  {
    id: 'fbar-blue',
    clubType: 'Prism Nightclub',
    title: 'F-Bar',
    image: FBarBlue,
    day: 'Friday',
    time: '10:00 PM onwards',
    status: 'Happening now',
    matchLabel: 'Vibe Matches',
    venue: 'Nocturne Rooftop',
    location: 'Sector 38, Entertainment City',
    distance: '13 km',
    discount: '36% OFF F&B',
    socialProof: 'Zoya has been here twice',
    socialProofAvatar: ZoyaAvatar,
    rating: 4.1,
    circleAvatars,
    circleCount: '22+',
  },
  {
    id: 'fbar-fireworks',
    clubType: 'Prism Nightclub',
    title: 'F-Bar',
    image: FBarFireworks,
    day: 'Friday',
    time: '10:00 PM onwards',
    status: 'Happening now',
    matchLabel: 'Vibe Matches',
    venue: 'Nocturne Rooftop',
    location: 'Sector 38, Entertainment City',
    distance: '13 km',
    discount: '36% OFF F&B',
    socialProof: 'Zoya has been here twice',
    socialProofAvatar: ZoyaAvatar,
    rating: 4.1,
    circleAvatars,
    circleCount: '22+',
  },
  {
    id: 'fbar-sparklers',
    clubType: 'Prism Nightclub',
    title: 'F-Bar',
    image: FBarSparklers,
    day: 'Friday',
    time: '10:00 PM onwards',
    status: 'Happening now',
    matchLabel: 'Vibe Matches',
    venue: 'Nocturne Rooftop',
    location: 'Sector 38, Entertainment City',
    distance: '13 km',
    discount: '36% OFF F&B',
    socialProof: 'Zoya has been here twice',
    socialProofAvatar: ZoyaAvatar,
    rating: 4.1,
    circleAvatars,
    circleCount: '22+',
  },
] satisfies PartyPackageEvent[]
