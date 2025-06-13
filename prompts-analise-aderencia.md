# Prompts para Análise Automatizada de Aderência - DevOps Pleno

## 1. Prompt Principal para Análise Completa

```
# CONTEXTO
Você é um especialista em recrutamento técnico com foco em DevOps. Sua tarefa é analisar o perfil de um candidato e compará-lo com os requisitos de uma vaga de DevOps Engineer Pleno.

# PERFIL DA VAGA
**Título:** DevOps Engineer Pleno – Kubernetes, CD, Istio, Containers

**Requisitos Obrigatórios:**
- Experiência sólida em Kubernetes (administração, troubleshooting, upgrades, RBAC)
- Experiência com containers (Docker, Podman)
- Experiência com Istio ou outras soluções de service mesh
- Experiência em clouds públicas (AWS, Azure, GCP)
- Experiência com CI/CD (GitLab CI, Jenkins, CircleCI, ArgoCD)
- Conhecimento em monitoramento (Prometheus, Grafana, Loki)
- Experiência com infraestrutura como código (Terraform, Ansible)
- Práticas de segurança em pipelines e ambientes cloud
- Habilidades de comunicação e trabalho em equipe

**Diferenciais:**
- Programação (Python, Go, Ruby)
- Certificações cloud (AWS, Azure, GCP)

# PERFIL DO CANDIDATO
[INSERIR AQUI O RESUMO DO PERFIL LINKEDIN DO CANDIDATO]

# TAREFA
Analise o candidato seguindo exatamente esta estrutura:

## Análise de Aderência: [Nome do Candidato] x Vaga DevOps Pleno

### 1. Resumo Geral do Perfil
[Síntese em 2-3 frases das experiências e foco do candidato]

### 2. Matching dos Requisitos da Vaga x Experiências

| Requisito/Responsabilidade | Aderência | Evidências |
|---------------------------|-----------|------------|
| Kubernetes (administração, troubleshooting) | [Alta/Média/Baixa/Não encontrado] | [Evidência específica do perfil] |
| Istio/Service Mesh | [Alta/Média/Baixa/Não encontrado] | [Evidência específica do perfil] |
| ArgoCD/GitOps | [Alta/Média/Baixa/Não encontrado] | [Evidência específica do perfil] |
| CI/CD (GitLab, Jenkins) | [Alta/Média/Baixa/Não encontrado] | [Evidência específica do perfil] |
| Observabilidade (Prometheus, Grafana, Loki) | [Alta/Média/Baixa/Não encontrado] | [Evidência específica do perfil] |
| Cloud (AWS, Azure, GCP) | [Alta/Média/Baixa/Não encontrado] | [Evidência específica do perfil] |
| Containers (Docker) | [Alta/Média/Baixa/Não encontrado] | [Evidência específica do perfil] |
| Infra as Code (Terraform/Ansible) | [Alta/Média/Baixa/Não encontrado] | [Evidência específica do perfil] |
| Segurança em pipelines | [Alta/Média/Baixa/Não encontrado] | [Evidência específica do perfil] |
| Comunicação/Trabalho em equipe | [Alta/Média/Baixa/Não encontrado] | [Evidência específica do perfil] |

### 3. Scoring Numérico (1-5)
- Kubernetes: [1-5]/5
- Istio: [1-5]/5
- ArgoCD: [1-5]/5
- CI/CD: [1-5]/5
- Observabilidade: [1-5]/5
- Cloud: [1-5]/5
- Containers: [1-5]/5
- Infra as Code: [1-5]/5
- Segurança: [1-5]/5
- Comunicação: [1-5]/5

**Score Total: [X.X]/5**

### 4. Diferenciais Identificados
- [Liste os diferenciais encontrados no perfil]

### 5. Lacunas ou Oportunidades
- [Liste as principais lacunas identificadas]

### 6. Conclusão e Recomendação
[Recomendação final: Avançar para entrevista técnica / Solicitar mais informações / Não prosseguir]
[Justificativa da recomendação em 2-3 frases]

### 7. Resumo Visual de Aderência
| Critério | Aderência |
|----------|-----------|
| Kubernetes | ⭐⭐⭐⭐⭐ |
| Istio | ⭐⭐⭐☆☆ |
| [Continue para todos os critérios] |

**Nível Geral de Aderência:** [Muito Alta/Alta/Média/Baixa]
```

## 2. Prompt Rápido para Scoring

```
# ANÁLISE RÁPIDA DE ADERÊNCIA - DevOps Engineer

Baseado neste perfil LinkedIn, forneça um scoring de 1-5 para cada critério:

**PERFIL:** [INSERIR PERFIL]

**CRITÉRIOS:**
1. Kubernetes: /5
2. Istio/Service Mesh: /5
3. ArgoCD/GitOps: /5
4. CI/CD Tools: /5
5. Observabilidade: /5
6. Cloud (AWS/Azure/GCP): /5
7. Containers: /5
8. IaC (Terraform/Ansible): /5
9. Pipeline Security: /5
10. Comunicação: /5

**TOTAL:** X.X/5
**RECOMENDAÇÃO:** [Avançar/Revisar/Não prosseguir]
**JUSTIFICATIVA:** [1 frase]
```

## 3. Prompt para Extração de Dados Estruturados

```
# EXTRAÇÃO DE DADOS TÉCNICOS - LinkedIn Profile

Extraia as seguintes informações do perfil LinkedIn fornecido:

**PERFIL:** [INSERIR PERFIL]

**FORMATO DE SAÍDA:**
```json
{
  "nome": "",
  "cargo_atual": "",
  "empresa_atual": "",
  "anos_experiencia": "",
  "localizacao": "",
  "habilidades_tecnicas": {
    "kubernetes": "sim/não/parcial",
    "docker": "sim/não/parcial",
    "istio": "sim/não/parcial",
    "argocd": "sim/não/parcial",
    "cicd_tools": ["lista de ferramentas"],
    "cloud_providers": ["lista de providers"],
    "iac_tools": ["lista de ferramentas"],
    "monitoring_tools": ["lista de ferramentas"],
    "programming_languages": ["lista de linguagens"]
  },
  "certificacoes": ["lista de certificações"],
  "experiencias_relevantes": ["lista de empresas/projetos relevantes"],
  "nivel_senioridade": "junior/pleno/senior"
}
```

Se alguma informação não estiver disponível, use "não informado".
```

## 4. Prompt para Análise de Soft Skills

```
# ANÁLISE DE SOFT SKILLS - Perfil LinkedIn

Com base nas descrições de experiência e forma de escrita do perfil, analise:

**PERFIL:** [INSERIR PERFIL]

**CRITÉRIOS DE ANÁLISE:**
1. **Comunicação** (1-5): Como se expressa no perfil
2. **Liderança** (1-5): Evidências de liderança técnica/de equipe
3. **Proatividade** (1-5): Iniciativas próprias, contribuições open source
4. **Aprendizado Contínuo** (1-5): Atualização técnica, cursos, certificações
5. **Colaboração** (1-5): Trabalho em equipe, mentorias

**FORMATO DE SAÍDA:**
- Comunicação: X/5 - [justificativa]
- Liderança: X/5 - [justificativa]
- Proatividade: X/5 - [justificativa]
- Aprendizado: X/5 - [justificativa]
- Colaboração: X/5 - [justificativa]

**RESUMO:** [2-3 frases sobre o perfil comportamental]
```

## 5. Prompt para Elaboração de Mensagem de Abordagem

```
# CRIAÇÃO DE MENSAGEM PERSONALIZADA

Com base na análise de aderência, crie uma mensagem de LinkedIn para abordar o candidato:

**DADOS DO CANDIDATO:**
- Nome: [nome]
- Cargo atual: [cargo]
- Empresa: [empresa]
- Principal strength: [principal habilidade identificada]
- Nível de aderência: [alto/médio/baixo]

**VAGA:** DevOps Engineer Pleno - Kubernetes, CD, Istio, Containers

**EMPRESA:** [Nome da sua empresa]

**TOM:** Profissional, direto, personalizando com base no perfil

**LIMITE:** 200 caracteres (limite do LinkedIn)

**TEMPLATE:**
Olá [Nome], 

Vi seu perfil e fiquei impressionado(a) com sua experiência em [habilidade específica]. 

Estamos buscando um DevOps Engineer Pleno com exatamente seu perfil para um projeto desafiador com Kubernetes e Istio.

Gostaria de conversar sobre esta oportunidade?

Obrigado(a)!
[Seu nome]
```

## 6. Prompt para Comparação de Múltiplos Candidatos

```
# COMPARAÇÃO DE CANDIDATOS - DevOps Position

Compare os seguintes candidatos para a vaga de DevOps Engineer Pleno:

**CANDIDATO 1:** [perfil 1]
**CANDIDATO 2:** [perfil 2]
**CANDIDATO 3:** [perfil 3]

**CRITÉRIOS DE COMPARAÇÃO:**
1. Kubernetes expertise
2. CI/CD experience
3. Cloud proficiency
4. Istio/Service Mesh
5. Overall technical depth
6. Team collaboration indicators

**FORMATO DE SAÍDA:**
| Critério | Candidato 1 | Candidato 2 | Candidato 3 |
|----------|-------------|-------------|-------------|
| Kubernetes | X/5 | X/5 | X/5 |
| CI/CD | X/5 | X/5 | X/5 |
| ... | ... | ... | ... |

**RANKING FINAL:**
1. [Nome] - Score total: X/5 - [justificativa]
2. [Nome] - Score total: X/5 - [justificativa]
3. [Nome] - Score total: X/5 - [justificativa]

**RECOMENDAÇÃO:** [Qual candidato priorizar e por quê]
```

## 7. Exemplo de Uso Prático

Para usar esses prompts:

1. **Copie o prompt desejado**
2. **Substitua [INSERIR PERFIL] pelo resumo do LinkedIn do candidato**
3. **Cole no ChatGPT/Perplexity**
4. **Copie o resultado para sua planilha de tracking**

## 8. Dicas de Otimização

- **Use o Prompt 1** para análise completa de candidatos finais
- **Use o Prompt 2** para screening rápido de muitos candidatos
- **Use o Prompt 3** para alimentar sua planilha automaticamente
- **Combine múltiplos prompts** para análises mais profundas
- **Ajuste os critérios** conforme sua empresa específica