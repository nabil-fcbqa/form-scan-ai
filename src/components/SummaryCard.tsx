import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

interface SummaryData {
  id: string;
  filename: string;
  uploadDate: string;
  status: 'completed' | 'processing' | 'error';
  applicantName: string;
  policyType: string;
  coverageAmount: string;
  riskScore: 'low' | 'medium' | 'high';
  keyFindings: string[];
  recommendedAction: string;
}

interface SummaryCardProps {
  summary: SummaryData;
}

export const SummaryCard = ({ summary }: SummaryCardProps) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-success text-success-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'high': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return <CheckCircle className="h-3 w-3" />;
      case 'medium': case 'high': return <AlertTriangle className="h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">{summary.filename}</h3>
            <p className="text-sm text-muted-foreground">
              Uploaded {new Date(summary.uploadDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <Badge 
          variant={summary.status === 'completed' ? 'secondary' : 'outline'}
          className={summary.status === 'completed' ? 'bg-success text-success-foreground' : ''}
        >
          {summary.status === 'completed' ? 'Processed' : 
           summary.status === 'processing' ? 'Processing' : 'Error'}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Applicant</p>
          <p className="font-semibold">{summary.applicantName}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Policy Type</p>
          <p className="font-semibold">{summary.policyType}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Coverage Amount</p>
          <p className="font-semibold">{summary.coverageAmount}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Risk Assessment</p>
          <Badge className={`${getRiskColor(summary.riskScore)} gap-1`}>
            {getRiskIcon(summary.riskScore)}
            {summary.riskScore.toUpperCase()}
          </Badge>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-muted-foreground mb-2">Key Findings</p>
        <ul className="space-y-1">
          {summary.keyFindings.map((finding, index) => (
            <li key={index} className="text-sm flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>{finding}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-muted-foreground mb-1">Recommended Action</p>
        <p className="text-sm bg-accent/50 p-3 rounded-lg">{summary.recommendedAction}</p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </Card>
  );
};