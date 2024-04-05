// Trong file mienbac.js
import React from "react";
import Slideshow from '@/components/slideshow';
import Contactform from "@/components/contactform/Contactform";
import TourPage from "@/components/schedule/TourPage";

const MienBac = () => {
    return (
        <div style={{ display: "flex", flexDirection: 'column' , gap: '5rem'}}>
            <div style={{ display: "flex", gap: '10rem'}}>
                <div style={{ flex: 1, height: '300px', position: 'relative'}}>
                    <Slideshow/>
                </div>
                
                <div style={{ flex: 1 , marginTop: '20px'}}>
                    <Contactform />
                </div>
                
            </div>
            
            <div style={{ display: "flex", flexDirection: "row",justifyContent: 'space-around'}}>
                <div>
                    <TourPage />
                </div>

                <div style={{marginLeft: '10px'}} >
                    {/* Mô tả script */}
                    <h3 style={{marginBottom: '20px'}}>
                        Trải nghiệm dịch vụ đẳng cấp thế giới ở The Shells Resort & Spa Phu Quoc
                    </h3>
                    <p style={{lineHeight: '1.6'}}>
                        Nằm dọc theo bờ biển của thị trấn Dương Đông,
                        <b>
                             “The Shells Resort & Spa Phu Quoc” 
                            </b>
                        có hồ bơi ngoài trời, trung tâm thể dục và khu vực bãi biển riêng. 
                        <br/>
                        Resort này cung cấp dịch vụ lễ tân 24 giờ, chỗ đỗ xe riêng miễn phí và WiFi miễn phí trong toàn bộ khuôn viên.
Chợ Dương Đông nằm trong bán kính 4 km từ chỗ nghỉ này.
Phòng nghỉ lắp máy điều hòa tại đây có ban công riêng, sàn lát gạch, tủ để quần áo, khu vực ghế ngồi, két an toàn và truyền hình cáp màn hình phẳng. Ấm đun nước điện và minibar cũng được trang bị trong phòng.
        <br/>
 Tất cả các phòng đều nhìn ra biển và được bố trí phòng tắm riêng với bồn tắm, tiện nghi vòi sen cùng đồ vệ sinh cá nhân miễn phí.
  <br/>
Khách lưu trú tại <b>“The Shells Resort & Spa Phu Quoc” </b> có thể sử dụng phòng xông hơi khô hoặc tận hưởng dịch vụ mát-xa thư giãn tại spa. 
Dịch vụ giặt là và sắp xếp tour du lịch có thể được cung cấp theo yêu cầu. Chỗ nghỉ cũng có tiện nghi tổ chức hội họp và sự kiện.
Tại nhà hàng, du khách sẽ được phục vụ một loạt món ăn ngon của Việt Nam. 
Các bữa ăn cũng có thể được phục vụ trong sự riêng tư ngay tại phòng nghỉ của khách.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MienBac;
