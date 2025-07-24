import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, FileText, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { SummaryCard } from './SummaryCard';

const mockSummaries = [
  {
    id: '1',
    filename: 'ACORD_25_Commercial_Liability.pdf',
    uploadDate: '2024-01-15T10:30:00Z',
    status: 'completed' as const,
    applicantName: 'Metro Construction LLC',
    policyType: 'Commercial General Liability',
    coverageAmount: '$2,000,000',
    riskScore: 'medium' as const,
    keyFindings: [
      'High-risk construction activities identified',
      'Previous claims history shows 2 incidents in last 3 years',
      'Safety protocols documentation incomplete'
    ],
    recommendedAction: 'Request additional safety documentation and consider premium adjustment based on risk profile.'
  },
  {
    id: '2',
    filename: 'ACORD_140_Property.pdf',
    uploadDate: '2024-01-14T14:20:00Z',
    status: 'completed' as const,
    applicantName: 'Riverside Hotel Group',
    policyType: 'Commercial Property',
    coverageAmount: '$5,000,000',
    riskScore: 'low' as const,
    keyFindings: [
      'Excellent fire safety systems in place',
      'Regular maintenance records available',
      'Located in low flood-risk area'
    ],
    recommendedAction: 'Standard approval recommended. Consider offering preferred rate due to excellent risk profile.'
  },
  {
    id: '3',
    filename: 'ACORD_126_Workers_Comp.pdf',
    uploadDate: '2024-01-13T09:15:00Z',
    status: 'completed' as const,
    applicantName: 'TechStart Solutions Inc',
    policyType: 'Workers Compensation',
    coverageAmount: '$1,000,000',
    riskScore: 'low' as const,
    keyFindings: [
      'Office-based operations with minimal risk',
      'Strong safety training program',
      'No previous claims history'
    ],
    recommendedAction: 'Approve with standard terms. Low-risk profile supports competitive pricing.'
  }
];

export const Dashboard = () => {
  const stats = {
    totalForms: 247,
    processed: 234,
    pendingReview: 8,
    highRisk: 15
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Forms</p>
              <p className="text-2xl font-bold">{stats.totalForms}</p>
            </div>
            <FileText className="h-8 w-8 text-primary" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Processed</p>
              <p className="text-2xl font-bold">{stats.processed}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-success" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
              <p className="text-2xl font-bold">{stats.pendingReview}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-warning" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">High Risk</p>
              <p className="text-2xl font-bold">{stats.highRisk}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by applicant name, policy type, or filename..." 
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <div className="flex gap-1">
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">All</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">High Risk</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Pending</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockSummaries.map(summary => (
          <SummaryCard key={summary.id} summary={summary} />
        ))}
      </div>
    </div>
  );
};