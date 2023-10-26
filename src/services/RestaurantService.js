import { sample_restaurant } from "../datamodified";

export const getRestaurant = async (name) => {
    return sample_restaurant.filter(restaurant =>
        restaurant.RestaurantName.toLowerCase() === name.toLowerCase());
}