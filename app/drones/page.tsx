import { LayoutShell } from "@/components/layout-shell"
import { DroneCard } from "@/components/drone-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search } from "lucide-react"

// Sample data
const drones = [
  {
    id: "drone-1",
    name: "Falcon X1",
    model: "DJI Mavic 3",
    status: "active",
    battery: 87,
    location: "North Sector",
    lastActive: "Just now",
  },
  {
    id: "drone-2",
    name: "Eagle Eye",
    model: "Autel EVO II",
    status: "idle",
    battery: 62,
    location: "East Perimeter",
    lastActive: "5 min ago",
  },
  {
    id: "drone-3",
    name: "Hawk Pro",
    model: "Skydio 2+",
    status: "maintenance",
    battery: 45,
    location: "Maintenance Bay",
    lastActive: "2 hours ago",
  },
  {
    id: "drone-4",
    name: "Raven S2",
    model: "DJI Phantom 4",
    status: "offline",
    battery: 12,
    location: "South Sector",
    lastActive: "1 day ago",
  },
  {
    id: "drone-5",
    name: "Osprey X3",
    model: "DJI Air 2S",
    status: "active",
    battery: 91,
    location: "West Sector",
    lastActive: "Just now",
  },
  {
    id: "drone-6",
    name: "Kestrel K1",
    model: "Parrot Anafi",
    status: "idle",
    battery: 78,
    location: "Central Hub",
    lastActive: "30 min ago",
  },
  {
    id: "drone-7",
    name: "Peregrine P2",
    model: "Yuneec H520",
    status: "active",
    battery: 82,
    location: "North-East Sector",
    lastActive: "Just now",
  },
  {
    id: "drone-8",
    name: "Merlin M1",
    model: "Autel Dragonfish",
    status: "maintenance",
    battery: 35,
    location: "Maintenance Bay",
    lastActive: "5 hours ago",
  },
] as const

export default function DronesPage() {
  return (
    <LayoutShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Drone Fleet</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Drone
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search drones..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="idle">Idle</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Models</SelectItem>
              <SelectItem value="dji">DJI</SelectItem>
              <SelectItem value="autel">Autel</SelectItem>
              <SelectItem value="skydio">Skydio</SelectItem>
              <SelectItem value="parrot">Parrot</SelectItem>
              <SelectItem value="yuneec">Yuneec</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {drones.map((drone) => (
            <DroneCard key={drone.id} {...drone} />
          ))}
        </div>
      </div>
    </LayoutShell>
  )
}

