# Criar scorecard estruturado para avaliação de candidatos DevOps
import pandas as pd
from datetime import datetime

# Definir estrutura do scorecard
scorecard_data = {
    'Categoria': [
        'Kubernetes & Container Orchestration',
        'Kubernetes & Container Orchestration', 
        'Kubernetes & Container Orchestration',
        'Kubernetes & Container Orchestration',
        'Service Mesh & Networking',
        'Service Mesh & Networking',
        'Service Mesh & Networking', 
        'CI/CD & GitOps',
        'CI/CD & GitOps',
        'CI/CD & GitOps',
        'CI/CD & GitOps',
        'Cloud Infrastructure',
        'Cloud Infrastructure',
        'Cloud Infrastructure',
        'Observabilidade & Monitoring',
        'Observabilidade & Monitoring',
        'Observabilidade & Monitoring',
        'Infraestrutura como Código',
        'Infraestrutura como Código',
        'Infraestrutura como Código',
        'Segurança DevSecOps',
        'Segurança DevSecOps',
        'Segurança DevSecOps',
        'Soft Skills',
        'Soft Skills',
        'Soft Skills',
        'Experiência & Background',
        'Experiência & Background',
        'Experiência & Background'
    ],
    'Critério': [
        'Administração Kubernetes', 
        'Troubleshooting K8s',
        'RBAC & Security K8s',
        'Container Management (Docker)',
        'Istio Implementation',
        'Service Mesh Concepts',
        'Traffic Management',
        'Pipeline Design (GitLab CI, Jenkins)',
        'ArgoCD & GitOps',
        'Automated Testing',
        'Release Management',
        'Multi-Cloud Experience',
        'Cloud-Native Services',
        'Cost Optimization',
        'Prometheus & Grafana',
        'Logging (Loki, ELK)',
        'APM & Distributed Tracing',
        'Terraform/Ansible',
        'Infrastructure Automation',
        'Configuration Management',
        'Pipeline Security',
        'Vulnerability Scanning',
        'Compliance & Governance',
        'Comunicação Técnica',
        'Trabalho em Equipe',
        'Problem Solving',
        'Anos Experiência DevOps',
        'Complexidade Projetos',
        'Liderança Técnica'
    ],
    'Peso': [
        20, 15, 10, 10,  # Kubernetes: 55 pontos
        15, 10, 5,       # Service Mesh: 30 pontos  
        15, 15, 10, 10,  # CI/CD: 50 pontos
        10, 10, 5,       # Cloud: 25 pontos
        15, 10, 5,       # Observabilidade: 30 pontos
        15, 10, 5,       # IaC: 30 pontos
        10, 5, 5,        # Segurança: 20 pontos
        10, 10, 10,      # Soft Skills: 30 pontos
        10, 10, 10       # Experiência: 30 pontos
    ],
    'Score_1_Ruim': [
        'Conhecimento básico, apenas containers simples',
        'Não consegue diagnosticar problemas complexos', 
        'Não conhece RBAC nem security policies',
        'Usa Docker apenas para desenvolvimento',
        'Nunca implementou Istio',
        'Não entende conceitos de service mesh',
        'Não sabe configurar traffic splitting',
        'Conhece apenas pipelines básicos',
        'Nunca usou GitOps',
        'Não automatiza testes',
        'Deploy manual sem versionamento',
        'Experiência em apenas uma cloud',
        'Usa apenas recursos básicos (VMs, storage)',
        'Não se preocupa com custos',
        'Conhece apenas dashboards prontos',
        'Logs básicos, sem agregação',
        'Não conhece APM tools',
        'Infraestrutura manual/imperative',
        'Pouca automação',
        'Configuração manual',
        'Não implementa security scanning',
        'Não usa ferramentas de vulnerabilidade',
        'Não conhece frameworks de compliance',
        'Dificuldade para explicar conceitos técnicos',
        'Prefere trabalhar sozinho',
        'Espera soluções prontas',
        '0-1 anos como DevOps',
        'Projetos pequenos/simples',
        'Nunca liderou tecnicamente'
    ],
    'Score_3_Adequado': [
        'Gerencia clusters pequenos/médios',
        'Resolve problemas rotineiros',
        'Implementa RBAC básico',
        'Containeriza aplicações complexas',
        'Implementou Istio com tutoriais',
        'Entende service mesh para microserviços',
        'Configura routing básico',
        'Mantém pipelines CI/CD funcionais',
        'Usa ArgoCD para deploy automático',
        'Automatiza testes unitários/integração',
        'Deploy automatizado com rollback',
        'Trabalha com 2-3 cloud providers',
        'Usa serviços managed (EKS, RDS, etc)',
        'Monitora custos básicos',
        'Configura alertas customizados',
        'Implementa logging centralizado',
        'Usa ferramentas básicas de APM',
        'Mantém IaC para recursos principais',
        'Automatiza provisionamento',
        'Usa configuration management tools',
        'Integra security scanning nos pipelines',
        'Usa ferramentas de vulnerability assessment',
        'Implementa policies básicas',
        'Explica conceitos para diferentes audiências',
        'Colabora bem em times multidisciplinares',
        'Identifica e resolve problemas proativamente',
        '3-5 anos experiência DevOps',
        'Projetos médios/corporativos',
        'Lidera pequenos times ou iniciativas'
    ],
    'Score_5_Excelente': [
        'Gerencia clusters multi-tenancy complexos',
        'Expert em troubleshooting performance/security',
        'Implementa security policies avançadas',
        'Otimiza containers para produção',
        'Expert em Istio, customizações avançadas',
        'Arquiteta soluções service mesh complexas',
        'Implementa traffic policies sofisticadas',
        'Arquiteta pipelines para organizações',
        'Especialista GitOps, multi-environment',
        'Framework completo de testing automatizado',
        'Advanced deployment strategies (blue/green, canary)',
        'Expert multi-cloud, hibrid environments',
        'Arquiteta soluções cloud-native complexas',
        'Implementa FinOps, automated cost optimization',
        'Expertise completa em observabilidade',
        'Implementa logging/monitoring enterprise',
        'Full observability stack implementation',
        'IaC para infraestrutura enterprise complexa',
        'Automação completa end-to-end',
        'Advanced configuration management',
        'Security-first approach, zero-trust implementation',
        'DevSecOps pipeline completo',
        'Compliance frameworks implementation',
        'Comunica visão técnica para C-level',
        'Mentora times, knowledge sharing',
        'Innovation mindset, cria soluções disruptivas',
        '6+ anos experiência DevOps especializada',
        'Projetos enterprise/scale críticos',
        'Lidera transformação DevOps organizacional'
    ]
}

# Criar DataFrame do scorecard
df_scorecard = pd.DataFrame(scorecard_data)

# Salvar scorecard template
df_scorecard.to_csv('DevOps_Interview_Scorecard_Template.csv', index=False, encoding='utf-8')

# Criar exemplo de scorecard preenchido para candidato
candidato_exemplo = {
    'Nome_Candidato': 'João Silva Santos',
    'Posicao': 'DevOps Engineer Pleno',
    'Data_Entrevista': '2025-06-15',
    'Entrevistador': 'Carlos Tech Lead',
    'Categoria': df_scorecard['Categoria'].tolist(),
    'Criterio': df_scorecard['Critério'].tolist(),
    'Peso': df_scorecard['Peso'].tolist(),
    'Score_Atribuido': [
        4, 4, 3, 5,      # Kubernetes
        3, 3, 2,         # Service Mesh  
        5, 4, 4, 4,      # CI/CD
        4, 4, 3,         # Cloud
        5, 4, 3,         # Observabilidade
        3, 3, 3,         # IaC
        3, 3, 3,         # Segurança
        4, 4, 4,         # Soft Skills
        4, 4, 3          # Experiência
    ],
    'Evidencias_Notas': [
        'Gerencia EKS em produção há 2 anos',
        'Resolveu incidents complexos de performance',
        'RBAC básico implementado',
        'Containerização avançada, multi-stage builds',
        'Estudou Istio, implementação básica',
        'Conhece conceitos, pouca prática',
        'Traffic routing básico',
        'Mantém pipelines GitLab CI complexos',
        'ArgoCD em uso há 1 ano',
        'Testes automatizados bem estruturados',
        'Deploy com rollback automático',
        'AWS expert, alguma experiência Azure',
        'EKS, RDS, S3, CloudWatch',
        'Monitora custos da equipe',
        'Prometheus/Grafana expert',
        'Centralized logging implementado',
        'New Relic básico',
        'Terraform para recursos principais',
        'Scripts de automação personalizados',
        'Ansible para configuração',
        'Security scanning nos pipelines',
        'Trivy, OWASP ZAP integrados',
        'Compliance básico ISO 27001',
        'Apresenta bem para stakeholders',
        'Colaborativo, mentora júniores',
        'Proativo em melhorias',
        '4 anos DevOps focado',
        'Projetos médio/grande porte',
        'Lead técnico de squad'
    ]
}

# Calcular score total
scores = candidato_exemplo['Score_Atribuido'] 
pesos = candidato_exemplo['Peso']
score_ponderado = sum(s * p for s, p in zip(scores, pesos)) / sum(pesos)

candidato_exemplo['Score_Total'] = round(score_ponderado, 2)
candidato_exemplo['Score_Percentual'] = round(score_ponderado * 20, 1)  # Converter para %

# Classificação de aderência
if score_ponderado >= 4.5:
    nivel_aderencia = 'Muito Alta'
elif score_ponderado >= 4.0:
    nivel_aderencia = 'Alta'  
elif score_ponderado >= 3.5:
    nivel_aderencia = 'Média'
elif score_ponderado >= 3.0:
    nivel_aderencia = 'Baixa'
else:
    nivel_aderencia = 'Muito Baixa'

candidato_exemplo['Nivel_Aderencia'] = nivel_aderencia

# Criar DataFrame do exemplo
df_exemplo = pd.DataFrame({
    'Categoria': candidato_exemplo['Categoria'],
    'Criterio': candidato_exemplo['Criterio'], 
    'Peso': candidato_exemplo['Peso'],
    'Score': candidato_exemplo['Score_Atribuido'],
    'Evidencias': candidato_exemplo['Evidencias_Notas']
})

# Adicionar informações do candidato
info_candidato = pd.DataFrame({
    'Campo': ['Nome', 'Posição', 'Data Entrevista', 'Entrevistador', 'Score Total', 'Score %', 'Nível Aderência'],
    'Valor': [
        candidato_exemplo['Nome_Candidato'],
        candidato_exemplo['Posicao'], 
        candidato_exemplo['Data_Entrevista'],
        candidato_exemplo['Entrevistador'],
        candidato_exemplo['Score_Total'],
        f"{candidato_exemplo['Score_Percentual']}%",
        candidato_exemplo['Nivel_Aderencia']
    ]
})

# Salvar exemplo completo
with pd.ExcelWriter('DevOps_Scorecard_Exemplo_Preenchido.xlsx', engine='openpyxl') as writer:
    info_candidato.to_excel(writer, sheet_name='Info_Candidato', index=False)
    df_exemplo.to_excel(writer, sheet_name='Scorecard_Detalhado', index=False)

# Análise por categoria
categorias_unicas = df_scorecard['Categoria'].unique()
analise_categoria = []

for categoria in categorias_unicas:
    indices = df_scorecard['Categoria'] == categoria
    scores_cat = [candidato_exemplo['Score_Atribuido'][i] for i in range(len(indices)) if indices.iloc[i]]
    pesos_cat = [candidato_exemplo['Peso'][i] for i in range(len(indices)) if indices.iloc[i]]
    
    score_medio = sum(s * p for s, p in zip(scores_cat, pesos_cat)) / sum(pesos_cat)
    
    analise_categoria.append({
        'Categoria': categoria,
        'Score_Medio': round(score_medio, 2),
        'Peso_Total': sum(pesos_cat),
        'Contribuicao_Score': round(score_medio * sum(pesos_cat) / sum(pesos), 2)
    })

df_analise = pd.DataFrame(analise_categoria)
df_analise.to_csv('Analise_por_Categoria.csv', index=False, encoding='utf-8')

print("✅ Sistema de Scorecard DevOps criado!")
print(f"📊 Template com {len(df_scorecard)} critérios de avaliação")
print(f"🎯 Score total do exemplo: {candidato_exemplo['Score_Total']}/5.0 ({candidato_exemplo['Score_Percentual']}%)")
print(f"📈 Nível de aderência: {candidato_exemplo['Nivel_Aderencia']}")

print("\n📋 Análise por categoria:")
for _, row in df_analise.iterrows():
    print(f"- {row['Categoria']}: {row['Score_Medio']}/5.0 (peso: {row['Peso_Total']})")

print("\n📁 Arquivos criados:")
print("- DevOps_Interview_Scorecard_Template.csv (template vazio)")
print("- DevOps_Scorecard_Exemplo_Preenchido.xlsx (exemplo completo)")
print("- Analise_por_Categoria.csv (análise por categoria)")

# Mostrar estrutura do scorecard
print("\n🔍 Preview do template:")
print(df_scorecard.head(10))