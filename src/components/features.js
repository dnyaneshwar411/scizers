import { features } from '@/utils/data';
import Feature from './feature';

export default function Features() {
  return (
    <div className="bg-[#F4F9FF] pad-container py-[28px]">
      <div className="flex justify-evenly lg:justify-between">
        {features.map(feature => <Feature key={feature.id} feature={feature} />)}
      </div>
    </div>
  )
};