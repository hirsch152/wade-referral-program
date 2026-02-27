
import React, { useState } from 'react';
import { REWARDS, ICON_MAP } from '../constants';
import { Check } from 'lucide-react';

interface RewardSelectorProps {
  onSelect?: (rewardId: string) => void;
}

export const RewardSelector: React.FC<RewardSelectorProps> = ({ onSelect }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelected(id);
    if (onSelect) onSelect(id);
  };

  return (
    <div id="rewards" className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REWARDS.map((reward) => (
          <div 
            key={reward.id}
            onClick={() => handleSelect(reward.id)}
            className={`
              cursor-pointer p-6 rounded-3xl transition-all duration-300 transform hover:-translate-y-1
              ${selected === reward.id 
                ? 'bg-white border-2 border-[#a81255] shadow-2xl scale-[1.02]' 
                : 'bg-white border border-gray-100 hover:border-pink-200 shadow-lg hover:shadow-xl'}
            `}
          >
            <div className={`
              w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors
              ${selected === reward.id ? 'bg-[#a81255] text-white' : 'bg-pink-50 text-[#a81255]'}
            `}>
              {ICON_MAP[reward.icon]}
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-lg text-slate-800">{reward.name}</h4>
              {selected === reward.id && (
                <div className="bg-[#a81255] text-white rounded-full p-1">
                  <Check className="w-3 h-3" />
                </div>
              )}
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed">
              {reward.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
