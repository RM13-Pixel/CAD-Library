import React from 'react';
import MainHeader from './Components/MainHeader';
import CategoryHeader from './Components/CategoryHeader';
import CategoryBannerHome from './Components/CategoryBannerHome';
import './Styles/Page.css';

const App = () => {
  return (
    <div>
      <body>
        <div class="site">
          <MainHeader></MainHeader>
          <CategoryHeader></CategoryHeader>
          <CategoryBannerHome></CategoryBannerHome>

          <div id="page">
            <p>
            The <em>Educational CAD Model Library</em> is an extension of the <a href="https://citejournal.org/">CITE Journal</a>. In the same way that a peer-reviewed journal is a repository of peer-reviewed academic manuscripts, the <em>CAD Library</em> is a repository of peer-reviewed educational objects. The <em>CITE Journal</em> and the <em>CAD Library</em> are sponsored by the <a href="https://ntls.info/">NTLS Coalition</a> and affiliated professional associations. Each sponsoring association selects the editors, curators, and review boards for its area of expertise. The educational objects on this site are licensed under a <a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
            </p>

            <p>
              We welcome submission of educational objects designed for K-12 teaching and learning for review and publication in the <em>CAD Library</em>.
            </p>

            <ul>
              <li>Curator-in-Chief - Glen Bull</li>
              <li>Curator, Mathematics Education Collection - Steven Greenstein</li>
              <li>Curator, Science Education Collection - Joshua Ellis</li>
              <li>Curator, Technology Collection - Elizabeth Whitewolf</li>
              <li>Curator, Engineering Education Collection - Ryan Novitski</li>
            </ul>
            
          </div>
        </div>
      </body>
    </div>
    
  );
};

export default App;