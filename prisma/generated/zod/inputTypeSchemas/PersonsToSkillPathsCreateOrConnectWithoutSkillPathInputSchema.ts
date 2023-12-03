import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsWhereUniqueInputSchema } from './PersonsToSkillPathsWhereUniqueInputSchema';
import { PersonsToSkillPathsCreateWithoutSkillPathInputSchema } from './PersonsToSkillPathsCreateWithoutSkillPathInputSchema';
import { PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';

export const PersonsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateOrConnectWithoutSkillPathInput> = z.object({
  where: z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema) ]),
}).strict();

export default PersonsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema;
