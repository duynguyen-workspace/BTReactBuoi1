import Item from "./Item"

const Service = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <Item icon="fa-solid fa-folder-open" heading="Fresh new layout" desc="With Bootstrap 5, we've created a fresh new layout for this template!"/>
                <Item icon="fa-solid fa-cloud-arrow-down" heading="Free to download" desc="As always, Start Bootstrap has a powerful collectin of free templates."/>
                <Item icon="fa-regular fa-file-lines" heading="Jumbotron hero header" desc="The heroic part of this template is the jumbotron hero header!"/>
                <Item icon="fa-solid fa-b" heading="Feature boxes" desc="We've created some custom feature boxes using Bootstrap icons!"/>
                <Item icon="fa-solid fa-code" heading="Simple clean code" desc="We keep our dependencies up to date and squash bugs as they come!"/>
                <Item icon="fa-regular fa-circle-check" heading="A name you trust" desc="Start Bootstrap has been the leader in free Bootstrap templates since 2013!"/>
            </div>
        </div>
    )
}

export default Service
