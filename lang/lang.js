// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'pt';
    const langData = await fetchLanguageData(userPreferredLanguage);
    changeToggler(userPreferredLanguage)
    updateContent(langData);
});

// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = langData[key];
    });
}

// Function to set the language preference
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

// Function to fetch language data
async function fetchLanguageData(lang) {
    const response = await fetch(`/lang/${lang}.json`);
    return response.json();
}

// Function to change language
async function changeLanguage(lang) {
    await setLanguagePreference(lang);
    
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
    //toggleArabicStylesheet(lang); // Toggle Arabic stylesheet
}

//Function to change toggler apearance
function changeToggler(lang){
    if(lang == 'pt'){
        document.getElementById('btn-en').classList.remove('selected-lang')
        document.getElementById('btn-pt').classList.add('selected-lang')
    }else{
        document.getElementById('btn-en').classList.add('selected-lang')
        document.getElementById('btn-pt').classList.remove('selected-lang')
    }
}