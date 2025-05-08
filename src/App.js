import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>yuckey</h1>
      </header>
      <main>
        <section className="profile card">
          <img
            src="https://avatars.githubusercontent.com/u/97144643?v=4"
            alt="プロフィールアイコン"
            className="profile-icon"
          />
          <h2>yuckey</h2>
          <p>Mobile App Developer in Japan.</p>
        </section>

        {/* <section className="career card">
          <h2>経歴</h2>
          <ul>
            <li>2019年 - Android App Dev</li>
          </ul>
        </section> */}

        <section className="links card">
          <h2>links</h2>
          <ul>
            <li>
              <a href="https://github.com/yuckey1123" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://zenn.dev/yuckey1123" target="_blank" rel="noopener noreferrer">
                Zenn
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 yuckey</p>
      </footer>
    </div>
  );
}

export default App;