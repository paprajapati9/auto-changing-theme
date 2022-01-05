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
    },
    darkTheme : {
        // primary color
        header_background : '#23152f',
        header_text_color : '#fefeff',
        navbar_background : '#5f0a9d',
        navbar_text_color : '#fefeff',
        footer_background : '#5ed1e3',
        footer_text_color : '#3f2675',
        sidebar_background : '#886fc136',
    }
}

console.log(themeSettings);

currentTime = new Date().getHours();

// window.addEventListener("load", function() {
//     console.log("sasa");
//     let style = getComputedStyle(document.body);
//     if(currentTime >= 6 && currentTime < 18) {
//         // Day
//         console.log("Day");
//         Object.keys(themeSettings.lightTheme).forEach(function(key) {
//             let rootVarKey = key.replace(/_/g, "-");;
//             document.documentElement.style.setProperty(`--${rootVarKey}`, themeSettings.lightTheme[key]);
//         });
//     }else {
//         // Night
//         console.log("Night");
//         Object.keys(themeSettings.darkTheme).forEach(function(key) {
//             let rootVarKey = key.replace(/_/g, "-");;
//             document.documentElement.style.setProperty(`--${rootVarKey}`, themeSettings.darkTheme[key]);
//         });
//     }
// })