
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  thumbnail: string;
  author: string;
  date: string;
  category: string;
}

const BlogSection = () => {
  const blogs: BlogPost[] = [
    {
      id: 1,
      title: "How to Approach CA Foundation Exam Preparation",
      excerpt: "Expert tips to build a solid foundation for your CA journey with effective study strategies.",
      thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80",
      author: "CA Rahul Sharma",
      date: "April 24, 2025",
      category: "Exam Tips"
    },
    {
      id: 2,
      title: "Understanding the New CA Curriculum Changes",
      excerpt: "A detailed breakdown of the recent changes in the CA curriculum and how it affects students.",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      author: "CA Priya Patel",
      date: "April 18, 2025",
      category: "News"
    },
    {
      id: 3,
      title: "5 Common Mistakes to Avoid in CA Final Exams",
      excerpt: "Learn from experienced faculty about the pitfalls that can cost you valuable marks.",
      thumbnail: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80",
      author: "Prof. Amit Jain",
      date: "April 15, 2025",
      category: "Exam Tips"
    }
  ];

  return (
    <div className="section-padding bg-lecturewala-bg-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
          <a 
            href="/blogs" 
            className="font-medium text-lecturewala-yellow-dark hover:underline"
          >
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card 
              key={blog.id}
              className="overflow-hidden hover:shadow-lg transition-shadow h-full"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.thumbnail} 
                  alt={blog.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
                />
              </div>
              
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-lecturewala-yellow-light text-lecturewala-text text-xs py-1 px-2 rounded-full">
                    {blog.category}
                  </span>
                  <div className="flex items-center text-lecturewala-text-light text-xs">
                    <Calendar size={12} className="mr-1" />
                    {blog.date}
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-lecturewala-text-light mb-3 line-clamp-2">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center mt-2">
                  <p className="text-sm font-medium">By {blog.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
