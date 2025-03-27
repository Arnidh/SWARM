import { LayoutShell } from "@/components/layout-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Download } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <LayoutShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export Data
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full sm:w-[240px] justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Last 30 days</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="range" numberOfMonths={2} />
            </PopoverContent>
          </Popover>

          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Drone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Drones</SelectItem>
              <SelectItem value="falcon-x1">Falcon X1</SelectItem>
              <SelectItem value="eagle-eye">Eagle Eye</SelectItem>
              <SelectItem value="hawk-pro">Hawk Pro</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="north">North Sector</SelectItem>
              <SelectItem value="east">East Perimeter</SelectItem>
              <SelectItem value="south">South Sector</SelectItem>
              <SelectItem value="west">West Sector</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Flight Hours</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">248.5 hrs</div>
              <p className="text-xs text-muted-foreground">+12% from previous period</p>
              <div className="mt-4 h-[80px] bg-muted rounded-md"></div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Battery Efficiency</CardTitle>
              <CardDescription>Average flight time per charge</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42 min</div>
              <p className="text-xs text-muted-foreground">-3% from previous period</p>
              <div className="mt-4 h-[80px] bg-muted rounded-md"></div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Incidents Detected</CardTitle>
              <CardDescription>Security events flagged</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">37</div>
              <p className="text-xs text-muted-foreground">+8% from previous period</p>
              <div className="mt-4 h-[80px] bg-muted rounded-md"></div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Coverage Efficiency</CardTitle>
              <CardDescription>Area covered per flight hour</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.8 km²/hr</div>
              <p className="text-xs text-muted-foreground">+5% from previous period</p>
              <div className="mt-4 h-[80px] bg-muted rounded-md"></div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="flight" className="space-y-4">
          <TabsList>
            <TabsTrigger value="flight">Flight Analytics</TabsTrigger>
            <TabsTrigger value="battery">Battery Performance</TabsTrigger>
            <TabsTrigger value="coverage">Coverage Map</TabsTrigger>
            <TabsTrigger value="incidents">Incident Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="flight">
            <Card>
              <CardHeader>
                <CardTitle>Flight Time Distribution</CardTitle>
                <CardDescription>Analysis of drone flight time by location and time of day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Flight analytics visualization</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="battery">
            <Card>
              <CardHeader>
                <CardTitle>Battery Performance</CardTitle>
                <CardDescription>Battery efficiency and degradation analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Battery performance visualization</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="coverage">
            <Card>
              <CardHeader>
                <CardTitle>Coverage Map</CardTitle>
                <CardDescription>Heatmap of surveillance coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Coverage map visualization</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="incidents">
            <Card>
              <CardHeader>
                <CardTitle>Incident Reports</CardTitle>
                <CardDescription>Analysis of security incidents detected</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Incident reports visualization</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </LayoutShell>
  )
}

