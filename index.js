const axios = require('axios');

async function getRecords() {
  try {
    const response = await axios.get('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut');

    /* eslint-disable */
    const records = response.data.records.map((record) => {
      const {
        nom_de_la_manifestation,
        site_web,
        commune_principale,
        mois_habituel_de_debut,
      } = record.fields;

      return {
        nom_de_la_manifestation,
        site_web,
        commune_principale,
        mois_habituel_de_debut,
      };
    });
    /* eslint-enable */

    return records;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des données des festivals');
  }
}

module.exports.getRecords = getRecords;
