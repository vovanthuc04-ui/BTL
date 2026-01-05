require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const connectDB = require('./config/db');

// Connect to DB
connectDB();

const seedData = async () => {
    try {
        // Xóa dữ liệu cũ
        await User.deleteMany({});
        await Product.deleteMany({});
        console.log('✅ Đã xóa dữ liệu cũ');

        // Tạo users
        const users = await User.create([
            {
                name: 'Admin User',
                email: 'admin@elite.com',
                password: '123456',
                role: 'admin'
            },
            {
                name: 'Test User',
                email: 'user@elite.com',
                password: '123456',
                role: 'user'
            }
        ]);
        console.log('✅ Đã thêm users mẫu');

        // ========== 42 SẢN PHẨM - PHÂN BỐ ĐỀU ==========
        // Men: 14 sản phẩm
        // Women: 14 sản phẩm  
        // Accessories: 14 sản phẩm
        
        const products = await Product.create([
            // ==================== THỜI TRANG NAM (14 sản phẩm) ====================
            {
                name: 'Áo Sơ Mi Premium',
                description: 'Áo sơ mi cao cấp từ vải cotton Ai Cập, thiết kế sang trọng, phù hợp công sở và dự tiệc. Form slim fit ôm dáng, đường may tỉ mỉ.',
                price: 1200000,
                originalPrice: null,
                category: 'men',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop',
                stock: 50,
                sold: 5,
                rating: 4.8,
                isActive: true
            },
            {
                name: 'Quần Tây Lịch Lãm',
                description: 'Quần tây form chuẩn, vải co giãn nhẹ, thoải mái cho cả ngày dài làm việc. Kiểu dáng hiện đại, dễ phối đồ.',
                price: 1500000,
                originalPrice: null,
                category: 'men',
                badge: null,
                image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=500&h=500&fit=crop',
                stock: 40,
                sold: 8,
                rating: 4.5,
                isActive: true
            },
            {
                name: 'Blazer Sang Trọng',
                description: 'Blazer cao cấp, thiết kế tối giản, dễ phối đồ, phù hợp mọi dịp. Chất liệu wool blend cao cấp.',
                price: 2500000,
                originalPrice: 3500000,
                category: 'men',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=500&fit=crop',
                stock: 30,
                sold: 12,
                rating: 5.0,
                isActive: true
            },
            {
                name: 'Áo Khoác Dạ Mùa Đông',
                description: 'Áo khoác dạ cao cấp mùa đông, giữ ấm tốt, thiết kế hiện đại. Lớp lót lông cừu mềm mại.',
                price: 3500000,
                originalPrice: null,
                category: 'men',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
                stock: 15,
                sold: 4,
                rating: 4.9,
                isActive: true
            },
            {
                name: 'Áo Polo Nam Classic',
                description: 'Áo polo chất liệu pique cotton cao cấp, thoáng khí, không nhăn. Thiết kế logo thêu tinh tế.',
                price: 650000,
                originalPrice: null,
                category: 'men',
                badge: null,
                image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop',
                stock: 60,
                sold: 22,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Áo Thun Cotton Cao Cấp',
                description: 'Áo thun cotton Ai Cập 100%, mềm mại, co giãn tốt. Form regular fit thoải mái, nhiều màu sắc.',
                price: 350000,
                originalPrice: 500000,
                category: 'men',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
                stock: 80,
                sold: 35,
                rating: 4.4,
                isActive: true
            },
            {
                name: 'Quần Jean Nam Slim Fit',
                description: 'Quần jean cao cấp, vải denim Nhật Bản, độ bền cao. Form slim fit năng động, hiện đại.',
                price: 1250000,
                originalPrice: null,
                category: 'men',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
                stock: 45,
                sold: 18,
                rating: 4.7,
                isActive: true
            },
            {
                name: 'Áo Vest 3 Mảnh Premium',
                description: 'Bộ vest 3 mảnh cao cấp cho doanh nhân. Chất liệu wool Ý, may đo chuẩn form người Việt.',
                price: 5500000,
                originalPrice: null,
                category: 'men',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
                stock: 10,
                sold: 3,
                rating: 5.0,
                isActive: true
            },
            {
                name: 'Áo Sơ Mi Kẻ Sọc',
                description: 'Áo sơ mi kẻ sọc thanh lịch, vải cotton thoáng mát. Thiết kế tay dài, phù hợp công sở.',
                price: 850000,
                originalPrice: null,
                category: 'men',
                badge: null,
                image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
                stock: 55,
                sold: 15,
                rating: 4.5,
                isActive: true
            },
            {
                name: 'Áo Khoác Bomber Jacket',
                description: 'Áo khoác bomber phong cách streetwear, chất liệu nylon bền đẹp. Thiết kế trẻ trung, năng động.',
                price: 1450000,
                originalPrice: 1850000,
                category: 'men',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop',
                stock: 35,
                sold: 20,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Quần Short Kaki Nam',
                description: 'Quần short kaki cao cấp, vải cotton thoáng mát. Form regular fit thoải mái cho mùa hè.',
                price: 550000,
                originalPrice: null,
                category: 'men',
                badge: null,
                image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop',
                stock: 70,
                sold: 28,
                rating: 4.3,
                isActive: true
            },
            {
                name: 'Áo Hoodie Premium',
                description: 'Áo hoodie chất liệu nỉ ngoại cao cấp, giữ ấm tốt. Thiết kế unisex, phong cách streetwear.',
                price: 950000,
                originalPrice: null,
                category: 'men',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
                stock: 50,
                sold: 25,
                rating: 4.7,
                isActive: true
            },
            {
                name: 'Quần Jogger Thể Thao',
                description: 'Quần jogger thể thao co giãn 4 chiều, thoáng khí. Thiết kế năng động, phù hợp tập gym.',
                price: 650000,
                originalPrice: 850000,
                category: 'men',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&h=500&fit=crop',
                stock: 65,
                sold: 32,
                rating: 4.4,
                isActive: true
            },
            {
                name: 'Áo Cardigan Len Cao Cấp',
                description: 'Áo cardigan len merino cao cấp, mềm mại, giữ ấm tốt. Phong cách lịch lãm, sang trọng.',
                price: 1850000,
                originalPrice: null,
                category: 'men',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&h=500&fit=crop',
                stock: 30,
                sold: 12,
                rating: 4.8,
                isActive: true
            },

            // ==================== THỜI TRANG NỮ (14 sản phẩm) ====================
            {
                name: 'Váy Dạ Hội Sang Trọng',
                description: 'Váy dạ hội lụa cao cấp, thiết kế thanh lịch, hoàn hảo cho các buổi tiệc. Đính kết thủ công tinh xảo.',
                price: 3200000,
                originalPrice: null,
                category: 'women',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop',
                stock: 25,
                sold: 3,
                rating: 4.9,
                isActive: true
            },
            {
                name: 'Áo Kiểu Nữ Công Sở',
                description: 'Áo kiểu nữ thanh lịch, vải mềm mại, thoáng mát, phù hợp công sở. Thiết kế cổ V tôn dáng.',
                price: 980000,
                originalPrice: null,
                category: 'women',
                badge: null,
                image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=500&h=500&fit=crop',
                stock: 60,
                sold: 15,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Chân Váy A Xòe',
                description: 'Chân váy form A thời trang, dễ phối đồ, phù hợp mọi vóc dáng. Chất liệu vải xòe nhẹ nhàng.',
                price: 850000,
                originalPrice: 1200000,
                category: 'women',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=500&fit=crop',
                stock: 45,
                sold: 20,
                rating: 4.7,
                isActive: true
            },
            {
                name: 'Đầm Công Sở Thanh Lịch',
                description: 'Đầm công sở thanh lịch, vải cotton cao cấp, form dáng chuẩn. Thiết kế dài qua gối sang trọng.',
                price: 1200000,
                originalPrice: null,
                category: 'women',
                badge: null,
                image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop',
                stock: 40,
                sold: 18,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Áo Blazer Nữ Cao Cấp',
                description: 'Áo blazer nữ may đo tinh tế, chất liệu cao cấp. Phù hợp cho nữ doanh nhân hiện đại.',
                price: 2200000,
                originalPrice: null,
                category: 'women',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=500&fit=crop',
                stock: 30,
                sold: 8,
                rating: 4.8,
                isActive: true
            },
            {
                name: 'Quần Jean Nữ Skinny',
                description: 'Quần jean nữ ôm dáng, co giãn tốt, tôn vóc dáng. Chất liệu denim cao cấp, bền màu.',
                price: 950000,
                originalPrice: 1350000,
                category: 'women',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop',
                stock: 50,
                sold: 25,
                rating: 4.5,
                isActive: true
            },
            {
                name: 'Váy Maxi Hoa Mùa Hè',
                description: 'Váy maxi họa tiết hoa nhẹ nhàng, vải voan mát mẻ. Thiết kế bay bổng, nữ tính.',
                price: 1150000,
                originalPrice: null,
                category: 'women',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1572878787852-81c297ec60d7?w=500&h=500&fit=crop',
                stock: 35,
                sold: 12,
                rating: 4.7,
                isActive: true
            },
            {
                name: 'Áo Len Nữ Cao Cổ',
                description: 'Áo len cao cổ ấm áp, chất liệu cashmere blend. Phong cách Hàn Quốc trẻ trung.',
                price: 1350000,
                originalPrice: null,
                category: 'women',
                badge: null,
                image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop',
                stock: 40,
                sold: 15,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Đầm Dự Tiệc Cocktail',
                description: 'Đầm dự tiệc ngắn thiết kế trẻ trung, hiện đại. Chất liệu satin lụa cao cấp.',
                price: 2450000,
                originalPrice: 3200000,
                category: 'women',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=500&fit=crop',
                stock: 20,
                sold: 6,
                rating: 4.8,
                isActive: true
            },
            {
                name: 'Set Đồ Nữ 2 Món',
                description: 'Set đồ áo và chân váy phối đồ sẵn, tiện lợi. Thiết kế hiện đại, trẻ trung.',
                price: 1650000,
                originalPrice: null,
                category: 'women',
                badge: 'new',
                image: 'https://lamia.com.vn/storage/chan-vay-quan/set-vest-nu-cong-so-le158-mau-nau-2.jpg',
                stock: 30,
                sold: 10,
                rating: 4.7,
                isActive: true
            },
            {
                name: 'Áo Sơ Mi Nữ Lụa',
                description: 'Áo sơ mi lụa tơ tằm cao cấp, mềm mại sang trọng. Form oversized thời thượng.',
                price: 1250000,
                originalPrice: null,
                category: 'women',
                badge: null,
                image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500&h=500&fit=crop',
                stock: 45,
                sold: 18,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Quần Âu Nữ Ống Suông',
                description: 'Quần âu nữ ống suông thanh lịch, vải co giãn nhẹ. Phù hợp môi trường công sở.',
                price: 850000,
                originalPrice: 1150000,
                category: 'women',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&h=500&fit=crop',
                stock: 50,
                sold: 22,
                rating: 4.5,
                isActive: true
            },
            {
                name: 'Váy Tennis Phối Viền',
                description: 'Váy tennis thể thao năng động, phối viền tương phản. Chất liệu thấm hút mồ hôi tốt.',
                price: 650000,
                originalPrice: null,
                category: 'women',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&h=500&fit=crop',
                stock: 55,
                sold: 28,
                rating: 4.4,
                isActive: true
            },
            {
                name: 'Áo Croptop Nữ Tính',
                description: 'Áo croptop thiết kế trẻ trung, phối cùng quần high waist. Chất liệu cotton co giãn.',
                price: 450000,
                originalPrice: 650000,
                category: 'women',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
                stock: 70,
                sold: 35,
                rating: 4.3,
                isActive: true
            },

            // ==================== PHỤ KIỆN (14 sản phẩm) ====================
            {
                name: 'Túi Xách Da Thật Cao Cấp',
                description: 'Túi xách da bò thật 100%, thủ công tinh xảo, bền đẹp theo năm tháng. Nhiều ngăn tiện lợi.',
                price: 2800000,
                originalPrice: null,
                category: 'accessories',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop',
                stock: 20,
                sold: 7,
                rating: 5.0,
                isActive: true
            },
            {
                name: 'Giày Tây Nam Công Sở',
                description: 'Giày tây da cao cấp, đế cao su êm ái, phù hợp công sở và dự tiệc. Kiểu dáng Oxford cổ điển.',
                price: 1600000,
                originalPrice: null,
                category: 'accessories',
                badge: null,
                image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&h=500&fit=crop',
                stock: 35,
                sold: 10,
                rating: 4.4,
                isActive: true
            },
            {
                name: 'Thắt Lưng Da Bò',
                description: 'Thắt lưng da bò thật, khóa kim loại cao cấp, thiết kế cổ điển. Độ bền cao, không bong tróc.',
                price: 650000,
                originalPrice: 900000,
                category: 'accessories',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
                stock: 70,
                sold: 25,
                rating: 4.3,
                isActive: true
            },
            {
                name: 'Ví Da Nam Cao Cấp',
                description: 'Ví da cao cấp nhiều ngăn, thiết kế nhỏ gọn, tiện lợi. Khâu tay thủ công tinh xảo.',
                price: 450000,
                originalPrice: 650000,
                category: 'accessories',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
                stock: 80,
                sold: 30,
                rating: 4.5,
                isActive: true
            },
            {
                name: 'Kính Mát Nam Thời Trang',
                description: 'Kính mát UV400 bảo vệ mắt tốt, gọng kim loại cao cấp. Phong cách hiện đại, lịch lãm.',
                price: 850000,
                originalPrice: null,
                category: 'accessories',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop',
                stock: 40,
                sold: 15,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Đồng Hồ Nam Automatic',
                description: 'Đồng hồ cơ automatic Nhật Bản, dây da thật. Thiết kế sang trọng, chính xác cao.',
                price: 3500000,
                originalPrice: null,
                category: 'accessories',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=500&fit=crop',
                stock: 15,
                sold: 5,
                rating: 4.9,
                isActive: true
            },
            {
                name: 'Balo Da Nam Công Sở',
                description: 'Balo da cao cấp đựng laptop 15.6 inch, nhiều ngăn tiện lợi. Thiết kế chuyên nghiệp.',
                price: 1850000,
                originalPrice: 2500000,
                category: 'accessories',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
                stock: 30,
                sold: 12,
                rating: 4.7,
                isActive: true
            },
            {
                name: 'Cà Vạt Lụa Cao Cấp',
                description: 'Cà vạt lụa tơ tằm 100%, nhiều họa tiết sang trọng. Phù hợp doanh nhân và sự kiện quan trọng.',
                price: 350000,
                originalPrice: null,
                category: 'accessories',
                badge: null,
                image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=500&fit=crop',
                stock: 60,
                sold: 22,
                rating: 4.5,
                isActive: true
            },
            {
                name: 'Giày Sneaker Unisex',
                description: 'Giày sneaker phong cách thể thao, đế êm ái thoải mái. Thiết kế unisex hiện đại.',
                price: 1250000,
                originalPrice: null,
                category: 'accessories',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
                stock: 50,
                sold: 28,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Túi Đeo Chéo Mini Nữ',
                description: 'Túi đeo chéo mini thời trang, nhỏ gọn tiện lợi. Da PU cao cấp, nhiều màu sắc.',
                price: 550000,
                originalPrice: 750000,
                category: 'accessories',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&h=500&fit=crop',
                stock: 65,
                sold: 35,
                rating: 4.4,
                isActive: true
            },
            {
                name: 'Mũ Lưỡi Trai Thêu Logo',
                description: 'Mũ lưỡi trai vải cotton cao cấp, thêu logo tinh tế. Điều chỉnh size linh hoạt.',
                price: 250000,
                originalPrice: null,
                category: 'accessories',
                badge: null,
                image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop',
                stock: 90,
                sold: 40,
                rating: 4.3,
                isActive: true
            },
            {
                name: 'Khăn Choàng Lụa Nữ',
                description: 'Khăn choàng lụa tơ tằm cao cấp, họa tiết hoa nghệ thuật. Mềm mại, nhẹ nhàng.',
                price: 450000,
                originalPrice: null,
                category: 'accessories',
                badge: 'new',
                image: 'https://product.hstatic.net/1000111569/product/khan_quang_choang_co_ks220__3__0102a62fbd054f0bb7dc4effdc2f0aa1.jpg',
                stock: 45,
                sold: 18,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Vòng Tay Da Phối Kim Loại',
                description: 'Vòng tay da thật phối kim loại inox 316L. Phong cách nam tính, cá tính.',
                price: 350000,
                originalPrice: 500000,
                category: 'accessories',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop',
                stock: 55,
                sold: 25,
                rating: 4.4,
                isActive: true
            },
        ]);

        console.log('✅ Đã thêm products mẫu với ảnh');
        console.log(`📸 Đã thêm ${products.length} sản phẩm với ảnh từ Unsplash`);
        console.log('\n🎉 Seed data thành công!\n');
        console.log('📝 Thông tin đăng nhập:');
        console.log('👤 Admin: admin@elite.com / 123456');
        console.log('👤 User: user@elite.com / 123456\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Lỗi:', error);
        process.exit(1);
    }
};

seedData();