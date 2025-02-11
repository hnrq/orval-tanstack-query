import { usePokemonRetrieve } from '../api';

const PokemonDialog: FC<{ id: string }> = ({ id }) => {
  const { data } = usePokemonRetrieve({ id });

  
};
