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

const createRow = (el, i) => {
    const percent = (el.list_status.num_episodes_watched / el.node.num_episodes) *100
    return `
        <tr>
            <td class="n">${i + 1}</td>
            <td class="cover">
                <img
                    src="${el.node.main_picture.medium}"
                    alt="${el.node.title}"
                    loading="lazy" />
            </td>
            <td class="title"><a href="#">${el.node.title}</a></td>
            <td><span class="score s${el.list_status.score}">${el.list_status.score}</span></td>
            <td>${TYPE_LABEL[el.node.media_type]}</td>
            <td>
                <div class="prog ${STATUS_CLASS[el.list_status.status]}">
                    <span style="width: ${percent}%"></span>
                </div>
                <small>${el.list_status.num_episodes_watched} / ${el.node.num_episodes}</small>
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

