import "./App.css";

const App = () => {
    return (
        <div className="App">
            <header>
                <Search />
            </header>
            <main>
                <input
                    className="drop"
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    data-test-id="media-upload-input-4e0002bd-4b91-4f56-a23e-111578322950"
                    type="file"
                    accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"
                    placeholder="name"
                ></input>
            </main>
        </div>
    );
};

export default App;

export const Search = () => {
    return (
        <form onSubmit={handleSearch}>
            <div className="search-wrapper">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-label="search"
                        fill="none"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8z"></path>
                    </svg>
                </div>
                <input type="search" name="search" id="search" />
            </div>
        </form>
    );
};

const handleSearch = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(formData.get("search"));
};

const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let { files } = e.dataTransfer;

    for (let i of files) {
        console.log(i);
        let file = new FileReader();
        file.onload = (e) => {
            let main = document.querySelector("main");
            let img = document.createElement("img");
            img.style.width = "20rem";
            img.style.height = "auto";
            console.log("loading");
            console.log(e);
            img.src = e.target.result;
            main.appendChild(img);
        };
        file.readAsDataURL(i);
    }
};
