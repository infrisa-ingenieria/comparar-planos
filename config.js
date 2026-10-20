// Aplicación de Autodesk «Comparar planos» (aps.autodesk.com, tipo Single Page App con PKCE). El Client ID NO es secreto;
// esta aplicación no tiene secreto, así que esta carpeta se puede publicar tal cual.
const APS_CLIENT_ID = 'us3bbusGbDAALoq7ys1FT8fPnBzMIHdhaYkdzgimzos8ADou';
// Vuelta del inicio de sesión: esta misma página. Debe estar registrada EXACTAMENTE igual como «Callback URL» en la aplicación
// (en local: http://localhost:8080/ ; publicada: la dirección de la página, con la barra final).
const APS_REDIRECT = location.origin + location.pathname;
