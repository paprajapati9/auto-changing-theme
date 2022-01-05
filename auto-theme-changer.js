let themeSettings = {
    // Theme Settings
    lightTheme : [
        // primary color
        primary_color_100 = '#006699',
        primary_color_200 = '#006699',
        primary_color_300 = '#006699',
        primary_color_400 = '#006699',
        primary_color_500 = '#006699',
        primary_color_600 = '#006699',
        primary_color_700 = '#006699',
        primary_color_800 = '#006699',
        // neutral colors
        neutral_color_100 = '#ffffff',
        neutral_color_200 = '#ffffff',
        neutral_color_300 = '#ffffff',
        neutral_color_400 = '#ffffff',
        neutral_color_500 = '#ffffff',
        neutral_color_600 = '#ffffff',
        neutral_color_700 = '#ffffff',
        neutral_color_800 = '#ffffff',
        // accent colors
        accent_color_100 = '#006699',
        accent_color_200 = '#006699',
        accent_color_300 = '#006699',
        accent_color_400 = '#006699',
        accent_color_500 = '#006699',
        accent_color_600 = '#006699',
        accent_color_700 = '#006699',
        accent_color_800 = '#006699',
        // background colors
        background_color_300 = '#ffffff',
        background_color_400 = '#ffffff',
        background_color_500 = '#ffffff',
        background_color_600 = '#ffffff',
    ],
    darkTheme : [
        // primary color
        primary_color_100 = '#006699',
        primary_color_200 = '#006699',
        primary_color_300 = '#006699',
        primary_color_400 = '#006699',
        primary_color_500 = '#006699',
        primary_color_600 = '#006699',
        primary_color_700 = '#006699',
        primary_color_800 = '#006699',
        // neutral colors
        neutral_color_100 = '#ffffff',
        neutral_color_200 = '#ffffff',
        neutral_color_300 = '#ffffff',
        neutral_color_400 = '#ffffff',
        neutral_color_500 = '#ffffff',
        neutral_color_600 = '#ffffff',
        neutral_color_700 = '#ffffff',
        neutral_color_800 = '#ffffff',
        // accent colors
        accent_color_100 = '#006699',
        accent_color_200 = '#006699',
        accent_color_300 = '#006699',
        accent_color_400 = '#006699',
        accent_color_500 = '#006699',
        accent_color_600 = '#006699',
        accent_color_700 = '#006699',
        accent_color_800 = '#006699',
        // background colors
        background_color_300 = '#ffffff',
        background_color_400 = '#ffffff',
        background_color_500 = '#ffffff',
        background_color_600 = '#ffffff',
    ]
}

console.log(themeSettings);

currentTime = new Date().getHours();
let style = getComputedStyle(document.body)
if(currentTime >= 6 && currentTime < 18) {
    // Day
    // console.log("Day");
    themeSettings.lightTheme.forEach(styleName => {
        console.log(styleName);
    });
    style.setProperty('--primary-color-100', themeSettings.lightTheme.primary_color_100);
    style.setProperty('--primary-color-200', themeSettings.lightTheme.primary_color_200);
    style.setProperty('--primary-color-300', themeSettings.lightTheme.primary_color_300);
    style.setProperty('--primary-color-400', themeSettings.lightTheme.primary_color_400);
    style.setProperty('--primary-color-500', themeSettings.lightTheme.primary_color_500);
    style.setProperty('--primary-color-600', themeSettings.lightTheme.primary_color_600);
    style.setProperty('--primary-color-700', themeSettings.lightTheme.primary_color_700);
    style.setProperty('--primary-color-800', themeSettings.lightTheme.primary_color_800);
    style.setProperty('--neutral-color-100', themeSettings.lightTheme.neutral_color_100);
    style.setProperty('--neutral-color-200', themeSettings.lightTheme.neutral_color_200);
    style.setProperty('--neutral-color-300', themeSettings.lightTheme.neutral_color_300);
    style.setProperty('--neutral-color-400', themeSettings.lightTheme.neutral_color_400);
    style.setProperty('--neutral-color-500', themeSettings.lightTheme.neutral_color_500);
    style.setProperty('--neutral-color-600', themeSettings.lightTheme.neutral_color_600);
    style.setProperty('--neutral-color-700', themeSettings.lightTheme.neutral_color_700);
    style.setProperty('--neutral-color-800', themeSettings.lightTheme.neutral_color_800);
}else {
    // Night
    // console.log("Night");
    style.setProperty('--primary-color-100', themeSettings.darkTheme.primary_color_100);
    style.setProperty('--primary-color-200', themeSettings.darkTheme.primary_color_200);
    style.setProperty('--primary-color-300', themeSettings.darkTheme.primary_color_300);
    style.setProperty('--primary-color-400', themeSettings.darkTheme.primary_color_400);
    style.setProperty('--primary-color-500', themeSettings.darkTheme.primary_color_500);
    style.setProperty('--primary-color-600', themeSettings.darkTheme.primary_color_600);
    style.setProperty('--primary-color-700', themeSettings.darkTheme.primary_color_700);
    style.setProperty('--primary-color-800', themeSettings.darkTheme.primary_color_800);
    style.setProperty('--neutral-color-100', themeSettings.darkTheme.neutral_color_100);
    style.setProperty('--neutral-color-200', themeSettings.darkTheme.neutral_color_200);
    style.setProperty('--neutral-color-300', themeSettings.darkTheme.neutral_color_300);
    style.setProperty('--neutral-color-400', themeSettings.darkTheme.neutral_color_400);
    style.setProperty('--neutral-color-500', themeSettings.darkTheme.neutral_color_500);
    style.setProperty('--neutral-color-600', themeSettings.darkTheme.neutral_color_600);
    style.setProperty('--neutral-color-700', themeSettings.darkTheme.neutral_color_700);
    style.setProperty('--neutral-color-800', themeSettings.darkTheme.neutral_color_800);
}
console.log(currentTime)