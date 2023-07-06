const { test, expect } = require('@jest/globals');
const festivalDataLib = require('./index');

test('Test de récupération des festivals', async () => {
  const festivals = await festivalDataLib.getRecords();
  expect(festivals).toBeDefined();
  expect(Array.isArray(festivals)).toBe(true);
  expect(festivals.length).toBeGreaterThan(0);
  festivals.forEach((festival) => {
    expect(festival.nom_de_la_manifestation).toBeDefined();
    expect(festival.commune_principale).toBeDefined();
    expect(festival.mois_habituel_de_debut).toBeDefined();

    if (festival.site_web) {
      expect(festival.site_web).toBeDefined();
    }
  });
});
