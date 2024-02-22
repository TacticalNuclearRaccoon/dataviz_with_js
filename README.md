# Developping apps for Data visualization

## Course by JLG Guenego

![](https://i.imgur.com/Bx4AkTJ.png)

## Prerequisites

- node
- npm
- git
- Chrome (web browser)
- VsCode

### clone main repository from JLG Consulting

```
git clone https://github.com/jlg-formation/dtvcv1-fev-2024.git
```

node_modules repertory is gitignored in this project. Type:

```
npm i
```

to fetch it from the npm package manager.

## Data and exercices

01-affluent_seine folder includes example exercices on data about the rivers joining the Seine river (Paris/France)

This data was fetched from wikiData with the following SPARQL query:

```
#Affluent de la Seine
SELECT ?river ?riverLabel ?length ?debit
WHERE
{
  ?river wdt:P403 wd:Q1471. # se jette dans la seine
  ?river wdt:P2043 ?length. # a pour longueur
  ?river wdt:P2225 ?debit. # a pour debit
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". } # Helps get the label in your language, if not, then en language
}
ORDER BY DESC(?length)
```
