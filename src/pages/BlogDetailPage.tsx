import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Calendar, User, MessageSquare, ArrowLeft, 
  Facebook, Twitter, Instagram, Search,
  ChevronRight, Quote
} from 'lucide-react';
import { BLOG_POSTS } from '../constants/blog';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4 text-stone-900">Không tìm thấy bài viết</h1>
          <Link to="/blog" className="text-gold hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Quay lại danh sách bài viết
          </Link>
        </div>
      </div>
    );
  }

  const recentPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);
  const categories = [
    { name: 'Sức Khỏe', count: 12 },
    { name: 'Du Lịch', count: 8 },
    { name: 'Ẩm Thực', count: 15 },
    { name: 'Thiết Kế', count: 5 },
    { name: 'Tin Tức', count: 20 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-gold text-white text-[10px] uppercase tracking-widest px-4 py-2 font-bold mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8">{post.title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-[10px] uppercase tracking-widest font-bold">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-gold" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={14} className="text-gold" />
                <span>{post.comments} Bình luận</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Article Content */}
            <div className="lg:w-2/3">
              <div className="mb-12">
                <p className="text-stone-600 text-xl leading-relaxed mb-8 font-serif italic">
                  "{post.excerpt}"
                </p>
                
                <div className="prose prose-stone prose-lg max-w-none text-stone-600 leading-relaxed">
                  <p className="mb-6">
                    Chào mừng bạn đến với Blue Ocean Hotel, nơi mỗi khoảnh khắc đều được chăm chút để mang lại trải nghiệm nghỉ dưỡng tuyệt vời nhất. 
                    Trong bài viết hôm nay, chúng tôi xin chia sẻ sâu hơn về chủ đề "{post.title}", một phần trong nỗ lực không ngừng của chúng tôi 
                    để kết nối và mang lại giá trị cho quý khách hàng.
                  </p>
                  
                  <h3 className="text-2xl font-serif text-stone-900 mt-12 mb-6">Trải Nghiệm Đích Thực Tại Dốc Lết</h3>
                  <p className="mb-6">
                    Tọa lạc tại vị trí đắc địa bên bờ biển Dốc Lết thơ mộng, Blue Ocean Hotel không chỉ là một nơi để ở, mà còn là một điểm đến 
                    để khám phá. Chúng tôi tin rằng du lịch không chỉ là việc di chuyển từ nơi này sang nơi khác, mà là việc tạo ra những 
                    kỷ niệm đáng nhớ thông qua sự thấu hiểu và phục vụ tận tâm.
                  </p>

                  <div className="my-12 p-10 bg-stone-50 border-l-4 border-gold relative">
                    <Quote className="absolute top-6 right-6 text-stone-200" size={60} />
                    <p className="text-xl font-serif text-stone-800 italic relative z-10">
                      "Sự sang trọng thực sự không nằm ở những gì bạn nhìn thấy, mà ở cảm giác bạn nhận được khi được chăm sóc bởi những người thực sự quan tâm đến bạn."
                    </p>
                    <cite className="block mt-4 text-stone-500 font-bold uppercase tracking-widest text-xs">— Bếp Trưởng Điều Hành</cite>
                  </div>

                  <p className="mb-6">
                    Chúng tôi luôn nỗ lực để mang đến những dịch vụ tốt nhất, từ hệ thống phòng nghỉ sang trọng, ẩm thực tinh tế cho đến 
                    các liệu pháp spa thư giãn. Mỗi chi tiết nhỏ đều được chúng tôi chú trọng để đảm bảo sự hài lòng tuyệt đối của quý khách.
                  </p>

                  <h3 className="text-2xl font-serif text-stone-900 mt-12 mb-6">Tại Sao Nên Chọn Blue Ocean?</h3>
                  <ul className="list-none space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                      <span>Vị trí sát biển với bãi cát trắng mịn và làn nước trong xanh.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                      <span>Dịch vụ khách hàng chuyên nghiệp, thân thiện và chu đáo.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                      <span>Tiện nghi hiện đại đạt tiêu chuẩn quốc tế.</span>
                    </li>
                  </ul>
                </div>

                {/* Tags & Share */}
                <div className="mt-16 pt-8 border-t border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mr-2 self-center">Tags:</span>
                    {['Resort', 'Travel', 'Luxury', 'Beach'].map(tag => (
                      <Link key={tag} to="#" className="px-4 py-1 bg-stone-50 text-stone-600 text-[10px] uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-colors">
                        #{tag}
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Chia sẻ:</span>
                    <div className="flex gap-4">
                      <a href="#" className="text-stone-400 hover:text-gold transition-colors"><Facebook size={18} /></a>
                      <a href="#" className="text-stone-400 hover:text-gold transition-colors"><Twitter size={18} /></a>
                      <a href="#" className="text-stone-400 hover:text-gold transition-colors"><Instagram size={18} /></a>
                    </div>
                  </div>
                </div>

                {/* Author Box */}
                <div className="mt-16 p-10 bg-stone-50 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-stone-900 mb-2">{post.author}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4">
                      Chuyên gia nội dung tại Blue Ocean Hotel. Đam mê du lịch, ẩm thực và những trải nghiệm nghỉ dưỡng sang trọng. 
                      Luôn mong muốn chia sẻ những câu chuyện truyền cảm hứng đến mọi người.
                    </p>
                    <Link to="#" className="text-gold text-xs uppercase tracking-widest font-bold hover:underline">Xem tất cả bài viết</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-12">
                
                {/* Search Widget */}
                <div className="bg-stone-50 p-8 border border-stone-100">
                  <h3 className="text-xl font-serif text-stone-900 mb-6 pb-4 border-b border-stone-200">Tìm Kiếm</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Nhập từ khóa..." 
                      className="w-full bg-white border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors pr-12"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-gold transition-colors">
                      <Search size={18} />
                    </button>
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="bg-stone-50 p-8 border border-stone-100">
                  <h3 className="text-xl font-serif text-stone-900 mb-6 pb-4 border-b border-stone-200">Chuyên Mục</h3>
                  <ul className="space-y-4">
                    {categories.map((cat) => (
                      <li key={cat.name}>
                        <Link to="#" className="flex items-center justify-between text-stone-600 hover:text-gold transition-colors group">
                          <span className="text-sm font-medium uppercase tracking-widest">{cat.name}</span>
                          <span className="text-xs text-stone-400 group-hover:text-gold">({cat.count})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts Widget */}
                <div className="bg-stone-50 p-8 border border-stone-100">
                  <h3 className="text-xl font-serif text-stone-900 mb-6 pb-4 border-b border-stone-200">Bài Viết Gần Đây</h3>
                  <div className="space-y-6">
                    {recentPosts.map((r) => (
                      <Link key={r.id} to={`/blog/${r.id}`} className="flex gap-4 group">
                        <div className="w-20 h-20 shrink-0 overflow-hidden">
                          <img 
                            src={r.image} 
                            alt={r.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-serif text-stone-900 group-hover:text-gold transition-colors line-clamp-2 mb-2">
                            {r.title}
                          </h4>
                          <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{r.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
