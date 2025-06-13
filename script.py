import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Criar estrutura da planilha de tracking de candidatos DevOps
columns = [
    'ID_Candidato', 'Data_Adicao', 'Nome_Completo', 'Cargo_Atual', 'Empresa_Atual',
    'LinkedIn_URL', 'Email', 'Telefone', 'Localizacao', 
    'Anos_Experiencia', 'Nivel_Senioridade',
    
    # Habilidades Técnicas Core (Yes/No/Parcial)
    'Kubernetes', 'Docker_Containers', 'Istio_ServiceMesh', 'ArgoCD_GitOps', 
    'CI_CD_Tools', 'Prometheus_Grafana', 'Cloud_Provider', 'Terraform_IaC',
    'Pipeline_Security', 'Monitoring_Observability',
    
    # Habilidades Complementares
    'Python_Programming', 'Go_Programming', 'Ruby_Programming',
    'AWS_Certification', 'Azure_Certification', 'GCP_Certification',
    
    # Scoring de Aderência (1-5)
    'Score_Kubernetes', 'Score_Istio', 'Score_ArgoCD', 'Score_CICD', 
    'Score_Observabilidade', 'Score_Cloud', 'Score_Containers', 
    'Score_IaC', 'Score_Seguranca', 'Score_Comunicacao',
    
    # Status e Processo
    'Status_Processo', 'Data_Primeiro_Contato', 'Data_Resposta',
    'Data_Entrevista_Agendada', 'Origem_Candidato', 'Prioridade',
    
    # Análise e Observações
    'Score_Total_Aderencia', 'Nivel_Aderencia', 'Principais_Fortalezas',
    'Lacunas_Identificadas', 'Observacoes_Gerais', 'Proximo_Passo',
    'Responsavel_Recrutamento'
]

# Criar DataFrame vazio com estrutura
df_template = pd.DataFrame(columns=columns)

# Adicionar alguns exemplos fictícios para demonstração
exemplos = [
    {
        'ID_Candidato': 'DEV001',
        'Data_Adicao': '2025-06-12',
        'Nome_Completo': 'João Silva Santos',
        'Cargo_Atual': 'DevOps Engineer',
        'Empresa_Atual': 'TechCorp Brasil',
        'LinkedIn_URL': 'linkedin.com/in/joaosilva-devops',
        'Email': 'joao.silva@email.com',
        'Telefone': '+55 11 99999-9999',
        'Localizacao': 'São Paulo, SP',
        'Anos_Experiencia': 4,
        'Nivel_Senioridade': 'Pleno',
        'Kubernetes': 'Yes',
        'Docker_Containers': 'Yes',
        'Istio_ServiceMesh': 'Parcial',
        'ArgoCD_GitOps': 'Yes',
        'CI_CD_Tools': 'Yes',
        'Prometheus_Grafana': 'Yes',
        'Cloud_Provider': 'AWS',
        'Terraform_IaC': 'Parcial',
        'Pipeline_Security': 'Parcial',
        'Monitoring_Observability': 'Yes',
        'Python_Programming': 'Yes',
        'Go_Programming': 'No',
        'Ruby_Programming': 'No',
        'AWS_Certification': 'Yes',
        'Azure_Certification': 'No',
        'GCP_Certification': 'No',
        'Score_Kubernetes': 5,
        'Score_Istio': 3,
        'Score_ArgoCD': 4,
        'Score_CICD': 5,
        'Score_Observabilidade': 5,
        'Score_Cloud': 4,
        'Score_Containers': 5,
        'Score_IaC': 3,
        'Score_Seguranca': 3,
        'Score_Comunicacao': 4,
        'Status_Processo': 'Para Contatar',
        'Data_Primeiro_Contato': '',
        'Data_Resposta': '',
        'Data_Entrevista_Agendada': '',
        'Origem_Candidato': 'LinkedIn Search',
        'Prioridade': 'Alta',
        'Score_Total_Aderencia': 4.1,
        'Nivel_Aderencia': 'Alta',
        'Principais_Fortalezas': 'Kubernetes expert, strong CI/CD, AWS certified',
        'Lacunas_Identificadas': 'Limited Istio experience, basic Terraform',
        'Observacoes_Gerais': 'Strong technical profile, good cultural fit indicators',
        'Proximo_Passo': 'Send initial LinkedIn message',
        'Responsavel_Recrutamento': 'Ana Recruiter'
    },
    {
        'ID_Candidato': 'DEV002',
        'Data_Adicao': '2025-06-12',
        'Nome_Completo': 'Maria Oliveira Costa',
        'Cargo_Atual': 'SRE Engineer',
        'Empresa_Atual': 'FinTech Inovação',
        'LinkedIn_URL': 'linkedin.com/in/maria-oliveira-sre',
        'Email': 'maria.costa@email.com',
        'Telefone': '+55 11 88888-8888',
        'Localizacao': 'Rio de Janeiro, RJ',
        'Anos_Experiencia': 5,
        'Nivel_Senioridade': 'Pleno/Senior',
        'Kubernetes': 'Yes',
        'Docker_Containers': 'Yes',
        'Istio_ServiceMesh': 'Yes',
        'ArgoCD_GitOps': 'Parcial',
        'CI_CD_Tools': 'Yes',
        'Prometheus_Grafana': 'Yes',
        'Cloud_Provider': 'GCP',
        'Terraform_IaC': 'Yes',
        'Pipeline_Security': 'Yes',
        'Monitoring_Observability': 'Yes',
        'Python_Programming': 'Yes',
        'Go_Programming': 'Yes',
        'Ruby_Programming': 'No',
        'AWS_Certification': 'No',
        'Azure_Certification': 'No',
        'GCP_Certification': 'Yes',
        'Score_Kubernetes': 5,
        'Score_Istio': 4,
        'Score_ArgoCD': 3,
        'Score_CICD': 5,
        'Score_Observabilidade': 5,
        'Score_Cloud': 4,
        'Score_Containers': 5,
        'Score_IaC': 4,
        'Score_Seguranca': 4,
        'Score_Comunicacao': 5,
        'Status_Processo': 'Aguardando Resposta',
        'Data_Primeiro_Contato': '2025-06-11',
        'Data_Resposta': '',
        'Data_Entrevista_Agendada': '',
        'Origem_Candidato': 'PhantomBuster Search',
        'Prioridade': 'Muito Alta',
        'Score_Total_Aderencia': 4.4,
        'Nivel_Aderencia': 'Muito Alta',
        'Principais_Fortalezas': 'Istio expert, strong programming skills, GCP certified',
        'Lacunas_Identificadas': 'Limited ArgoCD experience',
        'Observacoes_Gerais': 'Excellent technical profile, leadership experience',
        'Proximo_Passo': 'Follow-up message in 2 days',
        'Responsavel_Recrutamento': 'Carlos Tech Lead'
    }
]

# Adicionar exemplos ao DataFrame
for exemplo in exemplos:
    df_template = pd.concat([df_template, pd.DataFrame([exemplo])], ignore_index=True)

# Salvar como CSV
df_template.to_csv('DevOps_Candidates_Tracking_Template.csv', index=False, encoding='utf-8')

print("✅ Planilha de Tracking de Candidatos DevOps criada!")
print(f"📊 Estrutura: {len(columns)} colunas")
print(f"📋 Exemplos inclusos: {len(exemplos)} candidatos de demonstração")
print("\n🔍 Principais seções da planilha:")
print("- Dados básicos do candidato")
print("- Habilidades técnicas core (Kubernetes, Istio, ArgoCD, etc.)")
print("- Habilidades complementares (programação, certificações)")
print("- Scoring de aderência (1-5 para cada critério)")
print("- Status do processo de recrutamento")
print("- Análise qualitativa e próximos passos")

# Exibir preview da estrutura
print("\n📋 Preview da estrutura:")
print(df_template.head())