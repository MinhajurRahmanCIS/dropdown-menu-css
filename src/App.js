import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Products</a></li>
          <li className="dropdown">
            Category
            <div className="dropdown-menu">
              <div className="submenu">
                <a href='/'>Laptop</a>
                <a href='/'>Computer</a>
              </div>
            </div>
          </li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
