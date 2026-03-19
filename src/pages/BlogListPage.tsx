import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, MessageSquare, Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants/blog';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const BlogListPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { name: 'Sức Khỏe', count: 12 },
    { name: 'Du Lịch', count: 8 },
    { name: 'Ẩm Thực', count: 15 },
    { name: 'Thiết Kế', count: 5 },
    { name: 'Tin Tức', count: 20 },
  ];

  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Blog Hero"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.4em] text-sm font-semibold mb-4 block"
          >
            Tin Tức & Sự Kiện
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif leading-tight"
          >
            Blog Của Chúng Tôi
          </motion.h1>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Blog List */}
            <div className="lg:w-2/3">
              <div className="grid gap-16">
                {BLOG_POSTS.map((post, index) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${post.id}`} className="relative aspect-[16/9] overflow-hidden mb-8 block">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 left-6 bg-gold text-white text-[10px] uppercase tracking-widest px-4 py-2 font-bold">
                        {post.category}
                      </div>
                    </Link>

                    <div className="flex flex-wrap items-center gap-6 text-stone-400 text-[10px] uppercase tracking-widest font-bold mb-4">
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

                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 group-hover:text-gold transition-colors leading-tight">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>

                    <Link to={`/blog/${post.id}`}>
                      <p className="text-stone-500 leading-relaxed mb-8 text-lg">
                        {post.excerpt}
                      </p>
                    </Link>

                    <Link 
                      to={`/blog/${post.id}`} 
                      className="inline-flex items-center gap-3 text-stone-900 hover:text-gold transition-colors uppercase tracking-widest text-xs font-bold border-b border-stone-200 pb-2 group"
                    >
                      Đọc Thêm <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-20 flex items-center justify-center gap-4">
                <button className="w-12 h-12 flex items-center justify-center bg-stone-900 text-white font-bold text-sm">1</button>
                <button className="w-12 h-12 flex items-center justify-center border border-stone-200 text-stone-900 font-bold text-sm hover:bg-stone-900 hover:text-white transition-colors">2</button>
                <button className="w-12 h-12 flex items-center justify-center border border-stone-200 text-stone-900 font-bold text-sm hover:bg-stone-900 hover:text-white transition-colors">3</button>
                <button className="w-12 h-12 flex items-center justify-center border border-stone-200 text-stone-900 font-bold text-sm hover:bg-stone-900 hover:text-white transition-colors">
                  <ChevronRight size={18} />
                </button>
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
                    {recentPosts.map((post) => (
                      <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-4 group">
                        <div className="w-20 h-20 shrink-0 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-serif text-stone-900 group-hover:text-gold transition-colors line-clamp-2 mb-2">
                            {post.title}
                          </h4>
                          <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{post.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Widget */}
                <div className="bg-stone-900 p-8 text-white text-center">
                  <h3 className="text-xl font-serif mb-4">Đăng Ký Nhận Tin</h3>
                  <p className="text-stone-400 text-sm mb-6">Nhận những cập nhật mới nhất và ưu đãi đặc biệt trực tiếp vào email của bạn.</p>
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Email của bạn" 
                      className="w-full bg-white/10 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-white"
                    />
                    <button className="w-full bg-gold text-white py-3 uppercase tracking-widest text-xs font-bold hover:bg-gold-dark transition-colors duration-300">
                      Đăng Ký Ngay
                    </button>
                  </form>
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
