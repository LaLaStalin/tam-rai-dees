import React from "react";
import { Icon } from "@iconify/react";

export const MenuIngredient = [
  {
    name: "เนื้อสัตว์",
    icon: <Icon icon="noto:cut-of-meat" />,
    keyword: "Meat",
  },
  {
    name: "อาหารทะเล",
    icon: <Icon icon="noto:crab" />,
    keyword: "Sea",
  },
  {
    name: "พืชผัก",
    icon: <Icon icon="noto:broccoli" />,
    keyword: "Vet",
  },
  {
    name: "ผลไม้",
    icon: <Icon icon="noto:grapes" />,
    keyword: "Fruit",
  },
  {
    name: "ไข่ นม เนย ชีส",
    icon: <Icon icon="noto:cheese-wedge" />,
    keyword: "Egg",
  },
  {
    name: "ผลิตภัณฑ์แปรรูปแช่เย็น",
    icon: <Icon icon="noto:ice" />,
    keyword: "Frozen",
  },
  {
    name: "ผลัตภัณฑ์เนื้อสัตว์แปรรูป",
    icon: <Icon icon="emojione:bacon" />,
    keyword: "Transform",
  },
  {
    name: "อาหารแห้ง",
    icon: <Icon icon="emojione:bread" />,
    keyword: "Dry",
  },
];

// IM เนื้อสัตว์
export const materialMeat = [
  { id: 1, name: "ไก่", src: "./images/ingredients/meat/ไก่.png" },
  { id: 2, name: "เป็ด", src: "./images/ingredients/meat/เป็ด.png" },
  { id: 3, name: "แกะ", src: "./images/ingredients/meat/แกะ.png" },
  { id: 4, name: "เนื้อ", src: "./images/ingredients/meat/วัว.png" },
  { id: 5, name: "หมู", src: "./images/ingredients/meat/หมู.png" },
  { id: 6, name: "กบ", src: "./images/ingredients/meat/กบ.png" },
  { id: 7, name: "จระเข้", src: "./images/ingredients/meat/จระเข้.png" },
];

// IS อาหารทะเล
export const materialSea = [
  { id: 8, name: "กุ้ง", src: "./images/ingredients/sea/กุ้ง.jpg" },
  { id: 9, name: "ปลา", src: "./images/ingredients/sea/ปลาสด.png" },
  { id: 10, name: "ปู", src: "./images/ingredients/sea/ปู.png" },
  { id: 11, name: "หอย", src: "./images/ingredients/sea/หอย.png" },
  { id: 12, name: "กั้ง", src: "./images/ingredients/sea/กั้ง.png" },
  { id: 13, name: "หมึก", src: "./images/ingredients/sea/หมึก.png" },
];

// IV พืชผัก
export const materialVegetable = [
  { id: 14, name: "แครอท", src: "./images/ingredients/vegetable/แครอท.png" },
  {
    id: 15,
    name: "บล็อคโคลี่",
    src: "./images/ingredients/vegetable/บล็อคโคลี่.png",
  },
  {
    id: 16,
    name: "ถั่วฝักยาว",
    src: "./images/ingredients/vegetable/ถั่วฝักยาว.png",
  },
  { id: 17, name: "คะน้า", src: "./images/ingredients/vegetable/คะน้า.png" },
  {
    id: 18,
    name: "กะหล่ำปลี",
    src: "./images/ingredients/vegetable/กะหล่ำปลี.png",
  },
  { id: 19, name: "ชะอม", src: "./images/ingredients/vegetable/ชะอม.png" },
  {
    id: 20,
    name: "หน่อไม้ฝรั่ง",
    src: "./images/ingredients/vegetable/หน่อไม้ฝรั่ง.png",
  },
  {
    id: 21,
    name: "มะเขือเทศ",
    src: "./images/ingredients/vegetable/มะเขือเทศ.png",
  },
  {
    id: 22,
    name: "ผัดกาดขาว",
    src: "./images/ingredients/vegetable/ผัดกาดขาว.png",
  },
  { id: 23, name: "แตงกวา", src: "./images/ingredients/vegetable/แตงกวา.png" },
  {
    id: 24,
    name: "ผักบุ้ง",
    src: "./images/ingredients/vegetable/ผักบุ้ง.png",
  },
  {
    id: 25,
    name: "ใบกระเพรา",
    src: "./images/ingredients/vegetable/ใบกระเพรา.png",
  },
  {
    id: 26,
    name: "ใบโหระพา",
    src: "./images/ingredients/vegetable/ใบโหระพา.png",
  },
  {
    id: 27,
    name: "ผักกวางตุ้ง",
    src: "./images/ingredients/vegetable/ผักกวางตุ้ง.png",
  },
  { id: 28, name: "ตำลึง", src: "./images/ingredients/vegetable/ตำลึง.png" },
  { id: 29, name: "ฟักทอง", src: "./images/ingredients/vegetable/ฟักทอง.png" },
  {
    id: 30,
    name: "มะระขี้นก",
    src: "./images/ingredients/vegetable/มะระขี้นก.png",
  },
  {
    id: 31,
    name: "ใบชะพลู",
    src: "./images/ingredients/vegetable/ใบชะพลู.png",
  },
  {
    id: 32,
    name: "ถั่วงอก",
    src: "./images/ingredients/vegetable/ถั่วงอก.png",
  },
  { id: 33, name: "ตะไคร้", src: "./images/ingredients/vegetable/ตะไคร้.png" },
  {
    id: 34,
    name: "มันสำปะหลัง",
    src: "./images/ingredients/vegetable/มันสำปะหลัง.png",
  },
  {
    id: 102,
    name: "พริกหวาน",
    src: "./images/ingredients/vegetable/พริกหวาน.png",
  },
  {
    id: 103,
    name: "กระเทียม",
    src: "./images/ingredients/vegetable/กระเทียม.png",
  },
  {
    id: 104,
    name: "หอมหัวใหญ่",
    src: "./images/ingredients/vegetable/หอมหัวใหญ่.png",
  },
  {
    id: 105,
    name: "เคล",
    src: "./images/ingredients/vegetable/เคล.png",
  },
  {
    id: 106,
    name: "ดอกกะหล่ำ",
    src: "./images/ingredients/vegetable/ดอกกะหล่ำ.png",
  },
  {
    id: 107,
    name: "เห็ด",
    src: "./images/ingredients/vegetable/เห็ด.png",
  },
  {
    id: 108,
    name: "พริก",
    src: "./images/ingredients/vegetable/พริก.png",
  },
];

// IF ผลไม้
export const materialFruit = [
  { id: 35, name: "ส้ม", src: "./images/ingredients/fruit/ส้ม.png" },
  { id: 36, name: "กล้วย", src: "./images/ingredients/fruit/กล้วย.png" },
  { id: 37, name: "แอปเปิ้ล", src: "./images/ingredients/fruit/แอปเปิ้ล.png" },
  { id: 38, name: "องุ่น", src: "./images/ingredients/fruit/องุ่น.png" },
  { id: 39, name: "สับปะรด", src: "./images/ingredients/fruit/สับปะรด.png" },
  {
    id: 40,
    name: "แก้วมังกร",
    src: "./images/ingredients/fruit/แก้วมังกร.png",
  },
  { id: 41, name: "กีวี่", src: "./images/ingredients/fruit/กีวี่.png" },
  { id: 42, name: "แตงโม", src: "./images/ingredients/fruit/แตงโม.png" },
  { id: 43, name: "มะม่วง", src: "./images/ingredients/fruit/มะม่วง.png" },
  { id: 44, name: "แคนตาลูป", src: "./images/ingredients/fruit/แคนตาลูป.png" },
  { id: 45, name: "มังคุด", src: "./images/ingredients/fruit/มังคุด.png" },
  { id: 46, name: "เชอร์รี่", src: "./images/ingredients/fruit/เชอร์รี่.png" },
  { id: 47, name: "กระท้อน", src: "./images/ingredients/fruit/กระท้อน.png" },
  {
    id: 48,
    name: "กระเจี๊ยบแดง",
    src: "./images/ingredients/fruit/กระเจี๊ยบแดง.png",
  },
];

// IE ไข่ นม เนย ชีส
export const materialEggMilkButterCheese = [
  { id: 49, name: "ไข่ไก่", src: "./images/ingredients/egg/ไข่ไก่.png" },
  { id: 50, name: "ไข่เป็ด", src: "./images/ingredients/egg/ไข่เป็ด.png" },
  { id: 51, name: "นม", src: "./images/ingredients/egg/นม.jpeg" },
  { id: 52, name: "โยเกิร์ต", src: "./images/ingredients/egg/โยเกิร์ต.png" },
  { id: 53, name: "วิปครีม", src: "./images/ingredients/egg/วิปครีม.png" },
  { id: 54, name: "ชีส", src: "./images/ingredients/egg/ชีส.png" },
  { id: 55, name: "เนย", src: "./images/ingredients/egg/เนย.png" },
  {
    id: 56,
    name: "ไข่เยี่ยวม้า",
    src: "./images/ingredients/egg/ไข่เยี่ยวม้า.png",
  },
  {
    id: 109,
    name: "ไข่นกกระทา",
    src: "./images/ingredients/egg/ไข่นกกระทา.png",
  },
];

// IC ผลิตภัณฑ์แปรรูปแช่เย็น
export const materialFrozen = [
  { id: 57, name: "เต้าหู้", src: "./images/ingredients/frozen/เต้าหู้.png" },
  {
    id: 58,
    name: "กิมจิ/ผักดอง",
    src: "./images/ingredients/frozen/กิมจิ.png",
  },
  { id: 59, name: "วาซาบิ", src: "./images/ingredients/frozen/วาซาบิ.png" },
  { id: 60, name: "ต๊อกบกกี", src: "./images/ingredients/frozen/ต๊อกบกกี.png" },
  { id: 61, name: "ไข่ปลา", src: "./images/ingredients/frozen/ไข่ปลา.png" },
  { id: 62, name: "ไข่กุ้ง", src: "./images/ingredients/frozen/ไข่กุ้ง.png" },
];

// IW ผลัตภัณฑ์เนื้อสัตว์แปรรูป
export const materialMeatTransform = [
  { id: 63, name: "แฮม", src: "./images/ingredients/transform/แฮม.png" },
  {
    id: 64,
    name: "ไส้กรอก",
    src: "./images/ingredients/transform/ไส้กรอก.png",
  },
  { id: 65, name: "เบคอน", src: "./images/ingredients/transform/เบคอน.png" },
  {
    id: 66,
    name: "ลูกชิ้น",
    src: "./images/ingredients/transform/ลูกชิ้น.png",
  },
  { id: 67, name: "แหนม", src: "./images/ingredients/transform/แหนม.png" },
  {
    id: 68,
    name: "หมูหยอง",
    src: "./images/ingredients/transform/หมูหยอง.png",
  },
  {
    id: 69,
    name: "ไก่หยอง",
    src: "./images/ingredients/transform/ไก่หยอง.png",
  },
  {
    id: 70,
    name: "กุนเชียง",
    src: "./images/ingredients/transform/กุนเชียง.png",
  },
  { id: 71, name: "แคปหมู", src: "./images/ingredients/transform/แคปหมู.png" },
  {
    id: 72,
    name: "เต้าหู้ปลา",
    src: "./images/ingredients/transform/เต้าหู้ปลา.png",
  },
  {
    id: 73,
    name: "กุ้งแห้ง",
    src: "./images/ingredients/transform/กุ้งแห้ง.png",
  },
  {
    id: 74,
    name: "ปลากรอบ",
    src: "./images/ingredients/transform/ปลากรอบ.png",
  },
  {
    id: 75,
    name: "กากหมู",
    src: "./images/ingredients/transform/กากหมู.png",
  },
  {
    id: 76,
    name: "หมูแผ่น",
    src: "./images/ingredients/transform/หมูแผ่น.png",
  },
];

// ID อาหารแห้ง
export const materialDry = [
  { id: 77, name: "ข้าว", src: "./images/ingredients/dry/ข้าว.png" },
  {
    id: 78,
    name: "น้ำพริกแห้ง",
    src: "./images/ingredients/dry/น้ำพริกแห้ง.png",
  },
  { id: 79, name: "เส้น", src: "./images/ingredients/dry/เส้น.png" },
  { id: 80, name: "ถั่ว/ธัญพืช", src: "./images/ingredients/dry/ถั่ว.png" },
  {
    id: 81,
    name: "บะหมี่กึ่งสำเร็จรูป",
    src: "./images/ingredients/dry/บะหมี่กึ่งสำเร็จรูป.png",
  },
  { id: 82, name: "ซีเรียล", src: "./images/ingredients/dry/ซีเรียล.png" },
  {
    id: 83,
    name: "เครื่องปรุง",
    src: "./images/ingredients/dry/เครื่องปรุง.png",
  },
  { id: 84, name: "แป้ง", src: "./images/ingredients/dry/แป้ง.png" },
  {
    id: 85,
    name: "เครื่องดื่มผงสำเร็จรูป",
    src: "./images/ingredients/dry/เครื่องดื่มผงสำเร็จรูป.png",
  },
  { id: 86, name: "ขนมปัง", src: "./images/ingredients/dry/ขนมปัง.png" },
  {
    id: 87,
    name: "ขนมขบเคี้ยว",
    src: "./images/ingredients/dry/ขนมขบเคี้ยว.png",
  },
  {
    id: 88,
    name: "อาหารกระป๋อง",
    src: "./images/ingredients/dry/อาหารกระป๋อง.png",
  },
  {
    id: 89,
    name: "ผลไม้อบแห้ง",
    src: "./images/ingredients/dry/ผลไม้อบแห้ง.png",
  },
  {
    id: 90,
    name: "อาหารทะเลแห้ง",
    src: "./images/ingredients/dry/อาหารทะเลแห้ง.png",
  },
  { id: 91, name: "น้ำมันพืช", src: "./images/ingredients/dry/น้ำมันพืช.png" },
  {
    id: 92,
    name: "น้ำมันมะกอก",
    src: "./images/ingredients/dry/น้ำมันมะกอก.png",
  },
  { id: 93, name: "ผักอบแห้ง", src: "./images/ingredients/dry/ผักอบแห้ง.png" },
  { id: 110, name: "โซดา", src: "./images/ingredients/dry/โซดา.png" },
  { id: 111, name: "ไวน์ขาว", src: "./images/ingredients/dry/ไวน์ขาว.png" },
  { id: 112, name: "น้ำตาล", src: "./images/ingredients/dry/น้ำตาล.png" },
];

// C วิธีการ
export const CookingTechniques = [
  { id: 94, name: "ผัด", keyword: "Stir Fried" },
  { id: 95, name: "ปิ้งย่าง", keyword: "Grilled" },
  { id: 96, name: "แกง", keyword: "Soup" },
  { id: 97, name: "นึ่ง", keyword: "Steamed" },
  { id: 98, name: "ทอด", keyword: "Deep Fried" },
  { id: 99, name: "ยำ", keyword: "Salads" },
  { id: 100, name: "ต้ม", keyword: "Boiled" },
  { id: 101, name: "อบ", keyword: "Baking" },
];
