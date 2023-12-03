import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsWhereUniqueInputSchema } from './PersonsToSkillPathsWhereUniqueInputSchema';
import { PersonsToSkillPathsUpdateWithoutPersonInputSchema } from './PersonsToSkillPathsUpdateWithoutPersonInputSchema';
import { PersonsToSkillPathsUncheckedUpdateWithoutPersonInputSchema } from './PersonsToSkillPathsUncheckedUpdateWithoutPersonInputSchema';

export const PersonsToSkillPathsUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToSkillPathsUpdateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToSkillPathsUpdateWithWhereUniqueWithoutPersonInputSchema;
