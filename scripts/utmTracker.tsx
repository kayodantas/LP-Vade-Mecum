"use client"

import { useEffect } from "react"

export default function UtmTracker() {
  useEffect(() => {
    // Função para processar os links
    const processLinks = () => {
      const scriptContent = `
      (function () {
          // Função para obter o valor de um parâmetro da URL
          function getParameterByName(name, url) {
              if (!url) url = window.location.href;
              name = name.replace(/[\\[\\]]/g, "\\\\$&");
              var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                  results = regex.exec(url);
              if (!results) return null;
              if (!results[2]) return '';
              return decodeURIComponent(results[2].replace(/\\+/g, " "));
          }
      
          // Função para definir um cookie
          function setCookie(cookieName, cookieValue, expirationTime) {
              var cookiePath = "/";
              expirationTime = expirationTime * 1000; // Converter tempo de expiração para milissegundos
              var date = new Date();
              var dateTimeNow = date.getTime();
              date.setTime(dateTimeNow + expirationTime);
              var expirationDate = date.toUTCString();
              document.cookie = cookieName + "=" + cookieValue + "; expires=" + expirationDate + "; path=" + cookiePath;
          }
      
          // Função para obter o valor de um cookie pelo nome
          function getCookieValue(name) {
              const value = \`; \${document.cookie}\`;
              const parts = value.split(\`; \${name}=\`);
              if (parts.length === 2) return parts.pop().split(';').shift();
              return null;
          }
      
          // Vetor de parâmetros que indicam origem de anúncios
          const adParams = ['fbclid', 'gclid'];
      
          // Verificar se algum dos parâmetros de anúncio está presente na URL
          const urlParams = new URLSearchParams(window.location.search);
          let isAdClick = false;
          adParams.forEach(param => {
              if (urlParams.has(param)) {
                  isAdClick = true;
              }
          });
      
          // Criar cookies para UTMs se o clique for proveniente de anúncio
          if (isAdClick) {
              const utmSource = getParameterByName('utm_source');
              const utmMedium = getParameterByName('utm_medium');
              const utmCampaign = getParameterByName('utm_campaign');
              const utmContent = getParameterByName('utm_content');
              const utmTerm = getParameterByName('utm_term');
      
              if (utmSource) setCookie('cookieUtmSource', utmSource, 63072000);
              if (utmMedium) setCookie('cookieUtmMedium', utmMedium, 63072000);
              if (utmCampaign) setCookie('cookieUtmCampaign', utmCampaign, 63072000);
              if (utmContent) setCookie('cookieUtmContent', utmContent, 63072000);
              if (utmTerm) setCookie('cookieUtmTerm', utmTerm, 63072000);
          }
      
          // Coletar valores das UTMs e cookies para manipulação dos links
          let parametros = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
          const urlParamsCapt = new URLSearchParams(window.location.search);
          const urlParamsCaptReferrer = new URLSearchParams(document.referrer.split('?')[1] || '');
          let utms = {};
      
          // Obter valores dos cookies UTM, se existirem
          const cookieUtmSource = getCookieValue('cookieUtmSource');
          const cookieUtmMedium = getCookieValue('cookieUtmMedium');
          const cookieUtmCampaign = getCookieValue('cookieUtmCampaign');
          const cookieUtmContent = getCookieValue('cookieUtmContent');
          const cookieUtmTerm = getCookieValue('cookieUtmTerm');
      
          parametros.forEach(el => {
              if (el === "utm_source") {
                  utms[el] = urlParamsCapt.get(el) ?? (document.referrer ? (urlParamsCaptReferrer.get(el) ?? new URL(document.referrer).hostname) : "direto");
              } else {
                  utms[el] = urlParamsCapt.get(el) ?? (urlParamsCaptReferrer.get(el) ?? "");
              }
          });
      
          let scks = Object.values(utms).filter(value => value !== "");
      
          let currentSckValues = [];
          if (urlParamsCapt.get('sck')) {
              currentSckValues = urlParamsCapt.get('sck').split('|');
          }
          scks = scks.filter(value => !currentSckValues.includes(value));
      
          let srcValues = [cookieUtmSource, cookieUtmMedium, cookieUtmCampaign, cookieUtmContent, cookieUtmTerm].filter(value => value !== null && value !== "");
      
          const updateLinks = (el, elURL) => {
              try {
                  const elSearchParams = new URLSearchParams(elURL.search);
                  let modified = false;
      
                  // Preservar todos os parâmetros existentes da URL original
                  urlParams.forEach((value, key) => {
                      if (!elSearchParams.has(key)) {
                          elSearchParams.append(key, value);
                          modified = true;
                      }
                  });
      
                  // Adicionar valores das UTMs coletadas ou do referrer
                  for (let key in utms) {
                      if (utms[key] && !elSearchParams.has(key)) {
                          elSearchParams.append(key, utms[key]);
                          modified = true;
                      }
                  }
      
                  // Adicionar valores dos cookies UTM na URL, se existirem
                  if (cookieUtmSource) elSearchParams.append('cookieUtmSource', cookieUtmSource);
                  if (cookieUtmMedium) elSearchParams.append('cookieUtmMedium', cookieUtmMedium);
                  if (cookieUtmCampaign) elSearchParams.append('cookieUtmCampaign', cookieUtmCampaign);
                  if (cookieUtmContent) elSearchParams.append('cookieUtmContent', cookieUtmContent);
                  if (cookieUtmTerm) elSearchParams.append('cookieUtmTerm', cookieUtmTerm);
      
                  // Adicionar o parâmetro sck
                  if (!elSearchParams.has('sck') && scks.length > 0) {
                      elSearchParams.append('sck', scks.join('|'));
                      modified = true;
                  }
      
                  // Adicionar o parâmetro src
                  if (!elSearchParams.has('src') && srcValues.length > 0) {
                      elSearchParams.append('src', srcValues.join('|'));
                      modified = true;
                  }
      
                  // Tratamento especial para links da Hotmart
                  if (elURL.hostname.includes('hotmart.com')) {
                      // Adicionar parâmetros UTM diretamente para a Hotmart
                      for (let key in utms) {
                          if (utms[key] && !elSearchParams.has(key)) {
                              elSearchParams.append(key, utms[key]);
                              modified = true;
                          }
                      }
                      
                      // Adicionar ref se não existir
                      if (!elSearchParams.has('ref') && cookieUtmSource) {
                          elSearchParams.append('ref', cookieUtmSource);
                          modified = true;
                      }
                  }
      
                  if (modified) {
                      return elURL.origin + elURL.pathname + "?" + elSearchParams.toString();
                  }
                  return el.href;
              } catch (e) {
                  console.warn('Erro ao processar URL:', e);
                  return el.href;
              }
          };
      
          const processAllLinks = () => {
              document.querySelectorAll('a').forEach(el => {
                  try {
                      // Verificar se é um link válido
                      if (!el.href || el.href.startsWith('javascript:') || el.href.startsWith('#')) return;
                      
                      const elURL = new URL(el.href, window.location.origin); // Base para URLs relativas
                      if (!elURL.hash) {
                          el.href = updateLinks(el, elURL);
                      }
                  } catch (e) {
                      console.warn('Erro ao processar URL no link:', el.href);
                  }
              });
          };
      
          // Processar links existentes
          processAllLinks();
      
          // Observar mudanças no DOM para processar novos links
          const observer = new MutationObserver(mutations => {
              let shouldProcess = false;
              
              mutations.forEach(mutation => {
                  if (mutation.addedNodes.length) {
                      mutation.addedNodes.forEach(node => {
                          if (node.nodeType === 1) { // ELEMENT_NODE
                              if (node.tagName === 'A' || node.querySelector('a')) {
                                  shouldProcess = true;
                              }
                          }
                      });
                  }
              });
              
              if (shouldProcess) {
                  processAllLinks();
              }
          });
      
          observer.observe(document.body, { 
              childList: true, 
              subtree: true 
          });
      
          // Processar iframes
          document.querySelectorAll('iframe').forEach(iframe => {
              let actualSrc = iframe.hasAttribute('data-src') ? iframe.getAttribute('data-src') : iframe.src;
              if (actualSrc) {
                  try {
                      const iframeURL = new URL(actualSrc, window.location.origin); // Base para URLs relativas
                      if (iframe.hasAttribute('data-src')) {
                          iframe.setAttribute('data-src', updateLinks(iframe, iframeURL));
                      } else {
                          iframe.src = updateLinks(iframe, iframeURL);
                      }
                  } catch (e) {
                      console.warn('Erro ao processar URL no iframe:', actualSrc);
                  }
              }
          });
      })();
      `

      // Criar e adicionar o script à página
      const script = document.createElement("script")
      script.textContent = scriptContent
      document.body.appendChild(script)
    }

    // Executar após a renderização completa da página
    if (document.readyState === "complete") {
      processLinks()
    } else {
      window.addEventListener("load", processLinks)
    }

    return () => {
      window.removeEventListener("load", processLinks)
    }
  }, [])

  return null
}
