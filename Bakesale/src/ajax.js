const apiHost = 'https://bakesaleforgood.com';

export default {
  async fetchInitialDeals() {
    try {
      const response = await fetch(`${apiHost}/api/deals`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchDealDetail(id) {
    try {
      const response = await fetch(`${apiHost}/api/deals/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
};
