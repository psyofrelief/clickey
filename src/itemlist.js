import { v4 as uuidv4 } from "uuid";

const itemlist = [
  {
    /* Switches */
    // Gateron
    name: "Gateron Pro 2.0 Yellow Linear Switches",
    brand: "Gateron",
    type: "Linear",
    price: "8",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/1_352b7174-6474-4ba8-9646-7ce318e99b07_460x.jpg?v=1659086154",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Gateron Pro Pre-Lubed Silver Linear Switches",
    brand: "Gateron",
    type: "Linear",
    price: "9",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/1_64bddc87-15ae-4627-a057-4757e5940505_460x.jpg?v=1653368590",
    id: uuidv4(),
    featured: true,
    quantity: 1,
  },
  {
    name: "Gateron Pro 2.0 Red Linear Switches",
    brand: "Gateron",
    type: "Linear",
    price: "8",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/2_04a18c99-4009-457a-a7a7-d83533f9a25f_460x.jpg?v=1660196517",
    id: uuidv4(),
    featured: true,
    quantity: 1,
  },
  {
    name: "Gateron Blizzard Tactile Switches",
    brand: "Gateron",
    type: "Tactile",
    price: "6",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/b8421501ceee8ed8defa49d79fc692df_d2938f86-6288-4e4e-bc7b-ba70fc8fd97a_460x.jpg?v=1646017129",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Gateron Box Cj Linear Switches",
    brand: "Gateron",
    type: "Linear",
    price: "21",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/lQDPDhsshBty7FnNB9DNB9CwUZy7fcR_-MECGZu3PICaAA_2000_2000_460x.jpg?v=1645509654",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Gateron Box CJ Linear Switches",
    brand: "Gateron",
    type: "Linear",
    price: "18",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/lQDPDhsshBty7FnNB9DNB9CwUZy7fcR_-MECGZu3PICaAA_2000_2000_460x.jpg?v=1645509654",
    id: uuidv4(),
    quantity: 1,
    featured: true,
  },
  // Cherry
  {
    name: "Cherry MX Ergo Clear Tactile Switches",
    brand: "Cherry",
    type: "Tactile",
    price: "7",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/1_ba6c1fe1-bc5b-474e-a729-f79e1c1b4489_460x.jpg?v=1673254274",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Cherry RGB Blue Tactile Switches",
    brand: "Cherry",
    type: "Tactile",
    price: "4",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/RGB_1_513c37df-8d29-4124-8de3-f477041b6c1f_460x.jpg?v=1651652387",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Cherry MX Hyperglide Green Tactile Switches",
    brand: "Cherry",
    type: "Tactile",
    price: "3",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/1_8c0f0a5c-f548-4612-800b-2c6d613a283e_460x.jpg?v=1646026824",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Cherry RGB Silver Linear Switches",
    brand: "Cherry",
    type: "Linear",
    price: "6",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/RGB_3_b377aeaf-d3ff-4709-af64-3a75ffb97fbb_460x.jpg?v=1651652843",
    id: uuidv4(),
    quantity: 1,
  },
  // Kailh
  {
    name: "Kailh Box Crystal Royal Tactile Switches",
    brand: "Kailh",
    type: "Tactile",
    price: "6",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/1_5baca162-14b4-4508-9c21-36eb1b478153_460x.jpg?v=1652660968",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Kailh Box Fried Egg Silent Linear Switches",
    brand: "Kailh",
    type: "Linear",
    price: "9",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/2_b44d50d9-bad1-4aa0-8ca7-cf1901ae1932_460x.jpg?v=1644996332",
    id: uuidv4(),
    quantity: 1,
  },
  // Zeal
  {
    name: "Zeal Roselios Silent Linear Switches",
    brand: "Zeal",
    type: "Linear",
    price: "12",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/2_16ffcb1e-bf66-4459-a709-4ffaca7d44aa_460x.jpg?v=1648615873",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Zeal Zilents V2 Tactile Switches",
    brand: "Zeal",
    type: "Tactile",
    price: "13",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/1_f9f1d00b-b1bc-4162-8460-b83b40432eee_460x.jpg?v=1650872104",
    id: uuidv4(),
    featured: true,
    quantity: 1,
  },
  // TTC
  {
    name: "TTC NCR-V2 Linear Switches",
    brand: "TTC",
    type: "Linear",
    price: "7",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/1_2c6f15de-6510-4679-ac52-86375e0fe11f_460x.jpg?v=1650607772",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "TTC Upgraded Gold Pink Linear Switches",
    brand: "TTC",
    type: "Linear",
    price: "5",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/5_117c3790-f8ab-4fd9-81b8-85ee74742a19_460x.jpg?v=1650614263",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "TTC Golden Red V3 Linear Switches",
    brand: "TTC",
    type: "Linear",
    price: "5",
    image:
      "https://cdn.shopify.com/s/files/1/1473/3902/products/1_6e2d5339-eb22-4ef8-bead-60f81f78ce8b_460x.jpg?v=1614072983",
    id: uuidv4(),
    featured: true,
    quantity: 1,
  },
  /* Keycaps */
  {
    name: "Hazard Custom Keycaps",
    price: "95",
    image: "https://keyper.au/wp-content/uploads/hazard-custom-keycaps-1.jpg",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Kaiju Custom Keycaps",
    price: "90",
    image: "https://keyper.au/wp-content/uploads/kaiju-custom-keycaps.jpg",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Crimson Custom Keycaps",
    price: "85",
    image: "https://keyper.au/wp-content/uploads/crimson-custom-keycaps.jpg",
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "SNES Custom Keycaps",
    price: "90",
    image: "https://keyper.au/wp-content/uploads/NES-custom-keycaps.jpg",
    id: uuidv4(),
    quantity: 1,
  },
];

export default itemlist;
