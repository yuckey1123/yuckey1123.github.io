<template>
  <div class="home-page">
    <header class="header">
      <h1>yuckey1123.github.io</h1>
    </header>
    <main class="content">
      <div class="top-header-container">
      <img src="/top_header.png" alt="Top Header" class="top-header" />
    </div>
      <section class="about">
        <h2>自己紹介</h2>
        <p>名前: yuckey</p>
        <p>職業: フロントエンドエンジニア</p>
        <p>趣味: プログラミング、読書、旅行</p>
      </section>
      <section class="links">
        <h2>リンク</h2>
        <ul>
          <li>
            <a href="https://github.com/yuckey1123" target="_blank">GitHub</a>
          </li>
        </ul>
      </section>
    </main>
    <footer class="footer">
      <p>&copy; 2025 yuckey</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* トップヘッダー画像のコンテナ */
.top-header-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

/* トップヘッダー画像のスタイル */
.top-header {
  width: 100%; /* 画面幅いっぱいに表示 */
  height: auto; /* 縦横比を維持 */
  display: block; /* 画像の余白を削除 */
}

/* ホームページ全体のスタイル */
.home-page {
  text-align: center;
  color: #333;
  padding: 20px;
}

/* ヘッダー */
.header {
  margin-bottom: 20px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.2rem;
}

/* コンテンツ */
.content {
  margin: 20px auto;
  max-width: 600px;
  background: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.about h2,
.links h2 {
  font-size: 1.8rem;
  color: #007acc;
  margin-bottom: 10px;
}

.about p,
.links ul {
  font-size: 1.2rem;
  margin: 5px 0;
}

.links ul {
  list-style: none;
  padding: 0;
}

.links li {
  margin: 5px 0;
}

.links a {
  color: #007acc;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

/* フッター */
.footer {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #666;
}
</style>
