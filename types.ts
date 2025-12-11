export enum JobCategory {
  DRIVER = 'Fahrer & Transport',
  WAREHOUSE = 'Lager & Umschlag',
  DISPATCH = 'Disposition & Planung',
  ADMIN = 'Kaufmännisch & Verwaltung',
  MANAGEMENT = 'Führungskräfte'
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  category: JobCategory;
  salaryRange?: string;
  description: string;
  postedDate: string;
  isUrgent?: boolean;
}

export interface NavItem {
  label: string;
  id: string;
}