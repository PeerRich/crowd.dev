import { FilterConfigType } from '@/shared/modules/filters/types/FilterConfig';
import { MultiSelectFilterConfig, MultiSelectFilterValue } from '@/shared/modules/filters/types/filterTypes/MultiSelectFilterConfig';
import { itemLabelRendererByType } from '@/shared/modules/filters/config/itemLabelRendererByType';
import { apiFilterRendererByType } from '@/shared/modules/filters/config/apiFilterRendererByType';

const tags: MultiSelectFilterConfig = {
  id: 'tags',
  label: 'Tags',
  type: FilterConfigType.MULTISELECT,
  options: {
    // TODO: load this options remote
    options: [],
  },
  itemLabelRenderer(value: MultiSelectFilterValue): string {
    return itemLabelRendererByType[FilterConfigType.MULTISELECT]('Active on', value);
  },
  apiFilterRenderer(value: MultiSelectFilterValue): any[] {
    return apiFilterRendererByType[FilterConfigType.MULTISELECT]('tags', value);
  },
};

export default tags;