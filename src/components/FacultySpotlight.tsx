
import { Card, CardContent } from "@/components/ui/card";

interface FacultyMember {
  id: number;
  name: string;
  image: string;
  subject: string;
  bio: string;
  experience: number;
  students: number;
}

const FacultySpotlight = () => {
  const faculty: FacultyMember[] = [
    {
      id: 1,
      name: "CA Rohit Sharma",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      subject: "Advanced Accounting",
      bio: "Chartered Accountant with 15+ years of industry experience. Specialized in Advanced Accounting and Financial Reporting.",
      experience: 15,
      students: 15000
    },
    {
      id: 2,
      name: "CA Priya Malhotra",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      subject: "Corporate Law",
      bio: "Corporate Law expert with experience at top legal firms. Makes complex legal concepts accessible to students.",
      experience: 12,
      students: 12500
    },
    {
      id: 3,
      name: "Prof. Amit Jain",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      subject: "Economics & Statistics",
      bio: "Former economics professor with a knack for explaining statistical concepts using real-world examples.",
      experience: 18,
      students: 18200
    },
    {
      id: 4,
      name: "CA Neha Singh",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      subject: "Taxation",
      bio: "Tax consultant for Fortune 500 companies. Known for her simplified approach to tax planning and GST.",
      experience: 10,
      students: 9800
    }
  ];

  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Learn From The Best</h2>
          <p className="text-lecturewala-text-light max-w-2xl mx-auto">
            Our faculty comprises experienced professionals and educators who are experts in their respective fields.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-lecturewala-yellow-dark font-medium text-sm mb-3">
                  {member.subject}
                </p>
                <p className="text-sm text-lecturewala-text-light mb-4">
                  {member.bio}
                </p>
                
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium">{member.experience}+ Years</p>
                    <p className="text-lecturewala-text-light">Experience</p>
                  </div>
                  <div>
                    <p className="font-medium">{(member.students/1000).toFixed(1)}k+</p>
                    <p className="text-lecturewala-text-light">Students</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="/faculty" 
            className="font-medium text-lecturewala-yellow-dark hover:underline"
          >
            View All Faculty Members
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacultySpotlight;
