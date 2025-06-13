# DevOps LinkedIn Hunting Automation

Automate your LinkedIn sourcing process for DevOps Pleno candidates!
This project provides an end-to-end solution for identifying, extracting, and analyzing potential candidates for mid-level DevOps positions, focusing on skills like Kubernetes, CI/CD, Istio, and cloud technologies.

## 🚀 Features

- **Automated Candidate Search**: Uses tools like PhantomBuster or TexAu to scrape LinkedIn profiles based on custom filters.
- **Skill-Based Filtering**: Filters candidates by key DevOps technologies (Kubernetes, ArgoCD, Istio, Docker, CI/CD, AWS, Azure, GCP, etc.).
- **Structured Candidate Database**: Exports candidate data to Google Sheets or Excel for easy management.
- **Automated Fit Analysis**: Integrates with AI (ChatGPT/Perplexity) to generate a detailed adherence analysis for each candidate.
- **Customizable Scorecards \& Dashboards**: Includes templates for technical evaluation and visual dashboards for tracking.
- **Ready-to-Use Prompts**: Provides optimized prompts for AI-based analysis and candidate outreach.


## 🛠️ Tech Stack \& Tools

- [PhantomBuster](https://phantombuster.com/) or [TexAu](https://texau.com/) for LinkedIn automation
- Google Sheets / Microsoft Excel for data management
- [OpenAI ChatGPT](https://platform.openai.com/) or [Perplexity](https://www.perplexity.ai/) for AI-powered analysis
- (Optional) Node.js/Python scripts for workflow automation


## 📦 Repository Structure

```
.
├── prompts/              # Ready-to-use AI prompts
├── templates/            # Google Sheets/Excel templates
├── scripts/              # Automation scripts (PhantomBuster, TexAu, etc.)
├── docs/                 # Documentation and guides
├── dashboards/           # Dashboard examples
└── README.md
```


## ⚡ Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/yourusername/devops-linkedin-hunting.git
cd devops-linkedin-hunting
```


### 2. Set up LinkedIn Automation

- Choose either PhantomBuster or TexAu.
- Follow the [docs/automation-guide.md](docs/automation-guide.md) for detailed setup instructions.
- Configure your search filters for DevOps Pleno (see [docs/filters.md](docs/filters.md)).


### 3. Export \& Analyze Candidates

- Export candidate data to Google Sheets or Excel using the provided templates.
- Use the AI prompts in `/prompts` to generate adherence analyses for each candidate.


### 4. Score and Track

- Use the `/templates` scorecard to evaluate candidates.
- Track progress and visualize results with the dashboard examples.


## 📊 Example Output

- Structured candidate list with key skills and links
- Automated adherence analysis (see [docs/adherence-example.md](docs/adherence-example.md))
- Visual dashboard for tracking pipeline status


## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, new prompts, or additional automation scripts.

## 📄 License

[MIT License](LICENSE)

## 🙋 FAQ

**Q:** Can I adapt this for other tech roles?
**A:** Absolutely! Just adjust the keywords, filters, and templates for your target role.

**Q:** Is this compliant with LinkedIn's Terms of Service?
**A:** Use responsibly. Automated scraping may violate LinkedIn’s terms; consider using LinkedIn Recruiter for compliant sourcing.

---

**Questions or feedback?**
Open an issue or contact [ucosta@gmail.com](mailto:ucosta@gmail.com).

---

Feel free to adapt this template to your specific repository structure, add links, or include additional sections as needed!

