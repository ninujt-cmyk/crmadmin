'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  LayoutDashboard, Users, BarChart3, Settings, 
  Bell, Phone, Shield, UserCircle, Clock, 
  MessageSquare, TrendingUp, FileText, Activity,
  Monitor, Zap, ChevronRight, Image as ImageIcon
} from 'lucide-react'

// Define the complete guide structure based on the markdown file
const guideData = {
  overview: {
    title: "Overview Section",
    icon: LayoutDashboard,
    functions: [
      {
        id: 'dashboard',
        name: 'Dashboard',
        route: '/admin',
        description: 'Your real-time command center for the entire company\'s performance.',
        features: [
          'Key Metrics: View Total Leads, Active Telecallers, Today\'s Calls, and Pending Follow-ups at a glance.',
          'Recent Activity: A live feed of the newest leads added to the system and their current statuses.',
          'Lead Status Overview: A visual pie chart breaking down where your pipeline stands (e.g., New, Follow-up, Closed Won).'
        ],
        image: '/images/admin-guide/overview_dashboard.png'
      }
    ]
  },
  leadManagement: {
    title: "Lead Management",
    icon: Users,
    functions: [
      {
        id: 'all-leads',
        name: 'All Leads',
        route: '/admin/leads',
        description: 'The master database of all leads in your workspace.',
        features: [
          'Advanced Filtering: Filter leads by Status, Priority, Assigned User, Source, and specific Date Ranges.',
          'Assignment: See exactly which leads are unassigned (Company Unassigned Pool) and assign them directly to specific telecallers or managers.',
          'Bulk Actions: Perform actions on multiple leads at once.',
          'Lead Creation: Manually add a single new lead.',
          'Dynamic Stats: See real-time counts of filtered leads and active team agents currently checked in.'
        ],
        image: '/images/admin-guide/lead-management_all-leads.png'
      },
      {
        id: 'upload-leads',
        name: 'Upload Leads',
        route: '/admin/upload',
        description: 'For importing bulk data.',
        features: [
          'CSV Import: Upload large lists of leads via CSV files directly into your workspace.',
          'Data mapping is typically provided to match your CSV columns to CRM fields.'
        ],
        image: '/images/admin-guide/lead-management_upload-leads.png'
      },
      {
        id: 'available-leads',
        name: 'Available Leads',
        route: '/admin/calls',
        description: 'Your actionable calling queue.',
        features: [
          'This view presents leads that are currently available to be called.',
          'Often used by managers to monitor the immediate queue.'
        ],
        image: '/images/admin-guide/lead-management_available-leads.png'
      }
    ]
  },
  teamManagement: {
    title: "Team Management",
    icon: UserCircle,
    functions: [
      {
        id: 'users',
        name: 'Telecallers / Users',
        route: '/admin/users',
        description: 'Complete control over team accounts.',
        features: [
          'User Provisioning: Add new members and assign roles (Telecaller, Manager, Admin).',
          'Live Status: Green indicator dots show exactly which telecallers are currently checked in for the day.',
          'User Editing: Edit profiles, update emails, and assign reporting managers to telecallers.',
          'Bulk Management: Select multiple users to "Deactivate" or "Delete".'
        ],
        image: '/images/admin-guide/team-management_users.png'
      },
      {
        id: 'attendance',
        name: 'Attendance Dashboard',
        route: '/admin/attendance',
        description: 'Track daily presence and geographic locations.',
        features: [
          'Location Tracking: The system calculates the Haversine distance from established "Office Geofences" to the telecaller\'s IP ping location.',
          'Time Tracking: Automatically calculates Total Hours and Overtime Hours (anything over a base 9-hour shift).',
          'Late Penalties: Calculates late minutes based on a threshold (e.g., 9:30 AM).',
          'Fixing Records: Admins can bulk fix "missing checkout" records.',
          'Monthly Heatmap: Visual grid showing Present (Green), Late (Yellow), Weekend/Holiday (Purple), and Absent (Red).',
          'Holiday & Office Management: Import national holidays via API, set custom holidays, and register GPS coordinates for new offices.'
        ],
        image: '/images/admin-guide/team-management_attendance.png'
      },
      {
        id: 'leave-management',
        name: 'Leave Management',
        route: '/admin/leave-management',
        description: 'Handle time-off requests with strict RLS (Row Level Security).',
        features: [
          'Approval Workflow: Managers see leaves for agents who report to them; Super Admins see the whole company.',
          'History Tracking: Review approved, rejected, or pending leave requests.'
        ],
        image: '/images/admin-guide/team-management_leave-management.png'
      },
      {
        id: 'whatsapp',
        name: 'WhatsApp Inbox (Live Chats)',
        route: '/admin/whatsapp',
        description: 'Centralized real-time WhatsApp messaging using Fonada/Meta integrations.',
        features: [
          'God Mode View: View all active WhatsApp chats happening between your telecallers and their leads.',
          'SLA Timers: Chats with unread messages show active warning tags (e.g., "15m", "⚠️ 1h Delay").',
          'Quick Replies & Global Notifications: Hear an alert when an inbound message arrives from a customer.'
        ],
        image: '/images/admin-guide/team-management_whatsapp.png'
      }
    ]
  },
  analytics: {
    title: "Analytics & Reporting",
    icon: BarChart3,
    functions: [
      {
        id: 'reports',
        name: 'Reports (Executive Dashboard)',
        route: '/admin/reports',
        description: 'Your daily analytical snapshot.',
        features: [
          'Smart Insights: AI-driven summary text based on trend analysis.',
          'Comparison Stats: View Total Leads, New Leads, and Conversion Rates compared to the previous period.',
          'Charts & Funnels: Visual breakdown of pipeline drop-offs.'
        ],
        image: '/images/admin-guide/analytics_reports.png'
      },
      {
        id: 'login-management',
        name: 'Login Management',
        route: '/admin/logins',
        description: 'Track the journey of applications sent to Banks and NBFCs.',
        features: [
          'Live Handover: A live feed tracking leads that were just marked as "Transferred to KYC".',
          'Daily & Monthly Leaderboards: Shows exactly how many "Banks" vs "NBFCs" each agent has logged files for today and month-to-date.',
          'Bank Application Tracking: Log multiple attempts per lead. Track status independently for HDFC, ICICI, Bajaj, etc.'
        ],
        image: '/images/admin-guide/analytics_login-management.png'
      },
      {
        id: 'disbursement-report',
        name: 'Disbursement Report & Gamification',
        route: '/admin/disbursement-report',
        description: 'Financial tracking and commission payouts.',
        features: [
          'Target Sprints: Set custom start/end dates and Rupee targets for agents.',
          'Gamification Leaderboard: Shows live progress bars for each agent, calculating the remaining daily "run rate".',
          'Commission Calculator: Adjust a dynamic slider representing your margin to calculate estimated company payouts in real-time.',
          'Intelligence: Highlights your top producing Bank/NBFC partner, the single largest loan "Big Win", and flags dependency warnings.'
        ],
        image: '/images/admin-guide/analytics_disbursement-report.png'
      },
      {
        id: 'audit-logs',
        name: 'Activities / Audit Logs',
        route: '/admin/audit-logs',
        description: 'Security and compliance tracking.',
        features: [
          'Immutable Ledger: A chronological ledger of every database action (INSERT, UPDATE, DELETE).',
          'Diff Viewer: For updates, the system shows exactly what changed, who made the change, and the exact timestamp.'
        ],
        image: '/images/admin-guide/analytics_audit-logs.png'
      },
      {
        id: 'wallboard',
        name: 'Wallboard (Live Floor Monitor)',
        route: '/admin/wallboard',
        description: 'Designed to be cast to an office TV.',
        features: [
          'Real-time Agent States: Shows live cards for each agent detailing their current state (Ready, On Call, Wrap-Up, Break, Offline).',
          'Admin Override: If an agent forgets to log out, an Admin can click their card and "Force Status Override".',
          'Global Auto-Dialer Control: A master switch to "Pause All Dialers" or "Resume All Dialers" for the entire company.'
        ],
        image: '/images/admin-guide/analytics_wallboard.png'
      },
      {
        id: 'operations',
        name: 'Operations Command Center',
        route: '/admin/operations',
        description: 'Manage QA and dynamic scripts.',
        features: [
          'QA & Call Reviews: Review scores (out of 15) handed down by managers listening to call recordings.',
          'Dynamic Script Editor: Edit text scripts using dynamic variables ({name}, {loan_type}).'
        ],
        image: '/images/admin-guide/analytics_operations.png'
      },
      {
        id: 'dialer-assignment',
        name: 'Dialer Assignment',
        route: '/admin/dialer-assignment',
        description: 'Bulk lead distribution.',
        features: [
          'Algorithmic Routing: Select leads via Advanced Filters. The system round-robins the leads across the selected agents.',
          'Priority Injection: Force leads to the "Top of Queue" by flagging them as Urgent.',
          'Status Reset: Optionally reset dead buckets back to "New Lead".',
          'Queue Clearing: A panic button to "Unassign Selected" leads to rip them out of current dialer workloads.'
        ],
        image: '/images/admin-guide/analytics_dialer-assignment.png'
      }
    ]
  },
  systemConfig: {
    title: "System Configuration",
    icon: Settings,
    functions: [
      {
        id: 'settings',
        name: 'Settings',
        route: '/admin/settings',
        description: 'Your workspace configurations. Customize the CRM integrations and automation rules.',
        features: [
          'Telephony Dialer (Fonada): Input your Client ID and Secret Key to enable the in-browser Click-to-Call auto-dialer.',
          'WhatsApp Automation: Provide the Meta/Cloud API Bearer Token to power automated KYC lists and missed call templates.',
          'Automated Cron Jobs: Toggle critical background tasks ON/OFF (SLA & Lead Recycling, Auto Lead Refill, KYC Reminders, Auto Force Checkout).'
        ],
        image: '/images/admin-guide/system-settings.png'
      }
    ]
  },
  hiddenModules: {
    title: "Hidden / Direct-Access Modules",
    icon: Zap,
    functions: [
      {
        id: 'broadcast-center',
        name: 'Broadcast Center',
        route: '/admin/notifications',
        description: 'Send instant push notifications and dashboard alerts.',
        features: [
          'Megaphone Alerts: Send instant push notifications and dashboard alerts to the entire company or specific roles.'
        ],
        image: '/images/admin-guide/hidden_broadcast-center.png'
      },
      {
        id: 'ivr-campaigns',
        name: 'IVR Campaigns & Reports',
        route: '/admin/ivr-campaigns',
        description: 'Auto-Dial Blasts and DTMF tracking.',
        features: [
          'Auto-Dial Blasts: Upload a CSV of contacts to trigger a massive automated robotic voice call campaign.',
          'DTMF Tracking: The reports module tracks exactly if a customer picked up and what dialpad keys they pressed.',
          'Wallet Ledger: Real-time tracking of telecom credits consumed by the blasts.'
        ],
        image: '/images/admin-guide/hidden_ivr-campaigns.png'
      },
      {
        id: 'c2c-reports',
        name: 'C2C Reports',
        route: '/admin/c2c-reports',
        description: 'Click-to-Call Analytics.',
        features: [
          'A dedicated table showing every outbound telephony call, its exact talk time, ring duration, and a built-in audio player to listen to the call recordings.'
        ],
        image: '/images/admin-guide/hidden_c2c-reports.png'
      },
      {
        id: 'team-hierarchy',
        name: 'Team Hierarchy & Chat',
        route: '/admin/team',
        description: 'Internal communication and hierarchy management.',
        features: [
          'Internal Chat: A built-in Slack-like channel for agents and managers to communicate internally.',
          'Hierarchy Manager: A specialized view mapping out exact reporting structures with quick edit overrides.'
        ],
        image: '/images/admin-guide/hidden_team-hierarchy.png'
      },
      {
        id: 'live-leaderboard',
        name: 'Live Leaderboard Screen',
        route: '/admin/leaderboard',
        description: 'TV-Ready Visuals for sales floor.',
        features: [
          'A specialized, high-contrast, gamified UI designed for a sales floor TV.',
          'Visually isolates individual agent targets vs daily run-rates with progress bars and "Flame" streaks.'
        ],
        image: '/images/admin-guide/hidden_live-leaderboard.png'
      }
    ]
  },
  globalLayout: {
    title: "Global Layout & Profiles",
    icon: LayoutDashboard,
    functions: [
      {
        id: 'header-navigation',
        name: 'Top Header Navigation',
        route: 'Visible Everywhere',
        description: 'Global navigation accessible from any page.',
        features: [
          'Global Search (Cmd/Ctrl + K): A quick-search bar accessible from any page to instantly find specific leads or users.',
          'Notification Center: The bell icon alerts you to system broadcasts, assigned leads, or WhatsApp message SLA breaches.'
        ],
        image: '/images/admin-guide/global-header-navigation.png'
      },
      {
        id: 'security-watermark',
        name: 'Security Watermark Strategy',
        route: 'System-wide',
        description: 'Data Leak Protection.',
        features: [
          'The entire admin portal runs with an embedded, repeating, un-clickable watermark stretching diagonally across the screen.',
          'It displays your Name/Email and the exact live Timestamp, deterring staff from taking photos of lead data.'
        ],
        image: '/images/admin-guide/global-security-watermark.png'
      },
      {
        id: '360-lead-profile',
        name: '360° Lead Profile',
        route: '/admin/leads/[id]',
        description: 'When clicking into any individual lead, Admins access a powerful unified profile.',
        features: [
          'Visual Pipeline Tracker: A visual step-by-step progress bar showing exactly where the lead is in the funnel.',
          'AI Engagement Score: The system calculates a score (0-100) based on the volume of calls and notes.',
          'Stagnation Alerts: Flags the lead in yellow if it has been stuck in its current status for more than 7 days.',
          'Multi-Tab Investigation: Toggle instantly between the lead\'s core details, Timeline, Call Logs, and Audit Log.',
          'Danger Zone: The hard-delete function is restricted to Admins at the bottom of this profile view.'
        ],
        image: '/images/admin-guide/global-360-lead-profile.png'
      }
    ]
  }
}

export default function AdminGuide() {
  const [activeSection, setActiveSection] = useState('overview')
  const [selectedFunction, setSelectedFunction] = useState(guideData.overview.functions[0])

  const handleFunctionClick = (func: any) => {
    setSelectedFunction(func)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                📚 Admin Capabilities Guide
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Comprehensive documentation for the CRM Admin Panel
              </p>
            </div>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Admin Access Only
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 h-auto p-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            {Object.entries(guideData).map(([key, section]) => {
              const Icon = section.icon
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex flex-col items-center gap-1 py-3 px-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 data-[state=active]:bg-slate-900 data-[state=active]:text-white dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium hidden lg:block">{section.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {Object.entries(guideData).map(([key, section]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Panel - Function List */}
                <div className="lg:col-span-1">
                  <Card className="h-full shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <section.icon className="w-5 h-5" />
                        {section.title}
                      </CardTitle>
                      <CardDescription>
                        Click on a function to view details and screenshot
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ScrollArea className="h-[calc(100vh-350px)]">
                        <div className="p-2 space-y-1">
                          {section.functions.map((func) => (
                            <button
                              key={func.id}
                              onClick={() => handleFunctionClick(func)}
                              className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                                selectedFunction.id === func.id
                                  ? 'bg-slate-900 dark:bg-slate-700 text-white shadow-md'
                                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <div className="flex-shrink-0">
                                <FileText className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-sm truncate">{func.name}</div>
                                <div className="text-xs opacity-70 truncate">{func.route}</div>
                              </div>
                              <ChevronRight className="w-4 h-4 flex-shrink-0" />
                            </button>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Panel - Details and Screenshot */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Function Details Card */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {selectedFunction.route}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl">{selectedFunction.name}</CardTitle>
                          <CardDescription className="text-base mt-2">
                            {selectedFunction.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Key Features
                          </h3>
                          <ul className="space-y-2">
                            {selectedFunction.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Screenshot Card */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ImageIcon className="w-5 h-5" />
                        Screenshot
                      </CardTitle>
                      <CardDescription>
                        Visual reference for {selectedFunction.name}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600 min-h-[400px]">
                        {selectedFunction.image ? (
                          <img
                            src={selectedFunction.image}
                            alt={selectedFunction.name}
                            className="w-full h-auto object-cover"
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml,' + encodeURIComponent(`
                                <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
                                  <rect width="800" height="400" fill="#f1f5f9"/>
                                  <text x="400" y="180" text-anchor="middle" fill="#64748b" font-size="18" font-family="system-ui">
                                    Screenshot not yet uploaded
                                  </text>
                                  <text x="400" y="220" text-anchor="middle" fill="#94a3b8" font-size="14" font-family="system-ui">
                                    Please add: ${selectedFunction.image}
                                  </text>
                                  <text x="400" y="260" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui">
                                    to: public/images/admin-guide/
                                  </text>
                                </svg>
                              `)
                            }}
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center h-[400px] text-slate-500">
                            <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
                            <p className="text-lg font-medium">No screenshot available</p>
                            <p className="text-sm mt-2">Upload screenshot to: {selectedFunction.image}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
