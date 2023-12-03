import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsWhereUniqueInputSchema } from './PersonsToSkillPathsWhereUniqueInputSchema';
import { PersonsToSkillPathsUpdateWithoutSkillPathInputSchema } from './PersonsToSkillPathsUpdateWithoutSkillPathInputSchema';
import { PersonsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema } from './PersonsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema';

export const PersonsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInput> = z.object({
  where: z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToSkillPathsUpdateWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema) ]),
}).strict();

export default PersonsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema;
