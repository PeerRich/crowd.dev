import { NumberFilterValue } from '@/shared/modules/filters/types/filterTypes/NumberFilterConfig';
import { FilterNumberOperator } from '@/shared/modules/filters/config/constants/number.constants';

export const numberApiFilterRenderer = (property: string, {
  value, valueTo, operator, include,
}: NumberFilterValue): any[] => {
  const filterValue = operator === FilterNumberOperator.BETWEEN ? [value, valueTo] : value;
  const filter = {
    [operator]: filterValue,
  };

  return [
    {
      [property]: (include ? filter : {
        not: {
          filter,
        },
      }),
    },
  ];
};