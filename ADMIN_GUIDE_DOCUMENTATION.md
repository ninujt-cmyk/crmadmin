# Admin Capabilities Guide - Documentation

## Overview

This is a complete web-based presentation guide for the CRM Admin Panel. It provides an interactive tabbed interface where you can navigate through different sections and view detailed information about each function along with its corresponding screenshot.

## Features

✅ **7 Main Sections** covering the entire admin panel:
- Overview Section (Dashboard)
- Lead Management
- Team Management
- Analytics & Reporting
- System Configuration
- Hidden / Direct-Access Modules
- Global Layout & Profiles

✅ **Interactive Tab Navigation** - Click on any section to view its functions

✅ **Function Details** - Each function shows:
- Route/URL path
- Description
- Key features list
- Screenshot display area

✅ **Screenshot Placeholder System** - Shows where screenshots should be uploaded

✅ **Responsive Design** - Works on desktop, tablet, and mobile devices

✅ **Dark Mode Support** - Automatically adapts to system theme

## How to Use

### 1. Navigation
- Click on the tabs at the top to switch between sections
- Each section contains multiple functions
- Click on any function in the left panel to view its details

### 2. Viewing Details
- When you click a function, the right panel shows:
  - Function name and route
  - Description
  - List of key features
  - Screenshot display area

### 3. Uploading Screenshots

#### Screenshot Directory
All screenshots should be placed in: `public/images/admin-guide/`

#### Screenshot Naming Convention
Each screenshot follows this pattern:
```
{section}_{function}.png
```

#### Required Screenshots List

**Overview Section:**
- `overview_dashboard.png`

**Lead Management:**
- `lead-management_all-leads.png`
- `lead-management_upload-leads.png`
- `lead-management_available-leads.png`

**Team Management:**
- `team-management_users.png`
- `team-management_attendance.png`
- `team-management_leave-management.png`
- `team-management_whatsapp.png`

**Analytics & Reporting:**
- `analytics_reports.png`
- `analytics_login-management.png`
- `analytics_disbursement-report.png`
- `analytics_audit-logs.png`
- `analytics_wallboard.png`
- `analytics_operations.png`
- `analytics_dialer-assignment.png`

**System Configuration:**
- `system-settings.png`

**Hidden / Direct-Access Modules:**
- `hidden_broadcast-center.png`
- `hidden_ivr-campaigns.png`
- `hidden_c2c-reports.png`
- `hidden_team-hierarchy.png`
- `hidden_live-leaderboard.png`

**Global Layout & Profiles:**
- `global-header-navigation.png`
- `global-security-watermark.png`
- `global-360-lead-profile.png`

### 4. Taking Screenshots

#### Recommended Screenshot Size
- **Width:** 1920px or wider
- **Format:** PNG (preferred) or JPG
- **Quality:** High resolution for clarity

#### Screenshot Tips
- Capture the full function interface
- Ensure text is readable
- Show all key features mentioned in the description
- Use consistent resolution across all screenshots
- Crop out browser chrome if desired

## File Structure

```
my-project/
├── public/
│   └── images/
│       └── admin-guide/
│           ├── README.md (screenshot instructions)
│           ├── overview_dashboard.png
│           ├── lead-management_all-leads.png
│           └── ... (other screenshots)
├── src/
│   └── app/
│       └── page.tsx (main guide application)
└── upload/
    └── admin_capabilities_guide.md (source documentation)
```

## Technical Details

### Technologies Used
- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

### Key Components
- **Tabs System:** For section navigation
- **Cards:** For organizing content
- **Scroll Area:** For scrolling through function lists
- **Badges:** For displaying routes and status
- **Responsive Grid:** For adaptable layout

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Adding New Functions
To add a new function to an existing section:

1. Open `src/app/page.tsx`
2. Find the section you want to modify in `guideData`
3. Add a new function object to the `functions` array:

```typescript
{
  id: 'your-function-id',
  name: 'Function Name',
  route: '/admin/your-route',
  description: 'Function description here.',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  image: '/images/admin-guide/section_function-name.png'
}
```

### Adding New Sections
To add an entirely new section:

1. Add a new section object to `guideData`:

```typescript
yourSectionKey: {
  title: "Your Section Title",
  icon: YourIconComponent,
  functions: [
    // Add functions here
  ]
}
```

2. Update the `TabsList` to include the new section tab (automatic based on data)

### Modifying Styling
The application uses Tailwind CSS classes. Common modifications:
- Colors: Change `slate` to other color scales (e.g., `blue`, `green`, `purple`)
- Spacing: Adjust `p-4`, `gap-6`, etc.
- Typography: Modify `text-2xl`, `font-bold`, etc.

## Troubleshooting

### Screenshots Not Showing
**Problem:** Screenshot placeholders show instead of actual images

**Solution:**
1. Check that screenshots are in `public/images/admin-guide/`
2. Verify file names match exactly (case-sensitive)
3. Ensure file format is PNG or JPG
4. Refresh the browser (Ctrl/Cmd + Shift + R)

### Images Look Blurry
**Problem:** Screenshots appear pixelated or blurry

**Solution:**
- Use higher resolution screenshots (1920px width or more)
- Save as PNG for better quality
- Check browser zoom level (should be 100%)

### Tab Navigation Not Working
**Problem:** Clicking tabs doesn't change the view

**Solution:**
- Clear browser cache
- Check browser console for errors
- Ensure JavaScript is enabled

## Future Enhancements

Potential improvements to consider:
- [ ] Add search functionality to find functions quickly
- [ ] Implement screenshot zoom/lightbox feature
- [ ] Add video tutorials alongside screenshots
- [ ] Include interactive demos
- [ ] Add print-friendly version
- [ ] Implement progress tracking for users
- [ ] Add keyboard shortcuts for navigation
- [ ] Include code snippets where applicable

## Support

For issues or questions:
1. Check this documentation
2. Review the README in `public/images/admin-guide/`
3. Examine the source code in `src/app/page.tsx`

## License

This guide is part of the CRM Admin Panel documentation.
