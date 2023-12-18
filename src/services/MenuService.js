import { sample_adds, sample_foods, sample_tags } from "../data";

export const getAllMenu = async () => sample_foods ;

export const getByTag = async foodid => {
    return sample_foods.find(item => item.id === foodid);
}

export const getAllTags = async () => sample_tags ;

export const getAllByTag = async tag => {
    if (tag === 'All') return getAllMenu() ;
    return sample_foods.filter(item => item.category === tag);
}
export const getBestSellers = async () => {
    return sample_foods.filter(item => item.bestSeller === true)
}
export const getAdds = async () => sample_adds ;