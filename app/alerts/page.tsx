import { LayoutShell } from "@/components/layout-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Check, Filter, Search } from "lucide-react"

export default function AlertsPage() {
  return (
    <LayoutShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Alerts</h1>
        <Button variant="outline" className="gap-2">
          <Check className="h-4 w-4" />
          Mark All as Read
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Alerts</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search alerts..." className="pl-8" />
            </div>

            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-3 border rounded-lg">
                      <div
                        className={`mt-1 h-2 w-2 rounded-full ${i === 1 ? "bg-red-500" : i === 2 ? "bg-yellow-500" : "bg-blue-500"}`}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">
                            {i === 1
                              ? "Low Battery Warning"
                              : i === 2
                                ? "Unauthorized Movement Detected"
                                : "System Update Available"}
                          </p>
                          <Badge variant={i === 1 ? "destructive" : i === 2 ? "default" : "outline"}>
                            {i === 1 ? "Critical" : i === 2 ? "Warning" : "Info"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {i === 1
                            ? "Drone 'Raven S2' battery below 15%. Immediate landing recommended."
                            : i === 2
                              ? "Suspicious activity detected in East Perimeter at 14:32."
                              : "New firmware update v2.4.1 is available for your drones."}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-muted-foreground">{i * 2} hours ago</p>
                          <Button variant="ghost" size="sm">
                            Mark as Read
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Yesterday</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-3 border rounded-lg bg-muted/40">
                      <div className={`mt-1 h-2 w-2 rounded-full ${i === 1 ? "bg-yellow-500" : "bg-green-500"}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{i === 1 ? "Weather Alert" : "Maintenance Completed"}</p>
                          <Badge variant={i === 1 ? "default" : "outline"}>{i === 1 ? "Warning" : "Info"}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {i === 1
                            ? "High winds expected in your area. Consider grounding drones."
                            : "Routine maintenance for 'Falcon X1' has been completed."}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-muted-foreground">Yesterday at {i === 1 ? "09:45" : "16:30"}</p>
                          <Button variant="ghost" size="sm">
                            Mark as Unread
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Earlier This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-3 border rounded-lg bg-muted/40">
                      <div
                        className={`mt-1 h-2 w-2 rounded-full ${i === 1 ? "bg-red-500" : i === 2 ? "bg-blue-500" : "bg-green-500"}`}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">
                            {i === 1 ? "Perimeter Breach" : i === 2 ? "New Drone Added" : "Surveillance Complete"}
                          </p>
                          <Badge variant={i === 1 ? "destructive" : "outline"}>{i === 1 ? "Critical" : "Info"}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {i === 1
                            ? "Security breach detected at South Gate. Security team dispatched."
                            : i === 2
                              ? "New drone 'Osprey X3' has been added to your fleet."
                              : "Scheduled surveillance of West Sector completed successfully."}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-muted-foreground">April {10 + i}, 2023</p>
                          <Button variant="ghost" size="sm">
                            Mark as Unread
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="unread">
            <Card>
              <CardHeader>
                <CardTitle>Unread Alerts</CardTitle>
                <CardDescription>You have 3 unread alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-3 border rounded-lg">
                      <div
                        className={`mt-1 h-2 w-2 rounded-full ${i === 1 ? "bg-red-500" : i === 2 ? "bg-yellow-500" : "bg-blue-500"}`}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">
                            {i === 1
                              ? "Low Battery Warning"
                              : i === 2
                                ? "Unauthorized Movement Detected"
                                : "System Update Available"}
                          </p>
                          <Badge variant={i === 1 ? "destructive" : i === 2 ? "default" : "outline"}>
                            {i === 1 ? "Critical" : i === 2 ? "Warning" : "Info"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {i === 1
                            ? "Drone 'Raven S2' battery below 15%. Immediate landing recommended."
                            : i === 2
                              ? "Suspicious activity detected in East Perimeter at 14:32."
                              : "New firmware update v2.4.1 is available for your drones."}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-muted-foreground">{i * 2} hours ago</p>
                          <Button variant="ghost" size="sm">
                            Mark as Read
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="critical">
            <Card>
              <CardHeader>
                <CardTitle>Critical Alerts</CardTitle>
                <CardDescription>High priority alerts requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-3 border rounded-lg">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{i === 1 ? "Low Battery Warning" : "Perimeter Breach"}</p>
                          <Badge variant="destructive">Critical</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {i === 1
                            ? "Drone 'Raven S2' battery below 15%. Immediate landing recommended."
                            : "Security breach detected at South Gate. Security team dispatched."}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-muted-foreground">{i === 1 ? "2 hours ago" : "April 11, 2023"}</p>
                          <Button variant="ghost" size="sm">
                            {i === 1 ? "Mark as Read" : "Mark as Unread"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Updates and notifications about the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-3 border rounded-lg">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">
                            {i === 1
                              ? "System Update Available"
                              : i === 2
                                ? "Database Backup Complete"
                                : "New Drone Added"}
                          </p>
                          <Badge variant="outline">Info</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {i === 1
                            ? "New firmware update v2.4.1 is available for your drones."
                            : i === 2
                              ? "Automatic database backup completed successfully."
                              : "New drone 'Osprey X3' has been added to your fleet."}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-muted-foreground">
                            {i === 1 ? "6 hours ago" : i === 2 ? "Yesterday at 02:00" : "April 12, 2023"}
                          </p>
                          <Button variant="ghost" size="sm">
                            {i === 1 ? "Mark as Read" : "Mark as Unread"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </LayoutShell>
  )
}

