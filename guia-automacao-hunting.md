# Guia Completo de Automação para Hunting DevOps no LinkedIn

## 1. Configuração do PhantomBuster

### Passo 1: Setup Inicial
```
1. Acesse: https://phantombuster.com
2. Crie conta (trial de 14 dias grátis)
3. Instale a extensão do Chrome
4. Conecte sua conta LinkedIn (use conta pessoal ou Sales Navigator)
```

### Passo 2: Phantoms Recomendados para DevOps Hunting

#### A) LinkedIn Search Scraper
```
- Nome: "LinkedIn Search Export"
- Função: Extrair perfis de busca do LinkedIn
- Input: URL de busca LinkedIn ou Sales Navigator
- Output: CSV com dados dos perfis

Configuração:
- Max profiles per launch: 50
- Launch frequency: 2x per day
- Randomize timing: Yes
```

#### B) LinkedIn Profile Scraper
```
- Nome: "LinkedIn Profile Scraper"  
- Função: Extrair dados detalhados de perfis específicos
- Input: Lista de URLs de perfis
- Output: CSV com experiências, skills, certificações

Configuração:
- Max profiles per launch: 20
- Include email discovery: Yes (extra cost)
- Include skills section: Yes
```

### Passo 3: Strings de Busca para DevOps

#### Busca Básica LinkedIn:
```
DevOps Engineer (Kubernetes OR "Container" OR Docker) (AWS OR Azure OR GCP) Brazil
```

#### Busca Avançada Sales Navigator:
```
Keywords: DevOps Engineer, SRE, Platform Engineer, Cloud Engineer
Skills: Kubernetes, Docker, CI/CD, AWS, Terraform, Prometheus
Location: Brazil
Years of Experience: 3-8
Industry: Information Technology
```

#### Busca por Tecnologias Específicas:
```
("Kubernetes" AND "Istio") OR ("ArgoCD" AND "GitOps") (Brazil OR Remote) -"Junior"
```

### Passo 4: Workflow de Automação PhantomBuster

```
1. LinkedIn Search Export → Extract profiles from search
2. Filter results → Remove irrelevant profiles  
3. LinkedIn Profile Scraper → Get detailed data
4. Export to Google Sheets → Auto-sync with tracking sheet
5. Run AI Analysis → Use ChatGPT API for screening
```

## 2. Configuração do TexAu (Alternativa)

### Vantagens do TexAu:
- Interface mais simples
- Melhor integração com email tools
- Workflows pre-built
- Preço mais acessível

### Configuração Básica:
```
Plan Recomendado: Starter ($79/mês)
- 30 horas de automação/mês
- 500 créditos de enriquecimento
- Integração com Google Sheets
- Webhook para ChatGPT
```

### Receitas Prontas para DevOps:
```
1. "LinkedIn DevOps Prospecting"
2. "Tech Talent Search & Enrich"  
3. "Automated Candidate Outreach"
4. "Multi-channel DevOps Recruiting"
```

## 3. Estrutura de Google Sheets para Automação

### Sheet 1: "Raw Data" (Dados Brutos)
```
Colunas automáticas do PhantomBuster:
- profileUrl
- firstName, lastName
- currentJobTitle, currentCompany
- location, industry
- skills, experience
- contactInfo
```

### Sheet 2: "Processed Candidates" (Candidatos Processados)
```
Usa a planilha DevOps_Candidates_Tracking_Template.csv que criamos
Alimentada via:
- Zapier integration
- Google Apps Script
- Manual import
```

### Sheet 3: "AI Analysis" (Análise IA)
```
Colunas:
- Candidate_ID
- Raw_Profile_Data  
- ChatGPT_Analysis
- Adherence_Score
- Recommendation
- Analysis_Date
```

## 4. Integração com ChatGPT API

### Método 1: Zapier Integration
```
Trigger: New row in Google Sheets
Action: Send to ChatGPT API
Process: Analyze profile using our prompts
Output: Update sheet with analysis
```

### Método 2: Google Apps Script
```javascript
function analyzeCandidate(profileData) {
  const apiKey = 'YOUR_OPENAI_API_KEY';
  const prompt = `Analise este perfil DevOps: ${profileData}`;
  
  const response = UrlFetchApp.fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify({
      model: 'gpt-4',
      messages: [{role: 'user', content: prompt}],
      max_tokens: 1000
    })
  });
  
  return JSON.parse(response.getContentText());
}
```

## 5. Workflow Completo de Automação

### Dia 1-2: Setup
```
1. Configure PhantomBuster/TexAu
2. Setup Google Sheets structure
3. Configure AI integration
4. Test with small batch (10 profiles)
```

### Dia 3+: Operação
```
Morning (9:00):
1. Launch LinkedIn Search (50 profiles)
2. Auto-import to Google Sheets
3. AI analysis triggers automatically
4. Review high-score candidates

Afternoon (14:00):  
1. Launch Profile Scraper (detailed data)
2. Update tracking sheet
3. Send outreach messages
4. Schedule follow-ups

Evening (18:00):
1. Review responses
2. Update candidate status
3. Plan next day searches
```

## 6. Métricas e KPIs para Acompanhar

### Automação:
```
- Profiles scraped per day
- Data accuracy rate
- AI analysis accuracy
- Time saved vs manual process
```

### Recruiting:
```
- Response rate to outreach
- Interview conversion rate  
- Offer acceptance rate
- Time to hire
- Cost per hire
```

## 7. Configurações de Segurança

### LinkedIn Account Safety:
```
- Max 100 profile views per day
- Space actions throughout day
- Use residential proxy
- Vary timing patterns
- Monitor account health
```

### Data Protection:
```
- Use encrypted storage
- Limit data retention  
- Comply with LGPD/GDPR
- Secure API keys
- Regular backup
```

## 8. Troubleshooting Common Issues

### PhantomBuster:
```
Issue: LinkedIn blocking
Solution: Reduce frequency, use proxy, vary timing

Issue: Email not found
Solution: Use multiple discovery services

Issue: Data quality poor
Solution: Refine search strings, add filters
```

### TexAu:
```
Issue: Automation stopped
Solution: Check account limits, restart workflow

Issue: Integration failed  
Solution: Verify API keys, check webhook URLs

Issue: Data not syncing
Solution: Review Google Sheets permissions
```

## 9. Custo-Benefício

### Ferramentas (Mensal):
```
PhantomBuster Pro: $59
ou TexAu Starter: $79
ChatGPT API: ~$20
Google Workspace: $6
Total: ~$85-105/mês
```

### ROI Estimado:
```
Tempo economizado: 15-20h/semana
Aumento na qualidade: 40-50%
Redução time-to-hire: 30%
ROI típico: 300-500%
```

## 10. Checklist de Implementação

### Semana 1:
- [ ] Setup ferramentas básicas
- [ ] Configurar planilhas
- [ ] Testar com 10 perfis
- [ ] Ajustar prompts AI

### Semana 2:  
- [ ] Automatizar workflow completo
- [ ] Configurar integrações
- [ ] Treinar equipe
- [ ] Documentar processos

### Semana 3+:
- [ ] Monitorar métricas
- [ ] Otimizar performance  
- [ ] Escalar operação
- [ ] Iterar melhorias

## 11. Scripts e Códigos Úteis

### Google Apps Script para Scoring:
```javascript
function calculateAdherenceScore(row) {
  const weights = {
    kubernetes: 0.2,
    istio: 0.15, 
    cicd: 0.15,
    cloud: 0.15,
    containers: 0.1,
    monitoring: 0.1,
    iac: 0.1,
    security: 0.05
  };
  
  let totalScore = 0;
  for (let skill in weights) {
    totalScore += row[skill] * weights[skill];
  }
  
  return Math.round(totalScore * 10) / 10;
}
```

### Webhook para TexAu → ChatGPT:
```python
import requests
import json

def analyze_linkedin_profile(profile_data):
    prompt = f"""
    Analise este perfil DevOps e dê um score de 1-5:
    {profile_data}
    """
    
    response = requests.post(
        'https://api.openai.com/v1/chat/completions',
        headers={'Authorization': f'Bearer {API_KEY}'},
        json={
            'model': 'gpt-4',
            'messages': [{'role': 'user', 'content': prompt}],
            'max_tokens': 500
        }
    )
    
    return response.json()
```

## Próximos Passos

1. **Escolha sua ferramenta**: PhantomBuster (mais features) ou TexAu (mais simples)
2. **Configure o ambiente**: Siga o checklist da Semana 1
3. **Teste com dados reais**: Use as strings de busca fornecidas
4. **Implemente gradualmente**: Comece com automação parcial
5. **Monitore e otimize**: Use as métricas para melhorar continuamente

**Está pronto para começar? Qual ferramenta você gostaria de configurar primeiro?**