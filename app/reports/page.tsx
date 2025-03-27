import { LayoutShell } from "@/components/layout-shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Download, FileText, Filter, Plus, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ReportsPage() {
  return (
    <LayoutShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Reports</TabsTrigger>
            <TabsTrigger value="incidents">Incident Reports</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance Reports</TabsTrigger>
            <TabsTrigger value="flight">Flight Logs</TabsTrigger>
          </TabsList>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search reports..." className="pl-8" />
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full sm:w-[240px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Filter by date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="range" numberOfMonths={2} />
              </PopoverContent>
            </Popover>

            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <TabsContent value="all" className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">Surveillance Report #{i + 1000}</CardTitle>
                      <CardDescription>Generated on April {i + 10}, 2023</CardDescription>
                    </div>
                    <Badge variant={i % 3 === 0 ? "destructive" : i % 2 === 0 ? "outline" : "secondary"}>
                      {i % 3 === 0 ? "Incident" : i % 2 === 0 ? "Maintenance" : "Routine"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid gap-2 sm:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{i % 2 === 0 ? "North Sector" : "East Perimeter"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Drone</p>
                      <p className="text-sm text-muted-foreground">{i % 2 === 0 ? "Falcon X1" : "Eagle Eye"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Created By</p>
                      <p className="text-sm text-muted-foreground">{i % 2 === 0 ? "System" : "John Operator"}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <p className="text-sm text-muted-foreground">
                    {i % 3 === 0 ? "Contains 3 flagged events" : "No flagged events"}
                  </p>
                  <Button variant="outline" size="sm" className="gap-1">
                    <FileText className="h-4 w-4" />
                    View Report
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="incidents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Incident Reports</CardTitle>
                <CardDescription>Security incidents detected by surveillance drones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-3 border rounded-lg">
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-red-500" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Unauthorized Access Detected</p>
                          <Badge variant="outline">High Priority</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">North Sector - Building A</p>
                        <p className="text-sm text-muted-foreground">
                          April {10 + i}, 2023 at 14:3{i}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Reports</CardTitle>
                <CardDescription>Drone maintenance and repair records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-3 border rounded-lg">
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-blue-500" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Routine Maintenance</p>
                          <Badge variant="outline">Completed</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Drone: Falcon X{i}</p>
                        <p className="text-sm text-muted-foreground">April {5 + i}, 2023</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="flight" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Flight Logs</CardTitle>
                <CardDescription>Detailed flight records for all drones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-3 border rounded-lg">
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-green-500" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Flight #{1000 + i}</p>
                          <Badge variant="outline">Complete</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Drone: {i % 2 === 0 ? "Eagle Eye" : "Hawk Pro"}</p>
                        <p className="text-sm text-muted-foreground">Duration: {i * 15 + 30} minutes</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
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

