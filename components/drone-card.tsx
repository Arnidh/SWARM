import { Battery, MapPin, Wifi } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface DroneCardProps {
  id: string
  name: string
  model: string
  status: "active" | "idle" | "maintenance" | "offline"
  battery: number
  location: string
  lastActive: string
}

export function DroneCard({ id, name, model, status, battery, location, lastActive }: DroneCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "idle":
        return "bg-yellow-500"
      case "maintenance":
        return "bg-blue-500"
      case "offline":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{name}</CardTitle>
          <div className="flex items-center gap-1">
            <div className={`h-2.5 w-2.5 rounded-full ${getStatusColor(status)}`} />
            <span className="text-xs capitalize">{status}</span>
          </div>
        </div>
        <CardDescription>Model: {model}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Battery className="mr-1.5 h-4 w-4 text-muted-foreground" />
              Battery
            </div>
            <span>{battery}%</span>
          </div>
          <Progress value={battery} className="h-2" />

          <div className="flex items-center text-sm">
            <MapPin className="mr-1.5 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Location:</span>
            <span className="ml-1">{location}</span>
          </div>

          <div className="flex items-center text-sm">
            <Wifi className="mr-1.5 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Last active:</span>
            <span className="ml-1">{lastActive}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Details
        </Button>
        <Button size="sm">Control</Button>
      </CardFooter>
    </Card>
  )
}

