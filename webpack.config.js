const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1-app',

  exposes: {
    // './Component': './src/app/app.component.ts',   
    './Home': 'src/app/home-mfe/home-mfe.module.ts',
    './DmModule': 'src/app/dm-content/dm-content.module.ts',
    './WordCardDeckComp': 'src/app/dm-content/word-card-deck/word-card-deck.component.ts',
    './FlashCardDeckComp': 'src/app/dm-content/flash-card-deck/flash-card-deck.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
