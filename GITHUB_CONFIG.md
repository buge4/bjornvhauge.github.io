# GitHub Configuration for bjornvhauge.com

## Project Information
- **Project Name:** bjornvhauge.com (Personal Website)
- **Type:** Static HTML/CSS/JS site hosted on GitHub Pages
- **Domain:** https://bjornvhauge.com
- **Custom Domain:** Configured via Namecheap DNS pointing to GitHub Pages

## GitHub Repository
- **GitHub Username:** buge4
- **Repository Name:** bjornvhauge.github.io
- **Repository URL:** https://github.com/buge4/bjornvhauge.github.io
- **Visibility:** Public (required for GitHub Pages free tier)
- **Branch:** master (main branch for GitHub Pages)

## Deployment
- **Hosting:** GitHub Pages
- **Deployment Method:** Automatic on push to master branch
- **DNS:** Configured at Namecheap
  - A Records pointing to GitHub Pages IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
  - CNAME for www subdomain

## File Structure
```
bjornvhauge-website/
├── index.html          # Main page
├── styles.css          # Styling
├── js/
│   └── i18n.js         # Internationalization (8 languages)
├── lang/               # Language JSON files
│   ├── no.json (Norwegian)
│   ├── en.json (English)
│   ├── de.json (German)
│   ├── fr.json (French)
│   ├── es.json (Spanish)
│   ├── zh.json (Chinese)
│   ├── ja.json (Japanese)
│   └── ko.json (Korean)
├── images/             # Profile images
├── covers/             # Book covers (stored on Manus S3 CDN)
├── CNAME               # Custom domain file
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search engine directives
└── README.md           # Documentation
```

## Related Projects
- **rettens-time-web:** Backend/working station with full book content (private database)
  - Located at: /home/ubuntu/rettens-time-web
  - Type: Manus webdev project (React + tRPC + Drizzle ORM)
  - Database: MySQL/TiDB (via DATABASE_URL env var)
  - Purpose: Content management and book development

## Important Notes
1. **Book Covers:** All book cover images are stored on Manus S3 CDN
   - URL pattern: https://d2xsxph8kpxj0f.cloudfront.net/310519663165522617/FQjNCzNeMacxQGcnzkRGdY/rettens-time/...
   - Manus Project ID: 310519663165522617/FQjNCzNeMacxQGcnzkRGdY

2. **Content Strategy:**
   - bjornvhauge.com: Public-facing site with book summaries only (no full content)
   - rettens-time-web: Private working station with full book content
   - Reason: Protecting intellectual property while promoting books for publishing

3. **Deployment Process:**
   - Make changes locally in /home/ubuntu/bjornvhauge-website
   - Commit changes: `git commit -m "message"`
   - Push to GitHub: `git push origin master`
   - GitHub Pages automatically deploys (1-2 minutes)
   - Website updates at https://bjornvhauge.com

## Git Configuration
```bash
cd /home/ubuntu/bjornvhauge-website

# Set git user
git config user.email "bjorn@veriton.io"
git config user.name "Bjørn V. Hauge"

# View remote
git remote -v

# Push changes
git push origin master
```

## Troubleshooting
- **Site not updating:** Wait 1-2 minutes for GitHub Pages to rebuild
- **DNS issues:** Check Namecheap DNS settings, verify A records and CNAME
- **HTTPS not working:** GitHub Pages provides free SSL, may take 24 hours to provision
- **Images not loading:** Check image paths are relative or use full CDN URLs

## Last Updated
- Date: 2026-02-02
- Changes: Fixed book titles (removed subtitles) and reordered book cards
