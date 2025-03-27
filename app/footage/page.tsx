import { ProtectedRoute } from "@/components/protected-route"
import { LayoutShell } from "@/components/layout-shell"
import { FootageCard } from "@/components/footage-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Search } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Sample data
const footageData = [
  {
    id: "footage-1",
    thumbnail: "/placeholder.svg?height=180&width=320",
    date: "2023-04-15",
    time: "14:30",
    location: "North Sector - Building A",
    duration: "02:45",
    type: "video",
    tags: ["suspicious", "person", "north"],
  },
  {
    id: "footage-2",
    thumbnail: "/placeholder.svg?height=180&width=320",
    date: "2023-04-15",
    time: "15:15",
    location: "East Perimeter - Gate 2",
    duration: "01:20",
    type: "video",
    tags: ["vehicle", "authorized", "east"],
  },
  {
    id: "footage-3",
    thumbnail: "/placeholder.svg?height=180&width=320",
    date: "2023-04-15",
    time: "16:45",
    location: "South Sector - Parking Lot",
    duration: "",
    type: "image",
    tags: ["vehicle", "parking", "south"],
  },
  {
    id: "footage-4",
    thumbnail: "/placeholder.svg?height=180&width=320",
    date: "2023-04-14",
    time: "09:20",
    location: "West Sector - Fence Line",
    duration: "03:10",
    type: "video",
    tags: ["perimeter", "animal", "west"],
  },
  {
    id: "footage-5",
    thumbnail: "/placeholder.svg?height=180&width=320",
    date: "2023-04-14",
    time: "11:05",
    location: "Central Hub - Main Entrance",
    duration: "",
    type: "image",
    tags: ["entrance", "person", "authorized"],
  },
  {
    id: "footage-6",
    thumbnail: "/placeholder.svg?height=180&width=320",
    date: "2023-04-14",
    time: "13:30",
    location: "North-East Sector - Storage Area",
    duration: "04:15",
    type: "video",
    tags: ["storage", "activity", "northeast"],
  },
  {
    id: "footage-7",
    thumbnail: "/placeholder.svg?height=180&width=320",
    date: "2023-04-13",
    time: "19:45",
    location: "South-West Sector - Loading Dock",
    duration: "02:30",
    type: "video",
    tags: ["loading", "vehicle", "southwest"],
  },
  {
    id: "footage-8",
    thumbnail: "/placeholder.svg?height=180&width=320",
    date: "2023-04-13",
    time: "21:15",
    location: "North Sector - Building B",
    duration: "",
    type: "image",
    tags: ["night", "building", "north"],
  },
] as const

export default function FootagePage() {
  return (
    <ProtectedRoute>
      <LayoutShell>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Surveillance Footage</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by location or tags..." className="pl-8" />
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full sm:w-[240px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Select date range</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="range" numberOfMonths={2} />
              </PopoverContent>
            </Popover>

            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="image">Image</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {footageData.map((footage) => (
              <FootageCard key={footage.id} {...footage} />
            ))}
          </div>
        </div>
      </LayoutShell>
    </ProtectedRoute>
  )
}

