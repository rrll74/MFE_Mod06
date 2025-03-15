import {
  CharacterEntityApi,
  deleteCharacter,
  getCharacter,
  getCharacterList,
  getEpisode,
  getLocation,
  insertCharacter,
  updateCharacter,
} from '../db';

export const resolvers = {
  Query: {
    characters: async (
      _,
      args
    ): Promise<{
      info: { count: number; pages: number; prev: string; next: string };
      results: CharacterEntityApi[];
    }> => {
      const { name, page, limit } = args;
      const character = await getCharacterList(name, page, limit);
      return character;
    },
    character: async (_, args) => {
      const { id } = args;
      const character = await getCharacter(id);
      return character;
    },
    episode: async (_, args) => {
      const { id } = args;
      const episode = await getEpisode(id);
      return episode;
    },
    location: async (_, args) => {
      const { id } = args;
      const location = await getLocation(id);
      return location;
    },
  },
  Mutation: {
    saveCharacter: async (_, args): Promise<boolean> => {
      const { character } = args;
      const id = parseInt(character.id);
      console.log(id);
      if (id) {
        await updateCharacter(character);
      } else {
        await insertCharacter(character);
      }
      return true;
    },
    deleteCharacter: async (_, args): Promise<boolean> => {
      const { id } = args;
      await deleteCharacter(id);
      return true;
    },
  },
};
