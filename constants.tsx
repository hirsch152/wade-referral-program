
import React from 'react';
import { Gift, Coffee, ShoppingBag, CreditCard, Ticket, Heart } from 'lucide-react';
import { Reward } from './types';

export const REWARDS: Reward[] = [
  {
    id: 'gift-card-amazon',
    name: 'Amazon Gift Card',
    description: 'A versatile reward for anything you might need.',
    icon: 'ShoppingBag'
  },
  {
    id: 'starbucks',
    name: 'Coffee on Me',
    description: 'Enjoy a few rounds of your favorite brew.',
    icon: 'Coffee'
  },
  {
    id: 'charity',
    name: 'Charity Donation',
    description: "I'll make a donation to a cause you care about in your name.",
    icon: 'Heart'
  },
  {
    id: 'visa',
    name: 'Visa Prepaid Card',
    description: 'Simple and flexible cash-style reward.',
    icon: 'CreditCard'
  },
  {
    id: 'custom-swag',
    name: 'Premium Swag Pack',
    description: 'Get a curated box of our best promotional products.',
    icon: 'Gift'
  },
  {
    id: 'movie-night',
    name: 'Movie Night Out',
    description: 'Tickets for two to your local cinema.',
    icon: 'Ticket'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Gift: <Gift className="w-6 h-6" />,
  Coffee: <Coffee className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
  Ticket: <Ticket className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />
};
