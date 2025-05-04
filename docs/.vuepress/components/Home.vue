<template>
  <div class="theme-default-content content__default">
    <div class="footer">
      <hr />
      <p class="built-with">BUILT WITH</p>
      <div class="tech-logos">
        <a href="https://www.cloudflare.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" alt="Cloudflare" /></a>
        <a href="https://nodejs.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /></a>
        <a href="https://github.com/kmbzn" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" /></a>
        <a href="https://git-scm.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /></a>
        <a href="https://vuejs.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /></a>
        <a href="https://code.visualstudio.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" /></a>
        <a href="https://www.python.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" /></a>
        <a href="https://www.linux.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" /></a>
        <a href="https://openai.com/chatgpt" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/120px-ChatGPT-Logo.svg.png" alt="ChatGPT" />
        </a>
      </div>
      <p class="copyright">
        All trademarks and logos are property of their respective owners.<br>
        © 2025&nbsp;<strong>kmbzn</strong> · <a href="https://github.com/kmbzn/blog/blob/master/LICENSE" target="_blank">MIT License</a><br>
        Based on © 2020 <strong>Gyoogle</strong> · <a href="https://github.com/gyoogle/blog/blob/master/LICENSE" target="_blank">MIT License</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.theme-default-content.content__default {
  max-width: 740px;
}

.footer {
  text-align: center;
  padding-top: 0;
}

.footer hr {
  margin: 0 -1.5rem;
}

.built-with {
  font-size: 0.7rem;
  color: #999;
  margin-bottom: 0.4rem;
  letter-spacing: 0.05em;
}

.tech-logos {
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.tech-logos img {
  height: 24px;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.tech-logos img:hover {
  opacity: 1;
}

.footer a {
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.copyright {
  color: #666;
  font-size: 0.7rem;
  line-height: 1.5;
}
</style>