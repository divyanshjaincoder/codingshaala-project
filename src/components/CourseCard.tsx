import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  price: string;
  image: string;
  slug: string;
}

const CourseCard = ({ 
  title, 
  description, 
  duration, 
  students, 
  level, 
  price, 
  image, 
  slug,
  course 
}) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary">{level}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{students}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="h-4 w-4" />
            <span>Online</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">{price}</div>
          <Button onClick={()=> localStorage.setItem('courseDetail', JSON.stringify(course))} asChild>
            <Link to={`/course/${slug}`}>Learn More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;