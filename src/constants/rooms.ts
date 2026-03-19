import { Wifi, Coffee, Utensils, Waves, Dumbbell, Car, Users, Maximize, Tv, Wind } from 'lucide-react';

export const ROOMS = [
  {
    id: 1,
    name: 'Phòng Deluxe Hướng Biển',
    price: '2.500.000',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
    size: '45m²',
    guests: '2 Người Lớn',
    bedType: '1 Giường King',
    view: 'Hướng Biển',
    description: 'Tận hưởng tầm nhìn tuyệt đẹp ra biển Dốc Lết từ ban công riêng của bạn. Phòng được trang bị nội thất cao cấp và tiện nghi hiện đại.',
    amenities: [Wifi, Wind, Tv, Coffee]
  },
  {
    id: 2,
    name: 'Phòng Suite Cao Cấp',
    price: '3.800.000',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop',
    size: '65m²',
    guests: '3 Người Lớn',
    bedType: '1 Giường King & 1 Giường Đơn',
    view: 'Hướng Biển & Hồ Bơi',
    description: 'Không gian rộng rãi với phòng khách riêng biệt và phòng ngủ sang trọng. Lựa chọn hoàn hảo cho gia đình hoặc kỳ nghỉ dài ngày.',
    amenities: [Wifi, Wind, Tv, Coffee, Utensils]
  },
  {
    id: 3,
    name: 'Biệt Thự Tổng Thống',
    price: '8.500.000',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
    size: '120m²',
    guests: '4 Người Lớn',
    bedType: '2 Giường King',
    view: 'Toàn Cảnh Vịnh Biển',
    description: 'Đỉnh cao của sự sang trọng với hồ bơi riêng, dịch vụ quản gia 24/7 và tầm nhìn panorama toàn cảnh vịnh biển.',
    amenities: [Wifi, Wind, Tv, Coffee, Utensils, Waves]
  },
  {
    id: 4,
    name: 'Phòng Superior Garden',
    price: '1.800.000',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070&auto=format&fit=crop',
    size: '38m²',
    guests: '2 Người Lớn',
    bedType: '2 Giường Đơn',
    view: 'Hướng Sân Vườn',
    description: 'Không gian yên tĩnh với tầm nhìn ra khu vườn nhiệt đới xanh mát. Mang lại cảm giác thư thái và gần gũi với thiên nhiên.',
    amenities: [Wifi, Wind, Tv]
  },
  {
    id: 5,
    name: 'Phòng Family Connecting',
    price: '4.200.000',
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2070&auto=format&fit=crop',
    size: '80m²',
    guests: '4 Người Lớn',
    bedType: '1 Giường King & 2 Giường Đơn',
    view: 'Hướng Hồ Bơi',
    description: 'Hai phòng ngủ thông nhau lý tưởng cho gia đình có trẻ nhỏ. Đảm bảo sự riêng tư nhưng vẫn gần gũi.',
    amenities: [Wifi, Wind, Tv, Coffee]
  },
  {
    id: 6,
    name: 'Luxury Penthouse',
    price: '12.000.000',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop',
    size: '200m²',
    guests: '6 Người Lớn',
    bedType: '3 Giường King',
    view: 'Toàn Cảnh Thành Phố & Biển',
    description: 'Tọa lạc tại tầng cao nhất với sân thượng rộng lớn và bể sục Jacuzzi ngoài trời. Trải nghiệm sống thượng lưu thực thụ.',
    amenities: [Wifi, Wind, Tv, Coffee, Utensils, Waves, Dumbbell]
  }
];
