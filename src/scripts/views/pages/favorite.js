import FavRestoIdb from '../../data/resto-idb';
// eslint-disable-next-line camelcase
import card_layout from '../templates/card-layout';

const Favorite = {
  async render() {
    return `
      <div class="container">
      <div id="loading"></div>
        <h2 class="title-container">Favorited Resto</h2>

        <section tabindex="0" id="fav-resto"></section>
      </div>
    `;
  },

  async afterRender() {
    // get fav resto
    const data = await FavRestoIdb.getAllResto();

    const favRestoContainer = document.querySelector('#fav-resto');

    // if data empty
    if (data.length === 0) {
      favRestoContainer.innerHTML = `
        Empty favorite Resto. Put one, by clicking heart button in the detail page.
      `;
    }

    // display all fav resto
    data.forEach((resto) => {
      favRestoContainer.innerHTML += card_layout(resto);
    });
  },
};

export default Favorite;
