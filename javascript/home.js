// dark mode
var lightDark = document.getElementById("lightDark");
        var logo = document.getElementById("logo");
        var contact = document.getElementById("contact-logo");

        lightDark.onclick = function () {
            document.body.classList.toggle("light-theme");
            if (document.body.classList.contains("light-theme")) {
                lightDark.src = "img/dark theme icon/moon.png";
                logo.src = "img/blacklogo.png";
                contact.src = "img/black-mail.png";
            } else {
                this.src = "img/dark theme icon/sun.png";
                logo.src = "img/whitelogo.png";
                contact.src = "img/white-mail.png"
            }
        }

        //blur animation

        const loading = document.querySelector('.welcome')

        let load = 0

        let int = setInterval(blur, 20)

        function blur() {
            load++
            if (load > 99) clearInterval(int)
            loading.style.opacity = scale(load, 0, 100, 0, 1)
        }

        const scale = (num, in_min, in_max, out_min, out_max) => {
            return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        }


        //dropdown menu
        const navToggle = document.querySelector('.nav-toggle')
        const links = document.querySelector('.links')

        navToggle.addEventListener('click', function () {
            links.classList.toggle('show-links')
        })


        //search
        const posts = [
            {
                id: 10,
                link: ' html/servers.html',
                image: 'img/servers/server-thumbnail.jpg' ,
                alt: 'a phots of hadn and some lights',
                name: 'Servers',
                description: 'What are servers and what we use them for?',
                categorie: 'pc linux windows ',
            },
            {
                id: 9,
                link: ' html/gnome_extensions.html',
                image: 'img/gnome_extensions/thumbnail.png',
                alt: 'photo of a puzzle piece',
                name: 'Gnome Extensions',
                description: 'Gonna show you some cool extensions I use.',
                categorie: 'linux pc',
            },
            {
                id: 8,
                link: ' html/browserextensions.html',
                image: ' img/Browser Extensions/thumbnail.png' ,
                alt: 'photo of extensions',
                name: 'Browser Extensions',
                description: 'I will present some of the extensions that I use daily on my web browser.',
                categorie: 'pc',
            },
            {
                id: 7,
                link: ' html/firefoxwallpaper.html',
                image: ' img/firefoxhomepagebackground/thumbnail.png' ,
                alt: 'photo of my firefox start page',
                name: ' Firefox Home Page Background',
                description: 'In this post I will show you how to personalise Firefox home page without any addition add-on.',
                categorie: 'pc windows linux',
            },
            {
                id: 6,
                link: ' html/multibootusb.html',
                image: ' img/multibootUSB/memory-stick-1267620_1920.jpg' ,
                alt: 'photo of usb sticks',
                name: 'Multiboot USB',
                description: "I'll exlplain how to create and use a multiboot USB.",
                categorie: 'pc windows',
            },
            {
                id: 5,
                link: ' html/browser.html',
                image: ' img/browser/browser-thumbnail.png' ,
                alt: 'photo of a browser template',
                name: 'Browser',
                description: 'Which browser is for you?<',
                categorie: 'other',
            },
            {
                id: 4,
                link: ' html/searchengine.html',
                image: ' img/search engine/search-bar.jpg' ,
                alt: 'photo of a search bar',
                name: 'Search engine',
                description: 'I will first explain what a search engine does, then show you the most known one.',
                categorie: 'other',
            },
            {
                id: 3,
                link: ' html/cleanjunkfiles.html',
                image: ' img/clean windows junk files/thumbnail.jpg' ,
                alt: 'photo of disk manager',
                name: 'Clean junk files on Windows',
                description: 'I will show you ways to make your computer faster, deleting unnecessary files.',
                categorie: 'windows',
                
            },
            {
                id: 2,
                link: ' html/vsextentions.html',
                image: ' img/vsextension.png' ,
                alt: 'visual studio code"',
                name: 'Visual Studio Code extensions',
                description: 'Learn about my most use extension while programming',
                categorie: 'code',
            },
            {
                id: 1,
                link: ' html/colors.html',
                image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ,
                alt: 'colorfull image',
                name: 'Colors',
                description: 'About color codes, such as rgb, hex and hsl.',
                categorie: 'other',
            },
        ];

        const categories = [...new Set(posts.map((item) => { return item }))]

        document.getElementById('searchBar').addEventListener('keyup', (e) => {
            const searchData = e.target.value.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.name.toLowerCase().includes(searchData) || item.description.toLowerCase().includes(searchData)
                )
            })
            showPost(filteredData)
        });

        const showPost = (items) => {
            document.querySelector('.posts').innerHTML = items.map((item) => {
                var { link, image, alt, name, description, categorie } = item;
                return (
                 `<a href="${link}">
                   <div class="post">
                        <img class="post-images"
                            src="${image}"
                            alt="${alt}">
                        <div>
                            <h4>${name}</h4>
                            <p>${description}</p>
                        </div>
                   </div>
                </a>`
                )
            }).join('')
        };
        showPost(categories);

        //category buttons
        document.querySelector('.pc').addEventListener('click', function(){
            const filteredData = categories.filter((item) => {
                return (
                    item.categorie.includes('pc')
                )
            })
            showPost(filteredData)
        })
        document.querySelector('.code').addEventListener('click', function(){
            const filteredData = categories.filter((item) => {
                return (
                    item.categorie.includes('code')
                )
            })
            showPost(filteredData)
        })
        document.querySelector('.windows').addEventListener('click', function(){
            const filteredData = categories.filter((item) => {
                return (
                    item.categorie.includes('windows')
                )
            })
            showPost(filteredData)
        })
        document.querySelector('.linux').addEventListener('click', function(){
            const filteredData = categories.filter((item) => {
                return (
                    item.categorie.includes('linux')
                )
            })
            showPost(filteredData)
        })
        document.querySelector('.other').addEventListener('click', function(){
            const filteredData = categories.filter((item) => {
                return (
                    item.categorie.includes('other')
                )
            })
            showPost(filteredData)
        })
        document.querySelector('.all').addEventListener('click', function(){
            const filteredData = categories.filter((item) => {
                return (item)
            })
            showPost(filteredData)
        })


// hamburger nav toggle 
const hamburger = document.querySelector(".nav-toggle");

    hamburger.addEventListener("click", () => {
      const currentState = hamburger.getAttribute("data-state");

      if (!currentState || currentState === "closed") {
        hamburger.setAttribute("data-state", "opened");
        hamburger.setAttribute("aria-expanded", "true");
      } else {
        hamburger.setAttribute("data-state", "closed");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });

        