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

        // Tạo products với ảnh từ Unsplash
        const products = await Product.create([
            // ===== 12 SẢN PHẨM GỐC =====
            {
                name: 'Áo Sơ Mi Premium',
                description: 'Áo sơ mi cao cấp từ vải cotton Ai Cập, thiết kế sang trọng, phù hợp công sở và dự tiệc',
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
                description: 'Quần tây form chuẩn, vải co giãn nhẹ, thoải mái cho cả ngày dài làm việc',
                price: 1500000,
                originalPrice: null,
                category: 'men',
                badge: null,
                image: 'https://4men.com.vn/thumbs/2022/03/quan-tay-theu-4men-premium-qt031-mau-xam-trang-20398-p.JPG',
                stock: 40,
                sold: 8,
                rating: 4.5,
                isActive: true
            },
            {
                name: 'Blazer Sang Trọng',
                description: 'Blazer cao cấp, thiết kế tối giản, dễ phối đồ, phù hợp mọi dịp',
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
                name: 'Váy Dạ Hội',
                description: 'Váy dạ hội lụa cao cấp, thiết kế thanh lịch, hoàn hảo cho các buổi tiệc',
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
                name: 'Áo Kiểu Nữ',
                description: 'Áo kiểu nữ thanh lịch, vải mềm mại, thoáng mát, phù hợp công sở',
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
                name: 'Chân Váy A',
                description: 'Chân váy form A thời trang, dễ phối đồ, phù hợp mọi vóc dáng',
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
                name: 'Túi Xách Da Thật',
                description: 'Túi xách da bò thật 100%, thủ công tinh xảo, bền đẹp theo năm tháng',
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
                name: 'Giày Tây Nam',
                description: 'Giày tây da cao cấp, đế cao su êm ái, phù hợp công sở và dự tiệc',
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
                name: 'Thắt Lưng Da',
                description: 'Thắt lưng da bò thật, khóa kim loại cao cấp, thiết kế cổ điển',
                price: 650000,
                originalPrice: 900000,
                category: 'accessories',
                badge: 'sale',
                image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rccj-ltuttto0dfqoe3',
                stock: 70,
                sold: 25,
                rating: 4.3,
                isActive: true
            },
            {
                name: 'Áo Khoác Dạ',
                description: 'Áo khoác dạ cao cấp mùa đông, giữ ấm tốt, thiết kế hiện đại',
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
                name: 'Đầm Công Sở',
                description: 'Đầm công sở thanh lịch, vải cotton cao cấp, form dáng chuẩn',
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
                name: 'Ví Da Nam',
                description: 'Ví da cao cấp nhiều ngăn, thiết kế nhỏ gọn, tiện lợi',
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

            // ===== 20 SẢN PHẨM MỚI =====
            
            // THỜI TRANG NAM (7 sản phẩm)
            {
                name: 'Áo Vest Nam Luxury',
                description: 'Áo vest nam cao cấp, vải nhập khẩu Italia, may đo tinh xảo, phù hợp doanh nhân',
                price: 4200000,
                originalPrice: null,
                category: 'men',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
                stock: 18,
                sold: 2,
                rating: 5.0,
                isActive: true
            },
            {
                name: 'Quần Jean Nam Slim Fit',
                description: 'Quần jean nam co giãn 4 chiều, form dáng chuẩn, màu xanh đậm thời trang',
                price: 890000,
                originalPrice: null,
                category: 'men',
                badge: null,
                image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
                stock: 55,
                sold: 22,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Áo Thun Nam Basic',
                description: 'Áo thun nam cotton 100%, form rộng oversize, thoải mái cho mọi hoạt động',
                price: 350000,
                originalPrice: 490000,
                category: 'men',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
                stock: 80,
                sold: 45,
                rating: 4.4,
                isActive: true
            },
            {
                name: 'Áo Hoodie Nam',
                description: 'Áo hoodie nam nỉ bông dày, ấm áp cho mùa đông, thiết kế trẻ trung',
                price: 720000,
                originalPrice: null,
                category: 'men',
                badge: null,
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
                stock: 45,
                sold: 18,
                rating: 4.7,
                isActive: true
            },
            {
                name: 'Quần Short Nam Thể Thao',
                description: 'Quần short nam vải thể thao, thoáng mát cho mùa hè, nhiều màu lựa chọn',
                price: 420000,
                originalPrice: null,
                category: 'men',
                badge: 'hot',
                image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop',
                stock: 50,
                sold: 28,
                rating: 4.5,
                isActive: true
            },
            {
                name: 'Áo Polo Nam',
                description: 'Áo polo nam cao cấp, vải pique cotton, form dáng lịch lãm',
                price: 580000,
                originalPrice: 780000,
                category: 'men',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=500&fit=crop',
                stock: 60,
                sold: 35,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Áo Len Nam',
                description: 'Áo len nam dệt kim cao cấp, giữ ấm tốt, phù hợp mùa đông',
                price: 950000,
                originalPrice: null,
                category: 'men',
                badge: 'new',
                image: 'https://namfashion.com/home/wp-content/uploads/2017/10/ao-len-tram-scoth-soda-3.jpg',
                stock: 30,
                sold: 8,
                rating: 4.8,
                isActive: true
            },

            // THỜI TRANG NỮ (8 sản phẩm)
            {
                name: 'Áo Blazer Nữ Công Sở',
                description: 'Áo blazer nữ form chuẩn, chất liệu co giãn nhẹ, thanh lịch cho công sở',
                price: 1650000,
                originalPrice: null,
                category: 'women',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=500&fit=crop',
                stock: 28,
                sold: 6,
                rating: 4.9,
                isActive: true
            },
            {
                name: 'Váy Midi Xòe',
                description: 'Váy midi xòe nhẹ nhàng, họa tiết hoa nhí, phù hợp dạo phố mùa hè',
                price: 880000,
                originalPrice: null,
                category: 'women',
                badge: null,
                image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=500&fit=crop',
                stock: 35,
                sold: 14,
                rating: 4.7,
                isActive: true
            },
            {
                name: 'Áo Sơ Mi Nữ Lụa',
                description: 'Áo sơ mi nữ chất lụa cao cấp, mềm mại sang trọng, dễ phối đồ',
                price: 950000,
                originalPrice: 1350000,
                category: 'women',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&h=500&fit=crop',
                stock: 40,
                sold: 25,
                rating: 4.8,
                isActive: true
            },
            {
                name: 'Quần Tây Nữ',
                description: 'Quần tây nữ công sở, form ôm vừa phải, vải cao cấp không nhăn',
                price: 790000,
                originalPrice: null,
                category: 'women',
                badge: null,
                image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
                stock: 42,
                sold: 19,
                rating: 4.5,
                isActive: true
            },
            {
                name: 'Đầm Maxi Hoa',
                description: 'Đầm maxi họa tiết hoa, phong cách bohemian, nhẹ nhàng thoải mái',
                price: 1250000,
                originalPrice: null,
                category: 'women',
                badge: 'hot',
                image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop',
                stock: 22,
                sold: 11,
                rating: 4.9,
                isActive: true
            },
            {
                name: 'Áo Khoác Nữ Dáng Dài',
                description: 'Áo khoác nữ dáng dài qua gối, ấm áp và thời trang cho mùa đông',
                price: 1980000,
                originalPrice: 2500000,
                category: 'women',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=500&fit=crop',
                stock: 25,
                sold: 7,
                rating: 4.8,
                isActive: true
            },
            {
                name: 'Bộ Suit Nữ',
                description: 'Bộ suit nữ 2 món gồm áo blazer và quần tây, sang trọng chuyên nghiệp',
                price: 2400000,
                originalPrice: null,
                category: 'women',
                badge: 'new',
                image: 'https://png.pngtree.com/png-vector/20250126/ourmid/pngtree-a-classic-women-s-black-business-suit-with-white-shirt-underneath-png-image_15336691.png',
                stock: 15,
                sold: 4,
                rating: 5.0,
                isActive: true
            },
            {
                name: 'Áo Len Nữ',
                description: 'Áo len nữ dáng rộng, thoải mái ấm áp, phù hợp mùa đông',
                price: 680000,
                originalPrice: null,
                category: 'women',
                badge: null,
                image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&h=500&fit=crop',
                stock: 50,
                sold: 23,
                rating: 4.6,
                isActive: true
            },

            // PHỤ KIỆN (5 sản phẩm)
            {
                name: 'Giày Sneaker Unisex',
                description: 'Giày sneaker phong cách thể thao năng động, phù hợp cả nam và nữ',
                price: 1350000,
                originalPrice: null,
                category: 'accessories',
                badge: 'hot',
                image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
                stock: 48,
                sold: 32,
                rating: 4.7,
                isActive: true
            },
            {
                name: 'Kính Mát Nam',
                description: 'Kính mát nam chống tia UV 100%, gọng kim loại cao cấp, phong cách hiện đại',
                price: 850000,
                originalPrice: 1200000,
                category: 'accessories',
                badge: 'sale',
                image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop',
                stock: 35,
                sold: 18,
                rating: 4.5,
                isActive: true
            },
            {
                name: 'Khăn Choàng Lụa',
                description: 'Khăn choàng lụa tơ tằm cao cấp, họa tiết tinh tế, sang trọng',
                price: 520000,
                originalPrice: null,
                category: 'accessories',
                badge: null,
                image: 'https://www.thoitrangtichtac.com/productimgs/D/E/5x/558/Khan_choang_lua_cao_cap_tong_xanh_co_vit_e558_2.jpg',
                stock: 45,
                sold: 21,
                rating: 4.6,
                isActive: true
            },
            {
                name: 'Ba Lô Laptop',
                description: 'Ba lô đựng laptop 15 inch, nhiều ngăn tiện dụng, chống thấm nước',
                price: 950000,
                originalPrice: null,
                category: 'accessories',
                badge: 'new',
                image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
                stock: 30,
                sold: 12,
                rating: 4.8,
                isActive: true
            },
            {
                name: 'Găng Tay Da',
                description: 'Găng tay da cao cấp, giữ ấm mùa đông, thiết kế thanh lịch',
                price: 450000,
                originalPrice: 650000,
                category: 'accessories',
                badge: 'sale',
                image: 'https://tse2.mm.bing.net/th/id/OIP.yGwHhtReG85a2zJFsOJVIgHaHa?pid=Api&P=0&h=220',
                stock: 40,
                sold: 16,
                rating: 4.4,
                isActive: true
            }
        ]);

        console.log('✅ Đã thêm products mẫu với ảnh');
        console.log(`📸 Đã thêm ${products.length} sản phẩm với ảnh từ Unsplash`);
        console.log('\n🎉 Seed data thành công!\n');
        console.log('📊 Thống kê sản phẩm:');
        console.log(`   - Nam: ${products.filter(p => p.category === 'men').length} sản phẩm`);
        console.log(`   - Nữ: ${products.filter(p => p.category === 'women').length} sản phẩm`);
        console.log(`   - Phụ kiện: ${products.filter(p => p.category === 'accessories').length} sản phẩm`);
        console.log('\n📝 Thông tin đăng nhập:');
        console.log('👤 Admin: admin@elite.com / 123456');
        console.log('👤 User: user@elite.com / 123456\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Lỗi:', error);
        process.exit(1);
    }
};

seedData();