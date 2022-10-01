export const onCreateRestaurant =  `
  subscription OnCreateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onCreateRestaurant(filter: $filter) {
      id
      name
      description
      city
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRestaurant = `
  subscription OnUpdateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onUpdateRestaurant(filter: $filter) {
      id
      name
      description
      city
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRestaurant = `
  subscription OnDeleteRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onDeleteRestaurant(filter: $filter) {
      id
      name
      description
      city
      createdAt
      updatedAt
    }
  }
`;
