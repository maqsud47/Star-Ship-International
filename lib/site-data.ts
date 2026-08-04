import {
  Ship,
  FileText,
  Truck,
  Anchor,
  Plane,
  MapPin,
  Container,
  Award,
  Network,
  Boxes,
  Headset,
  ShieldCheck,
  FlaskConical,
  PackageCheck,
  TruckElectric,
  Fuel,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

/**
 * Structured, locale-independent site data (proper nouns, contact details,
 * slugs, icons). Translatable copy lives in messages/{en,bn}.json.
 */

export const SITE = {
  name: "Star Ship International",
  established: 1997,
} as const;

export const CONTACT = {
  // wa.me needs digits only.
  whatsapps: [
    { display: "+880 1716-345218", number: "8801716345218" },
    { display: "+880 1676-971355", number: "8801676971355" },
  ],
  phones: [
    { display: "+880 1716-345218", tel: "+8801716345218" },
    { display: "+880 1676-971355", tel: "+8801676971355" },
    { display: "+880 1761-200288", tel: "+8801761200288" },
  ],
  email: "starshipdhaka@gmail.com",
} as const;


export const SOCIAL = {
  facebook: "https://www.facebook.com/share/1C5qRWshcM/",
  linkedin: "https://www.linkedin.com/company/star-ship-international/",
} as const;

export const NAV_LINKS = [
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "clients", href: "/clients" },
  { key: "contact", href: "/contact" },
  { key: "roadTransport", href: "/road-transportation" },
  { key: "gallery", href: "/gallery" },
] as const;

export type ServiceItem = {
  slug: string;
  key: string;
  icon: LucideIcon;
  image: string;
};
export const SERVICES: ServiceItem[] = [
  {
    slug: "customs-clearance",
    key: "customs",
    icon: Ship,
    image: "/photos/services/customs.jpg",
  },
  {
    slug: "freight-shipping",
    key: "freight",
    icon: Anchor,
    image: "/photos/services/freight.jpg",
  },
  {
    slug: "specialized-cargo",
    key: "specialized",
    icon: FlaskConical,
    image: "/photos/services/specialized.jpg",
  },
  {
    slug: "logistics-solutions",
    key: "logistics",
    icon: Truck,
    image: "/photos/services/logistics.jpg",
  },
  {
    slug: "trade-consultancy",
    key: "consultancy",
    icon: FileText,
    image: "/photos/services/consultancy.jpg",
  },
  {
    slug: "warehouse-management",
    key: "warehouse",
    icon: Warehouse,
    image: "/photos/services/warehouse.jpg",
  },
];

export const GATEWAYS: { key: string; icon: LucideIcon; image: string }[] = [
  { key: "chittagong", icon: Anchor, image: "/photos/gallery/ctg-port.png" },
  { key: "dhaka", icon: Plane, image: "/photos/gallery/airport-cargo.jpg" },
  { key: "benapole", icon: MapPin, image: "/photos/gallery/benapole.jpg" },
  { key: "icd", icon: Container, image: "/photos/gallery/icd.jpg" },
];

export const WHY: { key: string; icon: LucideIcon }[] = [
  { key: "experience", icon: Award },
  { key: "presence", icon: Network },
  { key: "endToEnd", icon: Boxes },
  { key: "responsive", icon: Headset },
  { key: "trusted", icon: ShieldCheck },
];

/**
 * Client names, office addresses, team members, stat values and fleet
 * capacities are localized — the text lives in messages/{en,bn}.json
 * (`clients.list`, `offices.*`, `about.team`, `home.stats.items.*`,
 * `roadTransportPage.fleet.*`). Only structure/keys live here.
 */

// Number of clients rendered — must match `clients.list` in the message files.
export const CLIENT_COUNT = 9;

export const STAT_KEYS = [
  "since",
  "experience",
  "consignments",
  "support",
] as const;

export type Office = { key: string; phones: string[]; emails: string[] };
export const OFFICES: Office[] = [
  {
    key: "dhaka",
    phones: ["+880 1716-345218", "+880 1676-971355"],
    emails: ["starshipdhaka@gmail.com"],
  },
  {
    key: "chittagong",
    phones: ["+880 1761-200288"],
    emails: ["starshipintl@yahoo.com"],
  },
  {
    key: "benapole",
    phones: ["+880 1716-345218"],
    emails: [],
  },
];

// Number of team members — must match `about.team` in the message files.
export const TEAM_COUNT = 8;

// Fleet, in the order given by the client.
export const FLEET: { key: string; icon: LucideIcon; image: string }[] = [
  { key: "pickup", icon: PackageCheck, image: "/photos/fleet/pickup.jpg" },
  { key: "truck", icon: Truck, image: "/photos/fleet/truck.jpg" },
  {
    key: "containerTruck",
    icon: Container,
    image: "/photos/fleet/container-truck.jpg",
  },
  { key: "trailer", icon: TruckElectric, image: "/photos/fleet/trailer.jpg" },
  { key: "lngTanker", icon: Fuel, image: "/photos/fleet/lng-tanker.jpg" },
];

/**
 * Gallery items. To add more, drop the file in public/photos/gallery/ and add a
 * row here. `type: "video"` renders a <video> player — same folder works.
 */
export type GalleryItem = {
  src: string;
  captionKey: string;
  type?: "image" | "video";
};
export const GALLERY: GalleryItem[] = [
  { src: "/photos/gallery/ctg-port.png", captionKey: "ctgPort" },
  { src: "/photos/gallery/airport-cargo.jpg", captionKey: "airCargo" },
  { src: "/photos/gallery/icd.jpg", captionKey: "icd" },
  { src: "/photos/gallery/benapole.jpg", captionKey: "benapole" },
  { src: "/photos/truck-1.jpg", captionKey: "brandedTruck" },
  { src: "/photos/gallery/truck-3.jpg", captionKey: "loading" },
  { src: "/photos/gallery/truck-6.jpg", captionKey: "fleetLine" },
  { src: "/photos/gallery/truck-7.jpg", captionKey: "heavyLift" },
  { src: "/photos/gallery/truck-8.jpg", captionKey: "delivery" },
  { src: "/photos/team-1.jpg", captionKey: "team" },
];

/** tel: href from a display phone number. */
export function telHref(phone: string): string {
  return "tel:" + phone.replace(/[^\d+]/g, "");
}
