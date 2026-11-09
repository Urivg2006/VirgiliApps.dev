async function canviarIdioma(lang) {
  try {
    const resposta = await fetch(`./l10n/${lang}.json`);
    if (!resposta.ok) {
      throw new Error('No s\'ha pogut carregar el fitxer de traducció');
    }

    const traduccions = await resposta.json();
    localStorage.setItem('idiomaPreferit', lang);

    document.documentElement.lang = lang;
    document.title = traduccions.pageTitle || document.title;

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const clau = element.getAttribute('data-i18n');
      if (traduccions[clau]) {
        element.textContent = traduccions[clau];
      }
    });

    const selector = document.getElementById('idiomaSelect');
    if (selector) {
      selector.value = lang;
    }
  } catch (error) {
    console.error('Error carregant les traduccions:', error);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('idiomaSelect');
  if (selector) {
    selector.addEventListener('change', (event) => {
      canviarIdioma(event.target.value);
    });
  }

  const idiomaGuardat = localStorage.getItem('idiomaPreferit') || 'ca';
  canviarIdioma(idiomaGuardat);
});