import getUserContext from '../../../../database/utils/getUserContext'
import MemberService from '../../../../services/memberService'
import { IRepositoryOptions } from '../../../../database/repositories/IRepositoryOptions'
import { IMemberMergeSuggestionsType } from '../../../../database/repositories/types/memberTypes'

async function mergeSuggestionsWorker(tenantId): Promise<void> {
  const userContext: IRepositoryOptions = await getUserContext(tenantId)
  const memberService = new MemberService(userContext)
  // Splitting these because in the near future we will be treating them differently
  await memberService.getMergeSuggestions(IMemberMergeSuggestionsType.USERNAME)

  await memberService.getMergeSuggestions(IMemberMergeSuggestionsType.EMAIL)

  await memberService.getMergeSuggestions(IMemberMergeSuggestionsType.SIMILARITY)
}

export { mergeSuggestionsWorker }
