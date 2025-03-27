import { ProtectedRoute } from "@/components/protected-route"
import { LayoutShell } from "@/components/layout-shell"
import { DashboardStats } from "@/components/dashboard-stats"
import { DroneCard } from "@/components/drone-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data
const recentDrones = [
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
] as const

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <LayoutShell>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        </div>

        <div className="space-y-6">
          <DashboardStats />

          <Tabs defaultValue="map">
            <TabsList>
              <TabsTrigger value="map">Map View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
            <TabsContent value="map" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Drone Locations</CardTitle>
                  <CardDescription>Real-time positions of all surveillance drones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive map view</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="list" className="mt-4">
              <h2 className="text-xl font-semibold mb-4">Active Drones</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {recentDrones.map((drone) => (
                  <DroneCard key={drone.id} {...drone} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>Latest notifications from your drone fleet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <div>
                        <p className="font-medium">Low Battery Warning</p>
                        <p className="text-sm text-muted-foreground">Drone "Raven S2" battery below 15%</p>
                      </div>
                      <p className="ml-auto text-xs text-muted-foreground">2h ago</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Activity Log</CardTitle>
                <CardDescription>Recent system activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-3 border rounded-lg">
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-blue-500" />
                      <div>
                        <p className="font-medium">Drone Deployed</p>
                        <p className="text-sm text-muted-foreground">Falcon X1 deployed to North Sector</p>
                      </div>
                      <p className="ml-auto text-xs text-muted-foreground">1h ago</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </LayoutShell>
    </ProtectedRoute>
  )
}

