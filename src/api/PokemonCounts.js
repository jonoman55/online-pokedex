// TODO - Refactor this code into a reducer
// eslint-disable-next-line
// import { ALL_GENS, GEN_1, GEN_2, GEN_3, GEN_4, GEN_5, GEN_6, GEN_7 } from '../constants/genTypes';

export const counts = {
    zero: 0,
    gen1: 151,
    gen2: 100,
    gen3: 135,
    gen4: 107,
    gen5: 156,
    gen6: 72,
    gen7: 86,
    total: 807
};

export const genNumbers = [1, 2, 3, 4, 5, 6, 7];

export const getGeneration = (gen) => {
    switch (gen) {
        case 0:
            return gen = { id: 9, offset: 0, limit: counts.total, msg: 'All Generations' }; // ID 9 for all Gens
        case 1:
            return gen = { id: 1, offset: counts.zero, limit: counts.gen1, msg: 'Generation 1' };
        case 2:
            return gen = { id: 2, offset: counts.gen1, limit: counts.gen2, msg: 'Generation 2' };
        case 3:
            return gen = { id: 3, offset: counts.gen1 + counts.gen2, limit: counts.gen3, msg: 'Generation 3' };
        case 4:
            return gen = { id: 4, offset: counts.gen1 + counts.gen2 + counts.gen3, limit: counts.gen4, msg: 'Generation 4' };
        case 5:
            return gen = { id: 5, offset: counts.gen1 + counts.gen2 + counts.gen3 + counts.gen4, limit: counts.gen5, msg: 'Generation 5' };
        case 6:
            return gen = { id: 6, offset: counts.gen1 + counts.gen2 + counts.gen3 + counts.gen4 + counts.gen5, limit: counts.gen6, msg: 'Generation 6' };
        case 7:
            return gen = { id: 7, offset: counts.gen1 + counts.gen2 + counts.gen3 + counts.gen4 + counts.gen5 + counts.gen6, limit: counts.gen7, msg: 'Generation 7' };
        case 8:
            return gen = { id: 8, offset: counts.zero, limit: counts.gen1, msg: 'Select Generation' }; // ID 8 for default: Gen 1
        default:
            return gen = { id: 8, offset: counts.zero, limit: counts.gen1, msg: 'Select Generation' }; // Duplicate of 8
    }
};

export const GenerationsList = {
    gen1: getGeneration(1),
    gen2: getGeneration(2),
    gen3: getGeneration(3),
    gen4: getGeneration(4),
    gen5: getGeneration(5),
    gen6: getGeneration(6),
    gen7: getGeneration(7),
    gen8: getGeneration(8),
    gen9: getGeneration(9),
}