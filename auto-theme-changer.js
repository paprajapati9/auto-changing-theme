let themeSettings = {
    // Theme Settings
    lightTheme : {
        // primary color
        header_background : '#8818ea',
        header_text_color : '#fefeff',
        navbar_background : '#5f0a9d',
        navbar_text_color : '#fefeff',
        footer_background : '#5ed1e3',
        footer_text_color : '#3f2675',
        sidebar_background : '#886fc136',
        sidebar_text_color : '#000000',
        main_background : '#ffffff',
        main_text_color : '#000000',
        fake_image_background : '#aaaaaa',
        theme_changer_background : '#560d9e',
    },
    darkTheme : {
        // primary color
        header_background : '#0e021a',
        header_text_color : '#bdbdbd',
        navbar_background : '#1f0039',
        navbar_text_color : '#cbcbcb',
        footer_background : '#03171a',
        footer_text_color : '#9d9d9d',
        sidebar_background : '#100527f5',
        sidebar_text_color : '#cbcbcb',
        main_background : '#352b4c',
        main_text_color : '#cbcbcb',
        fake_image_background : '#0e061a',
        theme_changer_background : '#efe9f6',
    }
}

currentTime = new Date().getHours();

window.addEventListener("load", function() {
    if(currentTime >= 6 && currentTime < 18) {
        // Day
        console.log("Day");
        document.body.classList.add("light-theme");
        Object.keys(themeSettings.lightTheme).forEach(function(key) {
            let rootVarKey = key.replace(/_/g, "-");;
            document.documentElement.style.setProperty(`--${rootVarKey}`, themeSettings.lightTheme[key]);
        });
    }else {
        // Night
        console.log("Night");
        document.body.classList.add("dark-theme");
        Object.keys(themeSettings.darkTheme).forEach(function(key) {
            let rootVarKey = key.replace(/_/g, "-");;
            document.documentElement.style.setProperty(`--${rootVarKey}`, themeSettings.darkTheme[key]);
        });
    }

    let themeChanger = document.querySelector(".theme-changer");
    if(themeChanger) {
        themeChanger.addEventListener("click", function() {
            if(document.body.classList.contains("light-theme")) {
                document.body.classList.remove("light-theme");
                document.body.classList.add("dark-theme");
                Object.keys(themeSettings.darkTheme).forEach(function(key) {
                    let rootVarKey = key.replace(/_/g, "-");;
                    document.documentElement.style.setProperty(`--${rootVarKey}`, themeSettings.darkTheme[key]);
                });
            }else {
                document.body.classList.remove("dark-theme");
                document.body.classList.add("light-theme");
                Object.keys(themeSettings.lightTheme).forEach(function(key) {
                    let rootVarKey = key.replace(/_/g, "-");;
                    document.documentElement.style.setProperty(`--${rootVarKey}`, themeSettings.lightTheme[key]);
                });
            }
        })
    }
})

