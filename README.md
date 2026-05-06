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


## 📱 Responsividade

- Desktop: Layout completo com navbar expandida
- Tablet (≤768px): Menu adaptado, botão de contato removido
- Mobile (≤480px): Imagem "sobre" mais alta, textos ajustados


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

---

**Versão:** 1.0  
**Última atualização:** Mai 2026
