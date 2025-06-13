// DevOps Hunting Platform - JavaScript
// Complete functionality for the recruiting platform

// Application data
const appData = {
  "candidatos": [
    {
      "id": "DEV001",
      "nome": "João Silva Santos",
      "cargo": "DevOps Engineer",
      "empresa": "TechCorp Brasil",
      "localizacao": "São Paulo, SP",
      "experiencia": 4,
      "nivel": "Pleno",
      "linkedin": "linkedin.com/in/joaosilva-devops",
      "email": "joao.silva@email.com",
      "telefone": "+55 11 99999-9999",
      "skills": {
        "kubernetes": 5,
        "istio": 3,
        "argocd": 4,
        "cicd": 5,
        "observabilidade": 5,
        "cloud": 4,
        "containers": 5,
        "iac": 3,
        "seguranca": 3,
        "comunicacao": 4
      },
      "certificacoes": ["AWS Certified Solutions Architect"],
      "linguagens": ["Python", "Bash"],
      "scoreTotal": 4.1,
      "nivelAderencia": "Alta",
      "status": "Para Contatar",
      "prioridade": "Alta",
      "origem": "LinkedIn Search",
      "dataAdicao": "2025-06-12",
      "fortalezas": "Kubernetes expert, strong CI/CD, AWS certified",
      "lacunas": "Limited Istio experience, basic Terraform",
      "observacoes": "Strong technical profile, good cultural fit indicators",
      "proximoPasso": "Send initial LinkedIn message"
    },
    {
      "id": "DEV002", 
      "nome": "Maria Oliveira Costa",
      "cargo": "SRE Engineer", 
      "empresa": "FinTech Inovação",
      "localizacao": "Rio de Janeiro, RJ",
      "experiencia": 5,
      "nivel": "Pleno/Senior",
      "linkedin": "linkedin.com/in/maria-oliveira-sre",
      "email": "maria.costa@email.com", 
      "telefone": "+55 21 88888-8888",
      "skills": {
        "kubernetes": 5,
        "istio": 4,
        "argocd": 3,
        "cicd": 5,
        "observabilidade": 5,
        "cloud": 4,
        "containers": 5,
        "iac": 4,
        "seguranca": 4,
        "comunicacao": 5
      },
      "certificacoes": ["GCP Professional Cloud Architect"],
      "linguagens": ["Python", "Go"],
      "scoreTotal": 4.4,
      "nivelAderencia": "Muito Alta",
      "status": "Aguardando Resposta",
      "prioridade": "Muito Alta", 
      "origem": "PhantomBuster Search",
      "dataAdicao": "2025-06-11",
      "fortalezas": "Istio expert, strong programming skills, GCP certified",
      "lacunas": "Limited ArgoCD experience",
      "observacoes": "Excellent technical profile, leadership experience",
      "proximoPasso": "Follow-up message in 2 days"
    },
    {
      "id": "DEV003",
      "nome": "Carlos Roberto Lima",
      "cargo": "Platform Engineer",
      "empresa": "Banco Digital XYZ", 
      "localizacao": "Belo Horizonte, MG",
      "experiencia": 6,
      "nivel": "Senior",
      "linkedin": "linkedin.com/in/carlos-lima-platform",
      "email": "carlos.lima@email.com",
      "telefone": "+55 31 77777-7777", 
      "skills": {
        "kubernetes": 4,
        "istio": 2,
        "argocd": 5,
        "cicd": 4,
        "observabilidade": 4,
        "cloud": 5,
        "containers": 4,
        "iac": 5,
        "seguranca": 5,
        "comunicacao": 4
      },
      "certificacoes": ["AWS DevOps Engineer", "Terraform Associate"],
      "linguagens": ["Python", "Ruby", "Go"],
      "scoreTotal": 4.2,
      "nivelAderencia": "Alta",
      "status": "Entrevista Agendada",
      "prioridade": "Alta",
      "origem": "Referência Interna",
      "dataAdicao": "2025-06-10",
      "fortalezas": "ArgoCD expert, strong security focus, multi-cloud",
      "lacunas": "Limited Istio experience",
      "observacoes": "Banking experience, security-first mindset",
      "proximoPasso": "Technical interview on Friday"
    },
    {
      "id": "DEV004", 
      "nome": "Ana Paula Ferreira",
      "cargo": "Cloud DevOps Engineer",
      "empresa": "Startup CloudTech",
      "localizacao": "Florianópolis, SC",
      "experiencia": 3,
      "nivel": "Pleno",
      "linkedin": "linkedin.com/in/ana-ferreira-devops",
      "email": "ana.ferreira@email.com",
      "telefone": "+55 48 66666-6666",
      "skills": {
        "kubernetes": 3,
        "istio": 2,
        "argocd": 3,
        "cicd": 4,
        "observabilidade": 3,
        "cloud": 5,
        "containers": 4,
        "iac": 4,
        "seguranca": 2,
        "comunicacao": 5
      },
      "certificacoes": ["Azure Solutions Architect"],
      "linguagens": ["Python", "PowerShell"],
      "scoreTotal": 3.5,
      "nivelAderencia": "Média",
      "status": "Em Avaliação",
      "prioridade": "Média",
      "origem": "LinkedIn Search",
      "dataAdicao": "2025-06-12",
      "fortalezas": "Strong Azure background, excellent communication",
      "lacunas": "Limited Kubernetes/Istio experience, basic security",
      "observacoes": "Growth potential, startup experience",
      "proximoPasso": "Review technical depth"
    },
    {
      "id": "DEV005",
      "nome": "Rafael Santos Mendes", 
      "cargo": "Infrastructure Engineer",
      "empresa": "E-commerce Brasil",
      "localizacao": "Porto Alegre, RS",
      "experiencia": 7,
      "nivel": "Senior",
      "linkedin": "linkedin.com/in/rafael-mendes-infra",
      "email": "rafael.mendes@email.com",
      "telefone": "+55 51 55555-5555",
      "skills": {
        "kubernetes": 4,
        "istio": 4,
        "argocd": 2,
        "cicd": 3,
        "observabilidade": 5,
        "cloud": 3,
        "containers": 4,
        "iac": 3,
        "seguranca": 4,
        "comunicacao": 3
      },
      "certificacoes": ["CKA", "Prometheus Certified"],
      "linguagens": ["Python", "Bash"],
      "scoreTotal": 3.5,
      "nivelAderencia": "Média",
      "status": "Não Respondeu",
      "prioridade": "Baixa",
      "origem": "TexAu Automation", 
      "dataAdicao": "2025-06-09",
      "fortalezas": "Monitoring expert, Kubernetes certified",
      "lacunas": "Limited GitOps/CI-CD experience",
      "observacoes": "Traditional infrastructure background",
      "proximoPasso": "Second follow-up attempt"
    }
  ],
  "tecnologias": [
    {"nome": "Kubernetes", "peso": 20, "descricao": "Container orchestration"},
    {"nome": "Istio", "peso": 15, "descricao": "Service mesh"},
    {"nome": "ArgoCD", "peso": 15, "descricao": "GitOps deployment"},
    {"nome": "CI/CD", "peso": 15, "descricao": "Continuous integration/deployment"},
    {"nome": "Observabilidade", "peso": 10, "descricao": "Monitoring and logging"},
    {"nome": "Cloud", "peso": 10, "descricao": "Public cloud platforms"},
    {"nome": "Containers", "peso": 10, "descricao": "Docker, containerization"},
    {"nome": "IaC", "peso": 10, "descricao": "Infrastructure as Code"},
    {"nome": "Segurança", "peso": 5, "descricao": "Pipeline security"}
  ],
  "searchQueries": [
    {
      "nome": "DevOps Básico",
      "query": "DevOps Engineer (Kubernetes OR Docker) (AWS OR Azure OR GCP) Brazil",
      "plataforma": "LinkedIn"
    },
    {
      "nome": "Kubernetes Specialists", 
      "query": "\"Kubernetes\" AND (\"DevOps\" OR \"SRE\") Brazil -Junior",
      "plataforma": "LinkedIn"
    },
    {
      "nome": "Istio Experts",
      "query": "(\"Istio\" OR \"Service Mesh\") AND Kubernetes Brazil",
      "plataforma": "Sales Navigator"
    },
    {
      "nome": "GitOps Engineers",
      "query": "(\"ArgoCD\" OR \"GitOps\" OR \"Flux\") DevOps Brazil",
      "plataforma": "LinkedIn"
    }
  ],
  "automacoes": [
    {
      "nome": "LinkedIn Daily Search",
      "ferramenta": "PhantomBuster",
      "status": "Ativo",
      "frequencia": "2x/dia",
      "ultimaExecucao": "2025-06-12 14:30",
      "resultados": 23
    },
    {
      "nome": "Profile Deep Scraping", 
      "ferramenta": "PhantomBuster",
      "status": "Pausado",
      "frequencia": "1x/dia",
      "ultimaExecucao": "2025-06-11 16:45",
      "resultados": 12
    },
    {
      "nome": "Email Enrichment",
      "ferramenta": "TexAu",
      "status": "Ativo", 
      "frequencia": "Contínuo",
      "ultimaExecucao": "2025-06-12 15:15",
      "resultados": 8
    },
    {
      "nome": "AI Analysis Pipeline",
      "ferramenta": "ChatGPT API",
      "status": "Ativo",
      "frequencia": "Contínuo", 
      "ultimaExecucao": "2025-06-12 15:45",
      "resultados": 15
    }
  ],
  "messageTemplates": [
    {
      "nome": "Initial Contact - High Match",
      "template": "Olá {nome}, vi seu perfil e fiquei impressionado com sua experiência em {tecnologia_principal}. Estamos buscando um DevOps Engineer com exatamente seu perfil. Gostaria de conversar?",
      "uso": "Primeira abordagem para candidatos com alta aderência"
    },
    {
      "nome": "Follow-up - No Response",
      "template": "Oi {nome}, enviei uma mensagem há alguns dias sobre uma oportunidade DevOps. Ainda tem interesse em saber mais detalhes?",
      "uso": "Follow-up após 3-5 dias sem resposta"
    },
    {
      "nome": "Technical Interest",
      "template": "Olá {nome}, estamos implementando {tecnologia} em larga escala. Sua experiência seria muito valiosa. Que tal uma conversa técnica?",
      "uso": "Para especialistas em tecnologias específicas"
    }
  ]
};

// Application state
let currentTab = 'dashboard';
let selectedCandidate = null;
let charts = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initDashboard();
  initSearchTab();
  initCandidatesTab();
  initAnalysisTab();
  initAutomationTab();
  initCommunicationTab();
});

// Navigation system
function initNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  // Update nav tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');

  currentTab = tabId;
}

// Dashboard initialization
function initDashboard() {
  createSkillsChart();
  createStatusChart();
}

function createSkillsChart() {
  const ctx = document.getElementById('skillsChart').getContext('2d');
  
  // Calculate average skill levels across all candidates
  const skillAverages = {};
  const skillNames = Object.keys(appData.candidatos[0].skills);
  
  skillNames.forEach(skill => {
    const total = appData.candidatos.reduce((sum, candidate) => sum + candidate.skills[skill], 0);
    skillAverages[skill] = (total / appData.candidatos.length).toFixed(1);
  });

  charts.skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: skillNames.map(skill => skill.charAt(0).toUpperCase() + skill.slice(1)),
      datasets: [{
        label: 'Nível Médio dos Candidatos',
        data: Object.values(skillAverages),
        backgroundColor: 'rgba(31, 184, 205, 0.2)',
        borderColor: '#1FB8CD',
        borderWidth: 2,
        pointBackgroundColor: '#1FB8CD',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 5,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function createStatusChart() {
  const ctx = document.getElementById('statusChart').getContext('2d');
  
  // Count candidates by status
  const statusCounts = {};
  appData.candidatos.forEach(candidate => {
    statusCounts[candidate.status] = (statusCounts[candidate.status] || 0) + 1;
  });

  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];
  
  charts.statusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(statusCounts),
      datasets: [{
        data: Object.values(statusCounts),
        backgroundColor: colors.slice(0, Object.keys(statusCounts).length),
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// Search tab initialization
function initSearchTab() {
  loadPresetQueries();
  
  // Load preset into form when clicked
  document.addEventListener('click', function(e) {
    if (e.target.closest('.preset-item')) {
      const presetName = e.target.closest('.preset-item').dataset.preset;
      const preset = appData.searchQueries.find(q => q.nome === presetName);
      if (preset) {
        document.getElementById('search-name').value = preset.nome;
        document.getElementById('search-query').value = preset.query;
        document.getElementById('search-platform').value = preset.plataforma.toLowerCase();
      }
    }
  });
}

function loadPresetQueries() {
  const container = document.getElementById('preset-queries');
  container.innerHTML = appData.searchQueries.map(query => `
    <div class="preset-item" data-preset="${query.nome}">
      <div class="preset-name">${query.nome}</div>
      <div class="preset-query">${query.query}</div>
      <div class="preset-platform">${query.plataforma}</div>
    </div>
  `).join('');
}

// Candidates tab initialization
function initCandidatesTab() {
  loadCandidates();
}

function loadCandidates() {
  const container = document.getElementById('candidates-container');
  container.innerHTML = appData.candidatos.map(candidate => createCandidateCard(candidate)).join('');
}

function createCandidateCard(candidate) {
  const skillTags = Object.entries(candidate.skills)
    .filter(([skill, level]) => level >= 4)
    .slice(0, 4)
    .map(([skill, level]) => `<span class="skill-tag">${skill.charAt(0).toUpperCase() + skill.slice(1)}</span>`)
    .join('');

  const statusClass = getStatusClass(candidate.status);
  const priorityClass = getPriorityClass(candidate.prioridade);

  return `
    <div class="candidate-card" data-candidate-id="${candidate.id}">
      <div class="candidate-header">
        <div class="candidate-info">
          <div class="candidate-name">${candidate.nome}</div>
          <div class="candidate-job">${candidate.cargo} • ${candidate.empresa}</div>
          <div class="candidate-company">${candidate.localizacao}</div>
        </div>
        <div class="candidate-score">
          <div class="score-number">${candidate.scoreTotal}</div>
          <div class="score-text">Score</div>
        </div>
      </div>
      <div class="candidate-body">
        <div class="candidate-skills">
          <div class="skill-title">Habilidades Principais</div>
          <div class="skill-tags">${skillTags}</div>
        </div>
        <div class="candidate-ratings">
          ${createSkillRatings(candidate.skills)}
        </div>
      </div>
      <div class="candidate-footer">
        <div class="candidate-status">
          <span class="status ${statusClass}">${candidate.status}</span>
          <span class="status ${priorityClass}">${candidate.prioridade}</span>
        </div>
        <div class="candidate-actions">
          <button class="btn btn--sm btn--secondary" onclick="viewCandidate('${candidate.id}')">Ver</button>
          <button class="btn btn--sm btn--primary" onclick="analyzeCandidate('${candidate.id}')">Analisar</button>
        </div>
      </div>
    </div>
  `;
}

function createSkillRatings(skills) {
  const topSkills = Object.entries(skills)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  return topSkills.map(([skill, level]) => `
    <div class="rating-item">
      <div class="rating-label">${skill.charAt(0).toUpperCase() + skill.slice(1)}</div>
      <div class="rating-stars">
        ${createStars(level)}
      </div>
    </div>
  `).join('');
}

function createStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(`<i class="fas fa-star star ${i <= rating ? '' : 'empty'}"></i>`);
  }
  return stars.join('');
}

function getStatusClass(status) {
  const statusMap = {
    'Para Contatar': 'status--info',
    'Aguardando Resposta': 'status--warning',
    'Entrevista Agendada': 'status--success',
    'Em Avaliação': 'status--info',
    'Não Respondeu': 'status--error'
  };
  return statusMap[status] || 'status--info';
}

function getPriorityClass(priority) {
  const priorityMap = {
    'Muito Alta': 'status--error',
    'Alta': 'status--warning',
    'Média': 'status--info',
    'Baixa': 'status--info'
  };
  return priorityMap[priority] || 'status--info';
}

// Analysis tab initialization
function initAnalysisTab() {
  loadCandidateOptions();
  
  document.getElementById('run-analysis').addEventListener('click', runAnalysis);
  
  // Details tabs
  document.querySelectorAll('.details-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const tabType = this.dataset.detailsTab;
      switchDetailsTab(tabType);
    });
  });
}

function loadCandidateOptions() {
  const select = document.getElementById('analysis-candidate');
  const messageSelect = document.getElementById('message-candidate');
  
  const options = appData.candidatos.map(candidate => 
    `<option value="${candidate.id}">${candidate.nome} - ${candidate.cargo}</option>`
  ).join('');
  
  select.innerHTML = '<option value="">Escolha um candidato...</option>' + options;
  if (messageSelect) {
    messageSelect.innerHTML = '<option value="">Selecione um candidato...</option>' + options;
  }
}

function runAnalysis() {
  const candidateId = document.getElementById('analysis-candidate').value;
  if (!candidateId) return;
  
  const candidate = appData.candidatos.find(c => c.id === candidateId);
  if (!candidate) return;
  
  selectedCandidate = candidate;
  showAnalysisResult(candidate);
}

function showAnalysisResult(candidate) {
  // Hide empty state
  document.getElementById('empty-analysis').classList.add('hidden');
  
  // Show analysis content
  document.getElementById('analysis-content').classList.remove('hidden');
  
  // Update candidate info
  const infoDiv = document.getElementById('analysis-info');
  infoDiv.classList.remove('hidden');
  infoDiv.querySelector('.candidate-name').textContent = candidate.nome;
  infoDiv.querySelector('.candidate-job').textContent = `${candidate.cargo} na ${candidate.empresa}`;
  
  // Update scores
  document.querySelector('.score-value').textContent = candidate.scoreTotal;
  document.querySelector('.score-high').textContent = candidate.nivelAderencia;
  
  // Create candidate skills chart
  createCandidateSkillsChart(candidate);
  
  // Update details
  updateAnalysisDetails(candidate);
}

function createCandidateSkillsChart(candidate) {
  const canvas = document.getElementById('candidateSkillsChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  if (charts.candidateSkillsChart) {
    charts.candidateSkillsChart.destroy();
  }
  
  const skillNames = Object.keys(candidate.skills);
  const skillValues = Object.values(candidate.skills);
  
  charts.candidateSkillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: skillNames.map(skill => skill.charAt(0).toUpperCase() + skill.slice(1)),
      datasets: [{
        label: 'Nível de Habilidade',
        data: skillValues,
        backgroundColor: '#1FB8CD',
        borderColor: '#1FB8CD',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 5,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function updateAnalysisDetails(candidate) {
  // Strengths
  const strengthsList = document.getElementById('strengths-list');
  const strengths = candidate.fortalezas.split(', ');
  strengthsList.innerHTML = strengths.map(strength => `<li>${strength}</li>`).join('');
  
  // Gaps
  const gapsList = document.getElementById('gaps-list');
  const gaps = candidate.lacunas.split(', ');
  gapsList.innerHTML = gaps.map(gap => `<li>${gap}</li>`).join('');
}

function switchDetailsTab(tabType) {
  // Update tab classes
  document.querySelectorAll('.details-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelector(`[data-details-tab="${tabType}"]`).classList.add('active');
  
  // Update content
  document.querySelectorAll('.details-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(`details-${tabType}`).classList.add('active');
}

// Automation tab initialization
function initAutomationTab() {
  loadAutomations();
}

function loadAutomations() {
  const container = document.getElementById('automation-list');
  container.innerHTML = appData.automacoes.map(automation => `
    <div class="automation-item">
      <div class="automation-info">
        <div class="automation-name">${automation.nome}</div>
        <div class="automation-details">
          ${automation.ferramenta} • ${automation.frequencia} • 
          Última execução: ${automation.ultimaExecucao} • 
          ${automation.resultados} resultados
        </div>
      </div>
      <div class="automation-controls">
        <div class="automation-status">
          <span class="status ${automation.status === 'Ativo' ? 'status--success' : 'status--warning'}">
            ${automation.status}
          </span>
        </div>
        <div class="automation-control" title="${automation.status === 'Ativo' ? 'Pausar' : 'Ativar'}">
          <i class="fas ${automation.status === 'Ativo' ? 'fa-pause' : 'fa-play'}"></i>
        </div>
        <div class="automation-control" title="Configurar">
          <i class="fas fa-cog"></i>
        </div>
      </div>
    </div>
  `).join('');
}

// Communication tab initialization
function initCommunicationTab() {
  loadMessageTemplates();
  
  // Template selection
  document.getElementById('message-template').addEventListener('change', function() {
    const templateName = this.value;
    if (templateName) {
      const template = appData.messageTemplates.find(t => t.nome.includes(templateName));
      if (template) {
        document.getElementById('message-content').value = template.template;
      }
    }
  });
  
  // Personalization chips
  document.querySelectorAll('.personalization-chip').forEach(chip => {
    chip.addEventListener('click', function() {
      const variable = this.dataset.variable;
      const messageContent = document.getElementById('message-content');
      const cursorPos = messageContent.selectionStart;
      const textBefore = messageContent.value.substring(0, cursorPos);
      const textAfter = messageContent.value.substring(cursorPos);
      messageContent.value = textBefore + variable + textAfter;
      messageContent.focus();
      messageContent.setSelectionRange(cursorPos + variable.length, cursorPos + variable.length);
    });
  });
}

function loadMessageTemplates() {
  const container = document.getElementById('template-list');
  container.innerHTML = appData.messageTemplates.map(template => `
    <div class="template-item" data-template="${template.nome}">
      <div class="template-name">${template.nome}</div>
      <div class="template-preview">${template.template}</div>
      <div class="template-usage">${template.uso}</div>
    </div>
  `).join('');
  
  // Template selection
  document.querySelectorAll('.template-item').forEach(item => {
    item.addEventListener('click', function() {
      const templateName = this.dataset.template;
      const template = appData.messageTemplates.find(t => t.nome === templateName);
      if (template) {
        document.getElementById('message-content').value = template.template;
      }
    });
  });
}

// Utility functions
function viewCandidate(candidateId) {
  const candidate = appData.candidatos.find(c => c.id === candidateId);
  if (candidate) {
    alert(`Visualizando perfil de ${candidate.nome}\n\nCargo: ${candidate.cargo}\nEmpresa: ${candidate.empresa}\nScore: ${candidate.scoreTotal}\nStatus: ${candidate.status}`);
  }
}

function analyzeCandidate(candidateId) {
  // Switch to analysis tab and select candidate
  switchTab('analysis');
  document.getElementById('analysis-candidate').value = candidateId;
  runAnalysis();
}

// Add some interactive behaviors
document.addEventListener('click', function(e) {
  // Handle button clicks for demonstrations
  if (e.target.matches('.btn--primary') && e.target.textContent.includes('Atualizar Dados')) {
    e.target.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Atualizando...';
    setTimeout(() => {
      e.target.innerHTML = '<i class="fas fa-sync"></i> Atualizar Dados';
    }, 2000);
  }
  
  if (e.target.matches('.btn--primary') && e.target.textContent.includes('Salvar e Executar')) {
    const searchName = document.getElementById('search-name').value;
    if (searchName) {
      alert(`Busca "${searchName}" foi salva e está sendo executada. Você receberá uma notificação quando concluída.`);
    }
  }
  
  if (e.target.matches('.btn--primary') && e.target.textContent.includes('Enviar Mensagem')) {
    const candidate = document.getElementById('message-candidate').value;
    const content = document.getElementById('message-content').value;
    if (candidate && content) {
      alert('Mensagem enviada com sucesso! O candidato receberá sua mensagem no LinkedIn.');
    }
  }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey || e.metaKey) {
    switch(e.key) {
      case '1':
        e.preventDefault();
        switchTab('dashboard');
        break;
      case '2':
        e.preventDefault();
        switchTab('search');
        break;
      case '3':
        e.preventDefault();
        switchTab('candidates');
        break;
      case '4':
        e.preventDefault();
        switchTab('analysis');
        break;
      case '5':
        e.preventDefault();
        switchTab('automation');
        break;
      case '6':
        e.preventDefault();
        switchTab('communication');
        break;
    }
  }
});

// Add search functionality
document.addEventListener('input', function(e) {
  if (e.target.matches('.candidates-filters input[type="text"]')) {
    const searchTerm = e.target.value.toLowerCase();
    const candidateCards = document.querySelectorAll('.candidate-card');
    
    candidateCards.forEach(card => {
      const candidateId = card.dataset.candidateId;
      const candidate = appData.candidatos.find(c => c.id === candidateId);
      const searchText = `${candidate.nome} ${candidate.cargo} ${candidate.empresa}`.toLowerCase();
      
      if (searchText.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
});

console.log('DevOps Hunting Platform initialized successfully!');