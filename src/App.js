function App() {
  return (
    <div class="App">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header">
              Events
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header">
              Recent updates
            </div>
            <div class="card-body">
            <p class="card-text" id="updates">
              <ul class="list-group list-group-flush ">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A forth item</li>
              </ul>
            </p>  
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;
