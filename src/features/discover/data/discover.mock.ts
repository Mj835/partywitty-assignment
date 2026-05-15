import type { PartyProfile, VerificationStep } from '@/features/discover/types'
import ZoeImage from '@/assets/discover-zoe.png'
import ProfileAvatar from '@/assets/profile-avatar.png'

export const selectedProfile = {
  name: 'Zoe Miller',
  age: 22,
  mutuals: '4 Mutual Mates',
  image: ZoeImage,
  badge: 'Matches your vibe',
  tags: ['Bollywood Nights', 'Chill Crowd', 'Party Regular'],
} satisfies PartyProfile

export const discoverProfiles = [
  selectedProfile,
  {
    name: 'Zoya Khan',
    age: 24,
    mutuals: '7 Mutual Mates',
    image: ProfileAvatar,
    badge: 'Going tonight',
    tags: ['Rooftop Vibes', 'Live Music', 'Cocktail Fan'],
  },
  {
    name: 'Maya Arora',
    age: 23,
    mutuals: '3 Mutual Mates',
    image: ZoeImage,
    badge: 'Nearby match',
    tags: ['Dance Floor', 'Weekend Plans', 'Social Mixer'],
  },
] satisfies PartyProfile[]

export const verificationHowItWorksSteps = [
  {
    title: 'Spot Your Person',
    description: "Pick someone you'd genuinely enjoy going out with.",
  },
  {
    title: 'Send a Drink',
    description: "Offer their first drink your way of saying let's go out.",
  },
  {
    title: "They Accept -> You're Set",
    description: "Once accepted, it's a confirmed plan. No endless chatting.",
  },
] satisfies VerificationStep[]

export const verificationBenefits = [
  'Get noticed faster',
  'Higher chances your invite gets accepted',
  'Unlock drink invites & premium interactions',
  'Build trust with every profile visit',
] as const
