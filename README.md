# Angelo Powerlifting - Consultoria Online

Landing page profissional para consultoria de powerlifting online.

## 📋 Estrutura de arquivos

```
powe-angelo/
├── src/                    # Pasta principal do projeto
│   ├── app.html            # Página principal
│   ├── index.css           # Estilos globais
│   ├── app.js              # Funcionalidades JavaScript
│   └── img/                # Pasta de imagens
│       ├── angelo1.png     # Foto do treinador (seção Sobre)
│       ├── angelo2.png     # Imagem fundo Hero
│       └── angelo3.png     # Imagem fundo CTA final
├── vercel.json             # Configuração para deploy
├── README.md               # Este arquivo
└── desktop.ini             # (ignorar - arquivo de sistema)

## 🚀 Como executar localmente

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma dependência externa

### Passos

1. **Baixe ou clone os arquivos** para uma pasta local
2. **Abra o arquivo `app.html`** no navegador:
   - Clique duplo no arquivo, ou
   - Arraste para o navegador, ou
   - Use um servidor local (veja abaixo)

### Com servidor local (recomendado)

**Python 3:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server
```

Acesse `http://localhost:8000` no navegador.

## 🌐 Como publicar

### Hospedagem estática
Use qualquer serviço de hospedagem estática:
- **Vercel** (recomendado): Arraste a pasta para deploy automático
- **Netlify**: Conecte o repositório Git
- **GitHub Pages**: Push para branch `gh-pages`
- **Firebase Hosting**: Configure e faça deploy via CLI
- **Hostinger / 000webhost**: Upload via FTP

### Passos básicos para Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Arraste a pasta `angelo_powerlifting_site` ou conecte o Git
4. Deploy automático realizado

### Passos básicos para Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Sites"
3. Arraste a pasta ou conecte Git
4. Site publicado em segundos

## 📱 Responsividade

- Desktop: Layout completo com navbar expandida
- Tablet (≤768px): Menu adaptado, botão de contato removido
- Mobile (≤480px): Imagem "sobre" mais alta, textos ajustados

## 🔗 Links WhatsApp

Os links para WhatsApp estão em:
- `app.html` (múltiplos locais)

Substitua o número `554499796242` pelo seu:

```html
<!-- Substitua este número -->
https://wa.me/554499796242?text=Olá%20Angelo!
```

## 🎨 Customizações rápidas

### Cores principais
Edite em `index.css` (variáveis CSS):
```css
--red: #C0392B;           /* Vermelho principal */
--gold: #B7860B;          /* Dourado destaque */
--black: #0A0A0A;         /* Preto background */
--white: #F5F5F0;         /* Branco texto */
```

### Textos
Edite direto em `app.html` as seções:
- Hero (linha 35-50)
- Sobre (linha 70-95)
- Planos (linha 100-180)
- FAQ (linha 270-320)

### Imagens
Coloque imagens PNG na pasta `img/` e atualize os `src`:
```html
<img src="img/sua-imagem.png" alt="descrição">
```

## ✅ Checklist antes de publicar

- [ ] Remova o arquivo `desktop.ini` da pasta `img/`
- [ ] Verifique todos os links WhatsApp com o número correto
- [ ] Teste em mobile (chrome devtools: Ctrl+Shift+M)
- [ ] Teste em diferentes navegadores
- [ ] Verifique se todas as imagens carregam
- [ ] Teste os botões FAQ (abrir/fechar)
- [ ] Teste o link do botão flutuante WhatsApp

## 🛠️ Troubleshooting

**Imagens não carregam:**
- Verifique se estão na pasta `img/`
- Use caminhos relativos: `img/nome.png` (não `C:/Users/...`)

**Estilos não aparecem:**
- Verifique se `index.css` está no mesmo nível que `app.html`
- Limpe o cache do navegador (Ctrl+F5)

**JavaScript FAQ não funciona:**
- Verifique se `app.js` está no mesmo nível que `app.html`
- Abra console (F12) e procure por erros

## 📞 Suporte

Para dúvidas sobre a página, revise:
- Estrutura HTML em `app.html`
- Estilos em `index.css`
- Lógica em `app.js`

---

**Versão:** 1.0  
**Última atualização:** Mai 2026
