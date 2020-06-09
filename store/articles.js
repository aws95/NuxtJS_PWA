export const state = () => ({
  bikes: [
    {
      subCateg: "Giant",
      value: [
        {
          productId: "Giant1",
          name: "Giant 1"
        },
        {
          productId: "Giant2",
          name: "Giant 2"
        },
        {
          productId: "Giant3",
          name: "Giant 3"
        }
      ]
    },
    {
      subCateg: "Trek",
      value: [
        {
          productId: "Trek1",
          name: "Trek 1"
        },
        {
          productId: "Trek2",
          name: "Trek 2"
        },
        {
          productId: "Trek3",
          name: "Trek 3"
        }
      ]
    },
    {
      subCateg: "Scott",
      value: [
        {
          productId: "Scott1",
          name: "Scott 1"
        },
        {
          productId: "Scott2",
          name: "Scott 2"
        },
        {
          productId: "Scott3",
          name: "Scott 3"
        }
      ]
    }
  ],
  sneakers: [
    {
      subCateg: "Jordans",
      value: [
        {
          productId: "Jordans1",
          name: "Jordans 1"
        },
        {
          productId: "Jordans2",
          name: "Jordans 2"
        },
        {
          productId: "Jordans3",
          name: "Jordans 3"
        }
      ]
    },
    {
      subCateg: "Vans",
      value: [
        {
          productId: "Vans1",
          name: "Vans 1"
        },
        {
          productId: "Vans2",
          name: "Vans 2"
        },
        {
          productId: "Vans3",
          name: "Vans 3"
        }
      ]
    },
    {
      subCateg: "Supreme",
      value: [
        {
          productId: "Supreme1",
          name: "Supreme 1"
        },
        {
          productId: "Supreme2",
          name: "Supreme 2"
        },
        {
          productId: "Supreme3",
          name: "Supreme 3"
        }
      ]
    }
  ],
  watches: [
    {
      subCateg: "Rolex",
      value: [
        {
          productId: "Rolex1",
          name: "Rolex 1"
        },
        {
          productId: "Rolex2",
          name: "Rolex 2"
        },
        {
          productId: "Rolex3",
          name: "Rolex 3"
        }
      ]
    },
    {
      subCateg: "Garmin",
      value: [
        {
          productId: "Garmin1",
          name: "Garmin 1"
        },
        {
          productId: "Garmin2",
          name: "Garmin 2"
        },
        {
          productId: "Garmin3",
          name: "Garmin 3"
        }
      ]
    },
    {
      subCateg: "G-Shock",
      value: [
        {
          productId: "G-Shock1",
          name: "G-Shock 1"
        },
        {
          productId: "G-Shock2",
          name: "G-Shock 2"
        },
        {
          productId: "G-Shock3",
          name: "G-Shock 3"
        }
      ]
    }
  ]
});

export const getters = {
  getBikes(state) {
    return state.bikes;
  },
  getSneakers(state) {
    return state.sneakers;
  },
  getWatches(state) {
    return state.watches;
  }
};
