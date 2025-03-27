import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FootageCardProps {
  id: string
  thumbnail: string
  date: string
  time: string
  location: string
  duration: string
  type: "video" | "image"
  tags: string[]
}

export function FootageCard({ id, thumbnail, date, time, location, duration, type, tags }: FootageCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={`Surveillance footage from ${date}`}
          className="object-cover w-full h-full"
        />
        {type === "video" && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
            {duration}
          </div>
        )}
        <Badge variant="secondary" className="absolute top-2 right-2">
          {type === "video" ? "Video" : "Image"}
        </Badge>
      </div>
      <CardHeader className="p-3 pb-0">
        <div className="space-y-1.5 text-sm">
          <div className="flex items-center">
            <Calendar className="mr-1.5 h-3.5 w-3.5 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1.5 h-3.5 w-3.5 text-muted-foreground" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-1.5 h-3.5 w-3.5 text-muted-foreground" />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-2">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          Download
        </Button>
        <Button size="sm">View</Button>
      </CardFooter>
    </Card>
  )
}

