/**
* @license
* SUS PDF Generator
* Copyright (c) 2022 Jonas Blattgerste. All rights reserved.
* Licensed under the MIT license. See LICENSE file in the project root for details.
*/

//Declare global variables for the selected Language object and variable descriptor
var selectedQuestionnaireLanguage = null;
var selectedQuestionnaireDescriptor = null;

//Generate a PDF to display on startup of the tool
OnStart();
async function OnStart() {
    //Load the langauge for the default selection
    selectedQuestionnaireLanguage = await FetchLanguageFile(document.getElementById("questionnaireLanguage").options[document.getElementById("questionnaireLanguage").selectedIndex].text);

    //Store the default variable descriptor from the default langauge
    selectedQuestionnaireDescriptor = selectedQuestionnaireLanguage.VariableDescriptors[0].Default;

    //Show the questionnare hint for the initially selected langauge
    SetQuestionnaireHint();

    //Hide fields we dont need on startup
    document.getElementById('CustomNameHolder').style.display = "none";
    document.getElementById('CustomQuestionnaire').style.display = "none";

    //Display the first PDF on startup
    RefreshDisplayedPDF();
}

//Display a refreshed PDF on the webpage
async function RefreshDisplayedPDF() {
    var pdf = await GeneratePDFQuestionnaire();
    PDFObject.embed(pdf.output('datauristring'), "#PDF-Holder", {
        pdfOpenParams: {
            navpanes: 0
        }
    });
    console.log("The PDF preview was refreshed.");
}

//Download the currently displayed version of the PDF
async function DownloadPDF() {
    var pdf = await GeneratePDFQuestionnaire();
    pdf.save('SUS Questionnaire.pdf');
    console.log("The PDF was downloaded.");
}

//Triggered when the user changes the language selection dropdown value - loads a new langauge object from JSON
async function OnLanguageSelectionChanged() {
    //Get the value from the dropdown menu
    let selectedLanguage = document.getElementById("questionnaireLanguage").options[document.getElementById("questionnaireLanguage").selectedIndex].text;

    //Fetch and store the corresponding language object
    selectedQuestionnaireLanguage = await FetchLanguageFile(selectedLanguage);

    //Display the hints from the questionnaire
    SetQuestionnaireHint();

    console.log("New language selected: " + selectedLanguage);

    if(selectedLanguage == "Custom"){
        //Hide the descriptor options
        document.getElementById('VariableDescriptor').style.display = "none";
        document.getElementById('CustomQuestionnaire').style.display = "block";

        //Refresh the custom questionnaire input fields to apply previously input values
        OnCustomQuestionnaireChanged();

    }else{
        //Show the descriptor options
        document.getElementById('VariableDescriptor').style.display = "block";
        document.getElementById('CustomQuestionnaire').style.display = "none";

        //We have to refresh the variable descriptor selection aswell when we change langauges
        OnDescriptorSelectionChanged();
    }

    //Refresh the displayed PDF - this is done in OnDescriptorSelectionChanged() or OnCustomQuestionnaireChanged() anyway
    //RefreshDisplayedPDF();
}

//On changes to the input fields of the custom questionnaire, use them to generate the questionnaire
async function OnCustomQuestionnaireChanged(){
    if(document.getElementById("CustomSUSTitle").value != ""){
        selectedQuestionnaireLanguage.PDFTitle = document.getElementById("CustomSUSTitle").value;
    }else{
        selectedQuestionnaireLanguage.PDFTitle = document.getElementById("CustomSUSTitle").getAttribute("placeholder");
    }
    if(document.getElementById("CustomSUSLowerLikertItem").value != ""){
        selectedQuestionnaireLanguage.LikertScaleLowerExtreme = document.getElementById("CustomSUSLowerLikertItem").value;
    }else{
        selectedQuestionnaireLanguage.LikertScaleLowerExtreme = document.getElementById("CustomSUSLowerLikertItem").getAttribute("placeholder");
    }
    if(document.getElementById("CustomSUSUpperLikertItem").value != ""){
        selectedQuestionnaireLanguage.LikertScaleUpperExtreme = document.getElementById("CustomSUSUpperLikertItem").value;
    } else {
        selectedQuestionnaireLanguage.LikertScaleUpperExtreme = document.getElementById("CustomSUSUpperLikertItem").getAttribute("placeholder");
    }
    if(document.getElementById("CustomQuestion1").value != ""){
        selectedQuestionnaireLanguage.Questions[0].Question1 = document.getElementById("CustomQuestion1").value;
    }else{
        selectedQuestionnaireLanguage.Questions[0].Question1 = document.getElementById("CustomQuestion1").getAttribute("placeholder");
    }
    if(document.getElementById("CustomQuestion2").value != ""){
        selectedQuestionnaireLanguage.Questions[1].Question2 = document.getElementById("CustomQuestion2").value;
    }else{
        selectedQuestionnaireLanguage.Questions[1].Question2 = document.getElementById("CustomQuestion2").getAttribute("placeholder");
    }
    if(document.getElementById("CustomQuestion3").value != ""){
        selectedQuestionnaireLanguage.Questions[2].Question3 = document.getElementById("CustomQuestion3").value;
    }else{
        selectedQuestionnaireLanguage.Questions[2].Question3 = document.getElementById("CustomQuestion3").getAttribute("placeholder");
    }
    if(document.getElementById("CustomQuestion4").value != ""){
        selectedQuestionnaireLanguage.Questions[3].Question4 = document.getElementById("CustomQuestion4").value;
    }else{
        selectedQuestionnaireLanguage.Questions[3].Question4 = document.getElementById("CustomQuestion4").getAttribute("placeholder");
    }
    if(document.getElementById("CustomQuestion5").value != ""){
        selectedQuestionnaireLanguage.Questions[4].Question5 = document.getElementById("CustomQuestion5").value;
    }else{
        selectedQuestionnaireLanguage.Questions[4].Question5 = document.getElementById("CustomQuestion5").getAttribute("placeholder");
    }
    if(document.getElementById("CustomQuestion6").value != ""){
        selectedQuestionnaireLanguage.Questions[5].Question6 = document.getElementById("CustomQuestion6").value;
    }else{
        selectedQuestionnaireLanguage.Questions[5].Question6 = document.getElementById("CustomQuestion6").getAttribute("placeholder");
    }
    if(document.getElementById("CustomQuestion7").value != ""){
        selectedQuestionnaireLanguage.Questions[6].Question7 = document.getElementById("CustomQuestion7").value;
    }else{
        selectedQuestionnaireLanguage.Questions[6].Question7 = document.getElementById("CustomQuestion7").getAttribute("placeholder");
    }
    if(document.getElementById("CustomQuestion8").value != ""){
        selectedQuestionnaireLanguage.Questions[7].Question8 = document.getElementById("CustomQuestion8").value;
    }else{
        selectedQuestionnaireLanguage.Questions[7].Question8 = document.getElementById("CustomQuestion8").getAttribute("placeholder");
    }
    if(document.getElementById("CustomQuestion9").value != ""){
        selectedQuestionnaireLanguage.Questions[8].Question9 = document.getElementById("CustomQuestion9").value;
    }else{
        selectedQuestionnaireLanguage.Questions[8].Question9 = document.getElementById("CustomQuestion9").getAttribute("placeholder");
    }
    if(document.getElementById("CustomQuestion10").value != ""){
        selectedQuestionnaireLanguage.Questions[9].Question10 = document.getElementById("CustomQuestion10").value;
    }else{
        selectedQuestionnaireLanguage.Questions[9].Question10 = document.getElementById("CustomQuestion10").getAttribute("placeholder");
    }

    //Refresh the displayed PDF
    RefreshDisplayedPDF();
}

//Changes the hints displayed corrisponding to the currently selected version/langauge of the SUS
async function SetQuestionnaireHint() {
    //selectedQuestionnaireLanguage.PDFGeneratorLangaugeHints;
    let languageHintString = "";

    //Add a lable at the top of the questionnaire hints if this is the original SUS
    if (selectedQuestionnaireLanguage.VariantIsOriginal == "true") {
        languageHintString += " <span class=\"badge bg-success\">Original</span>";
    }
    
    //Add the source tag at the top of the questionnaire hints
    if (selectedQuestionnaireLanguage.VariantIsFromPeerReviewedSource == "true") {
        languageHintString += " <span class=\"badge bg-success\">Peer-Reviewed</span>";
    } else {
        languageHintString += " <span class=\"badge bg-danger\">Not Peer-Reviewed</span>";
    }
    
    //Add a lable at the top of the questionnaire hints if this is a community contribution
    if (selectedQuestionnaireLanguage.CommunityContribution == "true") {
        languageHintString += " <span class=\"badge bg-dark\">Community Contribution</span>";
    }

    //Add the validity lables at the top of the questionnaire hints
    if (selectedQuestionnaireLanguage.VariantIsValidated == "true") {
        languageHintString += " <span class=\"badge bg-success\">Validated</span>";
    }
    
    //Add the reliability lables at the top of the questionnaire hints
    if (selectedQuestionnaireLanguage.VariantIsInternallyReliable == "true") {
        languageHintString += " <span class=\"badge bg-success\">Internally Reliable</span>";
    }

    //Add the caution lable at the top of the questionnaire hints if needed
    if (selectedQuestionnaireLanguage.VariantNeedForCaution == "true") {
        languageHintString += " <span class=\"badge bg-danger\">CAUTION!</span>";
    }
    
    //Add some space
    languageHintString += "<br><br>";

    //Add the variants generator description
    languageHintString += selectedQuestionnaireLanguage.VariantGeneratorDescription;

    //If this is not the custom langauge, show the author and source
    if (selectedQuestionnaireLanguage.LanguageName != "Custom") {
        languageHintString += "<br><br>";
        //Check if this is a community contribution or has an external source
        if (selectedQuestionnaireLanguage.CommunityContribution == "false") {
            //Add the variants author and source
            languageHintString += "Source:";
            languageHintString += " <a href=\""
                + selectedQuestionnaireLanguage.VariantSource
                + "\" class=\"alert-link\" target=\"_blank\">"
                + selectedQuestionnaireLanguage.VariantAuthors
                + "</a>";
        } else {
            //Add the name of the contributer
            languageHintString += "Contributed by: " + selectedQuestionnaireLanguage.VariantAuthors;
        }
    }

    //Set the string to the languageHint box
    document.getElementById("languageHint").innerHTML = languageHintString;
}

//Triggered when the user changes the variable descriptor selection dropdown value - changes the variable descriptor
async function OnDescriptorSelectionChanged() {
    //Get the value from the dropdown menu
    let selectedDescriptor = document.getElementById("questionnaireDescriptor").options[document.getElementById("questionnaireDescriptor").selectedIndex].text;

    //Use the selected variable descriptor. If the custom option is selected, show an input field and use its contents
    if (selectedDescriptor == "Custom") {
        document.getElementById('CustomNameHolder').style.display = "block";
        selectedQuestionnaireDescriptor = document.getElementById("CustomName").value;
        console.log("New variable descriptor selected: " + selectedDescriptor + " (" + selectedQuestionnaireDescriptor + ")");
        if (selectedQuestionnaireDescriptor == "") {
            selectedQuestionnaireDescriptor = "[...]"
        }
    } else {
        document.getElementById('CustomNameHolder').style.display = "none";
        if (selectedDescriptor == "Product") {
            selectedQuestionnaireDescriptor = selectedQuestionnaireLanguage.VariableDescriptors[1].Product;
        } else if (selectedDescriptor == "System") {
            selectedQuestionnaireDescriptor = selectedQuestionnaireLanguage.VariableDescriptors[2].System;
        } else {
            selectedQuestionnaireDescriptor = selectedQuestionnaireLanguage.VariableDescriptors[0].Default;
        }
        console.log("New variable descriptor selected: " + selectedDescriptor);
    }

    //Refresh the displayed PDF
    RefreshDisplayedPDF();
}

//Triggered when the user changes the custom variable descriptor input field
async function OnCustomNameChanged() {
    selectedQuestionnaireDescriptor = document.getElementById("CustomName").value;
    console.log("The custom variable descriptor was changed to: " + selectedQuestionnaireDescriptor);

    if (selectedQuestionnaireDescriptor == "") {
        selectedQuestionnaireDescriptor = "[...]"
    }

    //Refresh the displayed PDF
    RefreshDisplayedPDF();
}

//Fetches the langauge file JSON and returns it as an object
async function FetchLanguageFile(languageName) {
    let url = "https://jblattgerste.github.io/sus-pdf-generator/Languages/" + languageName + ".json";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

//Generates the PDF SUS questionnaire using the global variables of the langauge object and the variable descriptor and returns it to the calling function
async function GeneratePDFQuestionnaire() {
    //Generate a jsPDF
    window.jsPDF = window.jspdf.jsPDF;
    var pdf = new jsPDF();

    //Add Roboto fonts
    pdf.addFont("https://jblattgerste.github.io/sus-pdf-generator/Fonts/Roboto-Regular.ttf", "roboto", "regular");
    pdf.addFont("https://jblattgerste.github.io/sus-pdf-generator/Fonts/Roboto-Bold.ttf", "roboto", "bold");
    pdf.addFont("https://jblattgerste.github.io/sus-pdf-generator/Fonts/Roboto-LightItalic.ttf", "roboto", "light");

    //Page title
    pdf.setFontSize(21);
    pdf.setFont("roboto", "bold");
    pdf.text(selectedQuestionnaireLanguage.PDFTitle, 105, 18, null, null, "center");
    if (selectedQuestionnaireLanguage.PDFTitle != "System Usability Scale (SUS)") {
        pdf.setFontSize(12);
        pdf.setFont("roboto");
        pdf.text("System Usability Scale (SUS)", 105, 9, null, null, "center");
    }

    //Add the likert scale descriptions
    pdf.setFontSize(12);
    pdf.setFont("roboto", "bold");
    pdf.text(pdf.splitTextToSize(selectedQuestionnaireLanguage.LikertScaleLowerExtreme, 37), 105, 30, null, null, "center");
    pdf.text(pdf.splitTextToSize(selectedQuestionnaireLanguage.LikertScaleUpperExtreme, 37), 185, 30, null, null, "center");

    //Add the 10 Questions to the pdf, replace the variables and delete the brackets around the articles before the variable if they werent already deleted because of the custom variable option
    AddQuestionToPDF(pdf, selectedQuestionnaireLanguage.Questions[0].Question1, 40);
    AddQuestionToPDF(pdf, selectedQuestionnaireLanguage.Questions[1].Question2, 65);
    AddQuestionToPDF(pdf, selectedQuestionnaireLanguage.Questions[2].Question3, 90);
    AddQuestionToPDF(pdf, selectedQuestionnaireLanguage.Questions[3].Question4, 115);
    AddQuestionToPDF(pdf, selectedQuestionnaireLanguage.Questions[4].Question5, 140);
    AddQuestionToPDF(pdf, selectedQuestionnaireLanguage.Questions[5].Question6, 165);
    AddQuestionToPDF(pdf, selectedQuestionnaireLanguage.Questions[6].Question7, 190);
    AddQuestionToPDF(pdf, selectedQuestionnaireLanguage.Questions[7].Question8, 215);
    AddQuestionToPDF(pdf, selectedQuestionnaireLanguage.Questions[8].Question9, 240);
    AddQuestionToPDF(pdf, selectedQuestionnaireLanguage.Questions[9].Question10, 265);

    //Add the footer to show a link to the tool
    pdf.setFontSize(9);
    pdf.setFont("roboto", "light");
    pdf.text("Created with the SUS PDF Generator (https://jblattgerste.github.io/sus-pdf-generator/)", 105, 290, null, null, "center");

    //Return the completed pdf
    return pdf;
}

//Adds one of the ten likert-scale questions to the pdf with the question text, scale description and 5 options to select from a group
function AddQuestionToPDF(pdf, questionText, verticalPosition) {
    //If the Custom variable descriptor option is selected, just delete all the articles in the backets, otherwise only the brackets
    if (document.getElementById("questionnaireDescriptor").options[document.getElementById("questionnaireDescriptor").selectedIndex].text == "Custom") {
        questionText = questionText.replace(/ *\[[^)]*\] */g, " ");
    } else {
        questionText = questionText.replace("[", "").replace("]", "");
    }

    //Replace the variable descriptor with the selected one
    questionText = questionText.replace("%VARIABLE%", selectedQuestionnaireDescriptor);

    //Utilize jsPDFs acroForms for the questionnare
    var {
        ComboBox,
        ListBox,
        CheckBox,
        PushButton,
        TextField,
        PasswordField,
        RadioButton,
        Appearance
    } = jsPDF.AcroForm;

    //Setup the question text
    pdf.setFontSize(12);
    pdf.setFont("roboto", "regular");

    //Automatically break the line after 40 characters - I will leave it in here but its obviously better to do it by width
    //questionText = BreakLineAutomaticaly(questionText, 40, "\n");
    //Automatically break line after 75...width (?)
    questionText = pdf.splitTextToSize(questionText, 75);

    //Set the question text
    pdf.text(questionText, 15, (verticalPosition + 3.5), null, null, "left");

    //Setup the 5 radio group buttons for the likert scale
    var questionChoice = new RadioButton();
    questionChoice.Subtype = "Form";
    pdf.addField(questionChoice);
    pdf.setLineWidth(2);
    var stronglyDisagree = questionChoice.createOption("StronglyDisagree");
    stronglyDisagree.Rect = [95, verticalPosition, 20, 10];
    pdf.rect(95, verticalPosition, 20, 10);
    var disagree = questionChoice.createOption("Disagree");
    disagree.Rect = [115, verticalPosition, 20, 10];
    pdf.rect(115, verticalPosition, 20, 10);
    var neutral = questionChoice.createOption("Neutral");
    neutral.Rect = [135, verticalPosition, 20, 10];
    pdf.rect(135, verticalPosition, 20, 10);
    var agree = questionChoice.createOption("Agree");
    agree.Rect = [155, verticalPosition, 20, 10];
    pdf.rect(155, verticalPosition, 20, 10);
    var stronglyAgree = questionChoice.createOption("StronglyAgree");
    stronglyAgree.Rect = [175, verticalPosition, 20, 10];
    pdf.rect(175, verticalPosition, 20, 10);
    questionChoice.setAppearance(Appearance.RadioButton.Cross);

    //Setup the likert scale descriptions
    pdf.setFontSize(9);
    pdf.setFont("roboto", "light");
    pdf.text("1", 105, (verticalPosition + 15), null, null, "center");
    pdf.text("2", 125, (verticalPosition + 15), null, null, "center");
    pdf.text("3", 145, (verticalPosition + 15), null, null, "center");
    pdf.text("4", 165, (verticalPosition + 15), null, null, "center");
    pdf.text("5", 185, (verticalPosition + 15), null, null, "center");
}

//Automatically adds a lineBreakSymbol after lineCharacterLimit characters of a given string
function BreakLineAutomaticaly(stringToBreak, characterLimitPerLine, lineBreakSymbol) {
    if (stringToBreak.length > characterLimitPerLine) {
        var character = characterLimitPerLine
        for (; character > 0 && stringToBreak[character] != ' '; character--) {
        }
        if (character > 0) {
            var left = stringToBreak.substring(0, character);
            var right = stringToBreak.substring(character + 1);
            return left + lineBreakSymbol + BreakLineAutomaticaly(right, characterLimitPerLine, lineBreakSymbol);
        }
    }
    return stringToBreak;
}
