import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsWhereUniqueInputSchema } from './PersonsToSkillsWhereUniqueInputSchema';
import { PersonsToSkillsCreateWithoutSkillInputSchema } from './PersonsToSkillsCreateWithoutSkillInputSchema';
import { PersonsToSkillsUncheckedCreateWithoutSkillInputSchema } from './PersonsToSkillsUncheckedCreateWithoutSkillInputSchema';

export const PersonsToSkillsCreateOrConnectWithoutSkillInputSchema: z.ZodType<Prisma.PersonsToSkillsCreateOrConnectWithoutSkillInput> = z.object({
  where: z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default PersonsToSkillsCreateOrConnectWithoutSkillInputSchema;
