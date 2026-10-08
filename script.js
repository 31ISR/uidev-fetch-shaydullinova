const baseUrl = "https://kitek-pg.ru/json/anime";

const STATUS_CLASS = {
    watching: "st1",
    completed: "st2",
    on_hold: "st3",
    dropped: "st4",
    plan_to_watch: "st6",
}

const TYPE_LABEL = {
    tv: "TV",
    movie: "Movie",
    ova: "OVA",
    ona: "ONA",
    special: "Special",
    music: "Music"
}

const container = document.querySelector('tbody')

let animeList = []

const createRow = () => {
    return `
        <tr>
            <td class="n">1</td>
            <td class="cover">
                <img
                    src="https://cdn.myanimelist.net/images/anime/1408/114012.jpg"
                    alt=""
                    loading="lazy" />
            </td>
            <td class="title"><a href="#">Akira</a></td>
            <td><span class="score s10">10</span></td>
            <td>Movie</td>
            <td>
                <div class="prog st1">
                    <span style="width: 100%"></span>
                </div>
                <small>1 / 1</small>
            </td>
        </tr>
    `
}

const render = () => {
    container.innerHTML = animeList.data.map((el, i) => createRow(el, i)).join("")
    console.log(a)
}

const loadData = async () => {
    try {
        const res = await fetch(baseUrl)
        const data = await res.json()
        animeList = data
        render()
    } catch (error) {}
}

loadData()

