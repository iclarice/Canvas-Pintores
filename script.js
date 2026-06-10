function mudarTema(tema, btn) {
  document.documentElement.dataset.theme = tema;
  document.querySelectorAll('.tbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function mudarAba(aba, btn) {
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('visible'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + aba).classList.add('visible');
  btn.classList.add('active');
  // scroll suave para o conteúdo em mobile
  document.getElementById('sec-' + aba).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function curtirObra(btn) {
  btn.classList.toggle('curtido');
  const span = btn.querySelector('span');
  span.textContent = btn.classList.contains('curtido') ? 'Apreciado ✓' : 'Apreciar';
}

function toggleSeguir(btn) {
  if (btn.textContent.includes('+')) {
    btn.textContent = '✓ Seguindo';
    btn.style.background = 'var(--text-muted)';
  } else {
    btn.textContent = '+ Seguir';
    btn.style.background = 'var(--accent)';
  }
}