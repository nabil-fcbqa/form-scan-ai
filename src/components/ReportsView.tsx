import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, PieChart, Download } from 'lucide-react';

export const ReportsView = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Analytics & Reports</h2>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Risk Distribution */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <PieChart className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Risk Distribution</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Low Risk</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-success"></div>
                </div>
                <span className="text-sm font-medium">75%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Medium Risk</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-1/5 h-full bg-warning"></div>
                </div>
                <span className="text-sm font-medium">20%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">High Risk</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-1/20 h-full bg-destructive"></div>
                </div>
                <span className="text-sm font-medium">5%</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Processing Time */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Avg Processing Time</h3>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">2.3 min</p>
            <p className="text-sm text-muted-foreground">per form</p>
            <div className="mt-4 p-3 bg-accent/30 rounded-lg">
              <p className="text-xs text-muted-foreground">15% faster than last month</p>
            </div>
          </div>
        </Card>

        {/* Policy Types */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Top Policy Types</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">General Liability</span>
              <span className="text-sm font-medium">42%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Property</span>
              <span className="text-sm font-medium">28%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Workers Comp</span>
              <span className="text-sm font-medium">18%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Auto</span>
              <span className="text-sm font-medium">12%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { time: '2 min ago', action: 'Metro Construction LLC application processed', status: 'completed' },
            { time: '15 min ago', action: 'Riverside Hotel Group form uploaded', status: 'processing' },
            { time: '1 hour ago', action: 'TechStart Solutions risk assessment completed', status: 'completed' },
            { time: '2 hours ago', action: 'Safety Manufacturing application flagged for review', status: 'review' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
              <div className={`w-2 h-2 rounded-full ${
                activity.status === 'completed' ? 'bg-success' :
                activity.status === 'processing' ? 'bg-warning' :
                'bg-destructive'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};