import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsWhereUniqueInputSchema } from './PersonsToSkillsWhereUniqueInputSchema';
import { PersonsToSkillsCreateWithoutPersonInputSchema } from './PersonsToSkillsCreateWithoutPersonInputSchema';
import { PersonsToSkillsUncheckedCreateWithoutPersonInputSchema } from './PersonsToSkillsUncheckedCreateWithoutPersonInputSchema';

export const PersonsToSkillsCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillsCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToSkillsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToSkillsCreateOrConnectWithoutPersonInputSchema;
