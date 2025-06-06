import React from 'react'


export default function Index() {
  return (<>
    <div>Index</div>
    <div style={{ whiteSpace: 'pre' }}>
      <blockquote  className="font-semibold text-gray-900 dark:text-white text-xl italic">

        {htmlTemplate}
      </blockquote>
    </div>
    </>
  )
}

const htmlTemplate = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Intitulé de ma page</title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One"
      rel="stylesheet"
      type="text/css" />
    <link rel="stylesheet" href="style.css" />

    <!-- Les trois lignes ci‑dessous sont un correctif pour que la sémantique
          HTML5 fonctionne correctement avec les anciennes versions de
          Internet Explorer-->
    <!--[if lt IE 9]>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
  </head>

  <body>
    <!-- Voici notre en‑tête principale utilisée dans toutes les pages
          de notre site web -->
    <header>
      <h1>En-tête</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">L'équipe</a></li>
        <li><a href="#">Projets</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <!-- Un formulaire de recherche est une autre façon de naviguer de
            façon non‑linéaire dans un site. -->

      <form>
        <input type="search" name="q" placeholder="Rechercher" />
        <input type="submit" value="Lancer !" />
      </form>
    </nav>

    <!-- Ici nous mettons le contenu de la page -->
    <main>
      <!-- Il contient un article -->
      <article>
        <h2>En-tête d'article</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>

        <h3>Sous‑section</h3>
        <p>
          Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem.
          Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.
        </p>
        <p>
          Pelientesque auctor nisi id magna consequat sagittis. Curabitur
          dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet.
          Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.
        </p>

        <h3>Autre sous‑section</h3>
        <p>
          Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
          soclis natoque penatibus et manis dis parturient montes, nascetur
          ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem
          facilisis semper ac in est.
        </p>
        <p>
          Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
          tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
          ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi
          diam iaculis velit, is fringille sem nunc vet mi.
        </p>
      </article>

      <!-- Le contenu « à côté » peut aussi être intégré dans le contenu
            principal -->
      <aside>
        <h2>En relation</h2>
        <ul>
          <li><a href="#">Combien j'aime être près des rivages</a></li>
          <li><a href="#">Combien j'aime être près de la mer</a></li>
          <li><a href="#">Bien que dans le nord de l'Angleterre</a></li>
          <li><a href="#">Il n'arrête jamais de pleuvoir</a></li>
          <li><a href="#">Eh bien…</a></li>
        </ul>
      </aside>
    </main>

    <!-- Et voici notre pied de page utilisé sur toutes les pages du site -->
    <footer>
      <p>©Copyright 2050 par personne. Tous droits reversés.</p>
    </footer>
  </body>
</html>`