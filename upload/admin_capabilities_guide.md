# comprehensive Admin Capability Guide

Welcome to the CRM Admin Panel! As an **Admin** (or Super Admin/Owner), you have sweeping control over the entire workspace. This guide outlines every feature and page from the starting dashboard down to the system settings.

---

## 1. Overview Section

### **Dashboard** (`/admin`)
Your real-time command center for the entire company's performance.
*   **Key Metrics**: View Total Leads, Active Telecallers, Today's Calls, and Pending Follow-ups at a glance.
*   **Recent Activity**: A live feed of the newest leads added to the system and their current statuses.
*   **Lead Status Overview**: A visual pie chart breaking down where your pipeline stands (e.g., New, Follow-up, Closed Won).

---

## 2. Lead Management
This section is the core of your sales pipeline.

### **All Leads** (`/admin/leads`)
The master database of all leads in your workspace.
*   **Advanced Filtering**: Filter leads by Status, Priority, Assigned User, Source, and specific Date Ranges.
*   **Assignment**: See exactly which leads are unassigned (Company Unassigned Pool) and assign them directly to specific telecallers or managers.
*   **Bulk Actions**: Perform actions on multiple leads at once.
*   **Lead Creation**: Manually add a single new lead.
*   **Dynamic Stats**: See real-time counts of filtered leads and active team agents currently checked in.

### **Upload Leads** (`/admin/upload`)
For importing bulk data.
*   **CSV Import**: Upload large lists of leads via CSV files directly into your workspace. Data mapping is typically provided to match your CSV columns to CRM fields.

### **Available Leads** (`/admin/calls`)
Your actionable calling queue. 
*   This view presents leads that are currently available to be called, often used by managers to monitor the immediate queue.

---

## 3. Team Management
Oversee your staff, track presence, and manage communications.

### **Telecallers / Users** (`/admin/users`)
Complete control over team accounts.
*   **User Provisioning**: Add new members and assign roles (Telecaller, Manager, Admin).
*   **Live Status**: Green indicator dots show exactly which telecallers are currently checked in for the day.
*   **User Editing**: Edit profiles, update emails, and assign reporting managers to telecallers.
*   **Bulk Management**: Select multiple users to "Deactivate" or "Delete".

### **Attendance Dashboard** (`/admin/attendance`)
Track daily presence and geographic locations.
*   **Location Tracking**: The system calculates the Haversine distance from established "Office Geofences" to the telecaller's IP ping location. It categorizes check-ins as "On-Site (Office Name)" or "Remote (X km away)".
*   **Time Tracking**: Automatically calculates Total Hours and Overtime Hours (anything over a base 9-hour shift).
*   **Late Penalties**: Calculates late minutes based on a threshold (e.g., 9:30 AM). Assigns a "Reliability Score" to each agent.
*   **Fixing Records**: Admins can bulk fix "missing checkout" records (if an agent forgot to clock out, it auto-forces out at 6:00 PM).
*   **Monthly Heatmap**: Visual grid showing Present (Green), Late (Yellow), Weekend/Holiday (Purple), and Absent (Red) for each employee across the month.
*   **Holiday & Office Management**: Import national holidays via API, set custom holidays, toggle Second Saturday rules, and register GPS coordinates for new offices.

### **Leave Management** (`/admin/leave-management`)
Handle time-off requests with strict RLS (Row Level Security).
*   **Approval Workflow**: Managers see leaves for agents who report to them; Super Admins see the whole company.
*   **History Tracking**: Review approved, rejected, or pending leave requests.

### **WhatsApp Inbox (Live Chats)** (`/admin/whatsapp`)
Centralized real-time WhatsApp messaging using Fonada/Meta integrations.
*   **God Mode View**: View all active WhatsApp chats happening between your telecallers and their leads.
*   **SLA Timers**: Chats with unread messages show active warning tags (e.g., "15m", "⚠️ 1h Delay").
*   **Quick Replies & Global Notifications**: Hear an alert when an inbound message arrives from a customer. Use predefined quick replies (e.g., "Kindly share Aadhar & PAN") to respond directly as an Admin overlay.

---

## 4. Analytics & Reporting
Deep insights into team performance and financial results.

### **Reports (Executive Dashboard)** (`/admin/reports`)
Your daily analytical snapshot.
*   **Smart Insights**: AI-driven summary text based on trend analysis.
*   **Comparison Stats**: View Total Leads, New Leads, and Conversion Rates compared to the previous period.
*   **Charts & Funnels**: Visual breakdown of pipeline drop-offs.

### **Login Management** (`/admin/logins`)
Track the journey of applications sent to Banks and NBFCs.
*   **Live Handover**: A live feed tracking leads that were just marked as "Transferred to KYC".
*   **Daily & Monthly Leaderboards**: Shows exactly how many "Banks" vs "NBFCs" each agent has logged files for today and month-to-date (MTD).
*   **Bank Application Tracking**: Log multiple attempts per lead. Track status independently for HDFC, ICICI, Bajaj, etc., as Pending, Approved, Rejected (with reason), or Disbursed.

### **Disbursement Report & Gamification** (`/admin/disbursement-report`)
Financial tracking and commission payouts.
*   **Target Sprints**: Set custom start/end dates and Rupee targets for agents.
*   **Gamification Leaderboard**: Shows live progress bars for each agent, calculating the remaining daily "run rate" required to hit their target. Complete with "Flame" emojis for agents who finish early.
*   **Commission Calculator**: Adjust a dynamic slider representing your margin (e.g., 1.5%) to calculate estimated company payouts in real-time based on the actual disbursed volume.
*   **Intelligence**: Highlights your top producing Bank/NBFC partner, the single largest loan "Big Win", and flags dependency warnings if one bank has over 60% of your business.

### **Activities / Audit Logs** (`/admin/audit-logs`)
Security and compliance tracking.
*   **Immutable Ledger**: A chronological ledger of every database action (INSERT, UPDATE, DELETE).
*   **Diff Viewer**: For updates, the system shows exactly what changed (e.g., `Status: New Lead ➔ Interested`), who made the change, and the exact timestamp.

### **Wallboard (Live Floor Monitor)** (`/admin/wallboard`)
Designed to be cast to an office TV.
*   **Real-time Agent States**: Shows live cards for each agent detailing their current state (Ready, On Call, Wrap-Up, Break, Offline) and exactly how long they've been in that state (e.g., `00:45s`).
*   **Admin Override**: If an agent forgets to log out, an Admin can click their card and "Force Status Override" to throw them into a break or offline.
*   **Global Auto-Dialer Control**: A master switch to "Pause All Dialers" or "Resume All Dialers" for the entire company during emergencies or team meetings.

### **Operations Command Center** (`/admin/operations`)
Manage QA and dynamic scripts.
*   **QA & Call Reviews**: Review scores (out of 15) handed down by managers listening to call recordings. View their feedback notes.
*   **Dynamic Script Editor**: Edit text scripts using dynamic variables (`{name}`, `{loan_type}`). When saved, these changes immediately push live to the telecallers' screens based on the current lead status.

### **Dialer Assignment** (`/admin/dialer-assignment`)
Bulk lead distribution.
*   **Algorithmic Routing**: Select 50, 100, or 500 leads via Advanced Filters (Status = New, Source = Website). Select specific active agents. The system round-robins the leads across the selected agents.
*   **Priority Injection**: When pulling leads into an agent's queue, force them to the "Top of Queue" by flagging them as Urgent.
*   **Status Reset**: Optionally reset dead buckets back to "New Lead" to trick the auto-dialer into picking them up immediately.
*   **Queue Clearing**: A panic button to "Unassign Selected" leads to rip them out of current dialer workloads.

---

## 5. System Configuration

### **Settings** (`/admin/settings`)
Your workspace configurations. Customize the CRM integrations and automation rules.
*   **Telephony Dialer (Fonada)**: Input your Client ID and Secret Key to enable the in-browser Click-to-Call auto-dialer.
*   **WhatsApp Automation**: Provide the Meta/Cloud API Bearer Token to power automated KYC lists and missed call templates.
*   **Automated Cron Jobs**: Toggle critical background tasks ON/OFF:
    *   *SLA & Lead Recycling*: Auto-reassigns neglected leads.
    *   *Auto Lead Refill*: Keeps active agent queues topped up automatically.
    *   *KYC Reminders*: Auto-pings customers for missing documents.
    *   *Auto Force Checkout*: Logs out any agent left lingering at midnight.

---

## 6. Hidden / Direct-Access Modules
During the deep dive, several fully functional modules were discovered that are accessible via direct URL, even if they aren't explicitly listed in the main sidebar navigation:

### **Broadcast Center** (`/admin/notifications`)
*   **Megaphone Alerts**: Send instant push notifications and dashboard alerts (e.g., "System Maintenance" or "Sales Spiff Started") to the entire company or specific roles (e.g., Telecallers Only).

### **IVR Campaigns & Reports** (`/admin/ivr-campaigns` & `/admin/ivr-reports`)
*   **Auto-Dial Blasts**: Upload a CSV of contacts to trigger a massive automated robotic voice call campaign.
*   **DTMF Tracking**: The reports module tracks exactly if a customer picked up and what dialpad keys they pressed (e.g., "Press 1 if interested").
*   **Wallet Ledger**: Real-time tracking of telecom credits consumed by the blasts.

### **C2C Reports** (`/admin/c2c-reports`)
*   **Click-to-Call Analytics**: A dedicated table showing every outbound telephony call, its exact talk time, ring duration, and a built-in audio player to listen to the call recordings.

### **Team Hierarchy & Chat** (`/admin/team` & `/admin/chat`)
*   **Internal Chat**: A built-in Slack-like channel for agents and managers to communicate internally.
*   **Hierarchy Manager**: A specialized view mapping out exact reporting structures (who reports to which Team Leader) with quick edit overrides.

### **Live Leaderboard Screen** (`/admin/leaderboard`)
*   **TV-Ready Visuals**: A specialized, high-contrast, gamified UI designed for a sales floor TV. Visually isolates individual agent targets vs daily run-rates with progress bars and "Flame" streaks, free of the standard admin sidebars.

---

## 7. Global Layout & Individual Profiles

### **Top Header Navigation** (Visible Everywhere)
*   **Global Search (Cmd/Ctrl + K)**: A quick-search bar accessible from any page to instantly find specific leads by name or phone number, or look up users.
*   **Notification Center**: The bell icon alerts you to system broadcasts, assigned leads, or WhatsApp message SLA breaches.

### **Security Watermark Strategy**
*   **Data Leak Protection**: The entire admin portal runs with an embedded, repeating, un-clickable watermark stretching diagonally across the screen. It displays your Name/Email and the exact live Timestamp, deterring staff from taking photos of lead data with personal devices.

### **360° Lead Profile** (`/admin/leads/[id]`)
When clicking into any individual lead, Admins access a powerful unified profile:
*   **Visual Pipeline Tracker**: A visual step-by-step progress bar showing exactly where the lead is in the funnel.
*   **AI Engagement Score**: The system calculates a score (0-100) based on the volume of calls and notes, determining how "warm" the lead is.
*   **Stagnation Alerts**: Flags the lead in yellow if it has been stuck in its current status for more than 7 days, or untouched for over a week.
*   **Multi-Tab Investigation**: Toggle instantly between the lead's core details, a chronological **Timeline** of every touchpoint, audio **Call Logs**, and a specific **Audit Log** limited just to that record.
*   **Danger Zone**: The hard-delete function (permanently removing a lead from the database) is restricted to Admins at the bottom of this profile view.

---

**Tip:** Throughout the CRM, you will see a `Tenant_Id` logic ensuring that your data is securely isolated specifically to your company workspace. No other company using this CRM can access your data.
