
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AppCTA = () => {
  return (
    <div className="py-20 bg-cta-gradient overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* CTA Content */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn Anywhere, Anytime
            </h2>
            <p className="text-lg text-lecturewala-text-light mb-6 max-w-xl">
              Download the Lecturewala app to access courses on the go, track your progress, 
              and study even without internet connection.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button className="bg-lecturewala-yellow hover:bg-lecturewala-yellow-dark text-lecturewala-text">
                <Download size={18} className="mr-2" />
                Download App
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
            
            {/* App features */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-1">Offline Access</h3>
                <p className="text-sm text-lecturewala-text-light">
                  Download lectures and study materials for offline viewing.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-1">Progress Tracking</h3>
                <p className="text-sm text-lecturewala-text-light">
                  Monitor your course completion and test results.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-1">Personalized Learning</h3>
                <p className="text-sm text-lecturewala-text-light">
                  Get recommendations based on your learning patterns.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-1">Live Doubt Solving</h3>
                <p className="text-sm text-lecturewala-text-light">
                  Connect with faculty for real-time doubt resolution.
                </p>
              </div>
            </div>
          </div>
          
          {/* App Mockup */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 animate-float">
            <img 
              src="https://placehold.co/500x600/FFFFFF/CCCCCC?text=Lecturewala+App" 
              alt="Lecturewala App" 
              className="max-w-xs mx-auto md:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCTA;
