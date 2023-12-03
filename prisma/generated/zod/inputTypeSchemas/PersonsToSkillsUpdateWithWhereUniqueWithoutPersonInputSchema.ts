import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsWhereUniqueInputSchema } from './PersonsToSkillsWhereUniqueInputSchema';
import { PersonsToSkillsUpdateWithoutPersonInputSchema } from './PersonsToSkillsUpdateWithoutPersonInputSchema';
import { PersonsToSkillsUncheckedUpdateWithoutPersonInputSchema } from './PersonsToSkillsUncheckedUpdateWithoutPersonInputSchema';

export const PersonsToSkillsUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillsUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToSkillsUpdateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToSkillsUpdateWithWhereUniqueWithoutPersonInputSchema;
