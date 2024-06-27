import { defineAsyncComponent } from 'vue'

const logos = {
  ApexV3: defineAsyncComponent(() => import ('@/components/logos/ApexV3Logo.vue')),
  ApexV3Dealers: defineAsyncComponent(() => import ('@/components/logos/apexv3/DealersLogo.vue')),
  ApexV3Sales: defineAsyncComponent(() => import ('@/components/logos/apexv3/SalesLogo.vue')),
  ApexV3FandISubmissionLogs: defineAsyncComponent(() => import ('@/components/logos/apexv3/FandISubmissionLogsLogo.vue')),
  ApexV3DMSIntergration: defineAsyncComponent(() => import ('@/components/logos/apexv3/DMSIntergrationLogo.vue')),
  ApexV3WelcomePack: defineAsyncComponent(() => import ('@/components/logos/apexv3/WelcomePackLogo.vue')),
  ApexV3Documents: defineAsyncComponent(() => import ('@/components/logos/apexv3/DocumentsLogo.vue')),
  ApexV3Registration: defineAsyncComponent(() => import ('@/components/logos/apexv3/RegistrationLogo.vue')),
  ApexV3FailedWebhooks: defineAsyncComponent(() => import ('@/components/logos/apexv3/FailedWebhooksLogo.vue')),
  ApexV3SaleDataGroupReport: defineAsyncComponent(() => import ('@/components/logos/apexv3/SaleDataGroupReportLogo.vue')),
  ApexV3GroupSupplierReport: defineAsyncComponent(() => import ('@/components/logos/apexv3/GroupSupplierReportLogo.vue')),
  ApexV3CCProvidersReport: defineAsyncComponent(() => import ('@/components/logos/apexv3/CCProvidersReportLogo.vue')),
  ApexV3CCGroupReport: defineAsyncComponent(() => import ('@/components/logos/apexv3/CCGroupReportLogo.vue')),
  ApexV3GIPricingReport: defineAsyncComponent(() => import ('@/components/logos/apexv3/GIPricingReportLogo.vue')),
  ApexV3GiPricingLegacyReport: defineAsyncComponent(() => import ('@/components/logos/apexv3/GiPricingLegacyReportLogo.vue')),
  ApexV3UploadDocuments: defineAsyncComponent(() => import ('@/components/logos/apexv3/UploadDocumentsLogo.vue')),
  System4: defineAsyncComponent(() => import ('@/components/logos/System4Logo.vue')),
  System4Dealer: defineAsyncComponent(() => import ('@/components/logos/system4/DealerLogo.vue')),
  System4Deployments: defineAsyncComponent(() => import ('@/components/logos/system4/DeploymentsLogo.vue')),
  Product: defineAsyncComponent(() => import ('@/components/logos/ProductLogo.vue')),
  ProductDashboard: defineAsyncComponent(() => import ('@/components/logos/product/DashboardLogo.vue')),
  ProductChangeRequests: defineAsyncComponent(() => import ('@/components/logos/product/ChangeRequestsLogo.vue')),
  ProductReports: defineAsyncComponent(() => import ('@/components/logos/product/ReportsLogo.vue')),
  ProductVaps: defineAsyncComponent(() => import ('@/components/logos/product/VapsLogo.vue')),
  ProductFinanceProviders: defineAsyncComponent(() => import ('@/components/logos/product/FinanceProvidersLogo.vue')),
  ProductGapRemoval: defineAsyncComponent(() => import ('@/components/logos/product/GapRemovalLogo.vue')),
}

export const productList = {
  'apexv3': {
    id: 'apexv3',
    label: 'Apex V3',
    path: '/apex-v3',
    logo: logos.ApexV3,
    colorCode: '#b21e35',
    subSections: [
      {
        id: 'management',
        label: 'Management',
      },
      {
        id: 'registration',
        label: 'Registration',
      },
      {
        id: 'report',
        label: 'Report',
      },
      {
        id: 'support-tools',
        label: 'Support Tools',
      },
    ],
  },
  'system4': {
    id: 'system4',
    label: 'System4',
    path: '/system4',
    logo: logos.System4,
    colorCode: '#023e8a',
  },
  'product': {
    id: 'product',
    label: 'Product',
    path: '/product',
    logo: logos.Product,
    colorCode: '#38B000',
  },
  'monthly-returns': {
    id: 'monthely-returns',
    label: 'Monthly Returns',
    path: '/monthly-returns',
    logo: logos.Product,
    colorCode: '#76c893',
  },
}

export const appList = {
  'apexv3-dealers': {
    id: 'apexv3-dealers',
    label: 'Dealers',
    description: 'Management Preferences for Dealer',
    path: '/dealers',
    logo: logos.ApexV3Dealers,
    tags: ['apexv3', 'management', 'dealer'],
    colorCode: '#641220'
  },
  'apexv3-sales': {
    id: 'apexv3-sales',
    label: 'Sales',
    description: 'View all details of Sale',
    path: '/sales',
    logo: logos.ApexV3Sales,
    tags: ['apexv3', 'view', 'sales'],
    colorCode: '#6e1423'
  },
  'apexv3-fandi-log': {
    id: 'apexv3-fandi-log',
    label: 'F & I Submission Logs',
    description: 'View logs of Finance and Insurance Submission',
    path: '/fandi-log',
    logo: logos.ApexV3FandISubmissionLogs,
    tags: ['apexv3', 'logs', 'finance', 'insurance', 'submission'],
    colorCode: '#85182a'
  },
  'apexv3-dms-intergration': {
    id: 'apexv3-dms-intergration',
    label: 'DMS Intergration',
    description: 'Intergration for Dealer Management System',
    path: '/dms-intergration',
    logo: logos.ApexV3DMSIntergration,
    tags: ['apexv3', 'management', 'dms', 'intergration'],
    colorCode: '#a11d33'
  },
  'apexv3-welcome-pack': {
    id: 'apexv3-welcome-pack',
    label: 'Welcome Packs',
    description: 'Manage Welcome Packs for ApexV3',
    path: '/welcome-packs',
    logo: logos.ApexV3WelcomePack,
    tags: ['apexv3', 'management', 'welcome packs'],
    colorCode: '#a71e34'
  },
  'apexv3-documents': {
    id: 'apexv3-documents',
    label: 'Documents',
    description: 'Mangement Documents showing in ApexV3',
    path: '/documents',
    logo: logos.ApexV3Documents,
    tags: ['apexv3', 'management', 'documents'],
    colorCode: '#b21e35'
  },
  'apexv3-registration': {
    id: 'apexv3-registration',
    label: 'Registration Management',
    description: 'Apex V3 Registration Management',
    path: '/registraion',
    logo: logos.ApexV3Registration,
    tags: ['apexv3', 'registration'],
    colorCode: '#bd1f36'
  },
  'apexv3-failed-webhooks': {
    id: 'apexv3-failed-webhooks',
    label: 'Failed Webhooks',
    description: 'Apex V3 Registration Webhooks',
    path: '/registration-webooks',
    logo: logos.ApexV3FailedWebhooks,
    tags: ['apexv3', 'webhooks', 'registration'],
    colorCode: '#c71f37'
  },
  'apexv3-sale-data-group-report': {
    id: 'apexv3-sale-data-group-report',
    label: 'Sale Data Group Report',
    description: 'Download Report of Sale Data Group',
    path: '/sale-data-group-report',
    logo: logos.ApexV3SaleDataGroupReport,
    tags: ['apexv3', 'report', 'sale data group', 'download'],
    colorCode: '#ff4800'
  },
  'apexv3-group-supplier-report': {
    id: 'apexv3-group-supplier-report',
    label: 'Group Supplier Report',
    description: 'Download Report of Group Supplier',
    path: '/group-supplier-report',
    logo: logos.ApexV3GroupSupplierReport,
    tags: ['apexv3', 'report', 'group supplier', 'download'],
    colorCode: '#ff5400'
  },
  'apexv3-cc-providers-report': {
    id: 'apexv3-cc-providers-report',
    label: 'CC Providers Report',
    description: 'Download Report of CC Providers',
    path: '/cc-providers-report',
    logo: logos.ApexV3CCProvidersReport,
    tags: ['apexv3', 'report', 'cc', 'providers', 'download'],
    colorCode: '#ff6000'
  },
  'apexv3-cc-group-report': {
    id: 'apexv3-cc-group-report',
    label: 'CC Group Report',
    description: 'Download Report of CC Group',
    path: '/cc-group-report',
    logo: logos.ApexV3CCGroupReport,
    tags: ['apexv3', 'report', 'cc', 'group', 'download'],
    colorCode: '#ff6d00'
  },
  'apexv3-gi-pricing-report': {
    id: 'apexv3-gi-pricing-report',
    label: 'Average GI Pricing Report',
    description: 'Download Report of Average GI Pricing',
    path: '/gi-pricing-report',
    logo: logos.ApexV3GIPricingReport,
    tags: ['apexv3', 'report', 'gi pricing', 'download'],
    colorCode: '#ff7900'
  },
  'apexv3-gi-pricing-report-legacy': {
    id: 'apexv3-gi-pricing-report-legacy',
    label: 'Average GI Pricing Report - Legacy',
    description: 'Download Legacy Report of Average GI Pricing',
    path: '/cc-gi-pricing-legacy-report',
    logo: logos.ApexV3GiPricingLegacyReport,
    tags: ['apexv3', 'report', 'gi pricing', 'legacy', 'download'],
    colorCode: '#ff8500'
  },
  'apexv3-upload-documents': {
    id: 'apexv3-upload-documents',
    label: 'Upload Documents',
    description: 'Apex V3 Upload Documents',
    path: '/registraion',
    logo: logos.ApexV3UploadDocuments,
    tags: ['apexv3', 'support-tools', 'upload', 'documents'],
    colorCode: '#ffb600'
  },
  'system4-dealer': {
    id: 'system4-dealer',
    label: 'Dealer',
    description: 'Management AP Questionnaire of Dealer',
    path: '/dealer',
    logo: logos.System4Dealer,
    tags: ['system4', 'dealer', 'questionnaire'],
    colorCode: '#0077b6'
  },
  'system4-deployments': {
    id: 'system4-deploymentes',
    label: 'Deployments',
    description: 'Mangement Deployments',
    path: '/depolyments',
    logo: logos.System4Deployments,
    tags: ['system4', 'deployments'],
    colorCode: '#0096c7'
  },
  'product-dashboard': {
    id: 'product-dashboard',
    label: 'Dashboard',
    description: 'Products Dashboard',
    path: '/dashboard',
    logo: logos.ProductDashboard,
    tags: ['product', 'management', 'dashboard'],
    colorCode: '#004B23'
  },
  'product-change-requests': {
    id: 'product-change-requests',
    label: 'Change Requests/Drafts',
    description: 'Change Requests of the Product',
    path: '/change-requests',
    logo: logos.ProductChangeRequests,
    tags: ['product', 'management', 'change request'],
    colorCode: '#006400'
  },
  'product-reports': {
    id: 'product-reports',
    label: 'Reports',
    description: 'Products Reports',
    path: '/reports',
    logo: logos.ProductReports,
    tags: ['product', 'management', 'change request'],
    colorCode: '#007200'
  },
  'product-vaps': {
    id: 'product-vaps',
    label: 'VAPs Management',
    description: 'Value-added product management',
    path: '/vaps',
    logo: logos.ProductVaps,
    tags: ['product', 'management', 'vaps'],
    colorCode: '#008000'
  },
  'product-finance-providers': {
    id: 'product-finance-providers',
    label: 'Finance Providers',
    description: 'Showing Finance Providers of product',
    path: '/finance-providers',
    logo: logos.ProductFinanceProviders,
    tags: ['product', 'management', 'finance providers'],
    colorCode: '#38B000'
  },
  'product-gap-removal': {
    id: 'product-gap-removal',
    label: 'GAP Removal',
    description: 'Remove GAP product',
    path: '/gap-removal',
    logo: logos.ProductGapRemoval,
    tags: ['product', 'gap', 'removal'],
    colorCode: '#70E000'
  },
}

  // {
  //   label: 'Monthly Returns',
  //   basePath: '/monthly-returns',
  //   icon: 'ri:home-smile-2-fill'
  // },
  // {
  //   label: 'Network Risk',
  //   basePath: '/network-risk',
  //   icon: 'ri:home-smile-2-fill'
  // },
  // {
  //   label: 'Connect',
  //   basePath: '/connect',
  //   icon: 'ri:home-smile-2-fill'
  // },
  // {
  //   label: 'Security',
  //   basePath: '/security',
  //   icon: 'ri:home-smile-2-fill'
  //   },
  // {
  //   label: 'Learning',
  //   basePath: '/learning',
  //   icon: 'ri:home-smile-2-fill'
  // },
  // {
  //   label: 'Whistlehblowing',
  //   basePath: '/whistleblowing',
  //   icon: 'ri:home-smile-2-fill',
  // },
  // {
  //   label: 'User',
  //   basePath: '/user',
  //   icon: 'ri:home-smile-2-fill'
  // },
  // {
  //   label: 'Tools',
  //   basePath: '/tools',
  //   icon: 'ri:home-smile-2-fill'
  // },
