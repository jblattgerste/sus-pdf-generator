# The System Usability Scale PDF Generator

The System Usability Scale (SUS) PDF generator is a client-side-only JavaScript web application that allows for the generation of interactive PDF questionnaires for the System Usability Scale by [John Brooke (1996)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=qjAGPUcAAAAJ&citation_for_view=qjAGPUcAAAAJ:u5HHmVD_uO8C) and is part of the free, open source [System Usability Scale Analysis Toolkit](https://github.com/jblattgerste/sus-analysis-toolkit). While the SUS is one of the most widely used usability questionnaires and multiple validated and non-validated translations exist, it is often challenging to distinguish versions, evaluate their origin and validity, or to create correct questionnaires based on the available sets of questions. This tool combines 20 of the available (validated and non-validated) versions and langauges of the SUS questionnaire into the [**SUS PDF Generator**](https://jblattgerste.github.io/sus-pdf-generator/). It allows researchers and usability practitioner to quickly create interactive SUS questionnaires, provides insights into the origin, reliability and validity of the used variant/langauge and enables them to use custom variable descriptors like product, system or the products name in the generated questionnaires.

![The SUS PDF Generator, running on a laptop mockup](/Resources/PDFGeneratorPreview.png)

## Using the SUS PDF Generator
The SUS PDF Generator is hosted on https://jblattgerste.github.io/sus-pdf-generator/ and automatically deployed on changes to the main branch. Questionnaire versions and translations are each stored as `.json` files, containing: The questionnaire title, likert-scale descriptions, the 10 SUS questions, the source and authors of the version, and generator hints on the versions origin, relibaility and validity:

- [<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="20">`Languages\English (revised).json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/English%20(revised).json) based on [Bangor et al. (2008)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=BD7BLDgAAAAJ&citation_for_view=BD7BLDgAAAAJ:u5HHmVD_uO8C)
- [<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="20">`Languages\English (original).json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/English%20(original).json) based on [Brooke (1996)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=qjAGPUcAAAAJ&citation_for_view=qjAGPUcAAAAJ:u5HHmVD_uO8C)
- [<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="20">`Languages\English (non-alternating).json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/English%20(non-alternating).json) based on [Sauro et al. (2011)](https://scholar.google.com/citations?view_op=view_citation&hl=de&user=rmiLIsYAAAAJ&citation_for_view=rmiLIsYAAAAJ:Fu2w8maKXqMC)
- [<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="20">`Languages\English (simplified).json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/English%20(simplified).json) based on [Holden (2020)](https://scholar.google.de/citations?view_op=view_citation&hl=en&user=WH6emMQAAAAJ&cstart=20&pagesize=80&citation_for_view=WH6emMQAAAAJ:z_wVstp3MssC)
- [<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="20">`Languages\English (simplified, for children 7-8).json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/English%20(simplified,%20for%20children%207-8).json) based on [Putnam et al. (2020)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=RiZTR24AAAAJ&citation_for_view=RiZTR24AAAAJ:hFOr9nPyWt4C)
- [<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="20">`Languages\English (simplified, for children 9-11).json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/English%20(simplified,%20for%20children%209-11).json) based on [Putnam et al. (2020)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=RiZTR24AAAAJ&citation_for_view=RiZTR24AAAAJ:hFOr9nPyWt4C)
- [<img src="https://hatscripts.github.io/circle-flags/flags/de.svg" width="20">`Languages\German.json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/German.json) based on [Gao et al. (2020)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=-c2mRB4AAAAJ&citation_for_view=-c2mRB4AAAAJ:2osOgNQ5qMEC)
- [<img src="https://hatscripts.github.io/circle-flags/flags/de.svg" width="20">`Languages\German (SAP).json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/German%20(SAP).json) by [Reinhardt et al. (2013)](https://blogs.sap.com/2016/02/01/system-usability-scale-jetzt-auch-auf-deutsch/)
- [<img src="https://hatscripts.github.io/circle-flags/flags/fr.svg" width="20">`Languages\French.json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/French.json) based on [Gao et al. (2020)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=-c2mRB4AAAAJ&citation_for_view=-c2mRB4AAAAJ:2osOgNQ5qMEC)
- [<img src="https://hatscripts.github.io/circle-flags/flags/fr.svg" width="20">`Languages\French (literary).json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/French%20(literary).json) by [Gronier et al. (2021)](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hiiN2OsAAAAJ&citation_for_view=hiiN2OsAAAAJ:35N4QoGY0k4C)
- [<img src="https://hatscripts.github.io/circle-flags/flags/it.svg" width="20">`Languages\Italian.json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/Italian.json) based on [Borsci et al. (2009)](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rfrPpbkAAAAJ&citation_for_view=rfrPpbkAAAAJ:u-x6o8ySG0sC)
- [<img src="https://hatscripts.github.io/circle-flags/flags/tr.svg" width="20">`Languages\Turkish.json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/Turkish.json) based on [Demirkol et al. (2018)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=jeevbZEAAAAJ&citation_for_view=jeevbZEAAAAJ:5nxA0vEk-isC)
- [<img src="https://hatscripts.github.io/circle-flags/flags/pl.svg" width="20">`Languages\Polish.json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/Polish.json) based on [Borkowska et al. (2016)](https://scholar.google.com/citations?view_op=view_citation&hl=de&user=8MzTWB0AAAAJ&citation_for_view=8MzTWB0AAAAJ:Y0pCki6q_DkC)
- [<img src="https://hatscripts.github.io/circle-flags/flags/mx.svg" width="20">`Languages\Spanish.json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/Spanish.json) based on [Gao et al. (2020)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=-c2mRB4AAAAJ&citation_for_view=-c2mRB4AAAAJ:2osOgNQ5qMEC)
- [<img src="https://hatscripts.github.io/circle-flags/flags/pt.svg" width="20">`Languages\European Portuguese.json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/European%20Portuguese.json) based on [Martins et al. (2015)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=yaqZR24AAAAJ&citation_for_view=yaqZR24AAAAJ:-f6ydRqryjwC)
- [<img src="https://hatscripts.github.io/circle-flags/flags/nl.svg" width="20">`Languages\Dutch.json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/Dutch.json) based on [Ramratan (2010)](https://research.tue.nl/nl/studentTheses/een-andere-kijk-op-tijd)
- [<img src="https://hatscripts.github.io/circle-flags/flags/nl.svg" width="20">`Languages\Dutch (simplified, for children 9-11).json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/Dutch%20(simplified,%20for%20children%209-11).json) based on [Arztmann et al. (2022)](https://mixality.de/wp-content/uploads/2022/07/Arztmann2022MariesChemLab.pdf)
- [<img src="https://hatscripts.github.io/circle-flags/flags/se.svg" width="20">`Languages\Swedish.json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/Swedish.json) based on [Göransson (2001)](https://rosenfeldmedia.com/announcements/sus-svensk-system-usability-sc/)
- [<img src="https://hatscripts.github.io/circle-flags/flags/si.svg" width="20">`Languages\Slovene.json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/Slovene.json) based on [Blažica et al. (2014)](https://scholar.google.com/citations?view_op=view_citation&hl=de&user=YHFo7dIAAAAJ&citation_for_view=YHFo7dIAAAAJ:2osOgNQ5qMEC)
- [<img src="https://hatscripts.github.io/circle-flags/flags/dk.svg" width="20">`Languages\Danish.json`](https://github.com/jblattgerste/sus-pdf-generator/blob/main/Languages/Danish.json) based on [Hvidt et al. (2019)](https://scholar.google.com/scholar?cluster=6121607978782001070&hl=de&as_sdt=0,5)

## Contributing to the SUS PDF Generator
The SUS PDF Generator is envisioned as a participatory project, continously improving and expanding it's quality and scope. Feel free to contribute changes or additional versions/languages. If you find errors, please report them through [opening an Issue](https://github.com/jblattgerste/sus-pdf-generator/issues) or directly correct them in the corresponding `.json` file, if possible. Translations, versions and variants we are aware of that are currently not included in the tool are the following:

- <img src="https://hatscripts.github.io/circle-flags/flags/ir.svg" width="20"> **Persion** from [Dianat et al. (2014)](https://scholar.google.com/citations?view_op=view_citation&hl=de&user=h_tEF2AAAAAJ&citation_for_view=h_tEF2AAAAAJ:j3f4tGmQtD8C)
- <img src="https://hatscripts.github.io/circle-flags/flags/id.svg" width="20"> **Indonesian** from [Sharfina et al. (2016)](https://scholar.google.com/citations?view_op=view_citation&hl=de&user=c5LxBaMAAAAJ&citation_for_view=c5LxBaMAAAAJ:ldfaerwXgEUC)
- <img src="https://hatscripts.github.io/circle-flags/flags/id.svg" width="20"> **Malay** from [Marzuki et al. (2018)](https://scholar.google.com/citations?view_op=view_citation&hl=de&user=vI0mRqYAAAAJ&citation_for_view=vI0mRqYAAAAJ:hqOjcs7Dif8C)
- <img src="https://hatscripts.github.io/circle-flags/flags/eg.svg" width="20"> **Arabic** from [Gao et al. (2020)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=-c2mRB4AAAAJ&citation_for_view=-c2mRB4AAAAJ:2osOgNQ5qMEC)
- <img src="https://hatscripts.github.io/circle-flags/flags/eg.svg" width="20"> **Arabic** from [AlGhannam et al. (2018)](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=A_k0C9AAAAAJ&citation_for_view=A_k0C9AAAAAJ:u-x6o8ySG0sC)
- <img src="https://hatscripts.github.io/circle-flags/flags/cn.svg" width="20"> **Chinese** from [Gao et al. (2020)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=-c2mRB4AAAAJ&citation_for_view=-c2mRB4AAAAJ:2osOgNQ5qMEC)
- <img src="https://hatscripts.github.io/circle-flags/flags/in.svg" width="20"> **Hindi** from [Gao et al. (2020)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=-c2mRB4AAAAJ&citation_for_view=-c2mRB4AAAAJ:2osOgNQ5qMEC)
- <img src="https://hatscripts.github.io/circle-flags/flags/in.svg" width="20"> **Urdu** from [Anam et al. (2020)](https://scholar.google.com/citations?view_op=view_citation&hl=de&user=pA2NwWcAAAAJ&citation_for_view=pA2NwWcAAAAJ:W7OEmFMy1HYC)
- <img src="https://hatscripts.github.io/circle-flags/flags/gr.svg" width="20"> **Greek** from [Katsanos et al. (2012)](https://scholar.google.com/citations?view_op=view_citation&hl=de&user=_6k57BEAAAAJ&citation_for_view=_6k57BEAAAAJ:Se3iqnhoufwC)
- <img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="20"> **American Sign Language** from [Huenerfauth et al. (2017)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=UsP45DwAAAAJ&cstart=20&pagesize=80&citation_for_view=UsP45DwAAAAJ:pyW8ca7W8N0C)

Additionally, some translations, like the ones by [Gao et al. (2020)](https://scholar.google.de/citations?view_op=view_citation&hl=de&user=-c2mRB4AAAAJ&citation_for_view=-c2mRB4AAAAJ:2osOgNQ5qMEC), also include usage instructions at the top of the questionnaire. As this was not present in the original SUS and most translations do not include them, they are not available in the tool. We might add them later as another option.

## Acknowledgement
The tool itself and its source code is freely accesible for commercial and non-commercial use under the MIT license and does not require acknowledgement. Copyright of the variants and translations of the SUS fully remain with the authors mentioned in the respective sources. If you use the PDF generator for scientific purposes, an acknowledgement in form of a citation to the SUS Analysis Toolkit would be appreciated:

```tex
@inproceedings{sus-analysis-toolkit,
  title={A Web-Based Analysis Toolkit for the System Usability Scale},
  author={Blattgerste, Jonas and Behrends, Jan and Pfeiffer, Thies},
  booktitle={The 15th International Conference on PErvasive Technologies Related to Assistive Environments (PETRA '22)},
  year   = {2022},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://sus.mixality.de/},
  doi = {10.1145/3529190.3529216},
  location = {Corfu, Greece},
  series = {PETRA '22}
}
```
