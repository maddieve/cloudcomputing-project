This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Documentatie


Crearea unei aplicaţii web/mobile care să utilizeze 2 servicii în cloud, prin intermediul unui API REST

RecipeFinder - Aplicație de Rețete 



Student:
Grigoraș Mădălina-Andreea
Grupa 1120
 
Cuprins

Introducere	2
Descriere problemă	3
Descriere API	4
Flux de date	5
Exemple de request / response	5
Metode HTTP	6
Capturi ecran aplicație	7
Concluzii	9
Referințe	10


Introducere
Această documentație descrie o aplicație web care permite utilizatorului să introducă o rețetă și numărul de porții asociat. După introducerea rețetei pe o pagină dedicată, aceasta este stocată într-o bază de date și afișată pe pagina principală alături de alte rețete deja existente în baza de date. De asemenea, aplicația utilizează API-ul Edamam pentru a selecta 20 de rețete care conțin exclusiv fructe, potrivite pentru o dietă echilibrată.
API-ul Edamam este utilizat în această aplicație pentru a accesa informații despre rețete și alimente. Prin intermediul acestui API, aplicația selectează 20 de rețete care conțin numai fructe, oferind utilizatorului o gamă variată de opțiuni pentru o dietă sănătoasă și echilibrată. API-ul Edamam oferă informații detaliate despre ingredientele și instrucțiunile de preparare pentru fiecare rețetă, ceea ce facilitează utilizatorilor să găsească și să încerce rețete noi.
Un API (Interfață de Programare a Aplicațiilor) este o metodă de comunicare și interacțiune între diferite aplicații sau componente software. Aceasta stabilește regulile și protocoalele prin care aceste aplicații pot să schimbe date și să lucreze împreună pentru a atinge obiective comune sau pentru a realiza funcționalități specifice.
Aplicația permite, de asemenea, utilizatorului să șteargă rețetele pe care le-a adăugat în baza de date. Această funcționalitate oferă flexibilitate utilizatorului în gestionarea propriilor rețete și în menținerea bazelor de date personale ordonate și actualizate.
Această aplicație web este utilă pentru pasionații de gătit și persoanele care doresc să descopere și să încerce noi rețete. Utilizatorii pot adăuga rețete proprii în baza de date și, totodată, pot accesa o varietate de rețete cu fructe recomandate de API-ul Edamam, astfel încât să se bucure de o alimentație sănătoasă și echilibrată.
În continuare, documentația va detalia modul de utilizare a API-ului Edamam și implementarea funcționalităților de introducere, afișare și ștergere a rețetelor în cadrul aplicației.

Descriere problemă
Problema pe care o rezolvă această aplicație este aceea că utilizatorii pot să introducă și să acceseze rapid și ușor rețete culinare, precum și informații despre acestea, precum numărul de porții și instrucțiunile de preparare. Aplicația permite utilizatorilor să își organizeze propriile rețete și să descopere rețete noi prin intermediul API-ului Edamam. De asemenea, aplicația oferă o selecție de 20 de rețete care conțin exclusiv fructe, adecvate pentru o dietă echilibrată. Utilizatorii pot, de asemenea, să șteargă rețetele pe care le-au adăugat în baza de date, asigurându-se că au control asupra conținutului și organizării propriilor rețete. 
În ansamblu, această aplicație rezolvă problema de a facilita accesul și gestionarea rețetelor culinare pentru utilizatori, oferindu-le o experiență convenabilă și personalizată în ceea ce privește gătitul și alimentația sănătoasă.
Descriere API
API-ul Edamam este un serviciu care oferă acces la o bază de date bogată în informații despre rețete culinare și alimente. Unul dintre aspectele sale relevante este capacitatea de a furniza o selecție de 20 de rețete care conțin exclusiv fructe, perfecte pentru o dietă echilibrată.
Prin intermediul API-ului Edamam, aplicația poate solicita și primi informații despre aceste rețete specifice, inclusiv ingredientele necesare și instrucțiunile de preparare. Utilizatorii aplicației pot beneficia astfel de o gamă variată de opțiuni pentru a-și diversifica dieta și a se asigura că consumă alimente sănătoase și proaspete.
API-ul Edamam oferă, de asemenea, informații detaliate despre valoarea nutrițională a alimentelor și rețetelor, inclusiv conținutul de calorii, macronutrienți și vitamine. Aceste informații pot fi utile pentru utilizatori în stabilirea și menținerea unui regim alimentar echilibrat și sănătos.
Prin intermediul API-ului Edamam, aplicația poate accesa și utiliza aceste informații despre rețete și alimente, oferind utilizatorilor o experiență completă și informativă în ceea ce privește alimentația și prepararea rețetelor. Astfel, API-ul Edamam contribuie la îmbunătățirea experienței utilizatorului și la promovarea unui stil de viață sănătos prin intermediul aplicației.
Endpoint-ul este o adresă URL specifică către care aplicația poate trimite cereri pentru a obține date de la API-ul Edamam. Prin intermediul acestui endpoint, aplicația poate accesa informații despre rețetele care conțin exclusiv fructe, potrivite pentru o dietă echilibrată.
Adresa URL a endpoint-ului API-ului Edamam poate arăta aproximativ astfel:
https://api.edamam.com/api/recipes/v2/fruits
Flux de date
Utilizatorii accesează aplicația web prin intermediul unui browser web. Pe pagina web, utilizatorii pot adăuga o retetă nouă și numărul de porții dorit prin intermediul butonului "Add Recipe". După ce utilizatorii introduc detaliile retetei și apasă butonul "Submit", aplicația face o solicitare HTTP către baza de date pentru a adăuga reteta nouă în baza de date. Apoi, aplicația afișează reteta nouă pe pagina principală alături de celelalte retete existente. Utilizatorii pot vizualiza toate retetele disponibile pe pagina principală și pot șterge o retetă prin intermediul butonului "Delete" aflat în dreptul fiecărei retete.
Exemple de request / response
Pentru a comunica cu API-ul Edamam, am utilizat metoda HTTP GET pentru a obține rețetele care conțin exclusiv fructe potrivite pentru o dietă echilibrată. Am configurat cererile noastre HTTP cu chei unice private, denumite API Key și API ID, care ne-au fost furnizate de API-ul Edamam. Aceste chei au fost integrate în proiect prin definirea lor într-un fișier de configurare .env. 
   
Metode HTTP
În interacțiunea cu baza de date, am utilizat metodele HTTP GET, DELETE și POST.
Metoda HTTP GET a fost folosită pentru a prelua informațiile existente în baza de date. Am realizat cereri de tip GET către endpoint-ul corespunzător pentru a obține rețetele deja existente și a le afișa pe pagina principală a aplicației.

Metoda HTTP DELETE a fost utilizată pentru a șterge rețetele selectate de către utilizatori din baza de date. Prin intermediul unei cereri DELETE către endpoint-ul corespunzător și furnizând identificatorul unic al rețetei, am eliminat intrarea corespunzătoare din baza de date.
Metoda HTTP POST a fost utilizată pentru a adăuga rețetele introduse de utilizatori în baza de date. Prin intermediul unei cereri POST către endpoint-ul corespunzător, am trimis informațiile despre rețetă, inclusiv ingredientele și numărul de porții, iar acestea au fost adăugate în baza de date.
Capturi ecran aplicație
Pagina de porninre
 
Pagina unde se pot insera diverse rețete și cantitățile lor
 

Pagina principala după inserarea unei rețete noi
 


Concluzii
Aplicația descrisă oferă utilizatorilor posibilitatea de a gestiona retete culinare prin intermediul unei interfețe web. Utilizatorii pot introduce retetele dorite împreună cu numărul de porții corespunzător, iar acestea sunt stocate într-o bază de date. Prin intermediul API-ului Edamam, aplicația afișează, de asemenea, o selecție de 20 de retete care conțin doar fructe, promovând astfel o dietă echilibrată.
Fluxul de date în aplicație este intuitiv și simplu. Utilizatorii deschid aplicația într-un browser web, introduc reteta și numărul de porții prin intermediul câmpurilor specifice și apasă butonul de adăugare. Aceste informații sunt trimise prin metoda HTTP POST la server, unde sunt adăugate în baza de date. Pe pagina principală, retetele existente în baza de date sunt afișate, alături de celelalte retete preluate prin intermediul API-ului Edamam.
Utilizatorii au posibilitatea de a șterge retetele din baza de date prin intermediul butonului de ștergere. Aceasta inițiază o solicitare HTTP de tip DELETE către server, care va elimina reteta corespunzătoare din baza de date.
În concluzie, aplicația oferă un mod eficient și comod de a gestiona și vizualiza retete culinare. Prin intermediul API-ului Edamam și utilizarea metodelor HTTP adecvate, aplicația permite utilizatorilor să adauge, să vizualizeze și să șteargă retete într-un mod simplu și interactiv.







Referințe
https://developer.edamam.com/edamam-docs-recipe-api
https://www.mongodb.com/docs/

Link către repository-ul cu codul sursă:
https://github.com/maddieve/cloudcomputing-project

Site-ul aplicației web:
https://cloudcomputing-project-ag8woyvnh-maddieve.vercel.app/

Link prezentare aplicație:
https://youtu.be/wMRnQpGznpE




