import { FilterConfigType } from '@/shared/modules/filters/types/FilterConfig';
import {
  BooleanFilterConfig,
  BooleanFilterValue,
} from '@/shared/modules/filters/types/filterTypes/BooleanFilterConfig';
import { itemLabelRendererByType } from '@/shared/modules/filters/config/itemLabelRendererByType';

const enrichedMember: BooleanFilterConfig = {
  id: 'enrichedMember',
  label: 'Enriched member',
  type: FilterConfigType.BOOLEAN,
  options: {},
  itemLabelRenderer(value: BooleanFilterValue): string {
    return itemLabelRendererByType[FilterConfigType.BOOLEAN]('Enriched member', value);
  },
  apiFilterRenderer({ value, include }: BooleanFilterValue): any[] {
    const filter = {
      lastEnriched: {
        [value ? 'ne' : 'eq']: null,
      },
    };
    return [
      (include ? filter : { not: filter }),
    ];
  },
};

export default enrichedMember;