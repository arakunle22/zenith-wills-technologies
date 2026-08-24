import {
  Sun,
  Cctv,
  MapPin,
  PhoneCall,
  Network,
  ShieldCheck,
  Clock3,
  MessageCircle,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { IconName } from "@/config/site";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const serviceIconMap: Record<IconName, IconComponent> = {
  sun: Sun,
  cctv: Cctv,
  "map-pin": MapPin,
  "phone-call": PhoneCall,
  network: Network,
};

export const whyIcons = {
  shield: ShieldCheck,
  pin: MapPin,
  clock: Clock3,
  message: MessageCircle,
} as const;
