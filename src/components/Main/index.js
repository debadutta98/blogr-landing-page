export default function Main() {
    return <main>
        <h2>Designed for the future</h2>
        <div className="intro-desktop-view">
            <div className="intro-desktop-view__container">
                <aside>
                    <h3>Introducing an extensible editor</h3>
                    <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                        change the looks of a blog.</p>
                </aside>
                <aside>
                    <h3>Robust content management</h3>
                    <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                </aside>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/illustration-editor-desktop.svg'}
                srcSet={[process.env.PUBLIC_URL + '/images/illustration-editor-desktop.svg 50w', process.env.PUBLIC_URL + '/images/illustration-editor-mobile.svg 100w'].join(',')}
                sizes="(min-width:854px) 70vw , 100vw"
                alt="desktop" />
        </div>
        <div className="intro-mobile-view">
            <img src={process.env.PUBLIC_URL + '/images/illustration-phones.svg'} alt="mobile" />
            <aside>
                <h1>State of the Art Infrastructure</h1>
                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                </p>
            </aside>
        </div>
        <div className="intro-laptop-view">
            <div className="intro-laptop-view__container">
                <aside>
                    <h3>Free, open, simple</h3>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </aside>
                <aside>
                    <h3>Powerful tooling</h3>
                    <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.</p>
                </aside>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/illustration-laptop-desktop.svg'} 
                srcSet={[process.env.PUBLIC_URL + '/images/illustration-laptop-desktop.svg 50w', process.env.PUBLIC_URL + '/images/illustration-laptop-mobile.svg 100w'].join(',')}
                 sizes="(min-width:854px) 80vw , 100vw"
                 alt="laptop" />
        </div>
    </main>;
}