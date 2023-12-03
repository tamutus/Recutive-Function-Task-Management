import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsWhereUniqueInputSchema } from './PersonsToSkillsWhereUniqueInputSchema';
import { PersonsToSkillsUpdateWithoutSkillInputSchema } from './PersonsToSkillsUpdateWithoutSkillInputSchema';
import { PersonsToSkillsUncheckedUpdateWithoutSkillInputSchema } from './PersonsToSkillsUncheckedUpdateWithoutSkillInputSchema';

export const PersonsToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.PersonsToSkillsUpdateWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToSkillsUpdateWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsUncheckedUpdateWithoutSkillInputSchema) ]),
}).strict();

export default PersonsToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema;
